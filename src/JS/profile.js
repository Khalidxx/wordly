import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../CSS/main.css';


export default class Profile extends Component {

    changeNavigation(id) {
        document.getElementById('main').innerHTML = document.getElementById(id).innerHTML
    }
    render() {
        return (
            <div id="5">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="content">
                        {/* <!-- user profile --> */}
                        <div className="user-profile">
                            <div className="user-image"></div>
                            <div className="user-name">@Chevvycherokee</div>
                        </div>

                        <div className="accordion">

                            <div className="tab">
                                <input id="tab-one" type="checkbox" name="tabs" />
                                <label htmlFor="tab-one">Change username</label>
                                <div className="tab-content">
                                    <div className="form-container">
                                        <form action="/action_page.php">
                                            <div className="row">
                                                <label htmlFor="username"></label>
                                                <input type="text" id="oldUsername" name="oldUsername" placeholder="Old username" />
                                            </div>

                                            <div className="row">
                                                <label htmlFor="username"></label>
                                                <input type="text" id="newUsername" name="newUsername" placeholder="New username" />
                                            </div>

                                            <div className="row">
                                                <label htmlFor="password"></label>
                                                <input type="text" id="passwordregister" name="passwordregister" placeholder="Password" />
                                            </div>

                                            <div className="row">
                                                <input type="submit" value="Confirm" onClick={()=>this.changeNavigation(2)}/>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>


                            <div className="tab">
                                <input id="tab-two" type="checkbox" name="tabs" />
                                <label htmlFor="tab-two">Change password</label>
                                <div className="tab-content">
                                    <div className="form-container">
                                        <form action="/action_page.php">
                                            <div className="row">
                                                <label htmlFor="username"></label>
                                                <input type="text" id="username" name="username" placeholder="Username" />
                                            </div>

                                            <div className="row">
                                                <label htmlFor="password"></label>
                                                <input type="text" id="oldPassword" name="oldPassword" placeholder="Old password" />
                                            </div>

                                            <div className="row">
                                                <label htmlFor="password"></label>
                                                <input type="text" id="newPassword" name="passwordregister" placeholder="New password" />
                                            </div>

                                            <div className="row">
                                                <input type="submit" value="Confirm" onClick={()=>this.changeNavigation(2)} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="tab">
                                <input id="tab-logout" type="checkbox" name="tabs" />
                                <label htmlFor="tab-logout">Log out</label>
                            </div>

                        </div>
                        {/* <!-- end of user profile -->	 */}
                    </div>

                    <div className="footer">
                        <div className="icon-grid">
                            <ul>
                            <Link to="/Puzzle"><li className="play"  >Play</li></Link>
                                <Link to="/Profile"><li className="profile" id="clicked">Profile</li></Link>
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
