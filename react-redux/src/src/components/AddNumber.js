import React, {Component} from 'react'
import store from '../store';


export default class AddNumber extends Component {
    state = {size: 1}
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={function() {
                    store.dispatch({type:'INCREMENT', size: this.state.size});
                }.bind(this)}></input>
                <input type="text" value={this.state.size} onChange={function(e) {
                    this.setState({size: Number(e.target.value)})
                }.bind(this)}></input>
            </div>
        )
    }
}

// redux를 사용 하지 않았을 때
// export default class AddNumber extends Component {
//     state = {size: 1}
//     render() {
//         return (
//             <div>
//                 <h1>Add Number</h1>
//                 <input type="button" value="+" onClick={function() {
//                     // 컴포넌트가 무수히 많아질수록 onClick 처럼 안에 있는 함수를 
//                     // 무수히 많이 작성해야됨.
//                     this.props.onClick(this.state.size);
//                 }.bind(this)}></input>
//                 <input type="text" value={this.state.size} onChange={function(e) {
//                     this.setState({size: Number(e.target.value)})
//                 }.bind(this)}></input>
//             </div>
//         )
//     }
// }