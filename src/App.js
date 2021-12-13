import { useState } from "react";
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Project3 - React</h1>
      </header>
      <Form inputText={inputText} items={items} setItems={setItems} setInputText={setInputText}/>
      <List setItems={setItems} items={items} />
    </div>
  );
}

export default App;
