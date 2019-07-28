import React, {Fragment} from "react";
import {connect} from "react-redux";
import PostsPage from '../pages/posts/posts.component';
import PostDetailPage from '../pages/post-detail/post-detail.component';
import NotFoundPage from '../pages/not-found/not-found.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.scss';
import Header from "../../../common/header/header.component";
import Footer from "../../../common/footer/footer.component";
import HomePage from "../pages/home/home.component";

class App extends React.Component {

    handleSelectedPost = ({selectedPost}) => {
        this.props.changeSelectedPost(selectedPost);
    };

    render() {

        return (
          <Router basename='/'>
              <Header pages={[{name: 'Home', href: ""}, {name: 'Posts', href: "posts"}]}/>
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
                      <Route component={NotFoundPage}
                      />
                  </Switch>
              </div>
              <Footer footerClassName="footer" contextClassName="footer-content"/>
          </Router>
        );
    }
}

export default connect(
  null,
  null,
)(App);