import React from 'react';

import baran from '../../../assets/sl1.png';
import sl2 from '../../../assets/babel.png';
import sl3 from '../../../assets/footerImgMain.png';

export default class Slide extends React.Component {


  render() {
    return (
      <div>
        <div id="carousel-example-generic" className="carousel slide">
            <div className="carousel-inner">
              <div className="item active" >
                <img src={baran} />
              </div>
              <div className="item">
                <img src={sl2} alt=""/>
              </div>
              <div className="item">
                <img src={sl3} alt=""/>
              </div>
            </div>

          

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
      </div>
    );
  }
}
