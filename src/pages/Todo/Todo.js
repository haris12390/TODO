import React, { useState } from 'react'
import "./todo.css"

const Todo = () => {

  const [id, setId] = useState("")
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState("")
  const [lists, setLists] = useState([
    {
      id: 342342342,
      text: "Walk the dogs"
    }
    , {
      id: 129779274,
      text: "Buy Groceries"
    }
    , {
      id: 26493756,
      text: "Play Cricket"
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setText("")
    setLists([...lists, { id: Date.now(), text: text }])
  }

  const deleteTodo = (id) => {
    const filteredList = lists.filter(list => list.id !== id)
    setLists(filteredList)
  }

  const editTodo = (id) => {
    setEdit(true)
    setId(id)
  }


  const onChange = (e) => {
    setText(e.target.value)
  }

  const onEditChange = (e, id) => {
    const state = [...lists]
    const obj = state.find(state => state.id === id)
    obj.text = e.target.value
    setLists(state)
  }


  return (
    <div>
      <h1>Todo</h1>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" value={text} name="name" onChange={onChange} />
        <button type="submit">Go</button>
      </form>
      <ul>
        {lists.map((list) => {
          return (
            <div className='list-box' key={list.id}>
              {
                edit && list.id === id ? <input placeholder='Edit' onChange={(e) => onEditChange(e, list.id)} />
                  :
                  <li >{list.text}</li>
              }
              &nbsp;
              {
                edit && list.id === id ?
                  <button onClick={() => setEdit(false)}>Save</button>
                  :
                  <button onClick={() => editTodo(list.id)}>Edit</button>

              }
              &nbsp;
              <button onClick={() => deleteTodo(list.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo