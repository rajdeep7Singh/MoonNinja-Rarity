import './App.css';
import React from 'react';
const listing = require('./rarity-data.json');
// const data = require('./output.json');

function Rarity(data){
       data= data.data;
//     const [count, setCount] = useState({
//     prev: 0,
//     next: 10
//     })
//   const [hasMore, setHasMore] = useState(true);
//   const [current, setCurrent] = useState(data.slice(count.prev, count.next))
//   const getMoreData = () => {
//     if (current.length === data.length) {
//       setHasMore(false);
//       return;
//     }
//     setTimeout(() => {
//       setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
//     }, 2000)
//     setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
//   }
  
//   const sortFunc = (a, b) => {
//       return (rarityCalculation(a) - rarityCalculation(b))
//   }
  return (
      <div className='grid-flow'>
        {listing && listing.map(((item, index) => (
          <div key={index} className="post">
            <a><img src={ data[item].image? `https://ipfs.io/ipfs/${data[item].image.split('//').pop()}` : null } className="App-logo" alt="logo" /></a>
            <h3>{`${data[item].name}`}</h3>
            <h4>Rarity: {data[item].rarity? data[item].rarity : null}</h4>
          </div>
        )))
        }
      </div>
  );
}
export default Rarity;