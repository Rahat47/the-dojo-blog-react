import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './Components/Blog/BlogDetails';
import CreateBlog from './Components/Blog/CreateBlog';
import NotFound from './Components/Blog/NotFound';
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
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
