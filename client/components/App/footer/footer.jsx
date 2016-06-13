import React from 'react';
// import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="footer__head">
              <div className="head__transperent">
                  <div className="container">
                      <p>ПОЧЕМУ МЫ ? </p>
                      <div className="row">
                          <div className="col-lg-6">
                              <ul>
                                  <li>Возможность доставки</li>
                                  <li>Удобное расположение  фермы</li>
                                  <li>Возможность демонстрации и выбора животного</li>
                                  <li>Услуги по забою и разделке мяса</li>
                                  <li>Соблюдение санитарных норм и требований</li>
                              </ul>
                          </div>
                          <div className="col-lg-6">
                              <ul>
                                  <li>Животные содержатся на натуральном корме </li>
                                  <li>Выпас скота на пастбищах </li>
                                  <li>Породы от лучших производителей Европы и России</li>
                                  <li>Всегда свежая молочная продукция</li>
                                  <li>Работаем с кафе и ресторанами, удобная форма оплаты</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="head__opacity">
                  <div className="container">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga aliquid ad, ipsa eveniet, molestiae suscipit, officia dolorum, velit facere animi ipsum aspernatur laboriosam deserunt totam. Iusto temporibus officiis voluptas.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quia accusamus molestiae id alias labore doloremque minus illo illum. Minima molestiae dolor aperiam veritatis esse sint perferendis saepe aliquam!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga aliquid ad, ipsa eveniet, molestiae suscipit, officia dolorum, velit facere animi ipsum aspernatur laboriosam deserunt totam. Iusto temporibus officiis voluptas.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quia accusamus molestiae id alias labore doloremque minus illo illum. Minima molestiae dolor aperiam veritatis esse sint perferendis saepe aliquam!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga aliquid ad, ipsa eveniet, molestiae suscipit, officia dolorum, velit facere animi ipsum aspernatur laboriosam deserunt totam. Iusto temporibus officiis voluptas.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quia accusamus molestiae id alias labore doloremque minus illo illum. Minima molestiae dolor aperiam veritatis esse sint perferendis saepe aliquam!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga aliquid ad, ipsa eveniet, molestiae suscipit, officia dolorum, velit facere animi ipsum aspernatur laboriosam deserunt totam. Iusto temporibus officiis voluptas.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quia accusamus molestiae id alias labore doloremque minus illo illum. Minima molestiae dolor aperiam veritatis esse sint perferendis saepe aliquam!</p>
                  </div>
              </div>
          </div>
          <div className="footer__bottom">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4">
                          <ul>
                              <li><i className="fa fa-map-marker" aria-hidden="true"></i>Республика Казахстан <br/>
                              г. Алматы, ул Абылай хана 3 <br/>
                              ТЦ Алтын Тараз, офис 37 </li>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i>Республика Казахстан  <br/>
                              г. Алматы, ул  <br/>
                            Джандосова 5 <br/>
                              (уг. ул. Яссауи)  </li>
                          </ul>
                      </div>
                      <div className="col-lg-4">
                          <ul>
                              <li><i className="fa fa-user-md" aria-hidden="true"></i>
                              О проекте</li>
                              <li>Блог</li>
                              <li><i className="fa fa-envelope" aria-hidden="true"></i>Напишите нам</li>
                              <li><i className="fa fa-phone" aria-hidden="true"></i>Контакты </li>
                          </ul>
                      </div>
                      <div className="col-lg-4">
                          <ul>
                              <li><i className="fa fa-facebook-square" aria-hidden="true"></i>Facebook</li>
                              <li><i className="fa fa-twitter-square" aria-hidden="true"></i>Tweeter</li>
                              <li><i className="fa fa-vk" aria-hidden="true"></i>Вконтакте</li>
                              <li><i className="fa fa-google-plus-square" aria-hidden="true"></i>Google +</li>
                          </ul>
                      </div>
                  </div>
                   <p>Copyright Hotmart 2016 </p>
              </div>
          </div>
      </footer>
    );
  }
}
