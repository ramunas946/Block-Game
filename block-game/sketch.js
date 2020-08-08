var focused = document.hasFocus();
let speed = 0.5;
let autospawntext = "on";
let showbutton = 0;
let button;
let cube;
let cubes = [];
let k = 0;
let y = 0;
let z = 0;
let c = 0;
let g = 0;
let damage = 100;

let s = 0;

let winWidth = 500;
let winHight = 300;
let nomoney = 0;
let score = c;


// upgrades
let showHideButton = 0;
//-------cost--------
let money = 0;
let cubescost = 1;

let upgrade1cost = 1;
let upgrade2cost = 1;
let upgrade3cost = 1;
let upgrade4cost = 1;
let upgrade5cost = 1;
let upgrade1 = 0;
let upgrade2 = 0;
let upgrade3 = 0;
let upgrade4 = 0;
let upgrade5 = 0;
let shield = 0;
let hp = 10;
let spawningtime = 1000;
let spawningtimer = 0;
let cubeclicked = 0;

//-------sizes--------

let cubesWidth = 20;
let cubesHight = 20;

let x1 = 100;
let y1 = -40;
let w1 = 100;
let h1 = 100;
function hello() {

    // need to calculate this shit
    if (mouseX > x1 && mouseX < h1 * 2 && mouseY > y1 && mouseY < y1 * 2)
        fill(0, 0, 255);

    strokeWeight(2);
    stroke(3);


    y1++;

    rect(x1, y1, w1, h1)
    fill(0, 255, 0);
    rect(mouseX - 5, mouseY - 5, 10, 10);

}

//---------------------------------------
// to do
// fix- detection on clicking block
// cubescost only on new spawned block
//---------------------------------------
function setup() {
    createCanvas(winWidth, winHight);
    stroke(100);
    strokeWeight(0.5);

    button = new Button();


    (function myLoop(i) {

        setTimeout(function () {
            if (hp > 0) {
                if (shield < 100)
                    shield++;
            }
            if (--i) myLoop(i);
        }, 200)
    })(z);




    cubespawn();


    (function myLoop(i) {

        setTimeout(function () {
            cubespawn();

            spawningtimer++;

            if (--i) myLoop(i);
        }, spawningtime)
    })(spawningtimer);


}

function draw() {
    background('#b0a894');
    fill(0);
    rect(0, 0, 90, winHight)

    for (let i = 0; i < spawningtimer; i++) {

        if (cubes[i].clicked(mouseX, mouseY)) {
        }
        fill(c);
        if (hp > 0) {
            cubes[i].move();

        } else {
            let texts = "Game Over";
            textSize(40);

            text(texts, 160, 50);
        }

        cubes[i].show();
    }
    if (nomoney === 1) {
        needMoreMoney();
    }

    button.upgrades();
    button.scoreButtons();

    hello();


    cubes[0].bottomkill();

}

// timed spawnin
(function myLoop(i) {
    setTimeout(function () {
        z++;
        k++;
        y++;

        if (nomoney === 1) {
            s++;
            if (s === 5) {
                nomoney = 0;
                s = 0;
            }
        }
        if (--i) myLoop(i);
    }, 1000)
})(z);



