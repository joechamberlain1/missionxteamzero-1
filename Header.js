import React from 'react';
import 'HeaderX.css';
import TopNavBar from './TopNavBar.js';

import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';

import {Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <PageNavBar />
            <Route exact path="/" component={Page1} />
            <Route exact path="/Page2" component={Page2} />
            <Route exact path="Page3" component={Page3} />
        </div>
    );
}

export default App;