import DisplayNumber from '../components/DisplayNumber';
import React, {Component} from 'react';
import store from '../store';

export default class extends Component {
    state = {number: store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function() {
            this.setState({number: store.getState().number });
        }.bind(this));
    }
    render() {
        // 시각적인 표현과, redux에 종속되어있는 기능을 모두 가지고 있던 컴포넌트에서
        // redux와 관련된 기능을 빼내는 작업 -> container 컴포넌트 -> 재사용 가능한 컴포넌트로 만들어줌.
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}