import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom';
// 어떤 path 로 들어오건 간에 route 페이지로 들어오게 할수 있다면 -> BrowserRouter
//                                                    아니라면 -> HashRouter
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home....
    </div>
  )
}

let contents = [
  {id:1, title: 'HTML', desc: 'HTML is ....'},
  {id:2, title: 'JavaScript', desc: 'JavaScript is ....'},
  {id:3, title: 'React', desc: 'React is ....'}
]

function Topic() {
  // ### useParams ### -> /topics/:topic_id 식으로 설정된 topic_id 부분의 값을 받아올수 있음.
  let params = Number(useParams().topic_id);
  let selected_topic = contents.find((content) => content.id === params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  );
}

function Topics() {
  let list = [];
  for (let item of contents) {
    list.push(<li key={item.id}><NavLink to ={"/topics/" + item.id}>{item.title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li><NavLink to ="/topics/1">HTML</NavLink></li>
        <li><NavLink to ="/topics/2">JavaScript</NavLink></li>
        <li><NavLink to ="/topics/3">React</NavLink></li> */}
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">
          HTML is ...
        </Route>
        <Route path="/topics/2">
          JavaScript is ...
        </Route>
        <Route path="/topics/3">
          React is ...
        </Route>
      </Switch> */}
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        {/*  ### Link ### -> 페이지의 reload 없이 페이지를 처리함. a태그 대체 */}
        {/* <li><Link to="/">Home</Link></li> */}
        {/* <li><Link to="/topics">Topics</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
        {/* ### NavLink ### -> 사용자가 위치하고 있는곳이 어디인지를 직관적으로 나타낼수 있음 */}
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      {/* ### Switch ### -> 발견되는 첫번째 컴포넌트만 출력 하게 됨. (아래의 경우, Home 만 출력 됨.) */}
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        {/* 사용자가 모르는 주소로 들어갔을 시 */}
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
