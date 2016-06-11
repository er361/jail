import React from 'react';
import checkbox from '../../../assets/checkbox.png';

export default class List2 extends React.Component {
  render() {
    return (
      <div className="ui list">
        <div className="item">
          <img src={checkbox} alt="" />Животные содержаться на натуральном корме</div>
        <div className="item">
          <img src={checkbox} alt="" />Выпос скота на паздбищах</div>
        <div className="item"><img src={checkbox} alt="" />Породы от лучших производителей Европы и России</div>
        <div className="item"><img src={checkbox} alt="" />Всегда свежая молочная продукция</div>
        <div className="item">
          <img src={checkbox} alt="" /> Работаем с кафе и ресторанами, удобная форма оплаты
        </div>
      </div>
    );
  }
}
