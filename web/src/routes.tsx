import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
        </BrowserRouter>
    )
}

export default Routes;