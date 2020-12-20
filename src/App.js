import React, { Component } from 'react';
import TOC from "./components/TOC"
// import Subject from "./components/Subject"
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
      mode:'welcome',
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
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <header>
            <h1><a href="/" onClick={(e) => {
              // alert('hi');
              console.log(e);
              e.preventDefault();
            }}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>

      </div>
    );
  }
}





export default App;
