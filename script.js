// array to store score of 'card1'
var card1 = [0];
// array to store score of 'card2'
var card2 = [0];
// for store a name of 'playerA' or teamA
var playerA = "";
playerA = playerA.trim(); //to remove white space
// for store a name of 'playerB' or teamB
var playerB = "";
playerB = playerB.trim(); //to remove white space

// objects for two '+1' and two '-1' buttons
var keyId = {
	1: { id: 1, task: "add", card: card1 },
	2: { id: 2, task: "sub", card: card1 },
	3: { id: 3, task: "add", card: card2 },
	4: { id: 4, task: "sub", card: card2 },
};

// objects for 'submit' and 'reset' buttons
var featuredBtn = {
	submit: { id: "submit" },
	reset: { id: "reset" },
};

// store audio to play when click
var audioScore = new Audio("./assets/Piano Chord 208.mp3");

// call a function if user click on button '+1"
addFun = (cardName) => {
	if (cardName === card1) {
		if (cardName.length < 11) {
			let point = cardName[cardName.length - 1] + 1;
			cardName.push(point);
			audioScore.currentTime = 0; // for playing audio on mutiple click
			audioScore.play();
			document.getElementById("teamAsc").innerHTML = `${
				cardName[cardName.length - 1]
			}`;
		} else {
			console.log("game over");
		}
	} else if (cardName === card2) {
		if (cardName.length < 11) {
			let point = cardName[cardName.length - 1] + 1;
			cardName.push(point);
			audioScore.currentTime = 0; // for playing audio on mutiple click
			audioScore.play();
			document.getElementById("teamBsc").innerHTML = `${
				cardName[cardName.length - 1]
			}`;
		} else {
			console.log("game over");
		}
	} else {
		console.log(error);
	}
};

// call a function if user click on button '-1"
subFun = (cardName) => {
	if (cardName.length > 1) {
		if (cardName === card1) {
			cardName.pop();
			audioScore.currentTime = 0; // for playing audio on mutiple click
			audioScore.play();
			document.getElementById("teamAsc").innerHTML = `${
				cardName[cardName.length - 1]
			}`;
		} else if (cardName === card2) {
			let point = cardName.length;
			cardName.pop();
			audioScore.currentTime = 0; // for playing audio on mutiple click
			audioScore.play();
			document.getElementById("teamBsc").innerHTML = `${
				cardName[cardName.length - 1]
			}`;
		} else {
			console.log(error);
		}
	} else {
		console.log("no more sub");
	}
};

/* // for form 'pop-up form' for submitting names of both team
	console.log(playerA);
	if (
		playerA != undefined &&
		playerA != null &&
		playerA != "" &&
		playerB != undefined &&
		playerB != null &&
		playerB != ""
	) {
		console.log("start");
	} else {
		document.getElementById("teamName").innerHTML = `
		<form id="formUser" action = "#" method = "post">
							<div class="container center text-center temNameMargin">
								<div class="row justify-content-md-center">
							<div class="col-lg-4">
								<input id="teamA" type="text" class="form-control margin" required placeholder="Team A">
							</div>
							<div class="col-lg-4">
							<input id="teamB" type="text" class="form-control margin" required placeholder="Team B">
							</div>
							<div class="col-lg-2">
								<button id="submit" type="button" class="btn btn-info btn margin">Submit</button>
							</div>
						</div>
					</div>
					</form>
				`;
	}
*/
// getting team name
/*
window.onload = teamName = (event) => {
	document.getElementById("teamName").innerHTML = `
						<div class="container center text-center temNameMargin">
							<div class="row justify-content-md-center">
						<div class="col-lg-4">
							<input type="text" class="form-control margin" placeholder="Team A">
						</div>
						<div class="col-lg-4">
						<input type="text" class="form-control margin" placeholder="Team B">
						</div>
						<div class="col-lg-2">
							<button id="reset" type="button" class="btn btn-info btn margin">Submit</button>
						</div>
					</div>
				</div>
			`;
};
*/
myFunction = (event) => {
	let id = event.toElement.id;
	if (id in keyId) {
		if (keyId[id].task === "add") {
			addFun(keyId[id].card);
		} else {
			subFun(keyId[id].card);
		}
	}
	/* //loop for setup a 'reset' and 'submit' buttons 
	else if (id in featuredBtn) {
		if (featuredBtn[id].id === "submit") {
			document.getElementById("submit").reset();
			document.getElementById("formUser").submit();
		} else if (featuredBtn[id].id === "reset") {
			document.getElementById("reset").reset();
		}
	}*/
};

document.addEventListener("click", myFunction);

// For getting current Year
let yearClass = document.getElementsByClassName("currentYear");
yearClass[0].innerHTML = `${new Date().getFullYear()}`;
yearClass[1].innerHTML = `${new Date().getFullYear()}`;
