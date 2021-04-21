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
    },
    charge39 = {
        name: "Parked Illegally",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 350
    },
    charge40 = {
        name: "Attempted Murder",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge41 = {
        name: "Attempted Murder of an LEO",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    }
];
var ranks = [
    rank1 = {
        name: "Police Chief",
        insignia: 8,
        description: "The head of the Police Department. The chief has various powers and absolute authority over all members of his department. The primary duties of the chief include oversight of officers, training cadets, and upkeeping the law.",
        playerRequirements: "Requires Whitelist",
        policeRequirements: "Requires Whitelist",
        callsign: "Alpha"
    },
    rank2 = {
        name: "Police Assistant Chief",
        insignia: 7,
        description: "The Assistant Chief is the second-in-command at the department. He supervises its operation and personnel when the Chief is occupied or has chosen to delegate responsibilities.",
        playerRequirements: 100,
        policeRequirements: 200,
        callsign: "Alpha"
    },
    rank3 = {
        name: "Police Lieutenant",
        insignia: 6,
        description: "The lieutenant is a high-ranking officer in the Police Department. During critical times, they are encouraged to step in as an acting chief, should the chief be incapacitated or unable to lead.",
        playerRequirements: 75,
        policeRequirements: 150,
        callsign: "Bravo"
    },
    rank4 = {
        name: "Police Sergeant II",
        insignia: 5,
        description: "A seasoned officer within the Police Department, the sergeant is tasked with leading patrols and micro-managing lower officers.",
        playerRequirements: 75,
        policeRequirements: 125,
        callsign: "Charlie"
    },
    rank5 = {
        name: "Police Sergeant",
        insignia: 4,
        description: "A seasoned officer within the Police Department, the sergeant is tasked with leading patrols and micro-managing lower officers.",
        playerRequirements: 75,
        policeRequirements: 100,
        callsign: "Charlie"
    },
    rank6 = {
        name: "Police Officer III",
        insignia: 3,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 75,
        policeRequirements: 75,
        callsign: "Delta"
    },
    rank7 = {
        name: "Police Officer II",
        insignia: 2,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 50,
        policeRequirements: 50,
        callsign: "Delta"
    },
    rank8 = {
        name: "Police Detective",
        insignia: -1,
        description: "The detective reserves a special role in the Police Department. They are permitted to conduct investigations as well as perform undercover duties. However, they must always reveal their badges to other officers or risk termination from their jobs.",
        playerRequirements: 50,
        policeRequirements: 75,
        callsign: "Detective"
    },
    rank9 = {
        name: "Pine County Deputy",
        insignia: -1,
        description: "The deputy operates in Pine County instead of Monoford County. However, they still are beholden to Monoford PD's chain of command and laws.",
        playerRequirements: 30,
        policeRequirements: 25,
        callsign: "Yankee"
    },
    rank10 = {
        name: "Police Officer",
        insignia: 1,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 25,
        policeRequirements: 10,
        callsign: "Delta"
    },
    rank11 = {
        name: "Police Tow Driver",
        insignia: -1,
        description: "Lowest rank in the Police Department. This rank is supposed to deal with parking violations via ticketing/towing the vehicles.",
        playerRequirements: 23,
        policeRequirements: 1,
        callsign: "Delta"
    },
    rank12 = {
        name: "S.W.A.T Commander",
        insignia: 0,
        description: "The Special Weapons and Tactics Commander is in charge of the heavily armed tactical branch of the Police Department. Alongside handling dangerous criminal situations, the S.W.A.T Commander is the equivalent to a lieutenant and as such, must coordinate with the Police Chief and his team in either negotiating with or eliminating any threat to the city.",
        playerRequirements: 100,
        policeRequirements: 125,
        callsign: "S.W.A.T Commander"
    },
    rank13 = {
        name: "S.W.A.T Sniper",
        insignia: 0,
        description: "The Special Weapons and Tactics Sniper is heavily armed with a .50 Caliber sniper rifle, that is sure to tear through any criminal, or disable any vehicle. They handle only the most dangerous of criminal situations. As a result of their tactical equipment and tactics, S.W.A.T team personnel are only to be on duty when a state of emergency is called, as not to appear militarized to the public.",
        playerRequirements: 100,
        policeRequirements: 100,
        callsign: "S.W.A.T Sniper"
    },
    rank14 = {
        name: "S.W.A.T Officer",
        insignia: 0,
        description: "The Special Weapons and Tactics Officers are the heavily armed tactical branch of the Police Department. They handle only the most dangerous of criminal situations. As a result of their tactical equipment and tactics, S.W.A.T team personnel are only to be on duty when a state of emergency is called, as not to appear militarized to the public.",
        playerRequirements: 100,
        policeRequirements: 75,
        callsign: "S.W.A.T Officers"
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

function changeTab(tab) {
    var calculator = document.getElementById("calculator-tab");
    var ranking = document.getElementById("ranking-tab");
    var tencodes = document.getElementById("10codes-tab");
    var about = document.getElementById("about-tab");
    if(tab == "calculator") {
        document.getElementById("calculator").style.visibility = "visible";
        document.getElementById("ranking").style.visibility = "hidden";
        document.getElementById("tencodes").style.visibility = "hidden";
        document.getElementById("about").style.visibility = "hidden";
        calculator.classList.add("active");
        ranking.classList.remove("active");
        tencodes.classList.remove("active");
        about.classList.remove("active");
    } else if(tab == "ranking") {
        document.getElementById("calculator").style.visibility = "hidden";
        document.getElementById("ranking").style.visibility = "visible";
        document.getElementById("tencodes").style.visibility = "hidden";
        document.getElementById("about").style.visibility = "hidden";
        calculator.classList.remove("active");
        ranking.classList.add("active");
        tencodes.classList.remove("active");
        about.classList.remove("active");
    } else if(tab == "10codes") {
        document.getElementById("calculator").style.visibility = "hidden";
        document.getElementById("ranking").style.visibility = "hidden";
        document.getElementById("tencodes").style.visibility = "visible";
        document.getElementById("about").style.visibility = "hidden";
        calculator.classList.remove("active");
        ranking.classList.remove("active");
        tencodes.classList.add("active");
        about.classList.remove("active");
    } else if(tab == "about") {
        document.getElementById("calculator").style.visibility = "hidden";
        document.getElementById("ranking").style.visibility = "hidden";
        document.getElementById("tencodes").style.visibility = "hidden";
        document.getElementById("about").style.visibility = "visible";
        calculator.classList.remove("active");
        ranking.classList.remove("active");
        tencodes.classList.remove("active");
        about.classList.add("active");
    }
}

function miranda(value) {
    if(value == 1) {
        document.getElementById("miranda-main-container").style.visibility = "visible";
    } else if(value == 0) {
        document.getElementById("miranda-main-container").style.visibility = "hidden";
    }
}

function loadRanks() {
    for(i = 0; i < ranks.length; i++) {
        console.log("working!");
    }
}

loadRanks();