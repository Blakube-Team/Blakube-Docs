---
title: "For developers: BK-Tops API"
---

# BK-Tops API

The `api` module exposes a minimal, implementation-agnostic interface to interact with BK-Tops from other Bukkit/Paper plugins.

---

## Adding the dependency

BK-Tops is published via JitPack. Use a Git tag as the version for stable builds.

### Gradle (Kotlin DSL)
```kotlin
repositories {
    maven("https://jitpack.io")
}

dependencies {
    compileOnly("com.github.Blakube-Team:BK-Tops:Tag")
}
```

### Gradle (Groovy)
```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    compileOnly 'com.github.Blakube-Team:BK-Tops:Tag'
}
```

### Maven
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
    <scope>provided</scope>
  </dependency>
</dependencies>
```

Use `compileOnly`/`provided` — the server provides BK-Tops at runtime. Do not shade the plugin itself.

---

## Quick start

Declare a dependency in your `plugin.yml` so BK-Tops loads before your plugin:

```yaml
depend: [BK-Tops]     # hard dependency
# or
softdepend: [BK-Tops] # soft dependency — you must handle API absence
```

Access the API safely:

```java
import com.blakube.bktops.api.TopAPI;
import com.blakube.bktops.api.TopAPIProvider;

public final class MyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        if (!TopAPIProvider.isAvailable()) {
            getLogger().warning("BK-Tops API not available.");
            return;
        }
        TopAPI api = TopAPIProvider.getInstance();
    }
}
```

---

## API reference

### `TopAPI`

```java
public interface TopAPI {
    @Nullable  Top              getTop(@NotNull String id);
    @NotNull   Collection<Top> getAllTops();
               Optional<Top>   getTopByPlayer(@NotNull Player player);

    boolean restartTop(@NotNull String topId);
    void    registerTop(@NotNull Top top);
    void    unregisterTop(@NotNull String topId);
}
```

### `TopConfig`

Each `Top` exposes its config via `top.getConfig()`:

```java
TopConfig config = top.getConfig();

config.getSize();             // int — number of tracked positions
config.getDisplayName();      // @Nullable String — human-readable name set in tops.yml (null if not configured)
config.getConditionSet();     // @NotNull ConditionSet — entry conditions (isEmpty() == true if none configured)

config.isEnableOnlineQueue();   // boolean
config.getOnlineQueueInterval();// int (ticks)
config.isEnableRotativeQueue(); // boolean
config.getRotativeQueueSize();  // int
config.getBatchSize();          // int
config.getTickDelay();          // int
```

### `ConditionSet`

```java
ConditionSet conditions = top.getConfig().getConditionSet();

conditions.isEmpty();              // true if no conditions are configured
conditions.getRawExpressions();    // List<String> — placeholder expressions, e.g. "%essentials_is_banned% == false"
conditions.getInactivityDays();    // int — 0 means disabled
```

### Key model types

| Type | Package |
|---|---|
| `Top` | `com.blakube.bktops.api.top` |
| `TopEntry` | `com.blakube.bktops.api.top` |
| `TopConfig` | `com.blakube.bktops.api.storage.config` |
| `ConditionSet` | `com.blakube.bktops.api.storage.config` |
| `TimedTop`, `ResetSchedule` | `com.blakube.bktops.api.timed` |
| Queue primitives | `com.blakube.bktops.api.queue` |
| Events | `com.blakube.bktops.api.event` |

---

## Code examples

### Get a top and iterate entries

```java
TopAPI api = TopAPIProvider.getInstance();
Top top = api.getTop("kills");
if (top != null) {
    for (TopEntry entry : top.getEntries()) {
        getLogger().info(entry.getName() + ": " + entry.getValue());
    }
}
```

### List all registered tops

```java
for (Top top : TopAPIProvider.getInstance().getAllTops()) {
    String label = top.getConfig().getDisplayName() != null
            ? top.getConfig().getDisplayName()
            : top.getId();
    getLogger().info("Top: " + label);
}
```

### Check if a player is ranked in any top

```java
TopAPIProvider.getInstance().getTopByPlayer(player).ifPresent(top -> {
    player.sendMessage("You are ranked in: " + top.getId());
});
```

### Restart a top's processing

```java
boolean accepted = TopAPIProvider.getInstance().restartTop("kills");
if (!accepted) {
    getLogger().warning("Restart not accepted — unknown id or busy.");
}
```

### Register and unregister a custom top

```java
Top myTop = /* your Top implementation */;
TopAPI api = TopAPIProvider.getInstance();
api.registerTop(myTop);
// later:
api.unregisterTop(myTop.getId());
```

---

## Listening to events

Events are under `com.blakube.bktops.api.event.*`.

### React to position updates

```java
import com.blakube.bktops.api.event.top.TopPositionUpdateEvent;

public final class TopEventsListener implements Listener {
    @EventHandler
    public void onTopUpdate(TopPositionUpdateEvent e) {
        String topId    = e.getTopId();
        UUID   playerId = e.getPlayerId();
        int    newPos   = e.getNewPosition();
    }
}
```

### React to timed top resets

```java
import com.blakube.bktops.api.event.top.TimedTopResetEvent;

public final class TimedTopListener implements Listener {
    @EventHandler
    public void onTimedReset(TimedTopResetEvent e) {
        getLogger().info("Reset: " + e.getTopId() + " scope=" + e.getScope());
    }
}
```

Register listeners in `onEnable`:

```java
getServer().getPluginManager().registerEvents(new TopEventsListener(), this);
```

---

## Troubleshooting

**"TopAPI not initialized yet! Is BK-Tops plugin loaded?"**
You called `getInstance()` before BK-Tops finished enabling, or BK-Tops is not installed. Add `depend: [BK-Tops]` or guard with `isAvailable()`.

**"TopAPI already initialized!"**
Internal to BK-Tops. Ensure you are not repackaging or loading multiple copies of the plugin.

---

## License
BK-Tops is distributed under the terms of the LICENSE file in the repository.
