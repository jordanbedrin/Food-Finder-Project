import React, {Component} from 'react';

class Restaurant extends Component {


  render() {
    console.log(this.props.data);
    // const rest = this.props.data;
    //
    // const restName = rest.map(name => {
    //   console.log(name);
    // })

    return (
      <div className = ''>
        {
          this.props.data.map( (item) => {
            return <button type="button">{item.name}</button>
          })
        }
      </div>
    )
  }
}

export default Restaurant;
