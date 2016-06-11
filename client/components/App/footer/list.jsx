import React from 'react';
import checkbox from '../../../assets/checkbox.png';

export default class List extends React.Component {
  render() {
    return (
      <div className="ui list">
        <div className="item">
          <img src={checkbox} alt="" /> Возможность доставки</div>
        <div className="item">
          <img src={checkbox} alt="" /> Удобное расположение фермы</div>
        <div className="item"><img src={checkbox} alt="" /> Возможность демонстрации и выбора животного</div>
        <div className="item"><img src={checkbox} alt="" /> Услуги по забою и разделки мясо</div>
        <div className="item">
          <img src={checkbox} alt="" /> Соблюдение санитарных норм и требовании
        </div>
      </div>
    );
  }
}
