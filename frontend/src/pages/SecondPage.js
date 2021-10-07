import React from 'react';
import '../puzzle/v1/puzzle.css';
import '../puzzle/v1/style.css';
import '../css/Home.css';
import Compliment from "./Compliment";

let logo = "image/nata/1.jpg"

var images = [
    {src: 'image/nata/1.jpg', title: 'London Bridge'},
];

const gridSize1 = 3;

class SecondPage extends React.Component {
    componentDidMount() {
        this.startGame(images, gridSize1);
    }

    startGame(images, gridSize) {
        setImage(images, gridSize);
        helper.doc('playPanel').style.display = 'block';
        helper.shuffle('sortable');
        this.startTime = new Date().getTime();
    }

    render() {
        return (
            <div className="SecondPage">
                <div className="row">
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
                <Compliment/>
                <Puzzle/>
                <div className="row">
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}

class Puzzle extends React.Component {
    componentDidMount() {
        setImage(images, gridSize1);
    }

    render() {
        return (
            <div id="sortable" className="sortable">
            </div>
        );
    }
}

var isSorted = (arr) => arr.every((elem, index) => { return elem === index; });

var helper = {
    doc: (id) => document.getElementById(id) || document.createElement("div"),

    shuffle: (id) => {
        var ul = document.getElementById(id);
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }
}

function setImage(images, gridSize = 4) {
    var percentage = 100 / (gridSize - 1);
    var image = images[Math.floor(Math.random() * images.length)];
    helper.doc('sortable').innerHTML = '';
    for (var i = 0; i < gridSize * gridSize; i++) {
        var xpos = (percentage * (i % gridSize)) + '%';
        var ypos = (percentage * Math.floor(i / gridSize)) + '%';

        let li = document.createElement('li');
        li.id = i;
        li.setAttribute('data-value', i);
        li.style.backgroundImage = 'url(' + image.src + ')';
        li.style.backgroundSize = (gridSize * 100) + '%';
        li.style.backgroundPosition = xpos + ' ' + ypos;
        li.style.width = 400 / gridSize + 'px';
        li.style.height = 400 / gridSize + 'px';

        li.setAttribute('draggable', 'true');
        li.ondragstart = (event) => event.dataTransfer.setData('data', event.target.id);
        li.ondragover = (event) => event.preventDefault();
        li.ondrop = (event) => {
            let origin = helper.doc(event.dataTransfer.getData('data'));
            let dest = helper.doc(event.target.id);
            let p = dest.parentNode;

            if (origin && dest && p) {
                let temp = dest.nextSibling;
                let x_diff = origin.offsetLeft-dest.offsetLeft;
                let y_diff = origin.offsetTop-dest.offsetTop;

                if(y_diff === 0 && x_diff >0){
                    //LEFT SWAP
                    p.insertBefore(origin, dest);
                    p.insertBefore(temp, origin);
                }
                else{
                    p.insertBefore(dest, origin);
                    p.insertBefore(origin, temp);
                }


                let vals = Array.from(helper.doc('sortable').children).map(x => x.id);

                if (isSorted(vals)) {
                    // helper.doc('actualImageBox').style.display = 'none';
                    // helper.doc('gameOver').style.display = 'block';
                    helper.doc('actualImageBox').innerHTML = helper.doc('gameOver').innerHTML;
                }
            }
        };
        li.setAttribute('dragstart', 'true');
        helper.doc('sortable').appendChild(li);
    }
    helper.shuffle('sortable');
}

export default SecondPage;
