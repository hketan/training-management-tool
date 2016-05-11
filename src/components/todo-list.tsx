import * as React from 'react';
export let __hotReload = true;
interface IProps {
  todos: Todo[];
}

export class TodoList extends React.Component<IProps, {}> {
  render() {
    let todos = this.props.todos;
    return (
      <div>
        <ul>
          { todos.map((todo) => <li key={todo.uid} className={todo.completed ? 'todo-completed' : ''}>{todo.title}</li>) }
        </ul>
      </div>
    );

  }
};
