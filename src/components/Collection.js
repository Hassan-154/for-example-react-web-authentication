import React from 'react';
import '../style/collection.css'
import collPic from '../images/collection.gif'
const Collection = () => {
  return (
    <div className="collection" id="collection">
    <img src={collPic} alt=""/>
    </div>
  );
}

export default Collection;
