import React, { useState } from 'react';
import './Item.css'

export default function App (props){
  const [lineThrough = false, changeLineThrough] = useState();
  const [valueInput = props.content, changeValueInput] = useState();
  const [edition = false, editionStatus] = useState();
  let toggleLineThrough = () => {
    changeLineThrough(!lineThrough)
  };
  return(
    <div className="Item">
      <div className={lineThrough ? "Item__checkbox--active":"Item__checkbox--inactive"} onClick={()=>toggleLineThrough()}></div>
      <form className="Item__form">
        <input className={lineThrough ? "Item__form-input line": "Item__form-input"} name="input" type="text" value={valueInput} onChange={e => {
          changeValueInput(e.target.value)
          editionStatus(true)
          window.focus()
          }}
        />
        <button className={edition ? "Item__form-button--active":"Item__form-button--hidden"} 
          onClick={e => {
            props.changeItem(e,props.id,valueInput)
            editionStatus(false)
          }}>
          <i className="far fa-check-circle"></i>
        </button>
      </form>
      <button className="Item__button">
        <i className="fas fa-times" id={props.id} onClick={(e) => {props.deleteItem(e)}}></i>
      </button>
    </div>
  );
}