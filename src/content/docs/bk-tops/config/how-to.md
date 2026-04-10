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

## Number formatting

Configured in `config.yml`:

```yaml
spaced:
  char: "-"
  length: 40

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

:::warning
Do not modify `batch-size` or `tick-delay` unless you know exactly what you are doing. These values are tuned to balance update speed and server performance.
:::

## How tops are processed

- **Online Queue**: When enabled, all online players are checked periodically on the configured interval.
- **Rotative Queue**: Checks a fixed number of players per cycle, including offline ones, so the leaderboard stays accurate over time.
- **Passive mode**: If both `online` and `rotative` are `false`, a player's data is only updated on join and quit. This is the most performance-friendly mode.
- **Batch processing**: Players are processed in small groups spread across multiple ticks to avoid CPU spikes.

## Team tops

The `team` and `timed-team` types require a supported team plugin (see [Hooks](/bk-tops/config/hooks)). They work the same as `normal` and `timed` but **sum the values of all members** of each team. The leaderboard displays the team's identity instead of individual players.

For example, using `%vault_eco_balance%` as the provider in a `team` top will rank teams by their combined balance.
