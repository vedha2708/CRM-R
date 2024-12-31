
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './Rcomponents/Login';
import Register from './Rcomponents/Register';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  )
}

export default App
