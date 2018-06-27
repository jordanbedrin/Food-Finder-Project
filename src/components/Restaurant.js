import React, {Component} from 'react';

class Restaurant extends Component {


  render() {
    console.log(this.props.data);
    return (
      <div className = 'resButtonDiv'>
        {
          this.props.data.map( (item) => {
            return (<button type="button" class="buttonz" onClick={() => this.props.changeRes(item.name)}>{item.name}</button>)
          })

        }
      </div>
    )
  }
}

export default Restaurant;
