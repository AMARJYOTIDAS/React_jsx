import React from "react";
import { useReducer, useState } from "react";
import { Plus, Trash2, Check } from "lucide-react";

// 1. Define the actions this reducer understands
const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  TOGGLE: "toggle",
};

// 2. The reducer: (currentState, action) -> newState
// It never mutates `state` directly — always returns a new array.
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          text: action.payload.text,
          completed: false,
        },
      ];

    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    default:
      // Always good practice to throw on unknown actions during dev
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function TodoApp() {
  // 3. useReducer replaces useState for this array of objects
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    dispatch({ type: ACTIONS.ADD, payload: { text } });
    setInput("");
  }

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-neutral-50 flex justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-medium text-neutral-900 mb-1">
          Todo list
        </h1>
        <p className="text-sm text-neutral-500 mb-6">
          {todos.length === 0
            ? "Nothing on your list yet."
            : `${remaining} of ${todos.length} remaining`}
        </p>

        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-700 transition-colors"
            aria-label="Add task"
          >
            <Plus size={18} />
          </button>
        </form>

        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2"
            >
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
                }
                aria-label={
                  todo.completed ? "Mark incomplete" : "Mark complete"
                }
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  todo.completed
                    ? "bg-neutral-900 border-neutral-900 text-white"
                    : "border-neutral-300 text-transparent"
                }`}
              >
                <Check size={12} strokeWidth={3} />
              </button>

              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? "text-neutral-400 line-through"
                    : "text-neutral-800"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
                }
                aria-label="Delete task"
                className="text-neutral-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <div className="rounded-lg border border-dashed border-neutral-300 py-10 text-center text-sm text-neutral-400">
            Add your first task above
          </div>
        )}
      </div>
    </div>
  );
}
