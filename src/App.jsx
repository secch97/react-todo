import React from 'react';
// Components
import TodoContainer from "./components/TodoContainer/TodoContainer";
import Footer from './components/Footer/Footer';
// Helpers
import { scrollToTop } from './helpers/scrollToTop';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
      /* Fragment creation */
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            exact
            element={(
              <>
                <TodoContainer/>
                <Footer/>
                <a className='button-top' onClick={scrollToTop}>
                  <FontAwesomeIcon icon={["fas", "circle-up"]} size="2x"/>
                </a>
              </>
            )}
          > 
          </Route>
          <Route
            path="/new"
            element={(
              <h1>New Todo List</h1>
            )}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;

