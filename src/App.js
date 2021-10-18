import './App.css';
import React, { useState } from 'react';
import Rarity from './rarity'

const data = require('./output.json');

function App() {
  const id = window.location.href.split('id=').pop();
  const ninja = data[id];
  const [show, setShow] = useState(false);

  const rarity = () => {
    setShow(!show)
  }

  var imageName = require('./1834.png')

  if (!ninja) {
    return (
      <div className="App">
        <header className="App-header">
          <a rel="noreferrer" target="_blank" href='https://moonninjas.com/nft/1834'><img src="https://ipfs.io/ipfs/QmSeBuEUScRgvGWCPpQbC8KyddujLkLXsM7BgapiSoZbwP/1834.png" className="App-logo" alt="logo" /></a>
          <p>Check Rarity of Moonninja</p>
          <form className='form' method='get'>
            <input name='id' type='text' placeholder='123' />
            <input type='submit' value='Search'/>
            <button type='button' onClick={rarity}>Rarity wise list</button>
          </form><br/>
          <div>Buy me a coffee: <span className='address'>0x255885BD80B534e72Fc4ac9989C2351249EC5f89</span></div><br/>
          <div>I am not associated with the <a rel="noreferrer" target="_blank" href="https://moonninja.com/">MOONNINJA</a> team.</div><br/>
          <div>Made with &#9829; by <a rel="noreferrer" target="_blank" href='https://twitter.com/sklul7'>@sklul7</a></div>
          {show? <Rarity data={data}></Rarity> : null}
        </header>
      </div>
    );
  }

  console.log(ninja.image);
  console.log(ninja.attributes)

  const imageUrl = `https://ipfs.io/ipfs/${ninja.image.split('//').pop()}`

  console.log(imageUrl);

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} className="App-logo" alt="nft" /><br />
        <div>{ninja.name}</div><br/>
        <div>Traits: {ninja.attributes.length}</div><br/>
        <div className='attributes'>
          {ninja.attributes.map(attribute => <div className='attribute' key={attribute.value}>
            <span className='percentage'>{attribute.trait_type}:{attribute.value}</span>
          </div>)}
        </div><br/>
        <div>Rarity: {ninja.rarity.toFixed(5)} (Lower the rarer)</div>
        <div class='bold'>Rank: {ninja.rank}/4269</div>
        <div>Check another <a href="/">MOONNINJA</a></div><br/>
        <div>Buy me a coffee: <span className='address'>0x255885BD80B534e72Fc4ac9989C2351249EC5f89</span></div><br/>
        <div>I am not associated with the <a rel="noreferrer" target="_blank" href="https://moonninja.com/">MOONNINJA</a> team.</div><br/>
        <div>Made with &#9829; by <a rel="noreferrer" target="_blank" href='https://twitter.com/sklul7'>@sklul7</a></div>
      </header>
    </div>
  );
}

export default App;