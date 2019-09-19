import React from 'react';
import Box from './Box'
import NewBoxForm from "./NewBoxForm"
import uuid from 'uuid/v4'

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] }
    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  remove(id) {
    this.setState(st => ({
      boxes: st.boxes.filter(b => b.id !== id)
    }));
  }

  render() {
    let boxes = this.state.boxes.map(box => (
      <Box key={box.id} id={box.id} backgroundColor={box.backgroundColor}
        width={box.width} height={box.height} remove={this.remove} />
    ));

    return (
      <div>
        {boxes}
        <NewBoxForm addBox={this.addBox} />
      </div>
    )
  }
}


export default BoxList;