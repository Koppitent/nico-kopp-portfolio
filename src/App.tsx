import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-neutral-900 text-cyan-400">
        <Outlet />
      </div>
    </>
  );
}

export default App
