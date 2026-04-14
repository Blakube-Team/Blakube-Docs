---
title: BK-Tops Hooks
description: How to integrate BK-Tops with other plugins.
---

# Team / Clan hooks

When you create a `team` or `timed-team` top, BK-Tops automatically detects which supported clan or team plugin is installed and uses it to resolve team membership and display names. If more than one supported plugin is active, the one with the highest configured priority wins.

**Supported plugins:**

| Plugin | Default priority |
|---|---|
| Lands | 9 |
| SuperiorSkyblock2 | 8 |
| BentoBox | 7 |
| UltimateClans | 6 |
| KingdomsX | 5 |
| Towny | 4 |
| FactionsUUID | 3 |
| BetterTeams | 2 |
| SimpleClans | 1 |

You can change priorities and disable individual hooks in `hooks.yml`. Plugins that are not installed are automatically skipped — no configuration needed.

:::note
If you need support for any other team or clan plugin, open an issue on GitHub or ask on Discord.
:::

```yml
#  _    _             _
# | |  | |           | |
# | |__| | ___   ___ | | __
# |  __  |/ _ \ / _ \| |/ /
# | |  | | (_) | (_) |   <
# |_|  |_|\___/ \___/|_|\_\
#
# Hook Clans/Teams configuration file
# Support: https://discord.blakube.com/
# Documentation: https://docs.blakube.com/bk-tops/intro/introduction/

# You can enable/disable support for each plugin and set their priority.
# The priority is used when more than one plugin is detected, the one with the highest priority will be used.
# If two or more plugins have the same priority, the one that appears first
lands:
  enabled: true
  priority: 9

superior-skyblock-2:
  enabled: true
  priority: 8

bento-box:
  enabled: true
  priority: 7

ultimate-clans:
  enabled: true
  priority: 6

kingdoms-x:
  enabled: true
  priority: 5

towny:
  enabled: true
  priority: 4

factions-uuid:
  enabled: true
  priority: 3

better-teams:
  enabled: true
  priority: 2

simple-clans:
  enabled: true
  priority: 1


# DO NOT TOUCH THIS!
config-version: 1
```