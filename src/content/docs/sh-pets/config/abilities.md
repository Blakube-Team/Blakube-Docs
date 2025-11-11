---
title: Abilities
description: Configuration of pet abilities in SH-Pets.
---

# Pet Abilities Configuration
Pets can have various abilities that enhance their functionality and interaction with players. These abilities can be 
configured in the pet's `.yml` file under the `abilities` section.


### Events
There are many events that can trigger abilities. Each event can have multiple abilities associated with it.
Here a full list of available events:

- `on-spawn`: Triggered when a player spawns a pet.
- `on-despawn`: Triggered when a player despawns a pet.
- `on-hurt`: Triggered when the pet owner is damaged.
- `on-interact`: Triggered when a player clicks on the pet.
- `periodic`: Triggered periodically while the pet is active.

To add it to the pet, just add the text bordered to the pet .yml, like this:

```yml
name:
  display: "&c&lFire Dragon"
  show: true

permission: "pets.fire_dragon"

entity:
  type: "SHEEP"
  baby: true

# Some content omitted for brevity...

# Add here your desired events:
on-spawn:
  # Abilities to execute when the pet spawns

on-hurt:
  # Abilities to execute when the pet owner is hurt

periodic:
  delay: 20 # Delay in ticks between each execution (20 ticks = 1 second)
  # Abilities to execute periodically
  
# may other events...
```

### Ability Types
There are several types of abilities that can be assigned to pet.
Can be used in any event, but we will use on-spawn in the examples.

- `player-command`: Executes a command as the player.
```yml
on-spawn:
  player-commands:
    - "say My pet has spawned!"
 ```

- `console-command`: Executes a command as the console.
```yml
on-spawn:
  console-commands:
    - "give %player_name% diamond 1"
    - "eco give %player_name% 100"
 ```

- `message`: Sends a message to the player.
```yml
on-spawn:
  messages:
    - "<gold><bold>🐲 Your Fire Dragon has awakened!"
    - "<red>ROOOAAR!"
    - "<yellow>The dragon stretches its wings"
 ```

- `sound`: Plays a sound effect.
```yml
on-spawn:
  sound:
    name: "ENTITY_ENDER_DRAGON_GROWL"
    volume: 1.5
    pitch: 1.2
    target: LOCATION # PLAYER o LOCATION
    probability: 100
 ```

- `particle`: Displays particle effects around the pet.
```yml
on-spawn:
  particle:
    type: FLAME
    count: 50
    offsetX: 1.0
    offsetY: 1.0
    offsetZ: 1.0
    speed: 0.1
    target: PET # PLAYER, PET, o LOCATION
    delay: 10
 ```

- `glow`: Makes the pet glow with a specified color.
```yml
on-spawn:
  glow:
    color: RED # Any chatcolor 
    duration: 100 # ticks (5 seconds)
 ```

- `effect`: Applies a potion effect to the player.
```yml
on-spawn:
  effect:
    type: FIRE_RESISTANCE
    duration: 1200 # ticks (60 seconds)
    amplifier: 0
    ambient: false
    particles: true
    icon: true
    probability: 100
 ```

- `heal`: Heals the player by a specified amount.
```yml
on-spawn:
  heal:
    type: ADD # ADD, SET, o MULTIPLY
    value: 10.0
 ```
- `title` : Displays a title and subtitle to the player.
```yml
on-spawn:
  title:
    title: "&c&lFIRE DRAGON"
    subtitle: "&6Has entered the world"
    fadeIn: 20
    stay: 60
    fadeOut: 20
 ```

- `explosion` : Creates a non-destructive explosion effect at the pet's location.
```yml
on-spawn:
  explosion:
    power: 1.5
    offsetX: 0
    offsetY: 1
    offsetZ: 0
    probability: 30 # in percentage
    delay: 40 # in ticks
 ```


### Also exists attacks, that invoke projectiles or similar effects:
I will be using `on-hurt` event for the examples, but can be used in any event. Take into account that 
need a target location or entity to work properly, so using it on `on-hurt` or `on-interact` is recommended.

- `crystal-shard` : Shoots crystal shard projectiles.
```yml
on-hurt:
  crystal-shard:
    damage: 1.5
    range: 3.2
    particle: "DUST"
 ```

- `explosion-attack` : Shoots an explosion effect.
```yml
on-hurt:
  explosion-attack:
    power: 2.0
    particle: "DUST"
    sound: "ENTITY_GENERIC_EXPLODE"
 ```

- `fireball-attack` : Shoots fireball projectiles.
```yml
on-hurt:
  fireball-attack:
    damage: 2.5
    particle: "FLAME"
    sound: "ENTITY_GENERIC_EXPLODE"
 ```

- `fire-blast` : Shoots a blast of fire.
```yml
on-hurt:
  fire-blast:
    damage: 1.5
    range: 3.2
    particle: "FLAME"
 ```

- `frost-attack` : Shoots frost projectiles.
```yml
on-hurt:
  frost-attack:
    damage: 1.5
    range: 3.2
    particle: "SNOWFLAKE"
 ```

- `healing-aura` : Emits a healing aura around the pet.
```yml
on-hurt:
  healing-aura:
    heal: 1.5
    range: 3.2
    particle: "HEART"
    sound: "ENTITY_EXPERIENCE_ORB_PICKUP"
 ```

- `ice-beam-attack` : Shoots an ice beam.
```yml
on-hurt:
  ice-beam-attack:
    damage: 1.5
    heal: 1.5
    particle: "SNOWFLAKE"
    sound: "BLOCK_GLASS_BREAK"
 ```

- `lightning-strike` : Summons a lightning strike at a target location.
```yml
on-hurt:
  lightning-strike:
    damage: 4.0
    particle: "ELECTRIC_SPARK"
 ```

- `poison-spit` : Shoots poison spit projectiles.
```yml
on-hurt:
  poison-spit:
    damage: 1.5
    poison-ticks: 60 # 3 seconds
    particle: "SLIME"
    sound: "ENTITY_SLIME_JUMP"
 ```

- `root-grab` : Roots nearby entities in place.
```yml
on-hurt:
  root-grab:
    damage: 1.5
    slow-ticks: 60 # 3 seconds
    particle: "BLOCK_CRACK"
    sound: "BLOCK_GRASS_BREAK"
 ```

- `slash-attack` : Performs a slashing attack.
```yml
on-hurt:
  slash-attack:
    damage: 1.5
    range: 3.2
    particle: "SWEEP_ATTACK"
    sound: "ENTITY_PLAYER_ATTACK_SWEEP"
 ```

- `spin-attack` : Performs a spinning attack.
```yml
on-hurt:
  spin-attack:
    damage: 1.5
    range: 3.2
    particle: "SWEEP_ATTACK"
    sound: "ENTITY_PLAYER_ATTACK_SWEEP"
 ```

- `thunder-strike` : Summons a thunder strike at a target location.
```yml
on-hurt:
  thunder-strike:
    damage: 4.0
    particle: "ELECTRIC_SPARK"
    sound: "ENTITY_LIGHTNING_BOLT_THUNDER"
 ```

- `wind-blast` : Shoots a blast of wind.
```yml
on-hurt:
  wind-blast:
    knockback: 1.2
    particle: "CLOUD"
    sound: "ENTITY_ENDER_DRAGON_FLAP"
 ```

- `wind-slash` : Shoots a slashing wind attack.
```yml
on-hurt:
  wind-slash:
    damage: 1.5
    range: 3.2
    particle: "CLOUD"
 ```
