import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPages from './LandingPages';

function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Switch>
          <Route exact path="/"> 
            <LandingPages/>
          </Route>

          <Route path="/">
            <IndiceGeneros/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
    
    
    </>
    
    
  );
}

export default App;
