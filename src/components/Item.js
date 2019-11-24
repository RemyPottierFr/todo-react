import React, { useState } from 'react';
import './Item.css'

export default function Item ({id,content,deleteItem,changeItem}){
  const [lineThrough = false, changeLineThrough] = useState();
  const [valueInput = content, changeValueInput] = useState();
  const [edition = false, editionStatus] = useState();
  let toggleLineThrough = () => {
    changeLineThrough(!lineThrough)
  };
  return(
    <div className="Item">
      <div 
        className={
          lineThrough 
            ? "Item__checkbox--active"
            :"Item__checkbox--inactive"
          } 
          onClick={
            () => toggleLineThrough()
          }
      >
        { lineThrough ? <i className="fas fa-check"></i> : "" }
      </div>
      <form className="Item__form">
        <input 
          className={ lineThrough ? "Item__form-input line" : "Item__form-input" } 
          name="input" 
          type="text" 
          value={valueInput} 
          onChange={(e) => {
            changeValueInput(e.target.value)
            editionStatus(true)
          }}
        />
        <button 
          className={ edition ? "Item__form-button--active" : "Item__form-button--hidden" } 
          onClick={e => {
            changeItem(e,id,valueInput)
            editionStatus(false)
          }}>
          <i className="far fa-check-circle"></i>
        </button>
      </form>
      <button 
        className="Item__button" 
        id={id} 
        onClick={(e) => deleteItem(e,id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}