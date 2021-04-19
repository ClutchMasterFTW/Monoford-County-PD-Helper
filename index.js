//Variables
var charges = [
    charge0 = {
        name: "Capital Felony",
        class: "Capital Felony",
        sentence: 200,
        amount: 0,
        fine: 1000000
    },
    charge1 = {
        name: "Murder",
        class: "Felony",
        sentence: 20,
        amount: 0,
        fine: 1000000
    },
    charge2 = {
        name: "Murder of a Law Enforcement Officer (LEO)",
        class: "Felony",
        sentence: 30,
        amount: 0,
        fine: 1000000
    },
    charge3 = {
        name: "Possession of illegal substances",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 2500
    },
    charge4 = {
        name: "Distribution of illegal substances",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge5 = {
        name: "Hostage Taking (without deadly weapon)",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge6 = {
        name: "Hostage Taking (with a deadly weapon)",
        class: "Felony",
        sentence: 25,
        amount: 0,
        fine: 1000000
    },
    charge7 = {
        name: "Home Invasion/Breaking and Entering",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    },
    charge8 = {
        name: "Involentary Manslaughter",
        class: "Felony",
        sentence: 7.5,
        amount: 0,
        fine: 5000
    },
    charge9 = {
        name: "Assault",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 4500
    },
    charge10 = {
        name: "Assaulting a Law Enforcement Officer (LEO)",
        class: "Felony",
        sentence: 6.5,
        amount: 0,
        fine: 4750
    },
    charge11 = {
        name: "Involentary Vehicular Manslauter",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 3000
    },
    charge12 = {
        name: "Vehicular Manslauter",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge13 = {
        name: "Bank Robbery",
        class: "Felony",
        sentence: 60,
        amount: 0,
        fine: 1000000
    },
    charge14 = {
        name: "Gas Station Robbery",
        class: "Felony",
        sentence: 55,
        amount: 0,
        fine: 1000000
    },
    charge15 = {
        name: "Distributing illegal firearms",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    },
    charge16 = {
        name: "Terrorism",
        class: "Felony",
        sentence: 60,
        amount: 0,
        fine: 1000000
    },
    charge17 = {
        name: "Verbal threats towards a Citizen",
        class: "Misdeminor",
        sentence: 1,
        amount: 0,
        fine: 650
    },
    charge18 = {
        name: "Verbal threats towards an LEO",
        class: "Misdeminor",
        sentence: 1,
        amount: 0,
        fine: 750
    },
    charge19 = {
        name: "Fleeing and Eluding",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge20 = {
        name: "Possession of an illegal firearm",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 5000
    },
    charge21 = {
        name: "Driving Under the Influence (DUI)",
        class: "Misdeminor",
        sentence: 3.5,
        amount: 0,
        fine: 2500
    },
    charge22 = {
        name: "Corruption",
        class: "Felony",
        sentence: 30,
        amount: 0,
        fine: 1000000
    },
    charge23 = {
        name: "Mugging",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge24 = {
        name: "Grand Theft Auto",
        class: "Felony",
        sentence: 7.5,
        amount: 0,
        fine: 1000000
    },
    charge25 = {
        name: "Grand Theft Auto (of a government vehicle)",
        class: "Felony",
        sentence: 11.5,
        amount: 0,
        fine: 1000000
    },
    charge26 = {
        name: "Reckless Driving",
        class: "Misdeminor",
        sentence: 3,
        amount: 0,
        fine: 1250
    },
    charge27 = {
        name: "Unlawful Harrassment",
        class: "Misdeminor",
        sentence: 0,
        amount: 0,
        fine: 1000
    },
    charge28 = {
        name: "Obstruction of Justice",
        class: "Misdeminor",
        sentence: 5,
        amount: 0,
        fine: 2750
    },
    charge29 = {
        name: "Resisting Arrest",
        class: "Misdeminor",
        sentence: 2,
        amount: 0,
        fine: 1500
    },
    charge30 = {
        name: "Public Indecency",
        class: "Misdeminor",
        sentence: 1,
        amount: 0,
        fine: 1500
    },
    charge31 = {
        name: "Driving with an expired license",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 550
    },
    charge32 = {
        name: "Driving 5 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 50
    },
    charge33 = {
        name: "Driving 10 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 150
    },
    charge34 = {
        name: "Driving 15 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 300
    },
    charge35 = {
        name: "Driving 20 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 550
    },
    charge36 = {
        name: "Driving 25 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 750
    },
    charge37 = {
        name: "Driving 30 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 1000
    },
    charge38 = {
        name: "Driving 40+ mph over the speed limit",
        class: "Misdeminor",
        sentence: 1.5,
        amount: 0,
        fine: 2000
    }
];
var sentence = 0;
var fine = 0;

function loadCharges() {
    for (i = 0; i < charges.length; i++) {
        var chargeContainer = document.createElement("div");
        chargeContainer.id = "charge-container" + i;
        chargeContainer.style.border = "white solid 1px";
        chargeContainer.style.backgroundImage = "linear-gradient(#1E1E1E, black)";

        var charge = document.createElement("div");
        charge.id = "charge" + i;
        charge.innerHTML = charges[i].name;
        charge.style.color = "white";
        charge.style.padding = "10px 14px";
        charge.style.fontSize = "25px";

        var level = document.createElement("div");
        level.id = "level" + i;
        level.innerHTML = charges[i].class;
        if (charges[i].class == "Capital Felony") {
            level.style.color = "darkred";
        } else if (charges[i].class == "Felony") {
            level.style.color = "red";
        } else if (charges[i].class == "Misdeminor") {
            level.style.color = "orange";
        } else if (charges[i].class == "Infraction") {
            level.style.color = "yellow";
        }
        level.style.fontWeight = "bold";
        level.style.paddingLeft = "14px";
        level.style.paddingBottom = "10px";
        level.style.marginTop = "-10px";

        var chargeAmount = document.createElement("div");
        chargeAmount.id = "chargeAmount" + i;
        chargeAmount.innerHTML = charges[i].amount;
        chargeAmount.style.color = "white";
        chargeAmount.style.fontSize = "50px";
        chargeAmount.style.borderRight = "1px solid white";
        chargeAmount.style.borderLeft = "1px solid white";
        chargeAmount.style.width = "75px";
        chargeAmount.style.height = "100px";
        chargeAmount.style.position = "relative";
        chargeAmount.style.marginTop = "-4vw";
        chargeAmount.style.left = "28vw";
        chargeAmount.style.textAlign = "center";
        chargeAmount.style.lineHeight = "100px";
        //chargeAmount.style.padding = "0px";
        //chargeAmount.style.display = "inline";

        var chargeAdd = document.createElement("div");
        chargeAdd.id = "chargeAdd" + i;
        chargeAdd.style.color = "white";
        chargeAdd.style.fontSize = "50px";
        chargeAdd.style.borderRight = "1px solid white";
        chargeAdd.style.width = "75px";
        chargeAdd.style.height = "100px";
        chargeAdd.style.position = "relative";
        chargeAdd.style.marginTop = "-5.25vw";
        chargeAdd.style.left = "32vw";
        chargeAdd.style.textAlign = "center";
        chargeAdd.style.lineHeight = "100px";
        chargeAdd.style.cursor = "pointer";
        chargeAdd.setAttribute("onclick", "addSentence(this.id)");
        var chargeAddImg = document.createElement("img");
        chargeAddImg.id = "chargeAddImg" + i;
        chargeAddImg.setAttribute("src", "images/plus.png");
        chargeAddImg.style.width = "40px";
        chargeAddImg.style.filter = "invert(100%)";
        chargeAddImg.style.userSelect = "none";

        var chargeRemove = document.createElement("div");
        chargeRemove.id = "chargeRemove" + i;
        chargeRemove.style.color = "white";
        chargeRemove.style.fontSize = "50px";
        chargeRemove.style.borderRight = "1px solid white";
        chargeRemove.style.width = "75px";
        chargeRemove.style.height = "100px";
        chargeRemove.style.position = "relative";
        chargeRemove.style.marginTop = "-5.25vw";
        chargeRemove.style.left = "36vw";
        chargeRemove.style.textAlign = "center";
        chargeRemove.style.lineHeight = "100px";
        chargeRemove.style.cursor = "pointer";
        chargeRemove.setAttribute("onclick", "removeSentence(this.id)");
        var chargeRemoveImg = document.createElement("img");
        chargeRemoveImg.id = "chargeRemoveImg" + i;
        chargeRemoveImg.setAttribute("src", "images/minus.png");
        chargeRemoveImg.style.width = "40px";
        chargeRemoveImg.style.filter = "invert(100%)";
        chargeRemoveImg.style.userSelect = "none";


        var chargesContainer = document.getElementById("charges-container");
        chargesContainer.appendChild(chargeContainer);
        chargeContainer.appendChild(charge);
        chargeContainer.appendChild(level);
        chargeContainer.appendChild(chargeAmount);
        chargeContainer.appendChild(chargeAdd);
        chargeAdd.appendChild(chargeAddImg);
        chargeContainer.appendChild(chargeRemove);
        chargeRemove.appendChild(chargeRemoveImg);
    }
}

loadCharges();

function addSentence(param) {
    var sliced = param.slice(9);
    sentence += charges[sliced].sentence;
    charges[sliced].amount++;
    document.getElementById("chargeAmount" + sliced).innerHTML = charges[sliced].amount;
    if (sentence >= 200) {
        document.getElementById("sentence").innerHTML = "Execution";
        document.getElementById("sentence-units").innerHTML = "(Or 60 years)"
        document.getElementById("sentence").style.fontSize = "100px";
        document.getElementById("sentence").style.color = "darkred";
        document.getElementById("sentence-container").style.width = "25vw";
    } else if (sentence >= 60 && sentence < 200) {
        document.getElementById("sentence").innerHTML = "60";
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "red";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 60 && sentence > 45) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "red";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 45 && sentence > 30) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "orange";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 30 && sentence > 10) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "yellow";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 10) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "#54ff00";
        document.getElementById("sentence-container").style.width = "35vw";
    }
    if (charges[sliced].fine < 1000000) {
        fine += charges[sliced].fine;
        document.getElementById("fine").innerHTML = "$" + fine;
        document.getElementById("fine").style.fontSize = "150px";
        if (fine <= 500) {
            document.getElementById("fine").style.color = "#54ff00";
        } else if (fine <= 1000 && fine > 500) {
            document.getElementById("fine").style.color = "yellow";
        } else if (fine <= 2000 && fine > 1000) {
            document.getElementById("fine").style.color = "orange";
        } else if (fine <= 5000 && fine > 2000) {
            document.getElementById("fine").style.color = "red";
        } else if (fine < 5000) {
            document.getElementById("fine").style.color = "red";
        }
    } else {
        document.getElementById("fine").innerHTML = "Not Ticketable";
        document.getElementById("fine").style.fontSize = "100px";
        document.getElementById("fine").style.color = "darkred";
    }
}

function removeSentence(param) {
    var sliced = param.slice(12);
    if (charges[sliced].fine < 1000000 && charges[sliced].amount > 0) {
        fine -= charges[sliced].fine;
        document.getElementById("fine").innerHTML = "$" + fine;
        document.getElementById("fine").style.fontSize = "150px";
        if (fine <= 500) {
            document.getElementById("fine").style.color = "#54ff00";
        } else if (fine <= 1000 && fine > 500) {
            document.getElementById("fine").style.color = "yellow";
        } else if (fine <= 2000 && fine > 1000) {
            document.getElementById("fine").style.color = "orange";
        } else if (fine <= 5000 && fine > 2000) {
            document.getElementById("fine").style.color = "red";
        } else if (fine < 5000) {
            document.getElementById("fine").style.color = "red";
        }
    } else {
        if(charges[sliced].amount > 0) {
            document.getElementById("fine").innerHTML = "Not Ticketable";
            document.getElementById("fine").style.fontSize = "100px";
            document.getElementById("fine").style.color = "darkred";
        }
    }
    if (sentence != 0 && charges[sliced].amount != 0) {
        sentence -= charges[sliced].sentence;
        charges[sliced].amount--;
        document.getElementById("chargeAmount" + sliced).innerHTML = charges[sliced].amount;
    }
    if (sentence >= 200) {
        document.getElementById("sentence").innerHTML = "Execution";
        document.getElementById("sentence-units").innerHTML = "(Or 60 years)"
        document.getElementById("sentence").style.fontSize = "100px";
        document.getElementById("sentence").style.color = "darkred";
        document.getElementById("sentence-container").style.width = "25vw";
    } else if (sentence >= 60 && sentence < 200) {
        document.getElementById("sentence").innerHTML = "60";
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "red";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 60 && sentence > 45) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "red";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 45 && sentence > 30) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "orange";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 30 && sentence > 10) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "yellow";
        document.getElementById("sentence-container").style.width = "35vw";
    } else if (sentence <= 10) {
        document.getElementById("sentence").innerHTML = sentence;
        document.getElementById("sentence").style.fontSize = "150px";
        document.getElementById("sentence-units").innerHTML = "year(s) (minutes)"
        document.getElementById("sentence").style.color = "#54ff00";
        document.getElementById("sentence-container").style.width = "35vw";
    }
}