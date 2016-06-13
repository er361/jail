import React from 'react';
import Content from '../content/Content.jsx'
import Footer from '../footer/footer.jsx';
import Header from '../header/Header.jsx';;
import Relay from 'react-relay';
import {Grid,Col,Row} from 'react-bootstrap';
import './App.scss';


class App extends React.Component {

  render() {
    const { props: { viewer: viewer } } = this
    return (
      <div>
        <Header />
        <Content viewer={viewer} />
        <Footer />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${Content.getFragment('viewer')}
    }`
  }
})
