import { useRef, useState, useEffect} from "react";

import ListItem from "./components/list-item/list-item";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef('');


  const handleClick = () => {
    if (inputRef.current.value) {
      setItems((prev) => [...prev, inputRef.current.value]);
    }
  }

  useEffect(() => {
    inputRef.current.value = '';
 
  }, [items]);

  return (
    <div className="App">
      <div className="container">
        <input ref={inputRef} className="input" type="text" name="name" placeholder="Введите текст" required/>
        <button onClick={handleClick} className="button" type="submit">Добавить</button>    
      </div>
   
      <ul className="list">
        {items.map((item,i) => (<ListItem key={i+item} setItems={setItems} id={i}>{item}</ListItem>))}
      </ul>
    </div>
  );
}

export default App;
