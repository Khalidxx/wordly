import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from 'antd';

import '../CSS/main.css';

import Puzzle from './puzzle';

export default class MainApp extends Component {
    render(){
        return(
            <div className='container'>
                <Puzzle />
            </div>
        );
    }
}

render(<MainApp />, document.getElementById('app'));