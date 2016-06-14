import React from 'react';
import Relay from 'react-relay';

class ProdCard extends React.Component {
  render() {
    return (
      <section className="product">
          <div className="container">
              <div className="breadcrumbs">
                  <p className="breadcrumbs__title">КОРОВА ДОЙНАЯ (H1)</p>
                  <ul>
                      <li><a href="">Главная</a> / </li>
                      <li><a href="">Каталог</a> / </li>
                      <li><a href="">Крупный рогатый скот</a></li>
                  </ul>
              </div>
              <div className="row">
                  <div className="col-lg-4">
                      <div className="product__item">
                          <div className="item__img">
                              <img src={require('../../../assets/img/karova.png')} alt=""/>
                          </div>
                          <div className="item__count">
                              <div className="item__light">
                                  <img src="" alt=""/>
                              </div>
                              <div className="item__light">
                                  <img src="" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8 product__desc">
                      <p>Арт-N  <span>156879483</span></p>
                      <p>Порода: Коричневый мясной травоед (H2)</p>
                      <p>Коро́ва — самка домашнего быка (лат. Bos taurus taurus), одомашненного подвида дикого быка <br/>
                      (Bos taurus), парнокопытного жвачного животного семейства полорогих (Bovidae). Разводится для <br/>
                      получения мяса, молока и кожи , Самцы вида называются быками, молодняк — телятами, <br/>
                      кастрированные самцы — волами. <br/>
                      Молодых (до первой стельности) самок называют тёлками. <br/>
                      Не́тель — это продуктивно осеменённая (стельная) тёлка. Беременность длится 9 месяцев. <br/>
                      Различают мясные, мясо-молочные и молочные породы коров. У вида 30 пар хромосом.</p>
                      <p><span>Средний вес:</span> 198 кг</p>
                      <p><span>Возрас:</span> 2 года</p>
                      <p><span>Рост</span> 18 см</p>
                      <p>ЦЕНА: <span>180 000</span></p>
                      <input type="submit" value="Заказать"/>
                      <p>Связатся с менеджером по продаже КРС можно по телефонам <span>8 (747) 658-42-19</span></p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default Relay.createContainer(ProdCard,{
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      id
    }`
  }
})
