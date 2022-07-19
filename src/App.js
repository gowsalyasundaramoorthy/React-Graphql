import logo from './logo.svg';
import './App.css';
import CharacterList from './Pages/CharacterList';
import { Route, Routes } from 'react-router-dom'
import Character from './Pages/Character';
import Search from './Pages/Search';



function App() {
  return (
    <div className="App">
      {/* <CharacterList></CharacterList> */}
      <Routes>


        <Route strict exact path='/' element={<CharacterList />}></Route>
        
        <Route strict exact path='/search' element={ <Search />}></Route>
        <Route strict exact path='/:id' element={<Character />}></Route>

      </Routes>
      

      
    </div>
  );
}

export default App;
