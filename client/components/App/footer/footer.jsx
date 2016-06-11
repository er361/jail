import React from 'react';
import List from './list.jsx';
import List2 from './list2.jsx';
import footerImgMain from '../../../assets/footerImgMain.png';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
        <div>
          <div className='footerImgMain'>
            <div className="ui center aligned huge header">ПОЧЕМУ МЫ?</div>
            <div className="ui grid">
              <div className="seven wide column">
                <List />
              </div>
              <div className="two wide column">
                <div className="ui vertical divider"/>
              </div>
              <div className="seven column column">
                <List2 />
              </div>
            </div>
            <div className='footerMiddle'>
              footerMiddle
            </div>
          </div>
          <div className='footerNiz'>
            fotNIz
          </div>
        </div>
    );
  }
}
