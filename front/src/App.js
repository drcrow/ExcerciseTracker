import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises_list.component';
import EditExercise from './components/exercises_edit.component';
import CreateExercise from './components/exercises_create.component';
import CreateUser from './components/users_create.component';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
