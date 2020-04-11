// this is the parent component of addField (input field + add button) Component and toDoItem (display and delete)
import React from "react";
import AddField from "./addFieldComponent";
import DisplayItem from "./DisplayItemComponent";
//cand ai state intr-o componenta, (ex: empty array gets filled and updated) toate manipularile pe datele respective se fac in acea componenta

class ToDoWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        { label: "car wash", id: 1 },
        { label: "laundry", id: 2 },
      ],
    };
  }

  //arrow function to add the written items to the array.
  addItemToList = (inputValueFromChild) => {
    //cum putem trimite o functie la un copil pe care sa o apeleze copilul, PRIN PROPS WA:
    // in addField unde e copilul,
    var newArray = [...this.state.toDoItems];
    newArray.push({
      label: inputValueFromChild,
      id: this.state.toDoItems.length + 1,
    });
    this.setState({ toDoItems: [...newArray] });
    console.log(this.state.toDoItems);
  };

  render() {
    return (
      <div className="App">
        <AddField myAddEvent={this.addItemToList} />
        {this.state.toDoItems.map((existingItem) => (
          <DisplayItem key={existingItem.id} itemToDisplay={existingItem} />
        ))}
      </div>
    );
  }
}

export default ToDoWidget;
