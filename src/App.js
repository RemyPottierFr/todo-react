import React, {useState} from 'react';
import './App.css';
import Item from './components/Item'

export default function App () {
  const [list=[], changeList] = useState()
  const [valueInput = "", changeValueInput] = useState()

  let renderList = () => {
    return list.map((content,index) => {
      return <Item id={index} content={content} deleteItem={deleteItem} changeItem={changeItem}/>
    })
  }

  let addList = (e,valueInput) => {
    e.preventDefault()
    changeList([...list,valueInput])
    changeValueInput("")
  }

  let deleteItem = (e) => {
    e.preventDefault()
    const array = list
    console.log("target id",e.target)
    array.splice(e.target.id,1)
    console.log("array",array)
    changeList([...array])
  }

  let changeItem = (e,index,newValue) =>{
    e.preventDefault()
    const array = list 
    array.splice(index,1,newValue)
    changeList([...array])
  }

  return (
    <div className="App">
      <p className="App__title">Todo React</p>
      <form className="App__form">
        <input className="App__form-input" name="input" type="text" value={valueInput} onChange={e => changeValueInput(e.target.value)}/>
        <button className="App__form-button" onClick={e => addList(e,valueInput)}><i className="fas fa-location-arrow"></i></button>
      </form>
      {renderList()}
    </div>
  );
}

