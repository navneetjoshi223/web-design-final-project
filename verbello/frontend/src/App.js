import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import QuizQuestions from './Components/Quiz/QuizQuestions';
import questions from './questions';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quiz" element={<QuizQuestions questions={questions} />} />
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
