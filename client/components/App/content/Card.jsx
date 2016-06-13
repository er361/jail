import React from 'react';
import './Card.scss';
import {Link} from 'react-router';
export default class Card extends React.Component {
  showCard = () => {

  }
  render() {
    const { props: { children: children } } = this
    // console.log(this.props);
    return (
      <div>
        <div className="ui card">
          <div className="image">
            <img className='ui fluid image' src={require(`../../../assets/uploads/${children.img}`)} alt=""/>
          </div>
          <div className="content">
            <ul>
              <li><span  className="art">АРТ. - {children.art}</span></li>
              <li><span  className="title">{children.title}</span></li>
              <li><span  className="poroda">Порода - {children.poroda}</span></li>
              <li><span  className="price">{children.price}</span></li>
            </ul>
          </div>
          <Link to='card' onClick={this.showCard} className='ui primary button '>Заказать</Link>
        </div>
      </div>
    );
  }
}
