import React, {Component} from "react";
import PostsPage from '../pages/posts/posts.container';
import UsersPage from '../pages/users/users.container';
import PostDetailPage from '../pages/post-detail/post-detail.container';
import UserDetailPage from '../pages/user-detail/user-detail.container';
import NotFoundPage from '../pages/not-found/not-found.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../../../common/header/header.component";
import Footer from "../../../common/footer/footer.component";
import HomePage from "../pages/home/home.component";
import './app.scss';

class App extends Component {

    render() {
        const {pages} = this.props;

        return (
          <Router basename='/'>
              <Header pages={pages}/>
              <div className="wrapper">
                  <Switch>
                      <Route
                        exact
                        path='/'
                        component={() =>
                          <HomePage/>}
                      />
                      <Route
                        exact
                        path='/posts'
                        component={() =>
                          <PostsPage/>}
                      />
                      <Route path='/post/'
                             component={() =>
                               <PostDetailPage/>}
                      />
                      <Route
                        exact
                        path='/users'
                        component={() =>
                          <UsersPage/>}
                      />
                      <Route path='/user/'
                             component={() =>
                               <UserDetailPage/>}
                      />
                      <Route component={NotFoundPage}
                      />
                  </Switch>
              </div>
              <Footer
                footerClassName="footer"
                contextClassName="footer-content"
              />
          </Router>
        );
    }
}

export default App;