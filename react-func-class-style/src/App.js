import React , { Component, useState, useEffect } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}
let funcStyle= 'color:blue';
let funcId = 0;
function FuncComp(props) {
  let numberState = useState(props.initNumber);
  // numberState[0] -> useState()함수의 인자값으로 들어온 값 
  let number = numberState[0];
  // numberState[1] -> 값을 바꿀수 있는 함수 
  let setNumber = numberState[1];

  // let dateState = useState(new Date().toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
  // 아래 코드로 변환 가능
  let [_date, setDate] = useState(new Date().toString());
  
  useEffect(function() {
    // componentDidMount, componentDidUpdate 와 똑같은 역할
    console.log('%cfunc => useEffect (componentDidMount & ComponentDidUpdate) A' +(funcId++), funcStyle);
    document.title = number + ' : ' + _date;
  });

  useEffect(function() {
    // componentDidMount, componentDidUpdate 와 똑같은 역할
    console.log('%cfunc => useEffect (componentDidMount & ComponentDidUpdate) B' +(funcId++), funcStyle);
    document.title = number + ' : ' + _date;
  });
  
  console.log('%cfunc => render ' + (funcId++), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number} </p>
      <p>date : {_date} </p>
      <input type="button" value="random" onClick={
          function() {
            setNumber(Math.random()); 
          }
      }></input>
      <input type="button" value="date" onClick={
          function() {
            setDate(new Date().toString()); 
          }
      }></input>  
    </div>
  );
}
let classStyle= 'color:red';
class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }
  componentWillMount() {
    console.log('%cclasss => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclasss => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclasss => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate() {
    console.log('%cclasss => componentWillUpdate', classStyle);
  }
  componentDidUpdate() {
    console.log('%cclasss => componentDidUpdate', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({
              number:Math.random()
            })
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function() {
            this.setState({
              date: new Date().toString()
            })
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
