//variables
let hearts = 0; 
let heartsPerClick = 1;
let heartPerSecond = 0;
let roseCost = 20; //cost of Rose
let letterCost = 100; //cost of Letter
let kissesCost = 500; //cost of Kisses
let chocolateCost = 1500; //cost of Chocolate
let cupidCost = 2000; //cost of Cupid
let chocolateboxCost = 3000; //cost of ChocolateBox
let chocolatestrawberryCost = 6000; //cost of ChocolateStrawberry
let shootingheartCost = 15000; //cost of Shooting Heart 
let pinkoshaCost = 45000; // cost of pink osha

//purchased variables
let rosesPurchased = 0;
let lettersPurchased = 0;
let kissesPurchased = 0;
let chocolatesPurchased = 0;
let cupidsPurchased = 0;
let chocolateboxesPurchased = 0;
let chocolatestrawberriesPurchased = 0;
let shootingheartsPurchased = 0;
let pinkoshasPurchased = 0;


//start game function
function startGame() {
    const playerName = document.getElementById("playerName").value || "player";
    document.getElementById("welcomeScreen").style.display = "none";
    localStorage.setItem("playerName", playerName);
    document.getElementById("usernameDisplay").textContent = `Welcome, ${playerName}!`;
    document.getElementById("playerName").focus();
}

function checkGameStart() {
    const playerName = localStorage.getItem("playerName");
    if (playerName) {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("usernameDisplay").textContent = `Welcome back, ${playerName}!`;
    } else {
        document.getElementById("welcomeScreen").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", checkGameStart);

const milestones = [
    { hearts: 100, story: "You've made your first 100 Hearts!"},
    { hearts: 500, story: "You've got the machines to start working!"},
    { hearts: 1500, story: "The air is starting to smell like those Heart Cookies!"},
    { hearts: 5000, story: "Valentines Cookie Factory is on the news! Are the heart stars aligning!"},
    { hearts: 10000, story: "The Factory is starting to attract everyone from Valentine Town again!"},
    { hearts: 30000, story: "Couples from all around the world are coming to try your cookies!"},
    { hearts: 100000, story: "The factory is getting back on its feet! The Heart Cookies are shining!"},
    { hearts: 1500000, story: "Valentine Town names a holiday after you, celebrating love and cookies!"},
    { hearts: 3500000, story: "A famous love story movie is filmed at your factory, making it a landmark, called Hearts Unbaked!"},
    { hearts: 85000000, story: "Your Heart Cookies are now part of the space missions, symbolizing Eerth's love."},
    { hearts: 100000000, story: "The factory has inspired a global movement of kindness and giving."},
    { hearts: 160000000, story: "You've founded 'Heartworks,' a charity spreading love and support worldwide."},
    { hearts: 250000000, story: "The factory becomes a legendary monument of love, known across galaxies."},
] 

// Elements and Listeners
let heart = document.getElementById("heart"); // heart image grrr
heart.addEventListener('click', clickHeart); //clickies
 
let counter = document.getElementById("counter"); // counter paragraph grrr

let rose = document.getElementById("rose"); // rose upgrade grr
rose.addEventListener("click", buyRose); //clickies

let letter = document.getElementById("letter"); // letter upgrade grr
letter.addEventListener("click", buyLetter); //clickies

let kisses = document.getElementById("kisses"); // kisses upgrade grr
kisses.addEventListener("click", buyKisses); //clickies

let chocolate = document.getElementById("chocolate"); // chocolate upgrade grr
chocolate.addEventListener("click", buyChocolate); //clickies

let cupid = document.getElementById("cupid"); // cupid upgrade grr 
cupid.addEventListener("click", buyCupid); //clickies

let chocolatebox = document.getElementById("chocolatebox"); // chocolatebox upgrade grr
chocolatebox.addEventListener("click", buyChocolateBox); //clickies

let chocolatestrawberry = document.getElementById("chocolatestrawberry"); // chocolate strawberries upgrade grr
chocolatestrawberry.addEventListener("click", buyChocolateStrawberry); //clickies

let shootingheart = document.getElementById("shootingheart"); // shootingheart upgrade grrr
shootingheart.addEventListener("click", buyShootingHeart); //clickies

let pinkosha = document.getElementById("pinkosha");
pinkosha.addEventListener("click", buyPinkOsha);

let roseCostText = document.getElementById("rose_cost"); // rose cost text  grr
let letterCostText = document.getElementById("letter_cost"); // letter cost text grr
let kissesCostText = document.getElementById("kisses_cost");  // kisses cost text grr
let chocolateCostText = document.getElementById("chocolate_cost"); // chocolate cost text grr
let cupidCostText = document.getElementById("cupid_cost"); // cupid cost text grr
let chocolateboxCostText = document.getElementById("chocolate_box-cost"); // chocolate box cost text grr 
let chocolatestrawberryCostText = document.getElementById("chocolate_strawberry-cost"); // chocolate strawberry cost text grr
let shootingheartCostText = document.getElementById("shootingheart-cost"); // shooting heart cost text grr
let pinkoshaCostText = document.getElementById("pinkosha-cost"); // pink osha cost text 


// function to make X button on achievement pop up to work 
document.getElementById("milestoneMessage").addEventListener("click", function(event) {
    if (event.target.id == "closeMilestoneMessage") {
        document.getElementById("milestoneMessage").style.display = "none";
    }
}); 


// setting menu function 
document.getElementById("settingsButton").addEventListener("click", function() {
    const settingsMenu = document.getElementById("settingsMenu");
    if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
        settingsMenu.style.display = "flex"; 
    } else {
        settingsMenu.style.display = "none";
    }
});

// restarting button
document.getElementById("restartGameButton").addEventListener("click", function() {
    if (confirm("Are you sure you want to restart the game? All progress will be lost.")) {
        localStorage.clear();
        location.reload();
    }
});

//save and load button function

function saveGame() {
    const gameState = {
        hearts: hearts,
        heartsPerClick: heartsPerClick,
        rosesPurchased: rosesPurchased,
        lettersPurchased: lettersPurchased,
        kissesPurchased: kissesPurchased,
        chocolatesPurchased: chocolatesPurchased,
        cupidsPurchased: cupidsPurchased,
        chocolateboxesPurchased: chocolateboxesPurchased,
        chocolatestrawberriesPurchased: chocolatestrawberriesPurchased,
        shootingheartsPurchased: shootingheartsPurchased,
        pinkoshasPurchased: pinkoshasPurchased,
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));
    alert('Game saved successfully!');
}

