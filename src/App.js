import React, { useState } from 'react';

import './App.css';

import Header from './components/header';
import Main from './components/main';

function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <section id="restapi-countries" className="antialiased font-sans bg-gray-800 ">
            <Header />
            <Main isDark={isDark} />
        </section>
    );
}

export default App;
