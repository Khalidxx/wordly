// JavaScript Document

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/main.css';
import '../CSS/puzzle.css';

export default class Puzzle extends Component {
    constructor() {
        super();
        this.state = {
            fill: "empty",
            answer: [["p", "u", "m", "p", "e", "r", "n", "i", "c", "k", "e", "l", "-"], ["a", "-", "-", "-", "-", "-", "-", "-", "a", "-", "-", "-", "-"], ["l", "-", "-", "-", "s", "a", "f", "f", "r", "o", "n", "-", "-"], ["a", "-", "-", "-", "n", "-", "l", "-", "a", "-", "-", "-", "-"], ["d", "-", "p", "-", "i", "-", "o", "-", "m", "i", "s", "t", "-"], ["i", "-", "l", "-", "c", "-", "w", "-", "e", "-", "-", "-", "-"], ["n", "-", "a", "-", "k", "-", "e", "-", "l", "i", "p", "-", "-"], ["-", "-", "g", "-", "e", "-", "r", "-", "-", "-", "i", "-", "-"], ["l", "o", "u", "v", "r", "e", "-", "-", "c", "-", "s", "-", "-"], ["i", "-", "e", "-", "-", "-", "-", "-", "o", "-", "t", "-", "-"], ["m", "-", "-", "-", "-", "-", "-", "-", "d", "-", "o", "-", "-"], ["e", "-", "-", "-", "-", "-", "-", "d", "a", "w", "n", "-", "-"], ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]
        }
    }

    doNothing() {
        console.log("did nothing");
    }

    returnBoxes() {
        let i, j;
        let boxes = [];
        for (i = 0; i < 14; i++) {
            boxes.push(<div key={i + 170} id={"item" + (i + 1)} className="empty numbered"><span>{i}</span></div>)
        }
        for (i = 0; i < 13; i++) {
            boxes.push(<div key={i + 190} id={"item" + (i + 13)} className="empty numbered"><span>{i + 1}</span></div>)
            for (j = 0; j < 13; j++) {
                var fill = "";
                if (this.state.answer[i][j] == "-") {

                    fill = "filled";
                    boxes.push(<div key={13 * i + j} id={"item" + (i + 1)} className={fill}></div>)
                }
                else {
                    fill = "empty";
                    boxes.push(<div key={13 * i + j} id={"item" + (i + 1)} className={fill}><input id="item1-1" type="text" minLength="1" maxLength="1" size="1" /></div>)
                }
            }
        }
        return boxes;
    }

    render() {
        return (
            <div id="8">
                <div className="container-2">
                    <div className="header"><div className="logo-small"><img src="./src/images/Wordably-logo2-w.png" className="logo" alt="logo" /></div></div>

                    <div className="hint-container">
                        <div className="content">
                            <div id="wrapper" className="puzzle">
                                {this.returnBoxes()}
                            </div>

                            <div className="hint-content">
                                <div className="hint-title">Hints</div>
                                <ol>
                                    <li>(1,1) down: Dark, sour bread made from coarse ground rye.</li>
                                    <li>(1,1) across: A heroic champion or paragon of chivalry.</li>
                                    <li>(1,3) across: A mass of fine water droplets in the air near or in contact with the ground.</li>
                                    <li>(3,3) down: A snide, slightly stifled laugh.</li>
                                    <li>(1,9) across: A smooth chery candy made from suger, butter, cream or milk with flavoring.</li>
                                    <li>(6,4) down: A widespread affliction or calamity.</li>
                                    <li>(5,5) across: A rock-like deposit of organism skeletons that make up reefs</li>
                                    <li>(8,2) across: A long, narrow, deep inlet of the sea between steep slopes.</li>
                                    <li>(10,1) down: An agent, such as yeast, that cause batter or dough to rise.</li>
                                    <li>(1,12) across: The egg-shaped citrus fruit having a green coloring and acidic juice.</li>
                                    <li>(12,2) down: The time of each morning at which daylight begins.</li>
                                    <li>(7,11) across: A solid cylinder or disk that fits snugly in a larger cylinder and moves under pressure as in an engine.</li>
                                    <li>(9,9) across: Musical conclusion of a movement or composition.</li>
                                    <li>(12,8) down: A strand of twisted threads or a long elaborate narrative.</li>

                                </ol>
                            </div>
                        </div>
                        <Link to="/Results">
                            <div className="row">
                                <input className="r-button" type="submit" value="Submit" onClick={this.doNothing} />
                            </div>
                        </Link>

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
        )

    }
}