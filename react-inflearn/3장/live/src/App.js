import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export default function App() {
  return (
    <>
      <p>안녕</p>
      <Counter />
      {
        ReactDOM.createPortal(
          <div>
            <p>안녕하세요</p>
            <p>실전 리액트 프로그래밍 입니다.</p>
          </div>,
          document.getElementById('something'),
        )
      }
    </>
  );
  // return [<p key={1}>안녕</p>, <p key={2}>하세요</p>];
}