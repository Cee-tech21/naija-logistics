import './App.css';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route, Link } 
    from 'react-router-dom';
import Footer from './Pages/Footer';
import Signin from './Pages/Signin';
import RegisterClicks from './Pages/RegisterClicks';
import PostsRender from './Pages/PostsRender';
import CreatePost from './Pages/CreatePost';
import SinglePost from './Pages/SinglePost';

function App() {
  return (
    <div >
      <Router>
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">My App</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/vote">Vote</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/createPost">Create A Post</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/posts" tabIndex="-1">
                    Blog</Link>
                  </li>
                  
              </ul>
              <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              </div>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/vote" exact component={RegisterClicks} />
          <Route path="/posts" exact component={PostsRender}/>
          <Route path="/createPost" exact component={CreatePost}/>
          <Route path="/single-post/:id" exact component={SinglePost}/>

        </Switch>
      </Router>      
        
      <div>
      
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
