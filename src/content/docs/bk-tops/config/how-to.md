---
title: How to
description: How to create and configure tops.
---

# Create tops
Tops are defined as sections in the `tops.yml` file. To create a new top, add a new section and fill in the values below.

## Configuration reference

- **`type`**: The type of top.
  - `normal`: Permanent ranking that never resets.
  - `timed`: Ranking that resets based on a schedule.
  - `team`: Permanent ranking that sums values from all team members.
  - `timed-team`: Timed ranking that sums values from all team members.
- **`display-name`** *(optional)*: Human-readable name for this top, used in notifications and the `/bktops compare` command. Supports color codes (e.g. `"&6&lMoney Top"`). If omitted, the top ID is used as fallback.
- **`size`**: Number of positions tracked and stored (e.g. `15` for a top 15).
- **`reset`**: *(timed tops only)* When the top resets. Accepts `hourly`, `daily`, `weekly`, `monthly`, or a custom cron expression (`"* * * * *"`).
- **`provider`**: PlaceholderAPI placeholder used to read each player's score.
- **`value-format`** *(optional)*: How values are displayed in all placeholders for this top. Overrides the global `number-format.mode` from `config.yml`. See [Value formatting](#value-formatting) below.
- **`queues`**:
  - `online`: If `true`, online players are checked periodically.
  - `online-interval`: Delay in ticks between online player checks.
  - `rotative`: If `true`, offline players are also checked periodically.
  - `rotative-size`: Number of players checked per rotative cycle.
- **`processing`**:
  - `batch-size`: Entries processed per tick.
  - `tick-delay`: Ticks between batches.
- **`conditions`** *(optional)*: Filters that determine whether a player qualifies for the top. See the [Conditions](/bk-tops/config/conditions) page.

## Example `tops.yml`

```yaml
money:
  type: normal
  display-name: "&6&lMoney"
  size: 15
  provider: "%vault_eco_balance%"
  queues:
    online: true
    online-interval: 900
    rotative: false
    rotative-size: 50
  processing:
    batch-size: 5
    tick-delay: 1

kills_perma:
  type: normal
  display-name: "&cKills"
  size: 15
  provider: "%statistic_player_kills%"
  queues:
    online: true
    online-interval: 600
    rotative: false
  processing:
    batch-size: 5

kills_monthly:
  type: timed
  display-name: "&cMonthly Kills"
  size: 15
  reset: "monthly"
  provider: "%statistic_player_kills%"
  queues:
    online: true
    online-interval: 600
    rotative: false
  processing:
    batch-size: 5

time_played:
  type: normal
  display-name: "&bTime Played"
  size: 15
  provider: "%statistic_time_played%"
  value-format: TIME
  queues:
    online: true
    online-interval: 900
    rotative: false
  processing:
    batch-size: 5

ranked_money:
  type: normal
  display-name: "&6Ranked Money"
  size: 10
  provider: "%vault_eco_balance%"
  queues:
    online: true
    online-interval: 900
    rotative: false
  processing:
    batch-size: 5
  conditions:
    expressions:
      - "%essentials_is_banned% == false"
    inactivity-days: 30

team_money:
  type: team
  display-name: "&eTeam Money"
  size: 10
  provider: "%vault_eco_balance%"
  queues:
    online: true
    online-interval: 1200
    rotative: false
  processing:
    batch-size: 5
```

## Value formatting

BK-Tops supports two independent formatting systems that determine how scores are displayed in placeholders.

### Number formatting

Configured globally in `config.yml` under `number-format`. Applies to all tops unless overridden.

```yaml
number-format:
  mode: EXACT
  thousand-separator: ","
  decimal-separator: "."
  decimal-places: 2
  compact-suffixes:
    thousand: "K"
    million: "M"
    billion: "B"
    trillion: "T"
```

**Modes:**
- `EXACT` — exact number with decimals (`1,234,567.89`)
- `ROUNDED` — rounds to whole number (`1,234,568`)
- `COMPACT` — compact with decimals (`1.23M`)
- `COMPACT_ROUNDED` — compact without decimals (`1M`)

`thousand-separator` and `decimal-separator` accept any string, including an empty string to remove them.

### Time formatting

Used automatically when a top has `value-format: TIME`. The score (in seconds) is split into units from largest to smallest. `significant-figures` controls how many units are shown, starting from the first non-zero one.

Configured in `config.yml` under `time-format`:

```yaml
time-format:
  separator: " "
  # How many units to show, starting from the largest non-zero one.
  # 3 → "1d 2h 30m" | 2 → "1d 2h" | 1 → "1d"
  significant-figures: 3
  suffixes:
    years: "y"
    months: "mo"
    weeks: "w"
    days: "d"
    hours: "h"
    minutes: "m"
    seconds: "s"
```

Units are always displayed from largest to smallest. If a unit in the middle is zero, it is still shown so the scale is always clear (`1d 0h 30m`, not `1d 30m`).

**Examples:**

| significant-figures | Score | Output |
|---|---|---|
| 3 (default) | 71,352 s | `19h 49m 12s` |
| 2 | 71,352 s | `19h 49m` |
| 1 | 71,352 s | `19h` |
| 3 | 90,061 s | `1d 1h 1s` |
| 3 | 86,400 s | `1d 0h 0m` |
| 4 | 5,000,000 s | `1y 9mo 3d 21h` |

### Per-top value-format

Set `value-format` on any top to override the global number format for that top:

```yaml
time_played:
  provider: "%statistic_time_played%"
  value-format: TIME

money:
  provider: "%vault_eco_balance%"
  value-format: COMPACT
```

**Available values:** `EXACT`, `ROUNDED`, `COMPACT`, `COMPACT_ROUNDED`, `TIME`

All placeholders for that top (`value`, `spaced`, `distance_above`, `distance_below`) will use the configured format automatically.

### Per-placeholder inline override

You can override the format on a single placeholder without touching `tops.yml`. Two syntaxes are supported:

```
%bktops_value:TIME_time_played_1%
%bktops_value_TIME_time_played_1%
```

Both are equivalent. Use whichever your hologram or scoreboard plugin handles better. Inline overrides take priority over `value-format` in `tops.yml`. See the [Placeholders](/bk-tops/config/placeholders) page for the full list.

## How tops are processed

- **Online Queue**: When enabled, all online players are checked periodically on the configured interval.
- **Rotative Queue**: Checks a fixed number of players per cycle, including offline ones, so the leaderboard stays accurate over time.
- **Passive mode**: If both `online` and `rotative` are `false`, a player's data is only updated on join and quit. This is the most performance-friendly mode.
- **Batch processing**: Players are processed in small groups spread across multiple ticks to avoid CPU spikes.

## Team tops

The `team` and `timed-team` types require a supported team plugin (see [Hooks](/bk-tops/config/hooks)). They work the same as `normal` and `timed` but **sum the values of all members** of each team. The leaderboard displays the team's identity instead of individual players.

For example, using `%vault_eco_balance%` as the provider in a `team` top will rank teams by their combined balance.

:::warning
Do not modify `batch-size` or `tick-delay` unless you know exactly what you are doing. These values are tuned to balance update speed and server performance.
:::