document.getElementById("saveGameButton").addEventListener("click", saveGame);

function loadGame() {
    const savedGameState = localStorage.getItem('gameState');
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);
        hearts = parseInt(gameState.hearts, 10) || 0;
        heartsPerClick = parseInt(gameState.heartsPerClick, 10) || 1;
        rosesPurchased = parseInt(gameState.rosesPurchased, 10) || 0;
        lettersPurchased = parseInt(gameState.lettersPurchased, 10) || 0;
        kissesPurchased = parseInt(gameState.kissesPurchased, 10) || 0;
        chocolatesPurchased = parseInt(gameState.chocolatesPurchased, 10) || 0;
        cupidsPurchased = parseInt(gameState.cupidsPurchased, 10) || 0;
        chocolateboxesPurchased = parseInt(gameState.chocolateboxesPurchased, 10) || 0;
        chocolatestrawberriesPurchased = parseInt(gameState.chocolatestrawberriesPurchased, 10) || 0;
        shootingheartsPurchased = parseInt(gameState.shootingheartsPurchased, 10) || 0;
        pinkoshasPurchased = parseInt(gameState.pinkoshasPurchased, 10) || 0;
        updateAllDisplays();
    }
}

document.addEventListener('DOMContentLoaded', loadGame);

function updateAllDisplays() {
    updateCounter();
    updateUpgradeCount();
    updateCosts();
}


//milestone function

function displayMilestoneMessage(message) {
    const messageElement = document.getElementById("milestoneMessage");
    const messageContent = document.createElement("div");
    messageContent.className = "milestone-message-content";
    messageContent.innerHTML = `<span id="closeMilestoneMessage" style="cursor: pointer;">&times;</span><p>${message}</p>`;
    messageElement.innerHTML = ``;
    messageElement.appendChild(messageContent);
    messageElement.style.display = "flex";
    
    document.getElementById("closeMilestoneMessage").onClick = function() {
        messageElement.style.display = "none";
    }
}

function checkMilestones() {
    const currentHearts = hearts;
    milestones.forEach(milestone => {
        if (currentHearts >= milestone.hearts && !milestone.reached) {
            milestone.reached = true;
            displayMilestoneMessage(milestone.story);   // works kekeke fixed
        }
    });
}


// upgrade functions 
function updateCounter() {
    counter.innerHTML = hearts;
}

