import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from 'antd';

import '../CSS/main.css';
import '../CSS/puzzle.css';

export default class MainApp extends Component {
    constructor(){
        super();
        this.state = {
            fill: "empty"
        }
    }
    render(){
        return(
            <div className='container'>
                <div id="wrapper">
                 {/* <!-- 15 x 15 block --> */}
        {/*-- first row */}


        <div id="item1-1" class={this.state.fill}><input id="item1-1" type="text" maxlength="1" /></div>
        <div id="item1-2" class="filled"></div>
        <div  id="item1-3" class="filled"></div>
        <div  id="item4" class="empty"><input  type="text" maxlength="1" /></div>
        <div  id="item5" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item6" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item7" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item8" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item9" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item10" class="empty"><input type="text" maxlength="1" /></div>

        {/* <!-- second row --> */}
            <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="filled"></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        <div  id="item2" class="empty"><input type="text" maxlength="1" /></div>
        
        {/* <!-- third row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        
        {/* <!-- fourth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        
        {/* <!-- fifth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- sixth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- seventh row --> */}
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- eighth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- ninth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- tenth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- eleventh row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- twelfth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- thirteenth row --> */}
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- fourteenth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        {/* <!-- fifteenth row --> */}
            <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
        <div class="empty"><input type="text" maxlength="1" /></div>
    </div>
</div>
        );
    }
}

render(<MainApp />, document.getElementById('app'));