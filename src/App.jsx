
import './App.css';
import Team from './Team';
import Users from './User';
import Friends from './Frends';


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Device name = "laptop" prise = "15000"></Device>
      <Device name = "Mobile" prise = "7000"></Device>
      <Device name = "Watch" prise = "3000"></Device>
      <Device name = "Hadephone" prise = "5000"></Device>
      <Student></Student>
      <Student></Student>
      <Devlpoer></Devlpoer>
    </>
  )
}

function Device (props){
  return(
    <h2>This device: {props.name} prise: {props.prise}</h2>
  )
}

function Student (){
  const name = "Amin";
  const id = 455465;
  const age = 24;
  return (
    <div className='student'>
      <h1>Name: {name} </h1>
      <h1>Id: {id} </h1>
      <h1>age: {age} </h1>
    </div>
  )
}

function Devlpoer (){
  const developerStyle = { 
    border: '2px solid red',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
  };
  const name = 'Amin sk';
  const age = '24';
  const title = 'sk'
  const desh = 'india'
  return (
    <div style = {developerStyle}>
    <h1>name: {name} </h1>
    <p>Age: {age}</p>
    <p>Title: {title} </p>
    <p>Contury: {desh} </p>
    
    </div>
  )
}


export default App
