import { useState } from 'react'
import Todo from "./components/Todo"
import './App.css'
import { Provider } from 'react-redux';
import {store} from "./app/store"

function App() {
 return(
  <>
  {/* provider will provide the store from the nested components */}
  {/* provider comp makes the redux store available to ay nested component that need to access the reudx store */}
  <Provider store = {store}>

  <Todo></Todo>
  </Provider> 

  </>
 )
}

export default App
