// this is the parent component of addField (input field + add button) Component and toDoItem (display and delete)
import React from "react";

function AddField(props) {
  var input = React.createRef();

  return (
    <div className="App">
      <input type="text" placeholder="add new item" ref={input} />
      <button onClick={() => props.myAddEvent(input.current.value)}>Add</button>
      {/* Daca era clasa trebuia this.props si fara props in parametrii functiei */}
    </div>
  );
}

export default AddField;
