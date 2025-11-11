---
title: How to
description: How to create and configure pets.
---

# Pet creation and configuration

Pets are representated by a `.yml` file located in the `plugins/SH-Pets/pets` folder.

### Creating a Pet
To define a pet, you can create a new `.yml` file in the `plugins/SH-Pets/pets` folder.
Then, you can paste the example template provided inside `template.yml` file, located in the same folder. Adjust parameters by
your own needs. Finally, reload plugin using `/pets reload` command or restart your server.

If you want to create, for instance, 4 pets; you will need to create 4 different `.yml` files, each one with a different name and id.

### Pet template (without events/abilities)

```yml
name:
  display: "&c&lFire Dragon"
  show: true

permission: "pets.fire_dragon"

entity:
  type: "SHEEP"
  baby: true

# Available modes: WALK, FLOATING, TELEPORT_ONLY
movement:
  mode: "FLOATING"
  speed: 1.2
  # Only for FLOATING mode: should the pet move up and down smoothly?
  flex-y: true
  # half amplitude of the up and down movement in blocks (only for FLOATING mode)
  flex-y-amplitude: 0.35
  # speed of the up and down movement (only for FLOATING mode)
  flex-y-increment: 0.02


# Offsets for pet position relative to player
distance:
  x-offset: 1.0
  y-offset: 2.0
  z-offset: 1.0
  teleport: 20.0

# Default glow, can be overridden in actions
glow:
  enabled: true
  color: "RED"

# This only will work if the entity type supports equipment (like armor-stands)
equipment:
  helmet: "DRAGON_HEAD"
  chestplate: "NETHERITE_CHESTPLATE"
  leggings: "NETHERITE_LEGGINGS"
  boots: "NETHERITE_BOOTS"
  hand: "BLAZE_ROD"
  off-hand: "FIRE_CHARGE"
  # The following will work if the entity type supports equipment (like armor-stands).
  # Player equipment will override the equipment section below. It will be taken from the player and gave to pet.
  player-equipment: true
  # Support base64 and player-name (can use placeholders from placeholderapi)
  head-value: ""
  # Should the pet's head equip player's head instead of the helmet?
  head-override: true
  # Only for armor-stands
  show-arms: false
```
### About abilities and events
Pets can have abilities and events that trigger actions. You can find more information about how to create in the 
following pages of the documentation.