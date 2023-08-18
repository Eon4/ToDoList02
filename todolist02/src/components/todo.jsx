import { useState } from "react";
import style from "../style/todo.module.scss";

export const Todo = () => {
  const [todoArray, setTodoArray] = useState([]);

  //New const 
  const [inputText, setInputText] = useState("");

  const addToArray = () => {
    let clone = [...todoArray];
    clone.push("new item");
    setTodoArray(clone);
  };

//   const deleteArray = () => {
//     let delete = [...inputText];
//     delete.trim ("");
//     setInputText(delete);
//   }


  return (
    <section className={style.todoStyle}>

      <h3>Add text</h3>
      <input type="text" />
      <button onClick={addToArray}>Add the Text</button>
      <div>
        {todoArray && todoArray.map((item, index) => <p key={index}>{item}</p>)}
      </div>

    </section>
  );
};