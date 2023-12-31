import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import Error from "./Error";
import TodoDetails from "./TodoDetails";


function App() {
  return (
      <Router>
         <div className="App">
           <Navbar/>
           <div className="content">
               <Switch>
                     <Route exact path="/">
                            <Home/>
                     </Route>
                     <Route exact path="/create">
                            <Create/>
                     </Route>
                    <Route exact path="/todos/:id">
                            <TodoDetails/>
                    </Route>
                    <Route  path="*">
                            <Error/>
                    </Route>
                </Switch>
           </div>
         </div>
      </Router>

  );
}

export default App;
