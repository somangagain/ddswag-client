import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;