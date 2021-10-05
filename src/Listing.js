import React from 'react';
import './css/main.css';
import list from './data/etsy.json';
import ListItem from './ListItem';

export default function Listing() {
  const listElem = list.map(el => {
    const { listing_id, url, title, price, currency_code, quantity } = el;
    const imgUrl = el.MainImage ? el.MainImage.url_570xN : 'https://st4.depositphotos.com/14953852/24651/v/950/depositphotos_246517344-stock-illustration-image-available-icon-vector-flat.jpg';
    return <ListItem 
      listing_id={listing_id}
      key={listing_id}
      url={url}
      title={title}
      price={price}
      quantity={quantity}
      currency_code={currency_code}
      imgUrl = {imgUrl}  
      />
  })
  return (
    <div className="item-list">
      {listElem}
    </div>
  )
}