function updateCosts() {
    roseCostText.innerHTML = roseCost; 
    letterCostText.innerHTML = letterCost;
    kissesCostText.innerHTML = kissesCost;
    chocolateCostText.innerHTML = chocolateCost;
    cupidCostText.innerHTML = cupidCost;
    chocolateboxCostText.innerHTML = chocolateboxCost;
    chocolatestrawberryCostText.innerHTML = chocolatestrawberryCost;
    shootingheartCostText.innerHTML = shootingheartCost;
    pinkoshaCostText.innerHTML = pinkoshaCost;
}

function updateUpgradeCount() {
    document.getElementById("rosesPurchased").innerHTML = `Roses Purchased: ${rosesPurchased}`;
    document.getElementById("lettersPurchased").innerHTML = `Letters Purchased: ${lettersPurchased}`; 
    document.getElementById("kissesPurchased").innerHTML = `Kisses Purchased: ${kissesPurchased}`; 
    document.getElementById("chocolatesPurchased").innerHTML = `Chocolates Purchased: ${chocolatesPurchased}`; 
    document.getElementById("cupidsPurchased").innerHTML = `Cupids Purchased: ${cupidsPurchased}`; 
    document.getElementById("chocolateboxesPurchased").innerHTML = `Chocolate Boxes Purchased: ${chocolateboxesPurchased}`; 
    document.getElementById("chocolatestrawberriesPurchased").innerHTML = `Chocolate Strawberries Purchased: ${chocolatestrawberriesPurchased}`; 
    document.getElementById("shootingheartsPurchased").innerHTML = `Shooting Hearts Purchased: ${shootingheartsPurchased}`; 
    document.getElementById("pinkoshasPurchased").innerHTML = `Pink Oshawatts Purchased: ${pinkoshasPurchased}`;
}  

function clickHeart() {
    console.log("Heart clicked."); //debugger line???? 
    hearts += heartsPerClick;
    updateCounter();
    checkMilestones();
    checkForCoupons();
}

function earnHearts() {
    hearts += heartPerSecond;
    updateCounter();
    checkForCoupons();
}

function buyRose() {
    if (hearts >= roseCost) {
        hearts -= roseCost;
        heartsPerClick += 1; 
        roseCost = Math.ceil(roseCost * 1.1);
        rosesPurchased += 1; //this allows to add at the timer
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyLetter() {
    if (hearts >= letterCost) {
        hearts -= letterCost;
        heartsPerClick += 2; 
        letterCost = Math.ceil(letterCost * 1.1);
        lettersPurchased += 1;
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyKisses() {
    if (hearts >= kissesCost) {
        hearts -= kissesCost;
        heartsPerClick += 3;
        kissesCost = Math.ceil(kissesCost * 1.1);
        kissesPurchased += 1;
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyChocolate() {
    if (hearts >= chocolateCost) {
        hearts -= chocolateCost;
        heartsPerClick += 4;
        chocolateCost = Math.ceil(chocolateCost * 1.1);
        chocolatesPurchased += 1; 
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyCupid() {
    if (hearts >= cupidCost) {
        hearts -= cupidCost;
        heartsPerClick += 5; 
        cupidCost = Math.ceil(cupidCost * 1.1);
        cupidsPurchased += 1; 
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyChocolateBox() {
    if (hearts >= chocolateboxCost) {
        hearts -= chocolateboxCost;
        heartsPerClick += 6;
        chocolateboxCost = Math.ceil(chocolateboxCost * 1.1);
        chocolateboxesPurchased += 1; 
        updateCounter();
        updateCosts(); 
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyChocolateStrawberry() {
    if (hearts >= chocolatestrawberryCost) {
        hearts -= chocolatestrawberryCost;
        heartsPerClick += 7;
        chocolatestrawberryCost = Math.ceil(chocolatestrawberryCost * 1.1);
        chocolatestrawberriesPurchased += 1; 
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyShootingHeart() {
    if (hearts >= shootingheartCost) {
        hearts -= shootingheartCost; 
        heartsPerClick += 8; 
        shootingheartCost = Math.ceil(shootingheartCost * 1.1);
        shootingheartsPurchased += 1;
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

function buyPinkOsha() {
    if (hearts >= pinkoshaCost) {
        hearts -= pinkoshaCost;
        heartsPerClick += 9;
        pinkoshaCost = Math.ceil(pinkoshaCost * 1.1);
        pinkoshasPurchased += 1;
        updateCounter();
        updateCosts();
        updateUpgradeCount();
        checkMilestones();
        checkForCoupons();
    }
}

