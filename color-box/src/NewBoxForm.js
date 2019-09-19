import React from 'react';


class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "", width: 0, height: 0 }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ backgroundColor: "", height: 0, width: 0 });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,

    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="backgroundColor">Background color:</label>
        <input name="backgroundColor" value={this.state.backgroundColor}
          onChange={this.handleChange} />
        <label for="height">Height:</label>
        <input name="height" value={this.state.height}
          onChange={this.handleChange} />
        <label for="width">Width:</label>
        <input name="width" value={this.state.width}
          onChange={this.handleChange} />
        <button>Add box!</button>
      </form>
    );
  }

}

export default NewBoxForm;