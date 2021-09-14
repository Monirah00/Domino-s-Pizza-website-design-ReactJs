
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DataProvider from './Components/DataProvider';
import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter,Route,Switch} from "react-router-dom";
import Contact from './Components/Contact'
import About from './Components/About';






function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
        <Header />
        <Switch>
        
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/About' component={About} />
        </Switch>

       
        </BrowserRouter>
        </DataProvider>
  
    </div>
  );
}

export default App;
