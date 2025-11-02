---
title: Guis
description: List of the guis files and what it contains.
---


## Guis

```yml title="banned.yml"
title: "<dark_gray>⇏ Banned users list"
size: 36
items:
  back:
    material: arrow
    slot: 34
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 35
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

banned-template:
  glow: false
  enchant: false
  flag:
    - HIDE_ATTRIBUTES
  name: "&b✦ &f%psaddon_banned%"
  lore:
    - "Click to unban!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 1
```
```yml title="edit-stone.yml"
title: "<dark_gray>⇏ Manage protection"
size: 36
items:
  flags:
    material: red_banner
    slot: 11
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c⚑ &fManage flags"
    lore:
      - "&7Click to open the menu!"

  view-borders:
    material: glass
    slot: 12
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b✦ &fView borders"
    lore:
      - "&7Click to view the borders of the protection!"

  teleport:
    material: ender_eye
    slot: 13
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b✦ &fTeleport to protection"
    lore:
      - "&7Click to teleport to the protection!"

  priority:
    material: oak_door
    slot: 14
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&e☰ &fManage priority"
    lore:
      - "&7Click to set the priority of your protection!"

  rename:
    material: paper
    slot: 15
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&f✎ &fRename protection"
    lore:
      - "&7Click to rename your protection!"

  hide:
    material: gray_dye
    slot: 20
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&7👁 &fHide/Show protection"
    lore:
      - "&7Click to hide/show your protection!"

  home:
    material: spruce_door
    slot: 21
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&a⌂ &fSet to home"
    lore:
      - "&7Click to set your protection as home!"

  owners:
    material: spyglass
    slot: 22
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&6☍ &fView owners"
    lore:
      - "&7Click to view and manage the owner list!"

  members:
    material: spyglass
    slot: 23
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&6☍ &fView members"
    lore:
      - "&7Click to view and manage the member list!"

  banned:
    material: spyglass
    slot: 24
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&6☍ &fView banned"
    lore:
      - "&7Click to view and manage the banned list!"

  back:
    material: arrow
    slot: 34
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 35
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 2
```
```yml title="flags.yml"
title: "<dark_gray>⇏ Manage flags"
size: 54
text-prompt: "<gray>Type the new value for <white>{flag}<gray>. Type <yellow>'cancel'<gray> to abort."

items:
  back:
    material: arrow
    slot: 45
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 53
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

  # ========== TEXT FLAGS ==========

  greeting:
    type: TEXT
    material: BOOK
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eEntry Message"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the message that appears"
      - " &fin the chat when entering the region."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  greeting-title:
    type: TEXT
    material: PAINTING
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eEntry Title"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the title that appears"
      - " &fwhen entering the region, you can"
      - " &fuse &7\\n &ffor the subtitle."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  greeting-action:
    type: TEXT
    material: PAPER
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eEntry Action Bar"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the action bar that appears"
      - " &fwhen entering the region."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  farewell:
    type: TEXT
    material: BOOK
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eExit Message"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the message that appears"
      - " &fin the chat when leaving the region."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  farewell-title:
    type: TEXT
    material: PAINTING
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eExit Title"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the title that appears"
      - " &fwhen leaving the region, you can"
      - " &fuse &7\\n &ffor the subtitle."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  farewell-action:
    type: TEXT
    material: PAPER
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eExit Action Bar"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fThis is the action bar that appears"
      - " &fwhen leaving the region."
      - "&r"
      - " &7▸ &fCurrent: &a[value]"
      - "&r"
      - "&e⏩ Click to change!"

  # ========== BOOLEAN FLAGS ==========

  pvp:
    type: BOOL
    material: NETHERITE_SWORD
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&ePVP Combat"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &ePVP combat"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  leaf-decay:
    type: BOOL
    material: OAK_LEAVES
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eLeaf Decay"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eleaf decay"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  mob-spawning:
    type: BOOL
    material: ALLAY_SPAWN_EGG
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eMob Spawning"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &emob spawning"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  creeper-explosion:
    type: BOOL
    material: CREEPER_HEAD
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eCreeper Damage"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &ecreeper explosion"
      - " &fdamage in this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  wither-damage:
    type: BOOL
    material: WITHER_SKELETON_SKULL
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eWither Damage"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &ewither damage"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  ghast-fireball:
    type: BOOL
    material: GHAST_TEAR
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eGhast Fireball Damage"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eghast fireball"
      - " &fand wither skull damage."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  entity-item-frame-destroy:
    type: BOOL
    material: ITEM_FRAME
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eItem Frame Destruction"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eitem frame"
      - " &fdestruction caused by mobs."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  entry:
    type: BOOL
    material: IRON_BARS
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eUser Entry"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &euser entry"
      - " &ffor non-members in this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  use:
    type: BOOL
    material: OAK_DOOR
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eMechanism Use"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &emechanism use"
      - " &f(doors, levers, buttons, etc.)."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  block-trampling:
    type: BOOL
    material: WHEAT
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eBlock Trampling"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eblock trampling"
      - " &f(farmland and turtle eggs)."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  pistons:
    type: BOOL
    material: STICKY_PISTON
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&ePiston Use"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &episton usage"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  chest-access:
    type: BOOL
    material: CHEST
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eChest Access"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &echest access"
      - " &f(chests, barrels, shulkers, etc.)."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  fire-spread:
    type: BOOL
    material: CAMPFIRE
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eFire Spread"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &efire spread"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  tnt:
    type: BOOL
    material: TNT
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eTNT Damage"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eTNT explosion"
      - " &fdamage in this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  use-anvil:
    type: BOOL
    material: ANVIL
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eAnvil Use"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eanvil usage"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  lightning:
    type: BOOL
    material: TWISTING_VINES
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eLightning Strikes"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &elightning strikes"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  ice-form:
    type: BOOL
    material: BLUE_ICE
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eIce Formation"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eice formation"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  ice-melt:
    type: BOOL
    material: ICE
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eIce Melting"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &eice melting"
      - " &fin this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  snowman-trails:
    type: BOOL
    material: CARVED_PUMPKIN
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eSnow Generation"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &esnow generation"
      - " &fcaused by snow golems."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  mob-damage:
    type: BOOL
    material: COW_SPAWN_EGG
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eMob Damage"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &emob damage"
      - " &fto players in this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

  chorus-fruit-teleport:
    type: BOOL
    material: CHORUS_FRUIT
    amount: 1
    glow: false
    flag:
      - HIDE_ATTRIBUTES
    custom-model-data: 0
    name: "&eChorus Fruit Use"
    lore:
      - "&8Manage Flags"
      - "&r"
      - " &fEnables or disables &echorus fruit"
      - " &fusage in this region."
      - "&r"
      - " &7▸ &fStatus: &a[[active]]"
      - "&r"
      - "&e⏩ Click to toggle!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
    - 17
    - 18
    - 26
    - 27
    - 35
    - 36
    - 44
    - 46
    - 47
    - 48
    - 49
    - 50
    - 51
    - 52
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""

# DO NOT TOUCH THIS
config-version: 2
```
```yml title="main.yml"
title: "<dark_gray>Protections menu"
size: 27
items:
  ps-list:
    material: bell
    slot: 11
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    name: "&a☰ &fOpen Protection List"
    lore:
      - "&7Click to open the protection list!"

  current:
    material: book
    slot: 13
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCurrent information"
    lore:
      - "&fName: &a%psaddon_current_name%"
      - "&fWorld: &a%psaddon_current_world%"
      - "&fOwners: &a%psaddon_current_owners%"
      - ""
      - "&7Click to manage protection!"

  close:
    material: barrier
    slot: 15
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 8
    - 18
    - 26
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 1
```
```yml title="manage.yml"
title: "<dark_gray>⇏ Manage protections"
size: 45
items:
  back:
    material: arrow
    slot: 42
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 43
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

  filter:
    material: hopper
    slot: 44
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&a☰ &fFilter protections"
    lore:
      - "&7Click to filter protections!"

stone-template:
  material: polished_andesite
  glow: false
  enchant: false
  flag:
    - HIDE_ATTRIBUTES
  name: "&b✦ &f%psaddon_current_name%"
  lore:
    - "Click to manage!"
    - ""
    - "&7Owners: &a%psaddon_current_owners%"
    - "&7World: &a%psaddon_current_world%"
    - "&7Location: &aX:%psaddon_x% Y:%psaddon_y% Z:%psaddon_z%"
    - ""
    - "&e▪ Left click to teleport!"
    - "&e▪ Right click to manage!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 36
    - 37
    - 38
    - 39
    - 40
    - 41
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 1
```
```yml title="manage-member.yml"
title: "<dark_gray>Manage Member <dark_gray>❙ <gray>%psaddon_member%"
size: 27
items:

  ban:
    material: black_wool
    slot: 9
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c&lBan Member"
    lore:
      - "&r"
      - " &fBans this member from entering"
      - " &fthe protection permanently."
      - "&r"
      - " &7▸ &cThis action is irreversible"
      - "&r"
      - "&c⏩ Click to ban!"

  kick:
    material: orange_wool
    slot: 10
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&6&lKick Member"
    lore:
      - "&r"
      - " &fRemoves this member temporarily"
      - " &ffrom the protection."
      - "&r"
      - " &7▸ &eThey can rejoin later"
      - "&r"
      - "&e⏩ Click to kick!"

  remove-member:
    material: red_wool
    slot: 11
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c&lRemove Member"
    lore:
      - "&r"
      - " &fRemoves this member from"
      - " &fthe protection roster."
      - "&r"
      - " &7▸ &eThey can be re-added"
      - "&r"
      - "&c⏩ Click to remove!"

  make-owner:
    material: emerald
    slot: 15
    glow: true
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&a&lPromote to Owner"
    lore:
      - "&r"
      - " &fGrants this member full ownership"
      - " &fprivileges in the protection."
      - "&r"
      - " &7▸ &aThey will have all permissions"
      - "&r"
      - "&a⏩ Click to promote!"

  member-info:
    material: player_head
    slot: 13
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b&l✦ Member Information"
    lore:
      - "&r"
      - " &7▸ &fName: &b%psaddon_member%"
      - " &7▸ &fRole: &eMember"
      - " &7▸ &fStatus: &aActive"
      - "&r"
      - "&7View detailed member statistics"

  back:
    material: arrow
    slot: 22
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❮ &fGo Back"
    lore:
      - "&r"
      - " &7Return to the previous menu"
      - "&r"
      - "&b⏩ Click to go back!"

  close:
    material: barrier
    slot: 23
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose Menu"
    lore:
      - "&r"
      - " &7Close this interface"
      - "&r"
      - "&c⏩ Click to close!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 12
    - 14
    - 16
    - 17
    - 18
    - 19
    - 20
    - 21
    - 24
    - 25
    - 26
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""

# DO NOT TOUCH THIS
config-version: 1
```
```yml title="manage-owner.yml"
title: "<dark_gray>Manage Owner <dark_gray>❙ <gray>%psaddon_owner%"
size: 27
items:

  ban:
    material: black_wool
    slot: 9
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c&lBan Owner"
    lore:
      - "&r"
      - " &fBans this owner from entering"
      - " &fthe protection permanently."
      - "&r"
      - " &7▸ &cThis action is irreversible"
      - "&r"
      - "&c⏩ Click to ban!"

  kick:
    material: orange_wool
    slot: 10
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&6&lKick Owner"
    lore:
      - "&r"
      - " &fRemoves this owner temporarily"
      - " &ffrom the protection."
      - "&r"
      - " &7▸ &eThey can rejoin later"
      - "&r"
      - "&e⏩ Click to kick!"

  remove-owner:
    material: red_wool
    slot: 11
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c&lRemove Owner"
    lore:
      - "&r"
      - " &fRemoves this owner from"
      - " &fthe protection roster."
      - "&r"
      - " &7▸ &eThey can be re-added"
      - "&r"
      - "&c⏩ Click to remove!"

  make-member:
    material: emerald
    slot: 15
    glow: true
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&aDemote to Member"
    lore:
      - "&r"
      - " remove this owner the ownership and"
      - " &fprivileges in the protection."
      - "&r"
      - " &7▸ &aThey will have member permissions"
      - "&r"
      - "&a⏩ Click to demote!"

  owner-info:
    material: player_head
    slot: 13
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b&l✦ Owner Information"
    lore:
      - "&r"
      - " &7▸ &fName: &b%psaddon_owner%"
      - " &7▸ &fRole: Owner"
      - " &7▸ &fStatus: &aActive"
      - "&r"
      - "&7View detailed owner statistics"

  back:
    material: arrow
    slot: 22
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❮ &fGo Back"
    lore:
      - "&r"
      - " &7Return to the previous menu"
      - "&r"
      - "&b⏩ Click to go back!"

  close:
    material: barrier
    slot: 23
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose Menu"
    lore:
      - "&r"
      - " &7Close this interface"
      - "&r"
      - "&c⏩ Click to close!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 12
    - 14
    - 16
    - 17
    - 18
    - 19
    - 20
    - 21
    - 24
    - 25
    - 26
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""

# DO NOT TOUCH THIS
config-version: 1
```
```yml title="members.yml"
title: "<dark_gray>⇏ Members list"
size: 36
items:
  back:
    material: arrow
    slot: 34
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 35
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

member-template:
  glow: false
  enchant: false
  flag:
    - HIDE_ATTRIBUTES
  name: "&b✦ &f%psaddon_member%"
  lore:
    - "Click to manage!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 1
```
```yml title="owner.yml"
title: "<dark_gray>Owners list"
size: 36
items:
  back:
    material: arrow
    slot: 34
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&b❖ &fCome back"
    lore:
      - "&7Click to back!"

  close:
    material: barrier
    slot: 35
    glow: false
    enchant: false
    custom-model-data: 0
    amount: 1
    flag:
      - HIDE_ATTRIBUTES
    name: "&c✘ &fClose menu"
    lore:
      - "&7Click to close the menu!"

owner-template:
  glow: false
  enchant: false
  flag:
    - HIDE_ATTRIBUTES
  name: "&b✦ &f%psaddon_owner%"
  lore:
    - "Click to manage!"

fill:
  material: gray_stained_glass_pane
  slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
  glow: false
  enchant: false
  custom-model-data: 0
  amount: 1
  flag:
    - HIDE_ATTRIBUTES
  name: ""
  lore:
    - ""



# DO NOT TOUCH THIS
config-version: 1
```