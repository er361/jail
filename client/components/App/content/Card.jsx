import React from 'react';

import Cow from '../../../assets/Cows2.png';

export default class Card extends React.Component {
  render() {
    return (
        <div className="ui card">
          <div className="image">
            <img src={this.props.img} />
          </div>
          <div className="content">
            <a className="header">Kristy</a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i> 22 Friends
            </a>
          </div>
        </div>
    );
  }
}
