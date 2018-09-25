import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../CSS/main.css';

export default class SelectDifficulty extends Component {

    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    
    }
    render() {
        return (

            <div id="3">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="content">
                        <div className="dropdown">
                            <button onClick={this.myFunction} className="dropbtn">Select a difficulty
                            <div className="arrow old" ></div></button>

                            <div id="myDropdown" className="dropdown-content">
                                <Link to="/SelectTopic">Easy</Link>
                                <Link to="/SelectTopic">Intermediate</Link>
                                <Link to="/SelectTopic">Hard</Link>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="icon-grid">
                            <ul>
                                <Link to="/Puzzle"><li className="play" id="clicked" >Play</li></Link>
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