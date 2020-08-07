class Button {
    constructor() {

    }
    upgrades() {
        

            let upgradecolor = color(255, 0, 0, 100);
            let textcolor = color(0, 200, 255);
            if (showHideButton === 0) {
                fill(upgradecolor);
                rect(10, 10, 70, 20);

                textSize(10);
                fill(textcolor);
                text('Shop Menu', 15, 23);
            }

            var y = 10;
            if (showHideButton === 1) {
                for (var i = 0; i < 7; i++) {
                    fill(upgradecolor);
                    rect(10, y, 70, 20);
                    y += 20;
                }
                let textX = 10;
                let textY = 23;


                let upgradenames = "Money Upgrade1 Upgrade2 Autospawn Blocks_Cost HP SpawnTimer"
                let textText = upgradenames.split(' ');


                let textNumber = [money, upgrade1, upgrade2, autospawntext, upgrade3, upgrade4, upgrade5];

                for (var i = 0; i < 7; i++) {
                    textSize(10);
                    fill(textcolor);
                    text(textText[i] + " " + textNumber[i], textX, textY);
                    textY = textY + 20
                }
            }
        }
        scoreButtons(){
            let upgradecolor = color(255, 0, 0, 100);
            let textcolor = color(0, 200, 255);
            let y = 10;
            let textx = 23;
            textSize(10);
            let scoretext = ['Score:', 'HP:', 'Shield:'];
            let scoreScore = [score, hp, shield];
            for (let i = 0; i < 3; i++) {

                fill(upgradecolor);
                rect(winWidth - 70, y, 70, 20);
                y += 20;

                fill(textcolor);
                text(scoretext[i], winWidth - 70, textx);
                fill(textcolor);
                text(scoreScore[i], winWidth - 40, textx);
                textx += 20;
            }
        }
    }
function needMoreMoney() {
    notInfMoney = "u need more money to buy this";
    let textcolor = color(0, 200, 255);
    textSize(20);
    fill(textcolor);
    text(notInfMoney, 150, 50);

    maxupgrades = "u need more money to buy this";
    textSize(20);
    fill(textcolor);
    text(notInfMoney, 150, 50);
}