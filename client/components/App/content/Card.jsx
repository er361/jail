import React from 'react';

export default class Card extends React.Component {
  render() {
    const { props: { children: children } } = this
    // console.log(this.props);
    return (
      <div className="ui card">
        <div className="image">
          <img src={require(`../../../assets/uploads/${children.img}`)} alt=""/>
        </div>
        <div className="content">
          <a href="" className="header">{children.title}</a>
        </div>
      </div>
    );
  }
}
