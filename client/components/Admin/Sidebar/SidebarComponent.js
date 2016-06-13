import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

export default React.createClass({
  render(){
    return(
      <div className="ui visible left vertical inverted thin sidebar menu">
        <Link className='item' to='admin'>Продукты</Link>
        <Link className='item' to='subcategory'>Подкатегория</Link>
        <Link className='item' to='category'>Категория</Link>
      </div>
    )
  }
})
