import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {

  const {listing_id, url, price, quantity, imgUrl  } = props;
  let {currency_code, title} = props;

  if (currency_code === 'USD') {
    currency_code = '$';
  } else if (currency_code === 'EUR') {
    currency_code = '€';
  }

  if (title.length > 50){
    title = title.slice(0,50)+'...';
  }



  return (
    <div data-item-id={listing_id} className="item">
    <div className="item-image">
      <a href={url}>
        <img src={imgUrl} alt="item"/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title}</p>
      <p className="item-price">{currency_code}{price}</p>
      <p className="item-quantity level-medium">{quantity} left</p>
    </div>
  </div>
  )
}

ListItem.propTypes = {
  listing_id: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

ListItem.defaultProps = {
  listing_id: 0,
  url: '',
  title: '',
  imgUrl: '',
  currency_code: '',
  price: '',
  quantity: 0
}