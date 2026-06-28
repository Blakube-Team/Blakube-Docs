---
title: "Notifications"
---

# Notifications

BK-Tops can send configurable notifications when leaderboard events occur. Notifications are delivered in-game (chat, titles, actionbars, sounds) and to Discord via webhooks.

:::note
This was previously shipped as a separate **BK-Tops-Notify** addon. It is now **built into BK-Tops** — no extra jar is required. Configuration lives in `notifications.yml` and `discord.yml` inside the BK-Tops folder.
:::

---

## Features

- In-game notifications:
  - Chat messages (MiniMessage and legacy `&` colors)
  - Titles and subtitles with fade timings
  - Actionbars
  - Sounds
- Discord notifications via webhook with optional embed
- Per-event and per-case configuration with a first-match rule
- Placeholder support for both in-game and Discord messages
- Audience routing per case: `all`, `player`, `world`
- Live reload with `/bktops reload`

---

## Events

### `TimedTopResetEvent`
Triggered when a timed leaderboard resets (hourly/daily/weekly/monthly).

### `TopPositionUpdateEvent`
Triggered when a player's position or score changes. Cases are evaluated in order and the first match wins:

| Case | Condition |
|---|---|
| `hit-first` | Player reaches position #1 from any other rank or unranked |
| `podium-enter` | Player enters positions 1–3 from position 4+ |
| `position-improved` | Rank number decreases (e.g. 5 → 3) |
| `position-lost` | Rank number increases (e.g. 2 → 7) |
| `new-entry` | Player appears in the leaderboard from unranked |
| `generic` | Optional fallback for any update not matched above |

---

## Placeholders

These tokens are available in both in-game and Discord messages:

| Placeholder | Description |
|---|---|
| `{player}` | Player name |
| `{position}` | New position number |
| `{old_position}` | Previous position number (empty for new entries) |
| `{top_id}` | Internal leaderboard ID |
| `{top_name}` | Display name of the leaderboard (set via `display-name` in `tops.yml`; falls back to the top ID if not configured) |
| `{score}` | New score/value (formatted with the top's `value-format`) |
| `{old_score}` | Previous score/value |

With PlaceholderAPI installed, any `%placeholder%` in messages is also expanded per player for player-directed outputs.

---

## In-game configuration: `notifications.yml`

Location: `plugins/BK-Tops/configuration/notifications.yml`

- `enabled` — master switch for all in-game notifications
- `events.timed-top-reset` — enable, audience, outputs
- `events.top-position-update.cases` — ordered map of cases with matching rules

**Output options per section/case:**

| Key | Description |
|---|---|
| `chat.enabled` + `chat.lines` | Chat message lines |
| `title.enabled` + `title`, `subtitle`, `fade-in`, `stay`, `fade-out` | Title/subtitle (timings in ticks) |
| `actionbar.enabled` + `text` | Actionbar (one-shot) |
| `sound.enabled` + `name`, `volume`, `pitch` | Sound (`name` is a Bukkit `Sound` enum value) |

**Matching keys for cases (`when`):**

```yaml
when:
  position: 1                 # exact new position
  old-position: 3             # exact previous position
  old-position: none          # only when the player was previously unranked
  old-position:
    not-equals: 1             # previous position is anything but 1
  position-range: [1, 3]      # new position within range (inclusive)
  old-position-range: [4, 10] # previous position within range
  improved: true              # rank number decreased
  worsened: true              # rank number increased
```

**Formatting:** MiniMessage is supported. Legacy `&` color codes are also fully supported and used when no MiniMessage tags are detected.

---

## Discord configuration: `discord.yml`

Location: `plugins/BK-Tops/configuration/discord.yml`

Disabled by default. Set `enabled: true` and paste your webhook URL to start sending. Cases mirror the in-game ones and use the same `when` matching rules.

```yaml
enabled: true
webhook_url: "https://discord.com/api/webhooks/ID/TOKEN"
username: "BK-Tops"
avatar_url: ""

events:
  timed-top-reset:
    enabled: true
    content:
      - ":arrows_counterclockwise: Top {top_name} (ID: {top_id}) has been reset!"
    embed:
      enabled: true
      title: "Leaderboard Reset"
      description: "Top {top_name} has been reset. Push now to climb the ranks!"
      color: 16755200 # orange

  top-position-update:
    enabled: true
    cases:
      hit-first:
        enabled: true
        when:
          position: 1
          old-position:
            not-equals: 1
        content:
          - ":trophy: {player} just took FIRST place in {top_name}! ({score})"
        embed:
          enabled: true
          title: ":trophy: New #1!"
          description: "{player} is now #1 in {top_name} with {score}."
          color: 16766720 # gold
```

`username` and `avatar_url` can be overridden per event. Messages are sent asynchronously via Java's `HttpClient`; placeholders are identical to in-game.

---

## Commands

| Command | Permission | Description |
|---|---|---|
| `/bktops reload` | `bk-tops.admin` | Reloads all configs, including `notifications.yml` and `discord.yml` |
| `/bktops notify test update` | `bk-tops.admin` | Fires a sample `top-position-update` (run as a player) |
| `/bktops notify test reset` | `bk-tops.admin` | Fires a sample `timed-top-reset` |

---

## Tips

- Use titles or actionbars for high-impact moments like `hit-first`; reserve chat for less frequent events.
- Case order matters — the first match wins, so put more specific cases before generic ones.
- Use embeds in Discord for better readability when many events fire at once.

---

## Troubleshooting

- **No messages?** Enable `debug: true` in `config.yml` and check the console; also confirm `enabled: true` in `notifications.yml`.
- **Placeholders not replaced?** Ensure PlaceholderAPI is installed and the placeholder is valid for the player/audience type.
- **Discord not receiving messages?** Verify `enabled: true` and a real `webhook_url` in `discord.yml` (the default `ID/TOKEN` placeholder URL is ignored). Check server outbound firewall rules.

---

## License & Attribution
Authors: `hhitt`, `Blakube`
