import './App.css'
import Header from './components/Header'
// import Content from './components/Content'
// import Card from './components/Card'
import TextView from './components/TextView'
import { InputBox } from './components/InputBox'
import Footer from './components/Footer'
import ClassComponent from './components/ClassComponent'
import { use, useState } from 'react'

function App() {

  let [text, setText] = useState("")

  return (
    <>
      <Header></Header>
      {/* <Content></Content> */}
      {/* <Card username="Rohit" onButtonClick="click here"></Card> */}
      {/* <Card username="Virat" onButtonClick="click here"></Card> */}
      <TextView inputval={text}></TextView>
      <InputBox text={text} setText={setText} ></InputBox>
      <ClassComponent></ClassComponent>
      <Footer></Footer>
    </>
  )
}

export default App
