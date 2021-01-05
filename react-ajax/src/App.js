import React, {Component} from 'react';

class Nav extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    fetch('list.json')
      .then(function(result) {
        return result.json();
      }) // 가져온 데이터를 어떤 데이터 타입으로 제어 할것인지를 첫번째 then에 적어줌.
      .then(function(json){ // 
        this.setState({list:json});
      }.bind(this));
  }
  render() {
    let listTag = [];
    for (let data of this.state.list) {
      listTag.push(
        <li key={data.id}>
          <a href={data.id} data-id={data.id} onClick={function(e){
            e.preventDefault();
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}>{data.title}</a>
        </li>
      )
    }
    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}
class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    article: {title:'Welcome', desc:'Hello, React & Ajax'}
  }
  render() {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav onClick={function(id){
          fetch(id + '.json')
            .then(function(result) {
              return result.json();
            })
            .then(function(json) {
              console.log(json);
              this.setState({  
                article: {
                  title: json.title,
                  desc: json.desc
                }
              })
            }.bind(this));
        }.bind(this)}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
    );
  }
}

export default App;
