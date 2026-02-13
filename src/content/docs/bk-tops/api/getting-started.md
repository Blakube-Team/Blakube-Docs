---
title: "For developers: BK-Tops API"
---
### BK-Tops API (JitPack) — Guide & Examples

This document explains how to consume the BK‑Tops API module from JitPack and shows practical usage examples.

#### What is it?
The `api` module exposes a minimal, implementation‑agnostic API to interact with BK‑Tops from other Bukkit/Paper plugins. You can:
- Access a loaded `Top` by id
- Iterate all registered tops
- Find which top a player is currently on
- Register/unregister custom tops
- Request a top to restart/rebuild

Core entry points:
- `TopAPI` — main interface
- `TopAPIProvider` — static accessor and lifecycle guard for the singleton instance

---

### Getting the API from JitPack

BK‑Tops is built on JDK 21 and published for consumption via JitPack.

Add JitPack to your repositories and depend on the API artifact.

#### Gradle (Kotlin DSL)
```kotlin
repositories {
    maven("https://jitpack.io")
}

dependencies {
    // Replace the version with a Git tag (recommended) or commit hash from this repo
    // Examples: 1.0.0, 1.0.0-SNAPSHOT
    compileOnly("com.github.Blakube-Team:BK-Tops:Tag")
}
```

#### Gradle (Groovy)
```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    // Use a Git tag or commit hash as the version
    compileOnly 'com.github.Blakube-Team:BK-Tops:Tag'
}
```

#### Maven
```xml
<repositories>
  <repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.Blakube-Team</groupId>
        <artifactId>BK-Tops</artifactId>
        <version>Tag</version>
    </dependency>
</dependencies>
```

Notes
- <jitpack-version>: Use a Git tag from this repository for stable builds, or a commit SHA for pinning.
- Scope: Prefer `compileOnly`/`provided` — the server will provide BK‑Tops at runtime.
- Java version: Your plugin should target Java 17+ runtime on modern Paper, but this API is compiled with toolchain Java 21.

---

### Quick Start

1) Declare a soft/hard dependency in your `plugin.yml` to ensure BK‑Tops loads before your plugin if you require the API at startup:
```yaml
# plugin.yml
depend: [BK-Tops]      # hard dependency (your plugin won’t load without BK‑Tops)
# or
softdepend: [BK-Tops]  # soft dependency (you must handle API absence)
```

2) Access the API safely:
```java
import com.blakube.bktops.api.TopAPI;
import com.blakube.bktops.api.TopAPIProvider;

public final class MyPlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    if (!TopAPIProvider.isAvailable()) {
      getLogger().warning("BK-Tops API not available. Is the plugin installed and enabled?");
      // Decide: either disable or continue in degraded mode
      return;
    }

    TopAPI api = TopAPIProvider.getInstance();
    // use the API ...
  }
}
```

---

### API Overview

`TopAPI` (from `api/src/main/java/com/blakube/bktops/api/TopAPI.java`):
```java
public interface TopAPI {
  @Nullable Top getTop(@NotNull String id);
  @NotNull Collection<Top> getAllTops();
  Optional<Top> getTopByPlayer(@NotNull Player player);

  boolean restartTop(@NotNull String topId);
  void registerTop(@NotNull Top top);
  void unregisterTop(@NotNull String topId);
}
```

Key model types in the API module you may also use:
- `com.blakube.bktops.api.top.Top`
- `com.blakube.bktops.api.top.TopEntry`
- `com.blakube.bktops.api.timed.TimedTop` and `ResetSchedule`
- `com.blakube.bktops.api.queue.*` for processing queue primitives
- `com.blakube.bktops.api.event.*` for listening to domain events

---

### Common Tasks — Code Examples

#### 1) Get a top by id and iterate entries
```java
TopAPI api = TopAPIProvider.getInstance();
Top top = api.getTop("kills");
if (top != null) {
  for (TopEntry entry : top.getEntries()) {
    getLogger().info(entry.getName() + ": " + entry.getValue());
  }
}
```

#### 2) List all registered tops
```java
TopAPI api = TopAPIProvider.getInstance();
for (Top top : api.getAllTops()) {
  getLogger().info("Top: " + top.getId());
}
```

#### 3) Check if a player is currently on any top
```java
TopAPI api = TopAPIProvider.getInstance();
api.getTopByPlayer(player).ifPresent(playerTop -> {
  player.sendMessage("You are on the top: " + playerTop.getId());
});
```

#### 4) Restart a top’s processing
```java
boolean accepted = TopAPIProvider.getInstance().restartTop("kills");
if (!accepted) {
  getLogger().warning("Top restart request was not accepted (unknown id or busy).");
}
```

#### 5) Register and unregister a custom top
If you implement your own `Top` (or `TimedTop`), you can register/unregister it dynamically:
```java
Top myTop = /* your Top implementation */;
TopAPI api = TopAPIProvider.getInstance();
api.registerTop(myTop);
// ... later
api.unregisterTop(myTop.getId());
```

---

### Listening to API Events

The API exposes Bukkit events under `com.blakube.bktops.api.event.*` that you can listen to in your plugin.

Example: react to player position updates in a top
```java
import com.blakube.bktops.api.event.top.TopPositionUpdateEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public final class TopEventsListener implements Listener {
  @EventHandler
  public void onTopUpdate(TopPositionUpdateEvent e) {
    String topId = e.getTopId();
    UUID playerId = e.getPlayerId();
    int newPosition = e.getNewPosition();
    // Your logic here
  }
}
```

Example: react to scheduled resets for timed tops
```java
import com.blakube.bktops.api.event.top.TimedTopResetEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public final class TimedTopListener implements Listener {
  @EventHandler
  public void onTimedReset(TimedTopResetEvent e) {
    getLogger().info("Timed top reset: " + e.getTopId() + " scope=" + e.getScope());
  }
}
```

Don’t forget to register your listener in `onEnable`:
```java
getServer().getPluginManager().registerEvents(new TopEventsListener(), this);
```

---

### Best Practices & Notes

- Initialization
    - Use `TopAPIProvider.isAvailable()` before calling `getInstance()` if BK‑Tops might be missing.
    - Declare `depend`/`softdepend` on `BK-Tops` in `plugin.yml` to control load order.

- Classpath
    - Use `compileOnly`/`provided` for the API dependency. Do not shade the BK‑Tops plugin itself.

- Versioning via JitPack
    - Prefer Git tags for reproducible builds, e.g. `1.0.0`.
    - For bleeding‑edge, you may use a commit SHA or a branch with `-SNAPSHOT` if enabled.

- Java & Paper API
    - The API declares a `compileOnly` dependency on `io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT`. Your plugin should target a compatible Paper/Spigot version.

---

### Troubleshooting

- “TopAPI not initialized yet! Is BK‑Tops plugin loaded?”
    - Cause: You called `TopAPIProvider.getInstance()` before BK‑Tops finished enabling, or BK‑Tops isn’t installed.
    - Fix: Add `depend: [BK-Tops]` or check `TopAPIProvider.isAvailable()` before accessing.

- “TopAPI already initialized!” during `setInstance`
    - This is internal to BK‑Tops. If you see it, ensure you are not repackaging or loading multiple copies.

---

### License
BK‑Tops is distributed under the terms of the LICENSE file in the repository.

---