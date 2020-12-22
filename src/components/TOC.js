import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log('===> TOC render shouldComponentUPdate'
        ,newProps.data
        ,this.props.data
        );
        
        // 1. render() 이전에 shouldComponentUpdate() 실행됨.
        // 2. Update() retrun 값이 true면 render가 호출되고
        //                         false면 render 호출되지 않음
        // 3. shouldComponentUpdate()는 이전 값과 새로운 값에 접근 가능함.
        if(this.props.data === newProps.data){
            return false;
        }
        return true; // => false 로 바꿀경우
                     // 클릭시 render() 실행 x
    }
    render() {
        console.log('TOC render');
      let data = this.props.data;
      const lists = [];
      for (let item of data) {
            lists.push(
                <li key={item.id}>
                    <a 
                        href={"/content" + item.id}
                        data-id={item.id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                        >{item.title}</a>
                </li>
            )
      }
      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      )
    }
}

export default TOC;