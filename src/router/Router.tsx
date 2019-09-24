import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from '../components/day10/Home/Home';
import About from '../components/day10/About/About';
import Blog from '../components/day10/Blog/Blog';

export default function Router(): JSX.Element {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog/horse">Blog + horse</Link>
          </li>
          <li>
            <Link to="/blog/pig">Blog + pig</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:name" component={Blog} />
      </div>
    </HashRouter>
  );
}
