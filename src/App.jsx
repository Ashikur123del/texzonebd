
import { Routes, Route } from 'react-router-dom'
import Root from './Layout/Root'
import Home from './Pages/Home';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
       <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
}

