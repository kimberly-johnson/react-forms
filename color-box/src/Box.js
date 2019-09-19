import React from 'react';

class Box extends React.Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    this.props.remove(this.props.id);
  }

  render() {
    const { backgroundColor, width, height } = this.props;
    return (
    <div className="Box" id={this.props.id}
    style={{
      backgroundColor: `${backgroundColor}`,
      height: `${height}em`,
      width: `${width}em`
    }}>
      <button onClick={this.handleRemove}>X</button>
    </div>)
  }
}

export default Box;