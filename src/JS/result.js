import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../CSS/main.css';


export default class Results extends Component {
    render() {
        return (
            <div id="6">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="content">

                        <h3>Incorrect...</h3>
                        <br />
                        <h3>Try again</h3>

                    </div>


                    <div className="footer">
                        <div className="icon-grid">
                            <ul>
                            <   Link to="/Puzzle"><li className="play" id="clicked" >Play</li></Link>
                                <Link to="/Profile"><li className="profile">Profile</li></Link>
                                <Link to="/Stats"><li className="stats" >Stats</li></Link>
                                <Link to="/Settings"><li className="settings" >Settings</li></Link>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- end of footer --> */}
                </div>
            </div>
        );
    }
}