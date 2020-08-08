class Cube {
    constructor(x, y, w, h, c, enemy) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.enemy = enemy;
    }
    show() {
        if (showbutton === 0) {
            fill(this.c);
            rect(this.x, this.y, this.w, this.h);
        }
    }

    move() {

        if (this.y < winHight - this.h) {
            this.y = this.y + speed;
        }
    }
    clicked(x, y) {
        if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h) {
            return true;
        } else {
            return false;
        }
    }
    colision() {



    }

}
function cubespawn() {
    let x = random(90 + cubesWidth, winWidth - cubesWidth);
    let y = -40;
    let w = cubesWidth;
    let h = cubesHight;
    x = x - cubesWidth;
    y = y - cubesHight;
    let enemy = 0;
    let letters = '0123456789ABCDEF';
    let c = '#';
    for (let i = 0; i < 6; i++) {
        c += letters[Math.floor(Math.random() * 16)];
    }
    let randomcolor = random(0, 10);

    if (randomcolor > 1) {
        enemy = 1;
        c = "#00ff1e";

    } else {
        enemy = 0;
        c = "#ff0000";
    }
    cubes.push(new Cube(x, y, w, h, c, enemy));


    if (winHight - cubesHight === cubes[0].y) {


        if (cubes[0].enemy === 0) {

            score += 1;
        } else {
            score -= 1;
        }
        cubes.splice(0, 1);
        cubeclicked--;
        spawningtimer--;

    }
}

