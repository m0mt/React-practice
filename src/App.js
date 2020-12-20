import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide WEb!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'}, 
      contents: [
        {id: 1, title:'HTML', desc: 'HTML is for information'},
        {id: 2, title:'css', desc: 'CSS is for design'},
        {id: 3, title:'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      for (let data of this.state.contents) { // find 함수로 변경 가능
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    // let that = this; this를 가리키는 방식 첫번째 
    console.log('render', this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangeMode={function() {
            this.setState({mode:'welcome'})
          }.bind(this)}
          >
        </Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        {/* <header>
            <h1><a href="/" onClick={function(e) {
              // console.log('event in', this);
              // e.preventDefault();
              // 화살표 함수에서 this는 언제나 상위 스코프의 this를 가리킴(Lexical this) (이 함수에서 this는 없음)
              //                call, apply, bind메소드를 이용하여 this 변경 불가능
              // 화살표 함수를 사용시 this 객체가 무엇을 가리키는지에 대해
              // 조심히 사용할 것
              // console.log(`${this.state.mode}`);
              console.log(e);
              e.preventDefault();
              this.setState({
                mode: 'welcome'
              }.bind(this));
              //.setState() 함수를 사용함으로써
              // 안에 있는 내용 변화를 react에 알려주는 역할을 한다.
              // 그런 후 render 적용됨.
            }}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
        <TOC 
          data={this.state.contents} 
          onChangePage={function(id) {
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
        }.bind(this)}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>

      </div>
    );
  }
}





export default App;
