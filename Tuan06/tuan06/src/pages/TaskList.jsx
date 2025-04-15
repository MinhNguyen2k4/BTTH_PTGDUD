import { useReducer, useRef, useCallback, useMemo } from "react";

const TaskList = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, { id: Date.now(), task: action.task }];
      case "remove":
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }
  };

  const [tasks, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);

  const addTask = useCallback(() => {
    if (inputRef.current.value.trim()) {
      dispatch({ type: "add", task: inputRef.current.value });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  const taskItems = useMemo(
    () =>
      tasks.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-2 bg-gray-100 rounded shadow hover:bg-gray-200"
        >
          <span className="text-gray-800">{item.task}</span>
          <button
            onClick={() => removeTask(item.id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            X
          </button>
        </div>
      )),
    [tasks, removeTask]
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">My Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add a task..."
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">{taskItems}</div>
    </div>
  );
};

export default TaskList;
