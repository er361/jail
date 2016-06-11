import React from 'react';
import Relay from 'react-relay';
import request from 'superagent';
import './Mebel.scss';

class MebelCreateForm extends React.Component {
  state = {
    file: '',
    imagePreviewUrl: ''
  }
  componentDidMount() {
    $('select.dropdown')
        .dropdown();
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    let $form = $('.ui.form'),
    allFields = $form.form('get values');
    //img name
    let imgName = $form.form('get value', 'img');
    let img = imgName.split("\\",3);
    allFields.img = img[2];
    // console.log(allFields);

    //upload ffile
    request
      .post('uploads')
      .attach('file', this.state.file)
      .end((err,res)=>{
        err ? console.log(err) : '';
        console.log(res);
      });

    console.log(allFields);
    this.props.onSave(allFields);
    $form.form('clear');
  }
  handleFileInput = (e) => {
    e.preventDefault();
    console.log('input');
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  render() {
    const { props: { categories: categories, subcategories: subcategories } } = this

    //file upload stuff
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className='imgPreview' src={imagePreviewUrl} />);
    } else {
      $imagePreview = '';
    }
    return (
        <form onSubmit={this.handleSubmitForm} className='ui form'>
            <div className="field">
              <label>Название продукта</label>
              <input type="text" name="title" placeholder="Название продукта" />
            </div>
            <div className="field">
              <label>Цена</label>
              <input type="text" name="price" placeholder="Цена" />
            </div>
            <div className="field">
              <label>Порода</label>
              <input type="text" name="poroda" placeholder="Порода" />
            </div>
            <div className="field">
              <label>Артикул</label>
              <input type="text" name="art" placeholder="Артикул" />
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
            <div className="field">
              <label>Под категория</label>
              <select  name="subcategoryId"  className="ui search dropdown">
                <option value="">Выберите  под категорию</option>
                {subcategories.edges.map(edge =>
                  <option key={edge.node.id} value={edge.node.id}>{edge.node.title}</option>
                )}
              </select>
            </div>
            <div className="field">
              <label htmlFor="">Изображение</label>
                  <label className='ui icon button' htmlFor="file"><i className="file icon"></i> Загрузить картинку
                    <input
                      name='img'
                      onChange={this.handleFileInput}
                      accept="image/*"
                      type="file"
                      id="file"
                      style={{display: 'none'}} />
                  </label>
                  <div className="imgPreviewDiv">
                    {$imagePreview}
                  </div>
            </div>
          <button type='submit' className="ui primary button">Создать</button>
        </form>
    );
  }
}

export default Relay.createContainer(MebelCreateForm, {
  fragments: {
    categories: () => Relay.QL`
    fragment on CategoryConnection {
      edges{
        node{
          id
          title
        }
      }
    }`,
    subcategories: () => Relay.QL `
    fragment on SubCategoryConnection {
      edges{
        node{
          id
          title
        }
      }
    }`
  }
})
