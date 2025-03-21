import reactLogo from './assets/react.svg'
import { ComboboxDemo } from './components/example-combobox'
import { DialogDemo } from './components/example-dialog'
import viteLogo from '/vite.svg'

function App() {
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
      <h1 className="text-3xl font-bold text-center mt-4">Vite + React</h1>

      <p className="read-the-docs text-center mt-4">
        Click on the Vite and React logos to learn more
      </p>

      <div className='w-full mt-12 flex justify-center'>
        <DialogDemo />
      </div>

      <div className='mt-12 w-full flex justify-center'>
        <ComboboxDemo />
      </div>

    </div>
  )
}

export default App