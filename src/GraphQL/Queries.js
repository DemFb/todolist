import {gql} from  '@apollo/client'

const LOAD_TODOS = gql `
    query filterTodo ($filter: TodoFiltersInput, $order:Ordering){
        getTodoList(filters:$filter, orderBy:$order){
        id
        title
        text
        createdAt
        type
        isDone
        }
    }
`

export default LOAD_TODOS;