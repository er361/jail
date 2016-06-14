import React from 'react';
import Relay from 'react-relay';

class Catalog extends React.Component {
  render() {
    return (
      <section className="cattle">
      	<div className="container">
      		<div className="breadcrumbs">
                  <p className="breadcrumbs__title">КРУПНЫЙ РОГАТЫЙ СКОТ</p>
                  <ul>
                      <li><a href="">Главная</a> / </li>
                      <li><a href="">Каталог</a> / </li>
                      <li><a href="">Крупный рогатый скот</a></li>
                  </ul>
              </div>
              <div className="cattle__pagination">
              	<ul>
              		<li>
              			<a href="">Коровы</a>
              		</li>
              		<li>
              			<a href="">Быки</a>
              		</li>
              		<li>
              			<a href="">Бычки</a>
              		</li>
              		<li>
              			<a href="">Телята Молочные телки</a>
              		</li>
              		<li>
              			<a href="">Бычки Костраты</a>
              		</li>
              		<li>
              			<a href="">Первотелки</a>
              		</li>
              	</ul>
              </div>
              <div className="category__item">
              	<div className="row">
              		<div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
              	</div>
              </div>
              <div className="category__item">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="item__wrapper">
                              <div className="item__img">
                                  <img src="img/karova.png" alt=""/>
                              </div>
                              <div className="item__desc">
                                  <p>АРТ. - 0006987</p>
                                  <p>КОРОВА ДОЙНАЯ</p>
                                  <p>Порода - СИМЕНТАЛЬСКАЯ</p>
                                  <p>100 000</p>
                              </div>
                              <input type="submit" value="Заказать"/>
                          </div>
                      </div>
                  </div>
              </div>
      	</div>
      </section>
    );
  }
}

export default Relay.createContainer( Catalog, {
  fragments : {
    viewer: () => Relay.QL `
    fragment on Viewer {
      id
    }`
  }
})
