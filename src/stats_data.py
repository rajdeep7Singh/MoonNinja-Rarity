from typing import final
from ninja_data import moon_data, stats
import json
from operator import itemgetter
k = moon_data
final_data = {}

for i in k:
    if i not in ["1273", "1274"]:
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
    arr.append(m['number'])

# rank = []
# ko = []
# for l in final_data:
#     if final_data[l]['rank'] in rank:
#         print(final_data[l])
#     rank.append(final_data[l]['rank'])
# print(len(list(set(rank))))

with open('./rarity-data.json', 'w', encoding='utf-8') as f:
    json.dump(arr, f, ensure_ascii=False, indent=3)

# import urllib.request

# for i in moon_data:
#     if int(i) > 1020:
#         image_url = f"https://ipfs.io/ipfs/{moon_data[i]['image'].split('//')[-1]}"
#         urllib.request.urlretrieve(image_url, f"assets/{image_url.split('/')[-1]}")
#         print(f'fetched url:{image_url}')