var pretzelBank = 0;
var totalPretzelCount = 0;
var PPC = 1;
var PPS = 0;
var highestPPS = 0;

var clickerAmount = 0;
var clickerBuildAmount = 0;
var clickerPrice = 15;

var grandmaBakerAmount = 0;
var grandmaBuildAmount = 0;
var grandmaPrice =  100;

var grandpaBakerAmount = 0;
var grandpaBuildAmount = 0;
var grandpaPrice = 500;
var grandpaSimpMs = 0;
var grandpaPPS = 5;

var upgradeCount = 0;
var achievementCount = 0;

var prestigeCount = 0;
var prestigeMode = 0;
var prestigeChallenge = 0;
var activePrestigePercent = 0;

var beta = false;
var displayGameVersion = 0.04;
var gameVersion = localStorage.getItem('gameVersion');
var BgameVersion = localStorage.getItem('BgameVersion');

function save() {
    if (window.location.href.indexOf('/beta')>-1) beta = true;

    if (beta = true) Bsave();
    else Nsave();
};
function Nsave() {
    localStorage.setItem('gameVersion', displayGameVersion);
    localStorage.setItem('pretzelBank', pretzelBank);
    localStorage.setItem('totalPretzelCount', totalPretzelCount);
    localStorage.setItem('highestPPS', highestPPS);
    localStorage.setItem('clickerAmount', clickerAmount);
    localStorage.setItem('grandmaBakerAmount', grandmaBakerAmount);
    localStorage.setItem('grandpaBakerAmount', grandpaBakerAmount);
    console.log('Game Saved!');
};
function Bsave() {
    localStorage.setItem('BgameVersion', displayGameVersion);
    localStorage.setItem('BpretzelBank', pretzelBank);
    localStorage.setItem('BtotalPretzelCount', totalPretzelCount);
    localStorage.setItem('BhighestPPS', highestPPS);
    localStorage.setItem('BclickerAmount', clickerAmount);
    localStorage.setItem('BgrandmaBakerAmount', grandmaBakerAmount);
    localStorage.setItem('BgrandpaBakerAmount', grandpaBakerAmount);
    console.log('Game Saved!');
};
function load() {
    if (!gameVersion) {
        errReset();
        save();
        return load();
    }else if (BgameVersion < displayGameVersion) {
        if (window.location.href.indexOf('/beta')>-1) beta = true;

        if (beta = true) {
            var verBox = document.getElementById("beta");
            verBox.style.display = "hidden";
        }else if (beta = false) {
            var verBox = document.getElementById("live");
            verBox.style.display = "hidden";
        }

        pretzelBank = localStorage.getItem('pretzelBank');
        totalPretzelCount = localStorage.getItem('totalPretzelCount');
        highestPPS = localStorage.getItem('highestPPS');
        pretzelBank = parseInt(pretzelBank);
        totalPretzelCount = parseInt(totalPretzelCount);
        highestPPS = parseInt(highestPPS);

        clickerAmount = localStorage.getItem('clickerAmount');
        clickerAmount = parseInt(clickerAmount);
        clickerBuildAmount = clickerAmount;

        grandmaBakerAmount = localStorage.getItem('grandmaBakerAmount');
        grandmaBakerAmount = parseInt(grandmaBakerAmount);
        grandmaBuildAmount = grandmaBakerAmount;

        updateAll();
        return save();
    }else if (BgameVersion = displayGameVersion) {
        if (window.location.href.indexOf('/beta')>-1) beta = true;

        if (beta = true) {
            var verBox = document.getElementById("beta");
            verBox.style.display = "none";

            pretzelBank = localStorage.getItem('BpretzelBank');
            totalPretzelCount = localStorage.getItem('BtotalPretzelCount');
            highestPPS = localStorage.getItem('BhighestPPS');
            pretzelBank = parseInt(pretzelBank);
            totalPretzelCount = parseInt(totalPretzelCount);
            highestPPS = parseInt(highestPPS);

            clickerAmount = localStorage.getItem('BclickerAmount');
            clickerAmount = parseInt(clickerAmount);
            clickerBuildAmount = clickerAmount;

            grandmaBakerAmount = localStorage.getItem('BgrandmaBakerAmount');
            grandmaBakerAmount = parseInt(grandmaBakerAmount);
            grandmaBuildAmount = grandmaBakerAmount;

            grandpaBakerAmount = localStorage.getItem('BgrandpaBakerAmount');
            grandpaBakerAmount = parseInt(grandpaBakerAmount);
            grandpaBuildAmount = grandpaBakerAmount;
            return updateAll();
        }else if (beta = false) {
            var verBox = document.getElementById("live");
            verBox.style.display = "none";

            pretzelBank = localStorage.getItem('pretzelBank');
            totalPretzelCount = localStorage.getItem('totalPretzelCount');
            highestPPS = localStorage.getItem('highestPPS');
            pretzelBank = parseInt(pretzelBank);
            totalPretzelCount = parseInt(totalPretzelCount);
            highestPPS = parseInt(highestPPS);

            clickerAmount = localStorage.getItem('clickerAmount');
            clickerAmount = parseInt(clickerAmount);
            clickerBuildAmount = clickerAmount;

            grandmaBakerAmount = localStorage.getItem('grandmaBakerAmount');
            grandmaBakerAmount = parseInt(grandmaBakerAmount);
            grandmaBuildAmount = grandmaBakerAmount;

            grandpaBakerAmount = localStorage.getItem('grandpaBakerAmount');
            grandpaBakerAmount = parseInt(grandpaBakerAmount);
            grandpaBuildAmount = grandpaBakerAmount;
            return updateAll();
        }
    }else if (gameVersion > displayGameVersion) {
        alert('Whoops! This save code if from a future version. Can we have your time machine?');
        errReset();
        save();
        return load();
    }else {
        alert('Well this sucks. Your save code is all messed up! Wha happened?')
        errReset();
        save();
        return load();
    }
};
function update5sec() {
    document.title = pretzelBank.toFixed(1) + ' Pretzels';
    pretzelsPSCalc()
};
function updateAll() {
    update5sec();
    updateNormal();
    updateGrandmas();
    updateVersion();
};
function updateNormal() {
    updatePretzels();
    updateBuildings();
};
function updateBuildings() {
    updateClickers();
    updateGrandmas();
    updateGrandpas();
};
function updatePretzels() {
    document.getElementById('prtzelBank').innerHTML = 'Pretzels: ' + pretzelBank.toFixed(1);
};
function updateClickers() {
    document.getElementById('clicker').innerHTML = 'Clicker! ' + clickerAmount + ' Owned';

    clickerMath = Math.pow(1.25, clickerBuildAmount);
    clickerPrice = 15 * clickerMath;
    clickerPrice = clickerPrice.toFixed(1);
    clickerPrice = parseInt(clickerPrice);
    if (clickerPrice === 666 || clickerPrice === 6666 || clickerPrice === 66666 || clickerPrice === 666666) {
        clickerPrice = clickerPrice + 1;
    }
    
    document.getElementById('clicker_price').innerHTML = 'Cost: ' + clickerPrice + ' Pretzels';
};
function updateGrandmas() {
    document.getElementById('grandma_baker').innerHTML = 'Grandma Baker! ' + grandmaBakerAmount + ' Owned';

    grandmaMath = Math.pow(1.25, grandmaBuildAmount);
    grandmaPrice = 100 * grandmaMath;
    grandmaPrice = grandmaPrice.toFixed(1);
    grandmaPrice = parseInt(grandmaPrice);
    if (grandmaPrice === 666 || grandmaPrice === 6666 || grandmaPrice === 66666 || grandmaPrice === 666666) {
        grandmaPrice = grandmaPrice + 1;
    }

    document.getElementById('grandma_price').innerHTML = 'Cost: ' + grandmaPrice + ' Pretzels';

    grandpaSimpCalc();
};
function grandpaSimpCalc() {
    grandmaSimpRaw = grandmaBakerAmount;
    
    while (grandmaSimpRaw >= 25) {
        grandmaSimpRaw = grandmaSimpRaw - 25;
        grandpaSimpMs = grandpaSimpMs + 2;
    }
    updateGrandpas();
}
function updateGrandpas() {
    document.getElementById('grandpa_baker').innerHTML = 'Grandpa Baker! ' + grandpaBakerAmount + ' Owned';

    grandpaMath = Math.pow(1.25, grandpaBuildAmount);
    grandpaPrice = 500 * grandpaMath;
    grandpaPrice = grandpaPrice.toFixed(1);
    grandpaPrice = parseInt(grandpaPrice);
    if (grandpaPrice === 666 || grandpaPrice === 6666 || grandpaPrice === 66666 || grandpaPrice === 666666) {
        grandpaPrice = grandpaPrice + 1;
    }

    document.getElementById('grandpa_baker_price').innerHTML = 'Cost: ' + grandpaPrice + ' Pretzels';
};
function updateVersion() {
    if (beta = false) {
        document.getElementById('version').innerHTML = 'Version: ' + displayGameVersion;
    }else if (beta = true) {
        document.getElementById('version').innerHTML = 'Version: ' + displayGameVersion + ' BETA';
    }
};
function pretzelClicked() {
    pretzelBank = pretzelBank + PPC;
    totalPretzelCount = totalPretzelCount + PPC;
    updatePretzels();
};
function reset() {
    reset1 = confirm('Are you sure you want to reset?');
    if (reset1 === true) {
        reset2 = confirm('Once you do this, there is no going back!');
        if (reset2 === true) {
            clearInterval(addPPS, 1000)
            pretzelBank = 0;
            totalPretzelCount = 0;
            PPC = 1;
            PPS = 0;
            highestPPS = 0;

            clickerAmount = 0;
            clickerBuildAmount = 0;
            clickerPrice = 15;

            grandmaBakerAmount = 0;
            grandmaBuildAmount = 0;
            grandmaPrice =  100;

            grandpaBakerAmount = 0;
            grandpaBuildAmount = 0;
            grandpaPrice = 500;
            grandpaSimpMs = 0;
            grandpaPPS = 5;

            upgradeCount = 0;
            achievementCount = 0;

            prestigeCount = 0;
            prestigeMode = 0;
            prestigeChallenge = 0;
            activePrestigePercent = 0;

            gameVersion = displayGameVersion;
            updateNormal();
            setInterval(addPPS, 1000);
        }else {
            alert('You made the right choice. Who would want to reset?')
        }
    }else {
        alert('You made the right choice. Who would want to reset?')
    }
};
function errReset() {
    clearInterval(addPPS, 1000)
    pretzelBank = 0;
    totalPretzelCount = 0;
    PPC = 1;
    PPS = 0;
    highestPPS = 0;

    clickerAmount = 0;
    clickerBuildAmount = 0;
    clickerPrice = 15;

    grandmaBakerAmount = 0;
    grandmaBuildAmount = 0;
    grandmaPrice =  100;

    grandpaBakerAmount = 0;
    grandpaBuildAmount = 0;
    grandpaPrice = 500;
    grandpaSimpMs = 0;
    grandpaPPS = 5;

    upgradeCount = 0;
    achievementCount = 0;

    prestigeCount = 0;
    prestigeMode = 0;
    prestigeChallenge = 0;
    activePrestigePercent = 0;

    gameVersion = displayGameVersion;
    updateNormal();
    setInterval(addPPS, 1000);
};
function buyClicker() {
    if (pretzelBank < clickerPrice) {
        return alert('Umm, something\'s missing :/ Check your Bank!');
    }else if (pretzelBank >= clickerPrice) {
        pretzelBank = pretzelBank - clickerPrice;
        clickerAmount = clickerAmount + 1;
        clickerBuildAmount = clickerBuildAmount + 1;
        updateClickers();
        updatePretzels();
        pretzelsPSCalc();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function sellClicker() {
    if (clickerBuildAmount < 1) {
        return alert('Why are ya tryna sell nothing ya nerd?');
    }else if (clickerBuildAmount >= 1) {
        clickerSellPrice = clickerPrice / 5;
        clickerAmount = clickerAmount - 1;
        clickerBuildAmount = clickerBuildAmount - 1;
        pretzelBank = pretzelBank + clickerSellPrice;
        updateClickers();
        updatePretzels();
        pretzelsPSCalc();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function buyGrandma() {
    if (pretzelBank < grandmaPrice) {
        return alert('Umm, Something\'s missing :/ Check your Bank!');
    }else if (pretzelBank >= grandmaPrice) {
        pretzelBank = pretzelBank - grandmaPrice
        grandmaBakerAmount = grandmaBakerAmount + 1;
        grandmaBuildAmount = grandmaBuildAmount + 1;
        updateGrandmas();
        updatePretzels();
        pretzelsPSCalc();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function sellGrandma() {
    if (grandmaBuildAmount < 1) {
        return alert('Why are ya tryna sell nothing ya nerd?');
    }else if (grandmaBbuildAmount >= 1) {
        grandmaSellPrice = grandmaPrice / 5;
        grandmaBakerAmount = grandmaBakerAmount - 1;
        grandmaBuildAmount = grandmaBuildAmount - 1;
        pretzelBank = pretzelBank + grandmaSellPrice;
        updateGrandmas();
        updatePretzels();
        pretzelsPSCalc();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function buyGrandpa() {
    if (pretzelBank < grandpaPrice) {
        return alert('Umm, something\'s missing :/ Check your Bank!')
    }else if (pretzelBank >= grandpaPrice) {
        pretzelBank = pretzelBank - grandpaPrice;
        grandpaBakerAmount = grandpaBakerAmount + 1;
        grandpaBuildAmount = grandpaBuildAmount + 1;
        updateGrandpas();
        updatePretzels();
        pretzelsPSCalc();
    }else {
        return alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.')
    }
}
function sellGrandpa() {
    if (grandpaBuildAmount < 1) {
        return alert('Why are tryna sell nothing ya nerd?!');
    }else if (grandpaBuildAmount >= 1) {
        grandpaSellPrice = grandpaPrice / 5;
        grandpaBakerAmount = grandpaBakerAmount - 1;
        grandpaBuildAmount = grandpaBuildAmount -1;
        pretzelBank = pretzelBank + grandpaSellPrice;
        updateGrandpas();
        updatePretzels();
        pretzelsPSCalc();
    }
}
function pretzelsPSCalc() {
    if (clickerAmount === 0) {
        var clickerAddMath = 0;
    }else if (clickerAmount >= 1) {
        clickerAddMath = clickerAmount * .1;
    }

    if (grandmaBakerAmount === 0) {
        var grandmaAddMath = 0;
    }else if (grandmaBakerAmount >= 1) {
        grandmaAddMath = grandmaBakerAmount;
    }

    if (grandpaBakerAmount === 0) {
        var grandpaAddMath = 0;
    }else if (grandpaBakerAmount >= 1) {
        grandpaPPG = 5 + grandpaSimpMs;
        grandpaAddMath = grandmaBakerAmount * grandpaPPG;
        console.log(grandpaPPG);
    }

    PPS = grandmaAddMath + clickerAddMath + grandpaAddMath;
    console.log(grandpaAddMath);
};
function addPPS() {
    if (PPS >= .1) {
        pretzelBank = pretzelBank + PPS;
        totalPretzelCount = totalPretzelCount + PPS;
        updatePretzels();
    }else {
        return;
    }
};
function processStart() {
    load();
    setInterval(save, 60000);
    setInterval(update5sec, 5000);
    setInterval(addPPS, 1000)
};
window.onload = processStart();
