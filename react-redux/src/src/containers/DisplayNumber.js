import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';
// 첫번째 인자값
// redux의 state를 react의 props로 mapping 시켜줌
function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}
// state = {number: store.getState().number}
// subscribe( this.setState() ) 와, <DisplayNumber number = {this.state.number}의 부분과 같음

// 두번째 인자값
function mapReduxDispatchToReactProps() {
    return {}
}   
// connect() return 값이 함수, 그 함수를 다시 실행
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);


// #### react-redux를 사용 하지 않았을 떄
// import React, {Component} from 'react';
// import store from '../store';

// export default class extends Component {
//     state = {number: store.getState().number}
//     constructor(props) {
//         super(props);
//         store.subscribe(function() {
//             this.setState({number: store.getState().number });
//         }.bind(this));
//     }
//     render() {
//         // 시각적인 표현과, redux에 종속되어있는 기능을 모두 가지고 있던 컴포넌트에서
//         // redux와 관련된 기능을 빼내는 작업 -> container 컴포넌트 -> 재사용 가능한 컴포넌트로 만들어줌.
//         return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
//     }
// }