import React from 'react';
import './Card.scss';
import {Link} from 'react-router';
export default class Card extends React.Component {

  render() {
    const { props: { children: children } } = this
    // console.log(this.props);
    return (
      <div className="cattle">
        <div className="category__item">
          <div className="item__wrapper">
              <div className="imgWraper">
                  <img className='img-responsive' src={require(`../../../assets/uploads/${children.img}`)} alt=""/>
              </div>
              <div className="item__desc">
                <div className='textWrapper'>
                    <p>АРТ. - {children.art}</p>
                    <p>{children.title}</p>
                    <p>Порода - {children.poroda}</p>
                    <p>{children.price}</p>
                    <Link className='fluid ui primary button' to='card'>Заказать</Link>
                </div>
              </div>
          </div>
        </div>
      </div>

    );
  }
}
