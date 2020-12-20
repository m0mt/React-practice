import React, { Component } from 'react';

class TOC extends Component {
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