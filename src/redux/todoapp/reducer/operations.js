import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX } from "../action";

const initialState = [];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id != action.payload);
      return filteredTodos;
    case UPDATE_CHECKBOX:
      let todoArrray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArrray.push(item);
      });
      return todoArrray;
    default:
      return state;
  }
};
