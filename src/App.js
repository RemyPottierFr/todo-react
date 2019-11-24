import React, { useState, useEffect } from 'react';
import './App.css';
import Item from './components/Item'

export default function App () {
  const [list, changeList] = useState([]);
  const [valueInput, changeValueInput] = useState("");

  useEffect (()=>{
    if(localStorage.getItem('list')){
      changeList(localStorage.getItem('list').split(","))
    }
  },[])

  let addList = (e,valueInput) => {
    e.preventDefault()
    const newValue= [...list,valueInput] ;
    changeList(newValue)
    changeValueInput("")
    localStorage.setItem('list',newValue.join(','))
  }

  let deleteItem = (e,id) => {
    e.preventDefault()
    const array = list
    array.splice(id,1)
    changeList([...array])
    localStorage.setItem('list',array.join(','))
  }

  let changeItem = (e,index,newValue) =>{
    e.preventDefault()
    const array = list 
    array.splice(index,1,newValue)
    changeList([...array])
    localStorage.setItem("list",array.join(','))
  }

  return (
    <div className="App">
      <p className="App__title">Todo React</p>
      <form className="App__form">
        <input className="App__form-input" name="input" type="text" value={valueInput} onChange={e => changeValueInput(e.target.value)}/>
        <button className="App__form-button" onClick={e => addList(e,valueInput)}><i className="fas fa-location-arrow"></i></button>
      </form>
      {
        list !== [""] ?
        list.map((content,index) => {
          return <Item key={content} id={index} content={content} deleteItem={deleteItem} changeItem={changeItem}/>
    }):<p>pop</p>
  }
    </div>
  );
}

