// resources/js/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard.jsx'; // ダッシュボードコンポーネントのインポート
import TrainingRecords from './components/TrainingRecords'; // 筋トレ記録コンポーネントのインポート

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/training-records">筋トレ記録</Link>
        </nav>
          <Route exact path="/" />
            <Dashboard />
          <Route path="/training-records" element={<TrainingRecords />} />
       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
