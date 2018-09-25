import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn from './login';
import Puzzle from './puzzle'
import Profile from './profile';
import Settings from './settings';
import Stats from './stats';
import SelectMode from './selectMode';
import SelectTopic from './selectTopic';
import SelectDifficulty from './selectDifficulty';
import Results from './result';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/Puzzle" component={Puzzle} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/Stats" component={Stats} />
            <Route exact path="/SelectMode" component={SelectMode} />
            <Route exact path="/SelectTopic" component={SelectTopic} />
            <Route exact path="/SelectDifficulty" component={SelectDifficulty} />
            <Route exact path="/Results" component={Results} />
        </div>
    </Router>, 
    document.getElementById('app')
)

// import React, { Component } from 'react';
// import { render } from 'react-dom';


// import '../CSS/main.css';

// import Puzzle from './puzzle';

// export default class MainApp extends Component {
//     render(){
//         return(
//             <div className='container'>
//                 <Puzzle />
//             </div>
//         );
//     }
// }

// render(<MainApp />, document.getElementById('app'));