import { useReducer, useRef, useEffect, useMemo, useCallback } from "react";

const TaskCounter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "up":
        return { value: state.value + 1 };
      case "down":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const prevValueRef = useRef(state.value);

  useEffect(() => {
    prevValueRef.current = state.value;
  }, [state.value]);

  const isEven = useMemo(() => state.value % 2 === 0, [state.value]);
  const increment = useCallback(() => dispatch({ type: "up" }), []);
  const decrement = useCallback(() => dispatch({ type: "down" }), []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Number Counter</h2>
      <div className="text-3xl font-semibold text-purple-600 mb-2">
        {state.value}
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Last Value: {prevValueRef.current}
      </p>
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={increment}
        >
          Tăng
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={decrement}
        >
          Giảm
        </button>
      </div>
    </div>
  );
};

export default TaskCounter;
