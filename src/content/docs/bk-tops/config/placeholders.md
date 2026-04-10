---
title: Placeholder list
description: All placeholders provided by BK-Tops via PlaceholderAPI.
---

# Placeholders

## Format

| Placeholder | Description |
|---|---|
| `%bktops_name_<top-id>_<position>%` | Name of the player (or team) at the given position. |
| `%bktops_value_<top-id>_<position>%` | Score of the player (or team) at the given position. |
| `%bktops_spaced_<top-id>_<position>%` | Filler characters to align name and value (configured in `config.yml`). |
| `%bktops_time_<top-id>%` | Time remaining until the next reset of a timed top. |
| `%bktops_myposition_<top-id>%` | The requesting player's position in the top, or a configurable fallback message if they are not ranked. |

- `<top-id>` is the ID of the top as defined in `tops.yml`.
- `<position>` is the 1-based rank. Do not exceed the configured top size.

## Value format modifier

Append `:compact` to `bktops_value` to override the global number format and use compact notation for that placeholder only:

```
%bktops_value:compact_money_1%
```

## Examples

```
%bktops_name_money_1%       → NoHugsOnlyBugs
%bktops_value_money_1%      → 1,234,567.00
%bktops_myposition_money%   → 3   (or "You are not in the top!" if unranked)
%bktops_time_kills_monthly% → 12d 4h 32m
```

## Spaced alignment example

Using the `spaced` placeholder to align leaderboard lines in chat or holograms:

```
&e1. &f%bktops_name_money_1% %bktops_spaced_money_1%&a$%bktops_value:compact_money_1%
&e2. &f%bktops_name_money_2% %bktops_spaced_money_2%&a$%bktops_value:compact_money_2%
&e3. &f%bktops_name_money_3% %bktops_spaced_money_3%&a$%bktops_value:compact_money_3%
&74. &f%bktops_name_money_4% %bktops_spaced_money_4%&a$%bktops_value:compact_money_4%
&75. &f%bktops_name_money_5% %bktops_spaced_money_5%&a$%bktops_value:compact_money_5%
```

Result:
```
1. NoHugsOnlyBugs --------- $1.2M
2. PepitoPerez ------------ $242K
3. MenganitoIto ----------- $104K
4. JuanitoGomez ----------- $89K
5. LuisitoDeCadiz --------- $76K
```

The filler character and total line length are configured via `spaced.char` and `spaced.length` in `config.yml`.

:::note
If you need a placeholder that is not listed here, open an issue on GitHub or ask on Discord.
:::
