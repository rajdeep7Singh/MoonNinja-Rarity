import './App.css';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import rarityCalculation from './utils'

function Rarity(data){
    data = data.data;
    const [count, setCount] = useState({
    prev: 0,
    next: 10
    })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  const sortFunc = (a, b) => {
      return (rarityCalculation(a) - rarityCalculation(b))
  }
  
  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className='grid-flow'>
        {current && current.sort(sortFunc).map(((item, index) => (
          <div key={index} className="post">
            <a><img src={`https://ipfs.io/ipfs/${item.image.split('//').pop()}`} className="App-logo" alt="logo" /></a>
            <h3>{`${item.name}`}</h3>
            <h4>Rarity: {rarityCalculation(item).toFixed(5)}</h4>
          </div>
        )))
        }
      </div>
    </InfiniteScroll>
  );
}
export default Rarity;