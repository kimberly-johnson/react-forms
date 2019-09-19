import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    this.props.remove(this.props.id);
  }

  render(){
    const { activity } = this.props;
    return(
      <div>
      <div className="Todo" id={this.props.id}> {activity} </div>
      <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

export default Todo;