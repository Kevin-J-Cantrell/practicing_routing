import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Word from './Components/Word';
import Colors from './Components/Colors';

function App() {
  return (
<BrowserRouter>
  <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:text' element={<Word />} />
      <Route path='/:word/:textColor/:bgColor' element={<Colors />} />
      
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
