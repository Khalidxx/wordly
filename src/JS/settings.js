import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../CSS/main.css';


export default class Settings extends Component {
    render() {
        return (
            <div id="7">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="content">

                        <div className="accordion" style={{marginTop:"20%"}}>

                            <div className="tab">
                                <input id="tab-one" type="checkbox" name="tabs"/>
                                <label htmlFor="tab-one">Change theme</label>
                                <div className="tab-content">

                                    {/* <!-- radio options --> */}
                                    <div className="radio-main">

                                        <label className="radio-container">
                                            <input type="radio" checked="checked" name="light-theme" />
                                            <span className="checkmark"><span>LIGHT</span></span>

                                        </label>
                                        <label className="radio-container">
                                            <input type="radio" name="dark-theme"/>
                                            <span className="checkmark"><span>DARK</span></span>
                                        </label>

                                    </div>
                                    {/* <!-- end of radio options --> */}
                                </div>
                            </div>


                            <div className="tab">
                                <input id="tab-two" type="checkbox" name="tabs"/>
                                <label htmlFor="tab-two">Background music</label>
                                <div className="tab-content">
                                    {/* <!-- radio options --> */}
                                    <div className="radio-main">

                                        <label className="radio-container">
                                            <input type="radio" checked="checked" name="bg-music" />
                                            <span className="checkmark"><span>ON</span></span>

                                        </label>
                                        <label className="radio-container">
                                            <input type="radio" name="bg-music" />
                                            <span className="checkmark"><span>OFF</span></span>
                                        </label>

                                    </div>
                                    {/* <!-- end of radio options --> */}
                                </div>
                            </div>

                            <div className="tab">
                                <input id="tab-three" type="checkbox" name="tabs" />
                                <label htmlFor="tab-three">Sound effects</label>
                                <div className="tab-content">
                                    {/* <!-- radio options --> */}
                                    <div className="radio-main">

                                        <label className="radio-container">
                                            <input type="radio" checked="checked" name="sound-effects" />
                                            <span className="checkmark"><span>ON</span></span>

                                        </label>
                                        <label className="radio-container">
                                            <input type="radio" name="sound-effects" />
                                            <span className="checkmark"><span>OFF</span></span>
                                        </label>

                                    </div>
                                    {/* <!-- end of radio options --> */}
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="footer">
                        <div className="icon-grid">
                            <ul>
                            <Link to="/Puzzle"><li className="play"  >Play</li></Link>
                                <Link to="/Profile"><li className="profile">Profile</li></Link>
                                <Link to="/Stats"><li className="stats" >Stats</li></Link>
                                <Link to="/Settings"><li className="settings" id="clicked" >Settings</li></Link>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- end of footer --> */}
                </div>
            </div>
        );
    }
}