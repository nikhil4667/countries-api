import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Main from './components/main';
import Switcher from './components/switch';
import CountryDetail from './components/countryDetail';

function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <section id="restapi-countries" className="antialiased font-sans bg-gray-800 ">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main isDark={isDark} />
                </Route>
                <Route path="/country/:id">
                    <CountryDetail />
                </Route>
            </Switch>

            <Switcher />
        </section>
    );
}

export default App;
