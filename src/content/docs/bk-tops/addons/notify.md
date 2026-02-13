---
title: "ADDON: Top-Events Notify"
---

### BK-Tops-Notify — Addon Overview and Features

#### What is BK-Tops-Notify?
BK-Tops-Notify is an addon for the BK-Tops leaderboards plugin. It enhances server aesthetics and player engagement by sending configurable notifications when leaderboard-related events occur. Notifications can be delivered in-game (chat, titles, actionbars, sounds) and to Discord (via webhooks), with rich formatting and placeholders.

---

### Key Features
- In-game notifications for BK-Tops events:
    - Chat messages (supports MiniMessage and legacy `&` colors)
    - Titles and subtitles with fade timings
    - Actionbars
    - Sounds
- Discord notifications via webhook with configurable content and optional embed
- Per-event and per-case configuration with first-match rule
- Placeholder support:
    - Built-in placeholders: `{player}`, `{position}`, `{old_position}`, `{top_id}`, `{top_name}`, `{score}`, `{old_score}`
    - PlaceholderAPI integration (optional) for player-specific expansions
- Audience routing per case:
    - `all` — broadcast to all online players
    - `player` — only the involved player
    - `world` — players in the involved player’s world
- Live reload command: `/bktopsnotify reload` (alias `/bktn`) to reload `config.yml` and `discord.yml`

---

### Events Covered
1) TimedTopResetEvent
    - Triggered when a timed leaderboard resets (daily/weekly/monthly)
    - Default behavior: broadcast a chat line, show a title, and play a sound

2) TopPositionUpdateEvent
    - Triggered when a player’s position/score changes
    - Evaluated cases (first match wins):
        - `hit-first` — player becomes #1 (from any other rank or unranked)
        - `podium-enter` — player enters positions 1–3 from 4+
        - `position-improved` — rank number decreases (e.g., 5 → 3)
        - `position-lost` — rank number increases (e.g., 2 → 7)
        - `new-entry` — player appears in the leaderboard from unranked
        - `generic` — optional fallback for any update not matched above

---

### Configuration Files

#### 1) In-Game: `config.yml`
- Location: `plugins/BK-Tops-Notify/config.yml`
- Sections:
    - `settings.debug`: toggles extra logs
    - `events.timed-top-reset`: enable, audience, outputs
    - `events.top-position-update.cases`: ordered list of cases with matching rules
- Outputs per section/case:
    - `chat.enabled` + `chat.lines` (list)
    - `title.enabled` + `title`, `subtitle`, `fade-in`, `stay`, `fade-out`
    - `actionbar.enabled` + `text`, `duration` (one-shot send)
    - `sound.enabled` + `name`, `volume`, `pitch`
- Matching keys for cases (examples):
    - `when.position: 1`
    - `when.old-position: 3` or `when.old-position: none`
    - `when.old-position.not-equals: 1`
    - `when.position-range: [1, 3]`
    - `when.old-position-range: [4, 10]`
    - `when.improved: true` / `when.worsened: true`

Formatting notes:
- MiniMessage is supported and preferred when your text contains tags like `<gold><bold>...`.
- Legacy `&` color codes are fully supported and used when no MiniMessage tags are detected.
- PlaceholderAPI (if installed) is applied per receiver for player messages.

#### 2) Discord: `discord.yml`
- Location: `plugins/BK-Tops-Notify/discord.yml`
- Global:
    - `enabled: true|false`
    - `webhook_url: "https://discord.com/api/webhooks/..."`
    - `username: "BK-Tops-Notify"` (optional)
    - `avatar_url: "https://.../image.png"` (optional)
- Events:
    - `events.timed-top-reset`: `content`, optional `embed` (title, description, color)
    - `events.top-position-update.cases`: mirrors the in-game cases with `enabled`, `when`, `content`, and optional `embed`
- Placeholders are identical to in-game.
- Sent asynchronously via Java’s HttpClient.

---

### Commands & Permissions
- Command: `/bktopsnotify reload` (alias `/bktn`)
    - Reloads both `config.yml` and `discord.yml`
- Permission: `bktops.admin` (default: op)

---

### Placeholders
Provided by the addon for both in-game and Discord messages:
- `{player}` — player name
- `{position}` — new position number
- `{old_position}` — previous position number (may be absent for new entries)
- `{top_id}` — internal leaderboard identifier
- `{top_name}` — display name of the leaderboard
- `{score}` — new score/value
- `{old_score}` — previous score/value

With PlaceholderAPI installed, any `%placeholder%` in messages will also be expanded per-player for player-directed outputs.

---

### Installation
1. Drop `BK-Tops-Notify-<version>.jar` into `plugins/`
2. Ensure required dependencies are present:
    - BK-Tops (required)
    - PlaceholderAPI (required by BK-Tops)
3. Start the server to generate `config.yml` and `discord.yml`
4. Configure messages and cases in both files
5. (Optional) Grant permission `bktops.admin` and use `/bktn reload` to apply changes without restarting

---

### Tips & Best Practices
- Keep messages concise to avoid chat spam. Use titles/actionbars for high-impact moments (like `hit-first`).
- Use case order to prioritize what triggers first; the first match wins.
- In Discord, consider enabling embeds with colors to improve readability.
- If you want persistent actionbars over a duration, ask for a scheduled re-send feature to be added.

---

### Troubleshooting
- No messages? Check `settings.debug` and server console for warnings.
- Placeholders not replaced? Ensure PlaceholderAPI is installed and your placeholders are valid for the player/audience.
- Discord not receiving messages? Verify `enabled` and `webhook_url` in `discord.yml`, and check server firewall/outbound connectivity.

---

### License & Attribution
- Authors: `hhitt`, `Blakube`
- This is an addon for BK-Tops; ensure you have BK-Tops installed and configured.