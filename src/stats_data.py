from typing import final
from ninja_data import moon_data, stats
import json
from operator import itemgetter
k = moon_data
final_data = {}
for i in k:
    try:
        attributes = k[i]['attributes']
        rarity = 1
        trait_count = None
        for j in range(0, len(attributes)):
            trait_count = stats[attributes[j]['trait_type']][attributes[j]['value']]
            rarity *= trait_count
        k[i]['rarity'] = rarity*1000000
        k[i]['number'] = i
    except Exception as e:
        continue

sort_arr = []
for p in k:
    sort_arr.append(k[p])

newlist = sorted(sort_arr, key=lambda d: d['rarity'])

for m in newlist:
    final_data[m['number']] = m

with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(newlist, f, ensure_ascii=False, indent=3)