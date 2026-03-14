---
title: Placeholder list
description: List of placeholders format available in BK-Tops.
---

# Format
There are four types of placeholders:
- `%bktops_name_<top-id>_<position>%`
- `%bktops_value_<top-id>_<position>%`
- `%bktops_spaced_<top-id>_<position>%`
- `%bktops_time_<top-id>%`

`<top-id>` is the ID of the top configured in the `tops.yml` file.

`<position>` is the position of the player (or team) in the top, don't exceed the top size!

## Some examples:
- `%bktops_name_money_1%`: returns the name of the player at position 1 for the `money` top.
- `%bktops_value_money_1%`: returns the value of the player at position 1 for the `money` top.
- `%bktops_name_team_money_1%`: returns the name of the team at position 1 for the `team_money` top.
- `%bktops_value_team_money_1%`: returns the value of the team at position 1 for the `team_money` top.
- `%bktops_time_kills_monthly%`: returns the time remaining until the `kills_monthly` top resets.
- `%bktops_time_kills_weekly%`: returns the time remaining until the `kills_weekly` top resets.


### With spaced:
- "&e1. &f%bktops_name_money_1% %bktops_spaced_money_1%&a$%bktops_value:compact_money_1%"
- "&e2. &f%bktops_name_money_2% %bktops_spaced_money_2%&a$%bktops_value:compact_money_2%"
- "&e3. &f%bktops_name_money_3% %bktops_spaced_money_3%&a$%bktops_value:compact_money_3%"
- "&74. &f%bktops_name_money_4% %bktops_spaced_money_4%&a$%bktops_value:compact_money_4%"
- "&75. &f%bktops_name_money_5% %bktops_spaced_money_5%&a$%bktops_value:compact_money_5%"

```
1. NoHugsOnlyBugs --------- $1.2M
2. PepitoPerez ------------ $242K
3. MenganitoIto ----------- $104K
4. JuanitoGomez ----------- $89K
5. LuisitoDeCadiz -------- $76K
```

:::note
If you need any other placeholder, you can request it by opening an issue on GitHub or on our Discord.
:::
