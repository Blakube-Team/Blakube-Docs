---
title: How to
description: How to create and configure tops and customize messages.
---

# Create tops
The tops are represented as sections in the `tops.yml` file.

To create a new top, just copy and paste the existing one and change the values.
In the following example, each value is explained:

### Configuration Values

- **`type`**: The type of top.
  - `normal`: Permanent rankings that never reset.
  - `timed`: Rankings that reset based on a schedule.
  - `team`: Permanent rankings that sum values from all team members.
  - `timed-team`: Rankings that reset based on a schedule and sum values from all team members.
- **`size`**: The number of positions tracked and stored for this top (e.g., top 15).
- **`reset`**: (Only for `timed` type) When the top should reset. Supports `hourly`, `daily`, `weekly`, `monthly`, or a custom cron expression.
- **`provider`**: The PlaceholderAPI placeholder used to get the player's score.
- **`queues`**:
  - `online`: If `true`, online players will be checked periodically.
  - `online-interval`: Delay in ticks between online player checks.
  - `rotative`: If `true`, the plugin will periodically check offline players to keep the top updated.
  - `rotative-size`: The number of players to check in each rotative cycle.
- **`processing`**:
  - `batch-size`: How many entries are processed in a single tick.
  - `tick-delay`: The delay in ticks between processing batches.

```yaml
# _______
#|__   __|
#   | | ___  _ __  ___
#   | |/ _ \| '_ \/ __|
#   | | (_) | |_) \__ \
#   |_|\___/| .__/|___/
#           | |
#           |_|
#
# Tops configuration file
# Support: https://discord.blakube.com/
# Documentation: https://docs.blakube.com/bk-tops/intro/introduction/

money:
  # Type: "normal" (permanent) or "timed"
  type: normal
  # Amount of the top
  size: 15
  # Placeholder from PlaceholderAPI
  provider: "%vault_eco_balance%"
  # Queue configuration
  queues:
    # Process online players periodically?
    online: true
    # Delay in ticks of each loop if the option above is marked as true
    online-interval: 900
    # Check periodically the top with offline players?
    rotative: false
    # Amount to verify if the option above is marked as true
    rotative-size: 50
  # How to process queues
  processing:
    # How much entries will be processed per tick?
    batch-size: 5
    # Delay between batches
    tick-delay: 1

kills_perma:
  type: normal
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
  size: 15
  # reset is only for timed, available: hourly | daily | weekly | monthly | "* * * * *"
  reset: "monthly"
  provider: "%statistic_player_kills%"
  queues:
    online: true
    online-interval: 600
    rotative: false
  processing:
    batch-size: 5

team_money:
  # Type: "team" (permanent) or "timed-team"
  type: team
  size: 10
  # For team tops, the provider is still the player placeholder.
  # The plugin will sum the value of all members.
  provider: "%vault_eco_balance%"
  queues:
    online: true
    online-interval: 1200
    rotative: false
  processing:
    batch-size: 5
```

## How tops are processed
The tops are processed in a specialized queue system to ensure that the server's main thread is never impacted.

- **Online Queue**: When enabled, the plugin periodically checks the placeholders of all online players.
- **Rotative Queue**: This queue checks a specific amount of players (including offline ones) periodically to ensure the leaderboard remains accurate even for players who aren't currently online.
- **Passive Processing (Topper-like)**: If you set both `online` and `rotative` to `false`, the plugin will only update a player's data when they join or leave the server. This is the most performance-friendly mode and works exactly like the plugin "Topper".
- **Batch Processing**: Instead of updating everything at once, the plugin processes players in small groups (batches). This distributes the workload over several ticks, preventing any spikes in CPU usage.

## Team Tops
The `team` and `timed-team` types are designed to work with supported team/clan plugins (like BentoBox, BetterTeams, FactionsUUID, etc.). 

They work identically to `normal` and `timed` tops, but with one key difference: **they sum the values of all members of the team**. 
- If you use `%vault_eco_balance%` as a provider in a `team` top, the top will show the total balance of all players in each team.
- The leaderboard will display the team's identity instead of individual players.

## Good to know
- The `provider` value must be a valid PlaceholderAPI placeholder.
- The `reset` value must be a valid cron expression or one of the presets: `hourly`, `daily`, `weekly`, `monthly`.
- **Performance Warning**: You must not touch the `processing` values (`batch-size`, `tick-delay`) if you don't know exactly what you are doing. These values are finely tuned to balance update speed and server performance. Increasing the `batch-size` too much or decreasing the `tick-delay` can lead to performance issues or database bottlenecks.
- If you use `type: timed`, the plugin will create a snapshot of the data. This allows you to track progress for a specific period without losing the total historical data.