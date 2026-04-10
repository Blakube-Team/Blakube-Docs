---
title: "ADDON: Top-Events Notify"
---

# BK-Tops-Notify

An addon for BK-Tops that sends configurable notifications when leaderboard events occur. Notifications can be delivered in-game (chat, titles, actionbars, sounds) and to Discord via webhooks.

---

## Features

- In-game notifications:
  - Chat messages (MiniMessage and legacy `&` colors)
  - Titles and subtitles with fade timings
  - Actionbars
  - Sounds
- Discord notifications via webhook with optional embed
- Per-event and per-case configuration with first-match rule
- Placeholder support for both in-game and Discord messages
- Audience routing per case: `all`, `player`, `world`
- Live reload: `/bktopsnotify reload` (alias `/bktn`)

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

These placeholders are available in both in-game and Discord messages:

| Placeholder | Description |
|---|---|
| `{player}` | Player name |
| `{position}` | New position number |
| `{old_position}` | Previous position number (absent for new entries) |
| `{top_id}` | Internal leaderboard ID |
| `{top_name}` | Display name of the leaderboard (set via `display-name` in `tops.yml`; falls back to the top ID if not configured) |
| `{score}` | New score/value |
| `{old_score}` | Previous score/value |

With PlaceholderAPI installed, any `%placeholder%` in messages is also expanded per player for player-directed outputs.

---

## Configuration files

### In-game: `config.yml`
Location: `plugins/BK-Tops-Notify/config.yml`

- `settings.debug` — toggles extra console logs
- `events.timed-top-reset` — enable, audience, outputs
- `events.top-position-update.cases` — ordered list of cases with matching rules

**Output options per section/case:**

| Key | Description |
|---|---|
| `chat.enabled` + `chat.lines` | Chat message lines |
| `title.enabled` + `title`, `subtitle`, `fade-in`, `stay`, `fade-out` | Title/subtitle |
| `actionbar.enabled` + `text`, `duration` | Actionbar (one-shot) |
| `sound.enabled` + `name`, `volume`, `pitch` | Sound |

**Matching keys for cases:**

```yaml
when.position: 1
when.old-position: 3
when.old-position: none
when.old-position.not-equals: 1
when.position-range: [1, 3]
when.old-position-range: [4, 10]
when.improved: true
when.worsened: true
```

**Formatting:** MiniMessage is supported. Legacy `&` color codes are also fully supported and used when no MiniMessage tags are detected.

### Discord: `discord.yml`
Location: `plugins/BK-Tops-Notify/discord.yml`

```yaml
enabled: true
webhook_url: "https://discord.com/api/webhooks/..."
username: "BK-Tops-Notify"
avatar_url: "https://.../image.png"

events:
  timed-top-reset:
    content: "The {top_name} leaderboard has reset!"
    embed:
      title: "Leaderboard Reset"
      description: "{top_id} has been reset."
      color: 16753920
  top-position-update:
    cases:
      - name: hit-first
        enabled: true
        when:
          position: 1
        content: "{player} just reached #1 on {top_name}!"
```

Messages are sent asynchronously via Java's `HttpClient`. Placeholders are identical to in-game.

---

## Commands

| Command | Permission | Description |
|---|---|---|
| `/bktopsnotify reload` | `bktops.admin` | Reloads `config.yml` and `discord.yml` |
| `/bktopsnotify test <type>` | `bktops.admin` | Simulates an event to test your configuration |

---

## Installation

1. Drop `BK-Tops-Notify-<version>.jar` into `plugins/`.
2. Ensure dependencies are present: BK-Tops and PlaceholderAPI.
3. Start the server to generate `config.yml` and `discord.yml`.
4. Configure messages and cases in both files.
5. Use `/bktn reload` to apply changes without restarting.

---

## Tips

- Use titles or actionbars for high-impact moments like `hit-first`; reserve chat for less frequent events.
- Case order matters — the first match wins, so put more specific cases before generic ones.
- Use embeds in Discord for better readability when many events fire at once.

---

## Troubleshooting

- **No messages?** Enable `settings.debug` and check the server console for warnings.
- **Placeholders not replaced?** Ensure PlaceholderAPI is installed and the placeholder is valid for the player/audience type.
- **Discord not receiving messages?** Verify `enabled: true` and the `webhook_url` in `discord.yml`. Check server outbound firewall rules.

---

## License & Attribution
Authors: `hhitt`, `Blakube`
