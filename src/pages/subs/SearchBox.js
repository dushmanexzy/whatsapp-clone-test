import React from 'react';

function SearchBox(props) {
  return (
    <div className={`search flex`}>
      <div className={`sbox flex aic`}>
        <button className={`icon-search s24`}/>
        <input type="text" placeholder={`Search chat or contact`} className={`s16 font`}/>
      </div>
    </div>
  );
}

export default SearchBox;
