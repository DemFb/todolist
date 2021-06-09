import { gql } from '@apollo/client';

const UDPDATE_DONE = gql `
mutation updateTodo ($id:ID!, $done:Boolean!){
    updateTodoStatusById(id:$id, isDone:$done){
      id
      isDone
      createdAt
      text
      title
      type
    }
}
`;

export default UDPDATE_DONE;