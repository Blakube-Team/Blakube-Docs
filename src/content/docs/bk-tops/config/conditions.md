---
title: Entry conditions
description: Filter which players qualify for a top using placeholder expressions and inactivity rules.
---

# Entry conditions

Conditions let you define rules that a player must meet to appear in a top. When a player fails a condition, they are removed from both the cache and the database for that top.

Conditions are evaluated on the main server thread, as required by PlaceholderAPI.

## Configuration

Add a `conditions` block inside any top in `tops.yml`:

```yaml
my_top:
  type: normal
  size: 15
  provider: "%vault_eco_balance%"
  conditions:
    expressions:
      - "%essentials_is_banned% == false"
      - "%luckperms_has_permission_vip% == true"
    inactivity-days: 30
  queues:
    online: true
    online-interval: 900
    rotative: false
  processing:
    batch-size: 5
```

Both `expressions` and `inactivity-days` are optional. You can use one or both.

---

## Placeholder expressions

```yaml
conditions:
  expressions:
    - "<placeholder> <operator> <value>"
```

Each expression follows the format `<placeholder> <operator> <value>`. All expressions must pass for a player to qualify (AND logic).

**Supported operators:**

| Operator | Meaning |
|---|---|
| `==` | equals |
| `!=` | not equals |
| `>=` | greater than or equal |
| `<=` | less than or equal |
| `>` | greater than |
| `<` | less than |

Comparison is **numeric** when both sides parse as numbers, and **case-insensitive string** otherwise (only `==` and `!=` are meaningful for strings).

**Examples:**

```yaml
expressions:
  - "%essentials_is_banned% == false"
  - "%vault_eco_balance% > 0"
  - "%luckperms_has_permission_vip% == true"
  - "%player_health% >= 10"
```

### Safe behavior

- If PlaceholderAPI is not installed, all expressions are skipped and the player is treated as passing.
- If a placeholder returns an empty or null value (e.g. the expansion does not support offline players), that expression is treated as **passed** to avoid false-positive removals.
- Malformed expressions (invalid format) are silently skipped.

---

## Inactivity filter

```yaml
conditions:
  inactivity-days: 30
```

Removes any player who has not logged in within the specified number of days. Set to `0` or omit to disable.

This check does not require PlaceholderAPI — it uses the server's last-played timestamp.

---

## Full example

```yaml
ranked_money:
  type: normal
  display-name: "&6Ranked Money"
  size: 10
  provider: "%vault_eco_balance%"
  queues:
    online: true
    online-interval: 900
    rotative: true
    rotative-size: 50
  processing:
    batch-size: 5
  conditions:
    expressions:
      - "%essentials_is_banned% == false"
      - "%vault_eco_balance% > 1000"
    inactivity-days: 60
```

In this example, a player is excluded from `ranked_money` if:
- They are banned according to Essentials, **or**
- Their balance is 1000 or less, **or**
- They have not logged in within 60 days.
