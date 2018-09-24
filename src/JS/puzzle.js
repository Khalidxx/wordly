import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from 'antd';

import '../CSS/main.css';
import '../CSS/puzzle.css';

export default class Puzzle extends Component {
    constructor() {
        super();
        this.state = {
            fill: "empty",
            answer: [["p", "u", "m", "p", "e", "r", "n", "i", "c", "k", "e", "l", "-"],["a", "-", "-", "-", "-", "-", "-", "-", "a", "-", "-", "-", "-"],["l", "-", "-", "-", "s", "a", "f", "f", "r", "o", "n", "-", "-"],["a", "-", "-", "-", "n", "-", "l", "-", "a", "-", "-", "-", "-"],["d", "-", "p", "-", "i", "-", "o", "-", "m", "i", "s", "t", "-"],["i", "-", "l", "-", "c", "-", "w", "-", "e", "-", "-", "-", "-"],["n", "-", "a", "-", "k", "-", "e", "-", "l", "i", "p", "-", "-"],["-", "-", "g", "-", "e", "-", "r", "-", "-", "-", "i", "-", "-"],["l", "o", "u", "v", "r", "e", "-", "-", "c", "-", "s", "-", "-"],["i", "-", "e", "-", "-", "-", "-", "-", "o", "-", "t", "-", "-"],["m", "-", "-", "-", "-", "-", "-", "-", "d", "-", "o", "-", "-"],["e", "-", "-", "-", "-", "-", "-", "d", "a", "w", "n", "-", "-"],["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]
        }
    }


    returnBoxes() {
        let i, j;
        let boxes = [];
        for (i = 0; i < 14; i++) {
            boxes.push(<div key={i+170} id={"item" + (i + 1)} className="empty numbered"><span>{i}</span></div>)
        }
        for (i = 0; i < 13; i++) {
            boxes.push(<div key={i + 190} id={"item" + (i + 13)} className="empty numbered"><span>{i+1}</span></div>)
            for (j = 0; j < 13; j++){
                var fill = "";
                if(this.state.answer[i][j] == "-"){

                    fill = "filled";
                    boxes.push(<div key={13*i + j} id={"item" + (i + 1)} className={fill}></div>)
                }
                else{
                    fill = "empty";
                    boxes.push(<div key={13*i + j} id={"item" + (i + 1)} className={fill}><input id="item1-1" type="text" minLength="1" maxLength="1" size="1" /></div>)
                }
            }
        }
        return boxes;
    }

    render() {
        return (
            <div id="wrapper">
                {this.returnBoxes()}
            </div>
        )

    }
}
