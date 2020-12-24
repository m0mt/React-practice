import React , { Component, useState, useEffect } from 'react'
import './App.css';

function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setclassShow] = useState(true);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function() {
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove comp" onClick={function() {
        setclassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null }
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null }
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
    console.log('%cfunc => useEffect number (componentDidMount) ' +(funcId++), funcStyle);
    return function() {
      console.log('%cfunc => useEffect return (componentDidMount) ' +(funcId++), funcStyle);
    }
  }, []); // 두번째 인자값에 빈 인자값이면 컴포넌트가 생성될 때 한번만 실행한다 (componentDidMount의 역할)
  
  // 변화한 값만 render() 시키기 때문에 손쉽게 성능향상 가능
  // side effect
  useEffect(function() {
    // componentDidMount, componentDidUpdate 와 똑같은 역할
    console.log('%cfunc => useEffect number (componentDidMount & ComponentDidUpdate) A' +(funcId++), funcStyle);
    document.title = number;
    // return 함수를 실행하면 cleanup , useEffect를 다시 실행함.??
    return function() {
      console.log('%cfunc => useEffect return (componentDidMount & ComponentDidUpdate) ' +(funcId++), funcStyle);
    }
  }, [number]);
  useEffect(function() {
    // componentDidMount, componentDidUpdate 와 똑같은 역할
    console.log('%cfunc => useEffect date (componentDidMount & ComponentDidUpdate) A' +(funcId++), funcStyle);
    document.title = _date;
    // return 함수를 실행하면 cleanup , useEffect를 다시 실행함.??
    return function() {
      console.log('%cfunc => useEffect return (componentDidMount & ComponentDidUpdate) ' +(funcId++), funcStyle);
    }
  }, [_date]);

  // useEffect(function() {
  //   // componentDidMount, componentDidUpdate 와 똑같은 역할
  //   console.log('%cfunc => useEffect (componentDidMount & ComponentDidUpdate) B' +(funcId++), funcStyle);
  //   document.title = number + ' : ' + _date;
  // });
  
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
  componentWillUnmount() {
    console.log('%cclasss => componentWillUnmount', classStyle);
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
