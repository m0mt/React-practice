import React, {Component} from 'react';

class Nav extends Component {
  
  render() {
    let listTag = [];
    for (let data of this.props.list) {
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

class NowLoading extends Component {
  render() {
    return <div>Now Loading......</div>
  }
}

class App extends Component {
  state = {
    article: {
      item: {title:'Welcome', desc:'Hello, React & Ajax'},
      isLoading: false
    },
    list: {
      items: [],
      isLoading: false
    }
  }
  componentDidMount() {
    let newList = Object.assign({}, this.state.list, {isLoading: true});
    this.setState({list: newList});
    fetch('list.json')
      .then(function(result) {
        return result.json();
      }) // 가져온 데이터를 어떤 데이터 타입으로 제어 할것인지를 첫번째 then에 적어줌.
      .then(function(json){ // 
        console.log(json);
        this.setState({list:
          {
            items: json,
            isLoading: false
          }
        });
      }.bind(this));
  }
  render() {
    let NavTag = null;
    if(this.state.list.isLoading) {
      NavTag = <NowLoading></NowLoading>
    } else {
      NavTag = <Nav list={this.state.list.items} onClick={function(id){
        let newArticle = Object.assign({}, this.state.article, {isLoading: true});
        this.setState({article: newArticle});
        fetch(id + '.json')
          .then(function(result) {
            return result.json();
          })
          .then(function(json) {
            console.log(json);
            this.setState({  
              article: {
                item: {
                  title: json.title,
                  desc: json.desc
                },
                isLoading: false
              }
            })
          }.bind(this));
      }.bind(this)}></Nav>
    }

    let ArticleTag = null;
    if(this.state.article.isLoading) {
      ArticleTag = <NowLoading></NowLoading>
    } else {
      ArticleTag = <Article title={this.state.article.item.title} desc={this.state.article.item.desc}></Article>;
    }
    return (
      <div className="App">
        <h1>WEB</h1>
        {NavTag}
        {ArticleTag}
      </div>
    );
  }
}

export default App;
