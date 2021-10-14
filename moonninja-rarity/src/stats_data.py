import json

json_data = {}
stats_data = {}

for i in json_data:
    attributes = stats_data.get(json_data[i]['attributes'])
    if attributes:
        for j in attributes:
            for k in j:
                if not stats_data.get(k['trait_type']):
                    stats_data['trait_type'] = {k['value']:1}
                elif not stats_data[k['trait_type']].get(k['value']):
                    stats_data['trait_type'][k['value']] = 1
                else:
                    stats_data[k['trait_type']][k['value']] += 1

with open('stats.json', 'w', encoding='utf-8') as f:        
    json.dump(stats_data, f, ensure_ascii=False, indent=4)