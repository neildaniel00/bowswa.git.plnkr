var pretzelBank = 0;
var totalPretzelCount = 0;
var PPC = 1;

var clickerAmount = 0;
var clickerBuildAmount = 0;
var clickerPrice = 15;
var clickerInterval = false;

var grandmaBakerAmount = 0;
var grandmaBuildAmount = 0;
var grandmaPrice = 100;
var grandmaInterval = false;

var upgradeCount = 0;
var achievementCount = 0;

var prestigeCount = 0;
var prestigeMode = 0;
var prestigeChallenge = 0;
var activePrestigePercent = 0;

var displayGameVersion = 0.01;
var gameVersion = localStorage.getItem('gameVersion');

function save() {
    localStorage.setItem('gameVersion', displayGameVersion);
    localStorage.setItem('pretzelBank', pretzelBank);
    localStorage.setItem('totalPretzelCount', totalPretzelCount);
    localStorage.setItem('clickerAmount', clickerAmount);
    localStorage.setItem('grandmaBakerAmount', grandmaBakerAmount);
    console.log('Game Saved!');
}
function load() {
    if (!gameVersion) {
        reset();
        return save();
    } else if ((gameVersion = displayGameVersion)) {
        pretzelBank = localStorage.getItem('pretzelBank');
        totalPretzelCount = localStorage.getItem('totalPretzelCount');
        pretzelBank = parseInt(pretzelBank);
        totalPretzelCount = parseInt(totalPretzelCount);

        clickerAmount = localStorage.getItem('clickerAmount');
        clickerAmount = parseInt(clickerAmount);
        clickerBuildAmount = clickerAmount;

        grandmaBakerAmount = localStorage.getItem('grandmaBakerAmount');
        grandmaBakerAmount = parseInt(grandmaBakerAmount);
        grandmaBuildAmount = grandmaBakerAmount;
        updateAll();
    } else if (gameVersion > displayGameVersion) {
        alert(
            'Whoops! This save code if from a future version. Can we have your time machine?'
        );
        reset();
    } else {
        alert(
            'Well this sucks. Your save code is all messed up! Wha happened?'
        );
        reset();
    }
}
function update5sec() {
    document.title = pretzelBank.toFixed(1) + ' Pretzels';
}
function updateAll() {
    update5sec();
    updatePretzels();
    priceBuildings();
    updateClickers();
    updateGrandmas();
}
function updateNormal() {
    updatePretzels();
    priceBuildings();
    updateClickers();
    updateGrandmaBakers();
}
function updateBuildings() {
    updateClickers();
    updateGrandmas();
}
function updatePretzels() {
    document.getElementById('prtzlBank').innerHTML =
        'Pretzels: ' + pretzelBank.toFixed(1);
}
function updateClickers() {
    document.getElementById('clicker').innerHTML =
        'Clicker! ' + clickerAmount + ' Owned';
    document.getElementById('clicker_price').innerHTML =
        clickerPrice + ' Pretzels';
}
function updateGrandmas() {
    document.getElementById('grandma_baker').innerHTML =
        'Grandma Baker! ' + grandmaBakerAmount + ' Owned';
    document.getElementById('grandma_price').innerHTML =
        grandmaPrice + ' Pretzels';
}
function priceBuildings() {
    priceClickers();
    priceGrandmas();
}
function priceClickers() {
    clickerMath = Math.pow(1.25, clickerBuildAmount);
    clickerPrice = 15 * clickerMath;
}
function priceGrandmas() {
    grandmaMath = Math.pow(1.25, grandmaBuildAmount);
    grandmaPrice = 100 * grandmaMath;
}
function pretzelClicked() {
    pretzelBank = pretzelBank + PPC;
    totalPretzelCount = totalPretzelCount + PPC;
    document.getElementById('prtzlBank').innerHTML =
        'Pretzels: ' + pretzelBank.toFixed(1);
}
function reset() {
    reset1 = confirm('Are you sure you want to reset?');
    if (reset1 === true) {
    reset2 = confirm('Once you do this, there is no going back!');
    if (reset2 === true) {
    pretzelBank = 0;
    totalPretzelCount = 0;
    PPC = 1;

    clickerAmount = 0;
    clickerBuildAmount = 0;
    clickerPrice = 15;
    clickerInterval = false;

    grandmaBakerAmount = 0;
    grandmaBuildAmount = 0;
    grandmaPrice = 100;
    grandmaInterval = false;

    upgradeCount = 0;
    achievementCount = 0;

    prestigeCount = 0;
    prestigeMode = 0;
    prestigeChallenge = 0;
    activePrestigePercent = 0;

    displayGameVersion = 0.01;
    gameVersion = displayGameVersion;
    updateNormal();
    }
    else {
        alert('You made the right choice. Who would want to reset?')
    }}
        else {
        alert('You made the right choice. Who would want to reset?')
    }

}
function clickerCalc() {
    if ((clickerAmount = 0)) {
        return;
    } else if (clickerAmount >= 1) {
        clickerAddMath = clickerAmount * 0.1;
        pretzelBank = pretzelBank + clickerAddMath;
        totalPretzelCount = totalPretzelCount + clickerAddMath;
        updatePretzels();
    }
}
function buyClicker() {
    if (pretzelBank < clickerPrice) {
        alert("Umm, something's missing :/");
    } else if (pretzelBank >= clickerPrice) {
        pretzelBank = pretzelBank - clickerPrice;
        clickerAmount = clickerAmount + 1;
        clickerBuildAmount = clickerBuildAmount + 1;
        priceClickers();
        updateClickers();
        updatePretzels();
        if (clickerInterval === false) {
            setInterval(clickerCalc, 1000);
            clickerInterval = true;
        }
    } else {
        alert(
            'Huh. Unknown Error. Please report this with your browser console logs.',
            'If you do not know how do do this, please do not close your game until you do.'
        );
    }
}
function sellClicker() {
    if (clickerBuildAmount < 1) {
        alert('Why are ya tryna sell nothing nerd?');
    } else if (clickerBuildAmount >= 1) {
        clickerSellPrice = clickerPrice / 5;
        clickerAmount = clickerAmount - 1;
        clickerBuildAmount = clickerBuildAmount - 1;
        pretzelBank = pretzelBank + clickerSellPrice;
        priceClickers();
        updateClickers();
        updatePretzels();
    } else {
        alert(
            'Huh. Unknown Error. Please report this with your browser console logs.',
            'If you do not know how do do this, please do not close your game until you do.'
        );
    }
}
function grandmaCalc() {
    if ((grandmaBakerAmount = 0)) {
        return;
    } else if (grandmaBakerAmount >= 1) {
        grandmaAddMath = grandmaBakerAmount;
        pretzelBank = pretzelBank + grandmaAddMath;
        totalPretzelCount = totalPretzelCount + grandmaAddMath;
        updatePretzels();
    }
}
function buyGrandma() {
    if (pretzelBank < grandmaPrice) {
        alert("Umm, Something's missing :/");
    } else if (pretzelBank <= grandmaPrice) {
        pretzelBank = pretzelBank - grandmaPrice;
        grandmaBakerAmount = grandmaBakerAmount + 1;
        grandmaBuildAmount = grandmaBuildAmount + 1;
        priceGrandmas();
        updateGrandmas();
        updatePretzels();
        if (grandmaInterval === false) {
            setInterval(grandmaCalc, 1000);
            grandmaInterval = true;
        }
    } else {
        alert(
            'Huh. Unknown Error. Please report this with your browser console logs.',
            'If you do not know how do do this, please do not close your game until you do.'
        );
    }
}
function sellGrandma() {
    if (grandmaBuildAmount < 1) {
        alert('Why are ya tryna sell nothing nerd?');
    } else if (grandmaBbuildAmount >= 1) {
        grandmaSellPrice = grandmaPrice / 5;
        grandmaBakerAmount = grandmaBakerAmount - 1;
        grandmaBuildAmount = grandmaBuildAmount - 1;
        pretzelBank = pretzelBank + grandmaSellPrice;
        priceClickers();
        updateGrandmas();
        updatePretzels();
    } else {
        alert(
            'Huh. Unknown Error. Please report this with your browser console logs.',
            'If you do not know how do do this, please do not close your game until you do.'
        );
    }
}
function processStart() {
    document.getElementById('version').innerHTML =
        'Version: ' + displayGameVersion;
    load();
    setInterval(save, 60000);
    setInterval(update5sec, 5000);
    if (clickerBuildAmount >= 1) {
        setInterval(clickerCalc, 1000);
        clickerInterval = true;
    }
    if (grandmaBuildAmount >= 1) {
        setInterval(grandmaCalc, 1000);
        grandmaInterval = true;
    }
}
window.onload = processStart();
