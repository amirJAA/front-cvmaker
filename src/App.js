import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/auth';
import Main from './components/main/main';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/" element={<Auth />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;