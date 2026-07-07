---
title: "Rewards"
---

# Rewards

BK-Tops can grant configurable rewards when a timed leaderboard is resolved. Rewards can give items, run commands, or both.

---

## What rewards are for

Rewards are meant for timed tops:

- daily
- weekly
- monthly
- or any top that resets on a schedule

In practice, rewards are created when the top resets and the final ranking for that period is processed.

---

## How the flow works

1. The timed top reaches the end of its period.
2. BK-Tops reads the final ranking.
3. Rewards are generated for each configured position.
4. If the player is online, the reward is delivered immediately.
5. If the player is offline, the reward is stored as pending.
6. When that player joins again, any pending rewards are delivered.

---

## What a reward can give

### Items

You can give a physical item to the player.

- The item is added to the player's inventory.
- If there is no space left, any overflow drops near the player.

### Commands

You can run a command on behalf of the server.

- The command is executed from console.
- You can use placeholders from BK-Tops.
- PlaceholderAPI placeholders are also resolved if that plugin is installed.

---

## Rewards by position

Rewards can be assigned to single positions or position ranges.

Common examples:

- `1` for first place
- `2-3` for second and third place
- `4-10` for a wider range

Positions are numeric and start at `1`.

---

## Rewards for team tops

If the top is a team top, rewards can be distributed in two ways:

- `entry`: only the ranked entry receives the reward
- `members`: all members of the team receive the reward

This lets a clan, faction, or team top reward either a single leader or the whole group.

---

## Configuration

Rewards are defined inside each top in `tops.yml`.

Basic structure:

```yml
my_top:
  type: timed
  rewards:
    enabled: true
    team-reward-mode: entry
    positions:
      "1":
        commands:
          - "eco give {player} 10000"
        items: {}
      "2-3":
        commands:
          - "eco give {player} 5000"
        items: {}
```

### Important fields

- `enabled`: turns rewards on or off for that top
- `team-reward-mode`: how team tops distribute rewards
- `positions`: list of rewarded positions

---

## Position format

Each block under `positions` represents one reward entry.

Inside that block you can define:

- `commands`
- `items`
- `team-reward-mode` to override the global mode for that position

Example:

```yml
positions:
  "1":
    commands:
      - "eco give {player} 10000"
    items:
      1:
        item: "DIAMOND_SWORD"
        amount: 1
```

---

## Placeholders available in commands

Reward commands can use these placeholders:

- `{player}`: player name
- `{uuid}`: player's UUID
- `{top_id}`: internal top identifier
- `{position}`: earned position
- `{score}`: final score in that top

If PlaceholderAPI is installed, its placeholders are also expanded.

---

## Admin commands

All of these commands require the `bk-tops.admin` permission.

### Add an item to a reward

```text
/bktops rewards additem <topId> <position> <amount>
```

Requirements:

- You must be a player.
- You must hold the item in your main hand.
- `<amount>` must be greater than 0.

What it does:

- Takes the item from your hand.
- Stores it as a reward for that position.
- Uses the amount provided in `<amount>`.

### Add a command to a reward

```text
/bktops rewards addcommand <topId> <position> <command>
```

Requirements:

- The command cannot be empty.
- You can enter it with or without `/`.

What it does:

- Adds the command to the specified position.

### List rewards

```text
/bktops rewards list <topId>
```

What it shows:

- Configured positions
- Number of items
- Number of commands
- Associated team reward mode

---

## Restrictions and notes

- Rewards do not make sense for permanent tops, because they are delivered when a timed top resets.
- If a position is not configured, it receives nothing.
- If a reward is disabled, it is not generated.
- If the player is online when the top ends, the reward can be delivered without waiting for a relog.
- If the inventory is full, overflowing items drop on the ground.
- Commands are executed by console, not by the player.

---

## Practical example

Suppose a monthly kills top:

- position `1`: 10,000 money and a special item
- positions `2-3`: 5,000 money
- if it is a team top and `members` is used, all members of the winning team receive the reward

---

## Wiki recommendation

If this goes into a public wiki, the most useful explanation is:

1. which tops give rewards
2. which positions are rewarded
3. what the player receives
4. whether the reward goes to the leader or to the whole team
5. which staff commands are used to edit it
