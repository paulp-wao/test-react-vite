import { useState } from 'react';
import reactLogo from './assets/react.svg'
import { ComboboxDemo } from './components/example-combobox'
import { DialogDemo } from './components/example-dialog'
import viteLogo from '/vite.svg'
import { fetchTodos, Todo } from './api/api';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleFetchTodos = async () => {
    const todos = await fetchTodos();
    setTodos(todos);
  };

  return (
    <div className=''>
      <div className="flex justify-center space-x-4 mt-24">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>

      <div className='mt-12 w-full flex justify-center'>
        <button onClick={handleFetchTodos} className="px-4 py-2 bg-blue-500 text-white rounded">
          Fetch Todos
        </button>
      </div>

      {todos.length > 0 && (
        <div className='mt-12 w-full flex flex-col items-center'>
          {todos.map(todo => (
            <div key={todo.id} className="p-4 border-b w-full max-w-md">
              <h2 className="text-xl font-bold">{todo.title}</h2>
              <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      )}

      <div className='w-full mt-12 flex justify-center'>
        <DialogDemo />
      </div>

      <div className='mt-12 w-full flex justify-center'>
        <ComboboxDemo />
      </div>

    </div>
  );
}

export default App