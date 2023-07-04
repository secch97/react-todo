import React, { useState } from 'react';
// Components
import HomeContainer from './components/HomeContainer/HomeContainer';
import TodoContainer from "./components/TodoContainer/TodoContainer";
import Footer from './components/Footer/Footer';
// Helpers
import { scrollToTop } from './helpers/scrollToTop';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  /*
    ==================================
    =             STATES             =
    ==================================
  */
 const [table, setTable] = useState("");
  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
  const handleTableName = (table) => {
    setTable(table);
  }

  return (
    /* Fragment creation */
    <BrowserRouter>
      <Routes>
        <Route 
          path="/react-todo" 
          exact
          element={(
            <>
              <HomeContainer onTableName={handleTableName}/>
            </>
          )}
        /> 
        <Route
          path="/react-todo/TodoList"
          exact
          element={(
            <>
              <TodoContainer tableName={table || "TodoList"}/>
            </>
          )}
        />
      </Routes>
      <Footer/>
      <a className='button-top' onClick={scrollToTop}>
        <FontAwesomeIcon icon={["fas", "circle-up"]} size="2x"/>
      </a>
    </BrowserRouter>
  );
};

export default App;

