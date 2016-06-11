import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header class="header">
              <div class="header__head">
                  <div class="container">
                      <div class="head__logo">
                          <img src="assets/baran.png" alt=""/>
                          <p>Продажа скота и молока</p>
                          <p>JAILAY</p>
                      </div>
                      <nav class="head__nav">
                          <ul>
                              <li><a href="">Курбан Байрам</a></li>
                              <li><a href="">Оплата и доставка</a></li>
                              <li><a href="">Контакты</a></li>
                          </ul>
                      </nav>
                      <div class="head__contact">
                          <p>Звоните нам:</p>
                          <p><i class="fa fa-phone" aria-hidden="true"></i>8 (727) 354- 57-57</p>
                          <p><i class="fa fa-phone" aria-hidden="true"></i>8 (702) 444-47-02</p>
                      </div>
                  </div>
              </div>
              <div class="header__body">
                  <div class="container">
                      <nav class="body__nav">
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
