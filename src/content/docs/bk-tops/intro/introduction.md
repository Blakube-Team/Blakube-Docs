---
title: BK-Tops documentation
description: Documentation for BK-Tops, a free and open-source tops plugin.
---
# BK-Tops
The solution for leaderboards where performance and features converge.

## Dinamic leaderboards
* **Unlimited tops**: create as many tops as you need from the settings.
* **Permanent leaderboards**: rankings that never reset (money, level, total kills).
* **Temporary leaderboards**: rankings with automatic reset (monthly kills, daily blocks).
* **Configurable size**: defines how many players to display in each top list (top 10, top 15, top 50, etc).

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
* **Flexible schedules**: hourly, daily, weekly, monthly or custom cron expressions (* * * * *).
* **Snapshot system**: calculates progress for the period without affecting total statistics.
* ** No data loss**: total values remain intact.

## Flawless processing queue system
* **Online player queue**: update periodically the online players.
* **Rotative queue**: check the N top players, support offline entries.
* **Passive mode**: updates data only on join/quit for maximum performance.
* **Priority queue**: internally managed by critical, high, medium and low priorities.

## Based on performance optimization
* **HikariCP Connection Pool**: advanced db settings, leak detection, faster pool, ...
* **Smart cache**: Top size cache,  reduction in queries, automatic data invalidation and configurable TTL.
* **Batch processing**: Batch writes (up to 20 players per query), reduces db load and automatic flush.
* **Asynchronous processing**: all db ops in separate threads, 0% lag on the main server, and dedicated thread pool.

## Extras:
* **Multiple DataBase**: choose between H2 and MySQL according to your needs.
* **Advanced Data architecture**: db tables, snapshots, optimized indexes, ...
* **Developer API**: provides and extensive API leaving unlimited possibilities for add-ons!

## Road Map
* Official Add-Ons
* Visual leaderboards as Signs or NPCS