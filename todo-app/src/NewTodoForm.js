import React from 'react';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activity: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({ activity: ""});
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="activity">Todo:</label>
        <input name="activity" value={this.state.activity}
          onChange={this.handleChange} />
        <button>Add!</button>
      </form>
    );
  }
}

export default NewTodoForm;