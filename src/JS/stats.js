import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../CSS/main.css';


export default class Stats extends Component {
    render() {
        return (
            <div id="6">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="content">

						<div className="stats-content">
							<div className="level">Level 1
							</div>
							<div className="lvl-desc">Novice</div>
							<div className="points">100pts</div>

							<center>
								<div className="pie-chart">
									<div id="piechart" style={{ width: "500px" }}></div>
								</div>
							</center>
						</div>

                    </div>


                    <div className="footer">
                        <div className="icon-grid">
                            <ul>
                            <   Link to="/Puzzle"><li className="play" >Play</li></Link>
                                <Link to="/Profile"><li className="profile">Profile</li></Link>
                                <Link to="/Stats"><li className="stats" id="clicked" >Stats</li></Link>
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