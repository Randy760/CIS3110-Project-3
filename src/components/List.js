import React from "react";
import Item from "./Item";

function List({items, setItems}) {
    return(
        <div className="todo-container">
          <ul className="todo-list">
            {items.map((item) => (
                <Item text={item.text} items={items} setItems={setItems}/>
            ))}
          </ul>
        </div>
        );
}
export default List;