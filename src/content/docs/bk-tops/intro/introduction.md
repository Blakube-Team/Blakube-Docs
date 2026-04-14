---
title: BK-Tops documentation
description: Documentation for BK-Tops, a free and open-source tops plugin.
---
# BK-Tops
The solution for leaderboards where performance and features converge.

## Dynamic leaderboards
* **Unlimited tops**: create as many tops as you need from the settings.
* **Permanent leaderboards**: rankings that never reset (money, level, total kills).
* **Temporary leaderboards**: rankings with automatic reset (monthly kills, daily blocks).
* **Configurable size**: defines how many players to display in each top list (top 10, top 15, top 50, etc).
* **Display names**: assign a human-readable name to each top, used in notifications and the compare command.

## Entry conditions
Filter which players qualify for a top before they are stored:
* **Placeholder expressions**: exclude players based on any PlaceholderAPI placeholder (e.g. banned players, players missing a role).
* **Inactivity filter**: automatically remove players who have not logged in within a configurable number of days.

See the [Conditions](/bk-tops/config/conditions) page for full details and examples.

## Team/Clan based tops
Not only player score, also team score and clan score are supported:
* `BentoBox`
* `BetterTeams`
* `FactionsUUID`
* `KingdomsX`
* `Lands`
* `SimpleClans`
* `SuperiorSkyblock2`
* `Towny`
* `UltimateClans`

## Next level scheduling
* **Flexible schedules**: hourly, daily, weekly, monthly or custom cron expressions (`* * * * *`).
* **Snapshot system**: calculates progress for the period without affecting total statistics.
* **No data loss**: total values remain intact.

## Flawless processing queue system
* **Online player queue**: updates online players periodically.
* **Rotative queue**: checks the top N players periodically, supports offline entries.
* **Passive mode**: updates data only on join/quit for maximum performance.
* **Priority queue**: internally managed by critical, high, medium and low priorities.

## Performance optimization
* **HikariCP Connection Pool**: advanced db settings, leak detection, faster pool.
* **Smart cache**: atomic snapshot cache, reduction in queries, automatic data invalidation.
* **Batch processing**: batch writes (up to 20 players per query), reduces db load and automatic flush.
* **Asynchronous processing**: all db ops run in separate threads, 0% lag on the main server.

## Value formatting
* **Number formats**: exact, rounded, compact (`1.23M`), compact rounded (`1M`) — configured globally or per-top.
* **Time format**: tops backed by time-based statistics (e.g. `%statistic_time_played%`) display values as `19h 49m 12s` instead of a raw number. Configurable significant figures and suffixes.
* **Per-placeholder override**: force a specific format on any individual placeholder without changing the top config.

## Extras
* **Multiple databases**: choose between H2 and MySQL according to your needs.
* **Advanced data architecture**: db tables, snapshots, optimized indexes.
* **Compare command**: compare two players side by side across all registered tops.
* **Developer API**: extensive API with events, leaving unlimited possibilities for add-ons.

## Road Map
* Official Add-Ons
* Visual leaderboards as Signs or NPCs