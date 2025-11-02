---
title: Configuration
description: Learn how to configure PS-Extras
---

# Introduction
Welcome to the **PS-Extras** documentation.

## Settings

```yml title="settings.yml"
lobby:
  world: world
  x: 0.5
  y: 100.0
  z: 0.5
  yaw: 0.0
  pitch: 0.0

prompt:
  cancel-word: "cancel"
  timeout-seconds: 60
  int-min: 1
  int-max: 100


# DO NOT TOUCH THIS!
config-version: 2
```

```yml title="database.yml"
# Available drivers: "h2" (local, recommended) and "mysql" (remote).
driver: h2
host: localhost
port: 3006
db-name: psaddon
username: psaddon_user
password: SECRET_PASSWORD




# DO NOT TOUCH THIS!
config-version: 1
```

## Messages

```yml title="messages.yml"
player-not-found: "<red>Player not found!"
no-permission: "<red>You do not have permission to perform this!"
region-entry-banned: "<red>You are banned from entering this region!"
player-banned-from-region: "<green>Player banned from region successfully."
player-unbanned-from-region: "<green>Player unbanned from region successfully."
banned-from-region: "<red>You have been banned from this region!"
unbanned-from-region: "<green>You have been unbanned from this region!"
player-not-in-region: "<red>Player is not in this region!"
player-kicked-from-region: "<green>Player kicked from region successfully."
kicked-from-region: "<red>You have been kicked from this region!"
cannot-unban-yourself: "<red>You cannot unban yourself!"
cannot-ban-yourself: "<red>You cannot ban yourself!"
cannot-kick-yourself: "<red>You cannot kick yourself!"
cannot-manage-yourself: "<red>You cannot manage yourself!"
no-region-found: "You are not standing in a protected region!"
home-set: "<green>Home set successfully!"
teleported-to-protection: "<green>Teleported to your protection's home!"
priority-set: "<green>Protection priority set correctly!"
name-set: "<green>Protection renamed successfully!"
not-in-protection: "<red>You are not in an available protection!"
must-be-owner: "<red>You must be an owner to perform this!"
showing-border: "<green>The border of the protection u are inside is now visible!"
usage-kick: "<red>Usage: /ps kick <player>"
usage-ban: "<red>Usage: /ps ban <player>"
usage-unban: "<red>Usage: /ps unban <player>"

prompt:
  int-request: "<gray>Enter a number (1-100) or type <red>cancel <gray>to cancel:"
  string-request: "<gray>Enter text or type <red>cancel <gray>to cancel:"
  expired: "<red>Time expired!"
  cancelled: "<yellow>Cancelled!"
  not-number: "<red>You must enter a valid number!"
  empty-string: "<red>Cannot be empty!"
  out-of-range: "<red>Number must be between {min} and {max}!"

config-reloaded: "<green>Configuration reloaded successfully!"
# DO NOT TOUCH THIS!
config-version: 5
```