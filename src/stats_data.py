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

count = 3
arr = []
for m in newlist:
    m['rank'] = count
    final_data[m['number']] = m
    count +=1
    #arr.append(m['number'])

with open('./output.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=3)

# import urllib.request

# for i in moon_data:
#     if int(i) > 1020:
#         image_url = f"https://ipfs.io/ipfs/{moon_data[i]['image'].split('//')[-1]}"
#         urllib.request.urlretrieve(image_url, f"assets/{image_url.split('/')[-1]}")
#         print(f'fetched url:{image_url}')