var pretzelBank = 0;
var totalPretzelCount = 0;
var PPC = 1;
var PPS = 0;

var clickerAmount = 0;
var clickerBuildAmount = 0;
var clickerPrice = 15;

var grandmaBakerAmount = 0;
var grandmaBuildAmount = 0;
var grandmaPrice =  100;

var upgradeCount = 0;
var achievementCount = 0;

var prestigeCount = 0;
var prestigeMode = 0;
var prestigeChallenge = 0;
var activePrestigePercent = 0;

var beta = false;
var displayGameVersion = 0.02;
var gameVersion = localStorage.getItem('gameVersion');

function save() {
    localStorage.setItem('gameVersion', displayGameVersion);
    localStorage.setItem('pretzelBank', pretzelBank);
    localStorage.setItem('totalPretzelCount', totalPretzelCount);
    localStorage.setItem('clickerAmount', clickerAmount);
    localStorage.setItem('grandmaBakerAmount', grandmaBakerAmount);
    console.log('Game Saved!');
};
function load() {
    if (!gameVersion) {
        reset();
        return save();
    }else if (gameVersion = displayGameVersion) {
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
    }else if (gameVersion > displayGameVersion) {
        alert('Whoops! This save code if from a future version. Can we have your time machine?');
        reset();
    }else {
        alert('Well this sucks. Your save code is all messed up! Wha happened?')
        reset();
    }
};
function update5sec() {
    document.title = pretzelBank.toFixed(1) + ' Pretzels';
    pretzelsPSCalc()
};
function updateAll() {
    update5sec();
    updatePretzels();
    priceBuildings();
    updateClickers();
    updateGrandmas();
    updateVersion();
};
function updateNormal() {
    updatePretzels();
    priceBuildings();
    updateClickers();
    updateGrandmas();
};
function updateBuildings() {
    updateClickers();
    updateGrandmas();
};
function updatePretzels() {
    document.getElementById('prtzelBank').innerHTML = 'Pretzels: ' + pretzelBank.toFixed(1);
};
function updateClickers() {
    document.getElementById('clicker').innerHTML = 'Clicker! ' + clickerAmount + ' Owned';
    document.getElementById('clicker_price').innerHTML = clickerPrice + ' Pretzels';
};
function updateGrandmas() {
    document.getElementById('grandma_baker').innerHTML = 'Grandma Baker! ' + grandmaBakerAmount + ' Owned';
    document.getElementById('grandma_price').innerHTML = grandmaPrice + ' Pretzels';
};
function updateVersion() {
    document.getElementById('version').innerHTML = 'Version: ' + displayGameVersion;
};
function priceBuildings() {
    priceClickers();
    priceGrandmas();
};
function priceClickers() {
    clickerMath = Math.pow(1.25, clickerBuildAmount);
    clickerPrice = 15 * clickerMath;
    clickerPrice = clickerPrice.toFixed(1);
    clickerPrice = parseInt(clickerPrice);
};
function priceGrandmas() {
    grandmaMath = Math.pow(1.25, grandmaBuildAmount);
    grandmaPrice = 100 * grandmaMath;
    grandmaPrice = grandmaPrice.toFixed(1);
    grandmaPrice = parseInt(grandmaPrice);
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

            clickerAmount = 0;
            clickerBuildAmount = 0;
            clickerPrice = 15;

            grandmaBakerAmount = 0;
            grandmaBuildAmount = 0;
            grandmaPrice = 100;

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
function buyClicker() {
    if (pretzelBank < clickerPrice) {
        alert('Umm, something\'s missing :/');
    }else if (pretzelBank >= clickerPrice) {
        pretzelBank = pretzelBank - clickerPrice;
        clickerAmount = clickerAmount + 1;
        clickerBuildAmount = clickerBuildAmount + 1;
        priceClickers();
        updateClickers();
        updatePretzels();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function sellClicker() {
    if (clickerBuildAmount < 1) {
        alert('Why are ya tryna sell nothing nerd?');
    }else if (clickerBuildAmount >= 1) {
        clickerSellPrice = clickerPrice / 5;
        clickerAmount = clickerAmount - 1;
        clickerBuildAmount = clickerBuildAmount - 1;
        pretzelBank = pretzelBank + clickerSellPrice;
        priceClickers();
        updateClickers();
        updatePretzels();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function buyGrandma() {
    if (pretzelBank < grandmaPrice) {
        alert('Umm, Something\'s missing :/');
    }else if (pretzelBank >= grandmaPrice) {
        pretzelBank = pretzelBank - grandmaPrice
        grandmaBakerAmount = grandmaBakerAmount + 1;
        grandmaBuildAmount = grandmaBuildAmount + 1;
        priceGrandmas();
        updateGrandmas();
        updatePretzels();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
function sellGrandma() {
    if (grandmaBuildAmount < 1) {
        alert('Why are ya tryna sell nothing nerd?');
    }else if (grandmaBbuildAmount >= 1) {
        grandmaSellPrice = grandmaPrice / 5;
        grandmaBakerAmount = grandmaBakerAmount - 1;
        grandmaBuildAmount = grandmaBuildAmount - 1;
        pretzelBank = pretzelBank + grandmaSellPrice;
        priceGrandmas();
        updateGrandmas();
        updatePretzels();
    }else {
        alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
    }
};
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
    PPS = grandmaAddMath + clickerAddMath;
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
function showVersions() {
    var verBox = document.getElementById("versions");
    verBox.style.display = "block";
};
function hideVersions() {
    var verBox = document.getElementById("versions");
    verBox.style.display = "none";
};
function processStart() {
    load();
    setInterval(save, 60000);
    setInterval(update5sec, 5000);
    setInterval(addPPS, 1000)
    hideVersions()
};
window.onload = processStart();
