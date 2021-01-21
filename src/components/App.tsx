import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Todo, fetchToDos, deleteToDo} from '../actions'
import {StoreState} from '../reducers'



interface AppProps {
    todos:Todo[];
    fetchToDos():any;
    deleteToDo: typeof deleteToDo;
    
}
const App = (props: AppProps) =>  {
    

   const onButtonClick = () : void => {
    props.fetchToDos()
   }
   const onTodoClick = (id:number): void => {
props.deleteToDo(id)
   }

   const renderList = (): JSX.Element[] => {
       return props.todos.map((todo:Todo)=> {
        return (
        <div>
            <ul>
           <li key={todo.id} onClick={() => onTodoClick(todo.id)}>
            {todo.title} </li>
           </ul> 
        </div>
        )
       })
   }

   
    return (
        <div>
            <button onClick={onButtonClick}>Fetch Data</button>
            {renderList()}
        </div>
    )
}


const mapStateToProps = ({todos}: StoreState): {todos:Todo[]} => {
return { todos}

}
export default connect(mapStateToProps, {fetchToDos, deleteToDo}) (App)
