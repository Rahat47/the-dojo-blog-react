import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './Components/Blog/BlogDetails';
import CreateBlog from './Components/Blog/CreateBlog';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
