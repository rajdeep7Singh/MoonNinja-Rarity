import fetch from 'node-fetch';
// import * as fs from 'fs';

async function main() {
  let traitsData = {}
  for (let i = 1273; i < 1275; i++) {
    const result = await fetch(`https://ipfs.io/ipfs/QmQMNdQS1UZkerbM429knJPTCNLV5zTfpmiEunKd4rYsZ3/${i}`, {
      "credentials": "omit",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site"
      },
      "referrer": "https://moonninjas.com/",
      "method": "GET",
      "mode": "cors"
    });
    const data = await result.text();
    console.log(data);
    traitsData[i] = data
  }
  // fs.writeFile ("output.json", JSON.stringify(traitsData), 'utf8', function(err) {
  //   if (err) throw err;
  //   console.log('complete');
  // }
  // );
  console.log(traitsData)
}

main().catch(console.error);
