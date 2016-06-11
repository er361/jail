import React from 'react';
import Relay from 'react-relay';

//import AddSubCategory from '../../../mutations/admin/subCategory/AddSubCategory.js';

export default class Create extends React.Component {
  state = {
    title: ''
  }
  componentDidMount() {
    $('select.dropdown')
        .dropdown();
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  handleSubmitForm = (e) => {
    e.preventDefault();
    let $form = $('.ui.form'),
    allFields = $form.form('get values');

    // console.log(this.props);
    this.props.onSave(allFields);
    $form.form('clear');
  }
  render() {
    const { props: { categories: categories } } = this
    // console.log(this.props);
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmitForm} className='ui form'>
            <div className="field">
              <label>Название подкатегории</label>
                <input
                  name='title'
                  ref='categoryAdd'
                  type="text"
                  onKeyDown={this.handleKeyDown}
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Название под категории"/>
            </div>
            <div className="field">
              <label>Категория</label>
              <select  name="categoryId"  className="ui search dropdown">
                <option value="">Выберите категорию</option>
                {categories.edges.map(edge =>
                  <option key={edge.node.id} value={edge.node.id}>{edge.node.title}</option>
                )}
              </select>
            </div>
          <button type='submit' className="ui primary button">Создать</button>
        </form>
      </div>
    );
  }
}

export default Relay.createContainer(Create, {
  fragments: {
    categories: () => Relay.QL`
    fragment on CategoryConnection {
      edges{
        node{
          id
          title
        }
      }
    }`
  }
})
