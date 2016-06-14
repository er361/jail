import React from 'react';
import { IndexRoute, Route, Redirect, Router } from 'react-router';

//queries
import ViewerQuery from '../queries/ViewerQuery';


//root component (wrapper)
import rootApp from '../components/rootApp.js';

//site containers
import AppContainer from '../components/App/FronApp/App.js';
import ProdCard from '../components/App/card/ProdCard.jsx';
import Content from '../components/App/content/Content.jsx';
import Catalog from '../components/App/catalog/Catalog.jsx';

//admin components
import AdminComponent from '../components/Admin/App/AppComponent.js';
import CategoryComponent from '../components/Admin/Category/CategoryComponent.js';
import Mebel from '../components/Admin/Mebel/Mebel.js'

//admin containers
import AdminContainer from '../components/Admin/App/AppContainer.js';
import CategoryContainer from '../components/Admin/Category/CategoryContainer.js';
import SubCategoryContainer from '../components/Admin/SubCategory/App.jsx';

export default (
    <Route path='/' component={rootApp}>
      <IndexRoute component={AppContainer} queries={ViewerQuery} />
      <Route path='admin' component={AdminContainer} queries={ViewerQuery} >
        <IndexRoute component={Mebel} queries={ViewerQuery} />
      </Route>
      <Route component={AdminContainer} queries={ViewerQuery}>
        <Route path='category' component={CategoryContainer} queries={ViewerQuery} />
        <Route path='subcategory' component={SubCategoryContainer} queries={ViewerQuery} />
      </Route>
      <Route component={AppContainer} queries={ViewerQuery}>
        <Route path='card' component={ProdCard} queries={ViewerQuery} />
        <Route path='catalog' component={Catalog} queries={ViewerQuery} />
      </Route>
      <Redirect from='*' to='/' />
    </Route>
);
