import React from "react";


const Item = ({text,item, items, setItems}) => {
    
    return(
        <div className="Item">
            <li className="item">{text}</li>
            <button className="fas fa-trash"></button>
        </div>
        );
};
export default Item;