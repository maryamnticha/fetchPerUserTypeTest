import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import SignIn from "./componennts/signIn";
import SignUp from "./componennts/signUp";
import Home from "./componennts/Home";
import Profile from "./componennts/Profile";
import Guesthome from "./componennts/Guesthome";
import PostList from "./componennts/PostList";
import AddPost from "./componennts/addPost";
import OnePostCard from "./componennts/OnePostCard";
// import CommentList from "./componennts/CommentList";
// import CommentCard from "./componennts/CommentCard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Guesthome />} />
          <Route exact path="/login" render={() => <SignIn />} />
          <Route exact path="/register" render={() => <SignUp />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route
            exact
            path="/profile/:id/getAllPost"
            render={(props) => <PostList {...props} />}
          />

          <Route
            exact
            path="/profile/:id/add"
            render={(props) => <AddPost {...props} />}
          />
          <Route
            exact
            path="/profile/:user/post/:post"
            render={(props) => <OnePostCard {...props} />}
          />
          {/* <Route
            exact
            path="/profile/:id/edit"
            render={(props) => <CommentCard {...props} />}
          /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
