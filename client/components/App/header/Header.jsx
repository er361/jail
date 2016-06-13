import React from 'react';
// import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
              <div className="header__head">
                  <div className="container">
                      <div className="head__logo">
                          <img src={require('../../../assets/img/baran.png')} alt=""/>
                          <p>Продажа скота и молока</p>
                          <p>JAILAY</p>
                      </div>
                      <nav className="head__nav">
                          <ul>
                              <li><a href="">Курбан Байрам</a></li>
                              <li><a href="">Оплата и доставка</a></li>
                              <li><a href="">Контакты</a></li>
                          </ul>
                      </nav>
                      <div className="head__contact">
                          <p>Звоните нам:</p>
                          <p><i className="fa fa-phone" aria-hidden="true"></i>8 (727) 354- 57-57</p>
                          <p><i className="fa fa-phone" aria-hidden="true"></i>8 (702) 444-47-02</p>
                      </div>
                  </div>
              </div>
              <div className="header__body">
                  <div className="container">
                      <nav className="body__nav">
                          <ul>
                              <li><a href="">КРУПНЫЙ РОГАТЫЙ СКОТ  </a></li>
                              <li><a href="">МЕЛКИЙ РОГАТЫЙ СКОТ  </a></li>
                              <li><a href="">ПТИЦА  </a></li>
                              <li><a href="">КРОЛИКИ     </a></li>
                              <li><a href="">МОЛОЧНЫЕ ПРОДУКТЫ   </a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
      </header>
    );
  }
}
