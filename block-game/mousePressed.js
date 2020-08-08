function mousePressed() {
    if (mouseX > 10 && mouseX < 80 && mouseY > 10 && mouseY < 30) {
        if (showHideButton === 0) {
            showHideButton = 1;
        } else {
            showHideButton = 0;
        }
    }
    if (showHideButton === 1) {
        if (mouseX > 10 && mouseX < 80 && mouseY > 30 && mouseY < 50) {
            if (money < upgrade1cost) {
                nomoney = 1;


            } else {
                money = money - upgrade1cost;
                cubesHight = cubesHight + 5;
                upgrade1 = upgrade1 + 1;
            }
        }
        if (mouseX > 10 && mouseX < 80 && mouseY > 50 && mouseY < 70) {
            if (money < upgrade2cost) {
                nomoney = 1;

            } else {
                money = money - upgrade2cost;
                cubesWidth = cubesWidth + 5;
                upgrade2 = upgrade2 + 1;
            }
        }

        if (showbutton === 0 && mouseX > 10 && mouseX < 80 && mouseY > 70 && mouseY < 90) {
            showbutton = 1
            for (let i = 0; i < z; i++) {
                cubes[i].y = -40
            }
            autospawntext = "off"
        } else {
            showbutton = 0
            autospawntext = "on"
        }
        if (showbutton === 0 && mouseX > 10 && mouseX < 80 && mouseY > 90 && mouseY < 110) {
            if (money < upgrade3cost) {

                nomoney = 1;


            } else {
                money = money - upgrade3cost
                cubescost = cubescost + 5
                upgrade3 = upgrade3 + 1
            }
        }
        if (showbutton === 0 && mouseX > 10 && mouseX < 80 && mouseY > 110 && mouseY < 130) {
            if (money < upgrade4cost) {

                nomoney = 1;


            } else {
                money = money - upgrade4cost
                upgrade4 = upgrade4 + 1;
                hp += hp;
            }
        }
        if (showbutton === 0 && mouseX > 10 && mouseX < 80 && mouseY > 130 && mouseY < 150) {
            if (spawningtime > 300) {
                if (money < upgrade5cost) {

                    nomoney = 1;

                } else {
                    money = money - upgrade5cost
                    upgrade5 = upgrade5 + 1;
                    spawningtime = spawningtime - 100;
                }
            }
        }
    }
    if (hp > 0) {
        for (cubeclicked = 0; cubeclicked < spawningtimer; cubeclicked++) {
            if (cubes[cubeclicked].clicked(mouseX, mouseY)) {

                money = money + cubescost;

                if (cubes[cubeclicked].enemy === 1) {

                    score += 1;
                } else {
                    score -= 1;
                    if (shield > 0) {
                        shield -= damage;
                        if (shield < 0) {
                            hp += shield;
                            shield = 0;
                        }
                    }
                }
                cubes.splice(cubeclicked, 1);
                cubeclicked--;
                spawningtimer--;

            }
        }


    }


}