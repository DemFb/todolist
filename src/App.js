import React, {useEffect, useState} from "react";
import { useQuery, useMutation } from '@apollo/client';
import LOAD_TODOS from './GraphQL/Queries';
import UDPDATE_DONE from './GraphQL/Mutations';
import styled from '@emotion/styled'

const StyledContainer = styled.div `
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`
const StyledH1 = styled.h1 `
justify-content: center;
  margin: 4rem 0;
  display: flex;
`
const StyledMenuButtonSection = styled.div `
 display: flex;
 flex-flow: row wrap;
`

const StyledMenuButton = styled.button`
  margin: 0 0.5rem 2rem 0.5rem;
  font-size: 17px;
`

const StyledDiv = styled.div `   
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledCardSection = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
`

const StyledCards = styled.div `
  border: 0.5px solid black;
  border-radius: 1rem;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
  width: 260px;
  height:210px;
  margin: 1rem
`

function GetTodos(){
  const {error, loading, data} = useQuery(LOAD_TODOS)
  const [updateTodo] = useMutation(UDPDATE_DONE)  

  const [todos, setTodos] = useState([]);
  const [todoType, setTodoType] = useState([]);
  
  useEffect (()  => {

      if(data){
        setTodos(data.getTodoList) 
        setTodoType(todos)
      }   
      console.log(data, loading, error)

      if(loading){return <p> loading... </p>}  

      if(error) {<p> Error fetching data...</p>}  

  }, [])


  const extractType = () => {
    const allTypes = todoType.map(diffTypes => {
       return diffTypes.type
    })
    .flat();
    return [...new Set(allTypes)]
  };

  const types = extractType(data)
  console.log(types)

  useEffect(() => {
    console.log("current value changed");
  }, []);


  async function handleFilterType({filter, orderBy}) {
    const variables = {
      filter:{types:{}},
      orderBy: {Ordering}
    }
    await data({variables})
  }


  async function handleChangeDone({id, isDone}) {
    const variables = {
      id:id,
      isDone: !isDone
    }
    await updateTodo({variables})
  }


  return (
    <StyledDiv>
     <StyledMenuButtonSection> {
       types.map(val => (
         <StyledMenuButton type="button"  key={val} value={val} onClick={() => console.log(val)}> 
           {val}
         </StyledMenuButton>
       ))}
     </StyledMenuButtonSection>
     <StyledCardSection>
       {
         data.getTodoList.map(todo => (
           <StyledCards key={todo.id}> 
             <span> {todo.title} </span>
             <span> {todo.text} </span>
             <span> {todo.createdAt} </span>
             <span> {todo.type} </span>
             <span> {todo.isDone} </span>
             <button type="checkbox" onClick={() => handleChangeDone(todo)}>Done</button>
           </StyledCards>
         ))
       } 

     </StyledCardSection>
   </StyledDiv>
    
  )
}

function App() {
  return (
    <StyledContainer>
      <StyledH1>Todo List</StyledH1>
      <div id="cards-section">
        <GetTodos/> 
      </div>
    </StyledContainer>
  )
}


export default App;
