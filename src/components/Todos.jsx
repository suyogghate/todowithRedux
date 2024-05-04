import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckbox } from "../redux/todoapp/action";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);

  return todos.map((todo) => (
    <div
      key={todo.id}
      className="todo-box d-flex flex-row justify-between items-center"
    >
      <div className="content d-flex ">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(handleCheckbox(todo.id))}
        ></input>
        <p
          className="m-2"
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box space-x-2">
        <span className="cursor-pointer">
          <Icon icon={edit2} />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  ));
};
