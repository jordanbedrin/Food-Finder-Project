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
      <div className = 'resButtonDiv'>
        {
          this.props.data.map( (item) => {
            return (<button type="button" class="buttonz" >{item.name}</button>)
          })
        }
        {
          // this.props.data.map( (item) => {
          //   return (<li>{item.lat}</li>)
          // })
        }
      </div>
    )
  }
}

export default Restaurant;
