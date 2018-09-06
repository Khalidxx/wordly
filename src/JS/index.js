import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from 'antd';

import '../CSS/main.css';

export default class MainApp extends Component {
    render(){
        return(
            <div className='container'>
                <h1 className='title'>Welcome to React!</h1>
                <Button type = 'primary'> Hello </Button>
                <Button> Goodbye </Button>
            </div>
        );
    }
}

render(<MainApp />, document.getElementById('app'));