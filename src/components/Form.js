import React from "react";

function Form ({setInputText, inputText, items, setItems}) {
    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };
    const submitItem = (e) => {
      e.preventDefault();
      setItems([
        ...items,
        {text: inputText, completed:false, }
        ])
    };
    return(
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitItem} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}
export default Form;