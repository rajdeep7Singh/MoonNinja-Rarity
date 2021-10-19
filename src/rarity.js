import './App.css';
import React from 'react';
const listing = require('./rarity-data.json');

function Rarity(data){
  data= data.data;
  return (
      <div className='grid-flow'>
        {listing && listing.map(((item, index) => (
          <div key={index} className="post">
            <a><img src={ data[item].image? `https://ipfs.io/ipfs/${data[item].image.split('//').pop()}` : null } className="App-logo" alt="logo" /></a>
            <h3>{`${data[item].name}`}</h3>
            {data[item].number == '1273' || data[item].number == '1274' ?
              <h4>Rarity: {data[item].rarity}</h4>
            :
              <h4>Rarity:  : {data[item].rarity.toFixed(5)}</h4>}
            <h4>Rank: {data[item].rank? data[item].rank : null}</h4>
          </div>
        )))
        }
      </div>
  );
}
export default Rarity;