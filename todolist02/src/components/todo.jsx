import { useState } from "react";
import style from "../style/todo.module.scss";


export const Todo = () => {

    const [todoArray, setToDoArray] = useState([''])

//   const [todoArray, setTodoArray] = useState([]);

  const [text, setText] = useState('')


  //New const 
  const [inputText, setInputText] = useState("");

  const addToArray = () => {
        let clone = [...todoArray]
        clone.push(text)
        console.log(clone);
        setToDoArray(clone)
    }

//   const deleteArray = () => {
//     let delete = [...inputText];
//     delete.trim ("");
//     setInputText(delete);
//   }


  return (
    <section className={style.todoStyle}>

      <h3>Add text</h3>
      {/* <input placeholder={"sæt her"} value={text} onChange={(event) => inputText(event.target.value)} /> */}
      <input placeholder={"Sæt ind her"} value={text} onChange={(event) => setText(event.target.value)} />
      <div>
        {todoArray && todoArray.map((item, index) => <p key={index}>{item}</p>)}
        <button onClick={addToArray}>Tilføj</button>

      </div>

    </section>
  );
};