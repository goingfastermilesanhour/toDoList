// this is the parent component of addField (input field + add button) Component and toDoItem (display and delete)
import React from "react";

function DisplayItem(props) {
  console.log("here", props);
  return (
    <div className="App">
      {props.itemToDisplay.label}

      <button>X</button>
    </div>
  );
}

export default DisplayItem;
