//Variables
var charges = [
    charge0 = {
        name: "Murder",
        class: "Felony",
        sentence: 20,
        amount: 0,
        fine: 1000000
    },
    charge1 = {
        name: "Murder of a Law Enforcement Officer (LEO)",
        class: "Capital Felony",
        sentence: 30,
        amount: 0,
        fine: 1000000
    },
    charge2 = {
        name: "Possession of illegal substances",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 2500
    },
    charge3 = {
        name: "Distribution of illegal substances",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge4 = {
        name: "Hostage Taking (without deadly weapon)",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge5 = {
        name: "Hostage Taking (with a deadly weapon)",
        class: "Felony",
        sentence: 25,
        amount: 0,
        fine: 1000000
    },
    charge6 = {
        name: "Home Invasion/Breaking and Entering",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    },
    charge7 = {
        name: "Involentary Manslaughter",
        class: "Felony",
        sentence: 7.5,
        amount: 0,
        fine: 5000
    },
    charge8 = {
        name: "Assault",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 3500
    },
    charge9 = {
        name: "Assaulting a Law Enforcement Officer (LEO)",
        class: "Felony",
        sentence: 6.5,
        amount: 0,
        fine: 4000
    },
    charge10 = {
        name: "Involentary Vehicular Manslauter",
        class: "Felony",
        sentence: 5,
        amount: 0,
        fine: 3000
    },
    charge11 = {
        name: "Vehicular Manslauter",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge12 = {
        name: "Bank Robbery",
        class: "Felony",
        sentence: 40,
        amount: 0,
        fine: 1000000
    },
    charge13 = {
        name: "Gas Station Robbery",
        class: "Felony",
        sentence: 35,
        amount: 0,
        fine: 1000000
    },
    charge14 = {
        name: "Distributing illegal firearms",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    },
    charge15 = {
        name: "Terrorism",
        class: "Capital Felony",
        sentence: 200,
        amount: 0,
        fine: 1000000
    },
    charge16 = {
        name: "Verbal threats towards a Citizen",
        class: "Misdeminor",
        sentence: 0,
        amount: 0,
        fine: 350
    },
    charge17 = {
        name: "Verbal threats towards an LEO",
        class: "Misdeminor",
        sentence: 1,
        amount: 0,
        fine: 500
    },
    charge18 = {
        name: "Fleeing and Eluding",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge19 = {
        name: "Possession of an illegal firearm",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 5000
    },
    charge20 = {
        name: "Driving Under the Influence (DUI)",
        class: "Misdeminor",
        sentence: 3.5,
        amount: 0,
        fine: 2500
    },
    charge21 = {
        name: "Corruption",
        class: "Felony",
        sentence: 30,
        amount: 0,
        fine: 1000000
    },
    charge22 = {
        name: "Mugging",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge23 = {
        name: "Grand Theft Auto",
        class: "Felony",
        sentence: 7.5,
        amount: 0,
        fine: 1000000
    },
    charge24 = {
        name: "Grand Theft Auto (of a government vehicle)",
        class: "Felony",
        sentence: 11.5,
        amount: 0,
        fine: 1000000
    },
    charge25 = {
        name: "Reckless Driving",
        class: "Misdeminor",
        sentence: 3,
        amount: 0,
        fine: 1250
    },
    charge26 = {
        name: "Unlawful Harrassment",
        class: "Misdeminor",
        sentence: 0,
        amount: 0,
        fine: 800
    },
    charge27 = {
        name: "Obstruction of Justice",
        class: "Misdeminor",
        sentence: 5,
        amount: 0,
        fine: 2750
    },
    charge28 = {
        name: "Resisting Arrest",
        class: "Misdeminor",
        sentence: 2,
        amount: 0,
        fine: 1500
    },
    charge29 = {
        name: "Public Indecency",
        class: "Misdeminor",
        sentence: 1,
        amount: 0,
        fine: 1500
    },
    charge30 = {
        name: "Driving with an expired license",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 550
    },
    charge31 = {
        name: "Driving 5 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 50
    },
    charge32 = {
        name: "Driving 10 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 150
    },
    charge33 = {
        name: "Driving 15 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 300
    },
    charge34 = {
        name: "Driving 20 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 550
    },
    charge35 = {
        name: "Driving 25 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 750
    },
    charge36 = {
        name: "Driving 30 mph over the speed limit",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 1000
    },
    charge37 = {
        name: "Driving 40+ mph over the speed limit",
        class: "Misdeminor",
        sentence: 1.5,
        amount: 0,
        fine: 2000
    },
    charge38 = {
        name: "Parked Illegally",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 350
    },
    charge39 = {
        name: "Attempted Murder",
        class: "Felony",
        sentence: 12.5,
        amount: 0,
        fine: 1000000
    },
    charge40 = {
        name: "Attempted Murder of an LEO",
        class: "Felony",
        sentence: 15,
        amount: 0,
        fine: 1000000
    },
    charge41 = {
        name: "Tinted Windows",
        class: "Infraction",
        sentence: 0,
        amount: 0,
        fine: 750
    },
    charge42 = {
        name: "Prison Break",
        class: "Capital Felony",
        sentence: 60,
        amount: 0,
        fine: 1000000
    },
    charge43 = {
        name: "Murder of a Department Of Corrections Staff",
        class: "Capital Felony",
        sentence: 30,
        amount: 0,
        fine: 1000000
    },
    charge44 = {
        name: "Assassination of the Mayor",
        class: "Capital Felony",
        sentence: 200,
        amount: 0,
        fine: 1000000
    },
    charge45 = {
        name: "Arson",
        class: "Felony",
        sentence: 20,
        amount: 0,
        fine: 1000000
    },
    charge46 = {
        name: "Impersonating an Officer",
        class: "Felony",
        sentence: 10,
        amount: 0,
        fine: 1000000
    },
    charge47 = {
        name: "Trespassing",
        class: "Misdeminor",
        sentence: 5,
        amount: 0,
        fine: 1500
    }
];
var ranks = [
    rank0 = {
        name: "Police Chief",
        insignia: 8,
        description: "The head of the Police Department. The chief has various powers and absolute authority over all members of his department. The primary duties of the chief include oversight of officers, training cadets, and upkeeping the law.",
        playerRequirements: "Requires Whitelist",
        policeRequirements: "Requires Whitelist",
        callsign: "Alpha"
    },
    rank1 = {
        name: "Police Assistant Chief",
        insignia: 7,
        description: "The Assistant Chief is the second-in-command at the department. He supervises its operation and personnel when the Chief is occupied or has chosen to delegate responsibilities.",
        playerRequirements: 100,
        policeRequirements: 200,
        callsign: "Alpha"
    },
    rank2 = {
        name: "Police Lieutenant",
        insignia: 6,
        description: "The lieutenant is a high-ranking officer in the Police Department. During critical times, they are encouraged to step in as an acting chief, should the chief be incapacitated or unable to lead.",
        playerRequirements: 75,
        policeRequirements: 150,
        callsign: "Bravo"
    },
    rank3 = {
        name: "Police Sergeant II",
        insignia: 5,
        description: "A seasoned officer within the Police Department, the sergeant is tasked with leading patrols and micro-managing lower officers.",
        playerRequirements: 75,
        policeRequirements: 125,
        callsign: "Charlie"
    },
    rank4 = {
        name: "Police Sergeant",
        insignia: 4,
        description: "A seasoned officer within the Police Department, the sergeant is tasked with leading patrols and micro-managing lower officers.",
        playerRequirements: 75,
        policeRequirements: 100,
        callsign: "Charlie"
    },
    rank5 = {
        name: "Police Officer III",
        insignia: 3,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 75,
        policeRequirements: 75,
        callsign: "Delta"
    },
    rank6 = {
        name: "Police Officer II",
        insignia: 2,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 50,
        policeRequirements: 50,
        callsign: "Delta"
    },
    rank7 = {
        name: "Police Detective",
        insignia: -1,
        description: "The detective reserves a special role in the Police Department. They are permitted to conduct investigations as well as perform undercover duties. However, they must always reveal their badges to other officers or risk termination from their jobs.",
        playerRequirements: 50,
        policeRequirements: 75,
        callsign: "Detective"
    },
    rank8 = {
        name: "Pine County Deputy",
        insignia: -1,
        description: "The deputy operates in Pine County instead of Monoford County. However, they still are beholden to Monoford PD's chain of command and laws.",
        playerRequirements: 30,
        policeRequirements: 25,
        callsign: "Yankee"
    },
    rank9 = {
        name: "Police Officer",
        insignia: 1,
        description: "The backbone of the Police Department. The officer goes on patrol, answers 911 calls, and resolves conflict. They are also encouraged to bring cadets on patrol with them.",
        playerRequirements: 25,
        policeRequirements: 10,
        callsign: "Delta"
    },
    rank10 = {
        name: "Police Tow Driver",
        insignia: -1,
        description: "Lowest rank in the Police Department. This rank is supposed to deal with parking violations via ticketing/towing the vehicles.",
        playerRequirements: 23,
        policeRequirements: 1,
        callsign: "Delta"
    },
    rank11 = {
        name: "S.W.A.T Commander",
        insignia: 0,
        description: "The Special Weapons and Tactics Commander is in charge of the heavily armed tactical branch of the Police Department. Alongside handling dangerous criminal situations, the S.W.A.T Commander is the equivalent to a lieutenant and as such, must coordinate with the Police Chief and his team in either negotiating with or eliminating any threat to the city.",
        playerRequirements: 100,
        policeRequirements: 125,
        callsign: "S.W.A.T Comm."
    },
    rank12 = {
        name: "S.W.A.T Sniper",
        insignia: 0,
        description: "The Special Weapons and Tactics Sniper is heavily armed with a .50 Caliber sniper rifle, that is sure to tear through any criminal, or disable any vehicle. They handle only the most dangerous of criminal situations. As a result of their tactical equipment and tactics, S.W.A.T team personnel are only to be on duty when a state of emergency is called, as not to appear militarized to the public.",
        playerRequirements: 100,
        policeRequirements: 100,
        callsign: "S.W.A.T Sniper"
    },
    rank13 = {
        name: "S.W.A.T Officer",
        insignia: 0,
        description: "The Special Weapons and Tactics Officers are the heavily armed tactical branch of the Police Department. They handle only the most dangerous of criminal situations. As a result of their tactical equipment and tactics, S.W.A.T team personnel are only to be on duty when a state of emergency is called, as not to appear militarized to the public.",
        playerRequirements: 100,
        policeRequirements: 75,
        callsign: "S.W.A.T Officer"
    }
];
var tenCodesList = [
    code0 = {
        name: "10-4",
        meaning: "Acknowledgement (OK)"
    },
    code1 = {
        name: "10-7",
        meaning: "Out of Service"
    },
    code2 = {
        name: "10-8",
        meaning: "In Service"
    },
    code3 = {
        name: "10-20",
        meaning: "Location"
    },
    code4 = {
        name: "10-23",
        meaning: "Arrived at Scene"
    },
    code5 = {
        name: "10-32",
        meaning: "Person(s) with weapon"
    },
    code6 = {
        name: "10-43",
        meaning: "More information needed"
    },
    code7 = {
        name: "10-50",
        meaning: "Accident (Vehicle Collision/Crash)"
    },
    code8 = {
        name: "10-77",
        meaning: "ETA (Estimated Time of Arrival)"
    },
    code9 = {
        name: "10-78",
        meaning: "Assistance Needed"
    },
    code10 = {
        name: "10-80",
        meaning: "Chase in Progress"
    },
    code11 = {
        name: "10-98",
        meaning: "Prison/Jail Break"
    },
    code12 = {
        name: "10-99",
        meaning: "Wanted Individual Found"
    }
];
var statusCodes = [
    statusCode0 = {
        name: "Code 1",
        description: "Respond without ELS or Sirens (NON-URGENT)"
    },
    statusCode1 = {
        name: "Code 2",
        description: "Respond with ELS ON and no Sirens (URGENT)"
    },
    statusCode2 = {
        name: "Code 3",
        description: "Respond with ELS ON and Sirens (URGENT/EMERGENCY)"
    },
    statusCode3 = {
        name: "Code 4",
        description: "Situation is dealt with, return to 10-7 / 10-8"
    },
    statusCode4 = {
        name: "Code RED",
        description: "Situation where highest use of force is Authorized (Proceed with Caution)"
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
        chargeContainer.style.height = "5vw";

        var charge = document.createElement("div");
        charge.id = "charge" + i;
        charge.innerHTML = charges[i].name;
        charge.style.color = "white";
        charge.style.padding = "0.5vw 0.75vw";
        charge.style.fontSize = "1.25vw";

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
        level.style.paddingLeft = "0.75vw";
        level.style.paddingBottom = "0.5vw";
        level.style.marginTop = "-0.5vw";
        level.style.fontSize = "0.8vw";

        var chargeAmount = document.createElement("div");
        chargeAmount.id = "chargeAmount" + i;
        chargeAmount.innerHTML = charges[i].amount;
        chargeAmount.style.color = "white";
        chargeAmount.style.fontSize = "2.5vw";
        chargeAmount.style.borderRight = "1px solid white";
        chargeAmount.style.borderLeft = "1px solid white";
        chargeAmount.style.width = "4vw";
        chargeAmount.style.height = "5vw";
        chargeAmount.style.position = "relative";
        chargeAmount.style.marginTop = "-4vw";
        chargeAmount.style.left = "28vw";
        chargeAmount.style.textAlign = "center";
        chargeAmount.style.lineHeight = "5vw";

        var chargeAdd = document.createElement("div");
        chargeAdd.id = "chargeAdd" + i;
        chargeAdd.style.color = "white";
        chargeAdd.style.fontSize = "2.5vw";
        chargeAdd.style.borderRight = "1px solid white";
        chargeAdd.style.width = "3.75vw";
        chargeAdd.style.height = "5vw";
        chargeAdd.style.position = "relative";
        chargeAdd.style.marginTop = "-4.75vw";
        chargeAdd.style.left = "32vw";
        chargeAdd.style.textAlign = "center";
        chargeAdd.style.lineHeight = "5vw";
        chargeAdd.style.cursor = "pointer";
        chargeAdd.setAttribute("onclick", "addSentence(this.id)");
        var chargeAddImg = document.createElement("img");
        chargeAddImg.id = "chargeAddImg" + i;
        chargeAddImg.setAttribute("src", "images/plus.png");
        chargeAddImg.style.width = "2vw";
        chargeAddImg.style.filter = "invert(100%)";
        chargeAddImg.style.userSelect = "none";

        var chargeRemove = document.createElement("div");
        chargeRemove.id = "chargeRemove" + i;
        chargeRemove.style.color = "white";
        chargeRemove.style.fontSize = "2.5vw";
        chargeRemove.style.borderRight = "1px solid white";
        chargeRemove.style.width = "3.9vw";
        chargeRemove.style.height = "5vw";
        chargeRemove.style.position = "relative";
        chargeRemove.style.marginTop = "-5vw";
        chargeRemove.style.left = "36vw";
        chargeRemove.style.textAlign = "center";
        chargeRemove.style.lineHeight = "5vw";
        chargeRemove.style.cursor = "pointer";
        chargeRemove.setAttribute("onclick", "removeSentence(this.id)");
        var chargeRemoveImg = document.createElement("img");
        chargeRemoveImg.id = "chargeRemoveImg" + i;
        chargeRemoveImg.setAttribute("src", "images/minus.png");
        chargeRemoveImg.style.width = "2vw";
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
    if(fine < 0) {
        fine = 0;
    }
}

function removeSentence(param) {
    var sliced = param.slice(12);
    //FIX THIS SECTION
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
            document.getElementById("fine").innerHTML = "$0";
            document.getElementById("fine").style.fontSize = "150px";
            document.getElementById("fine").style.color = "#54ff00";
        }
    }
    //
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
    if(fine < 0) {
        fine = 0;
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
        var rankContainer = document.createElement("div");
        rankContainer.id = "rank-container" + i;
        rankContainer.style.border = "white solid 1px";
        rankContainer.style.backgroundImage = "linear-gradient(#1E1E1E, black)";
        rankContainer.style.cursor = "pointer";

        var rank = document.createElement("div");
        rank.id = "rank" + i;
        rank.innerHTML = ranks[i].name;
        rank.style.color = "white";
        rank.style.padding = "0.5vw 0.75vw";
        rank.style.fontSize = "1.25vw";

        var rankInsigniaContainer = document.createElement("div");
        rankInsigniaContainer.id = "rank-insignia-container" + i;
        rankInsigniaContainer.innerHTML = "Insignia:";
        rankInsigniaContainer.style.color = "#ffba26";
        rankInsigniaContainer.style.fontSize = "1vw";
        rankInsigniaContainer.style.fontWeight = "600";
        rankInsigniaContainer.style.width = "15vw";
        rankInsigniaContainer.style.height = "2vw";
        rankInsigniaContainer.style.paddingLeft = "0.75vw";

        if(ranks[i].insignia != -1) {
            var rankInsigniaImg = document.createElement("img");
            rankInsigniaImg.id = "rank-insignia-img" + i;
            rankInsigniaImg.setAttribute("src", "images/insignias/" + ranks[i].insignia + ".png");
            if(ranks[i].insignia == 1) {
                rankInsigniaImg.style.width = "2vw";
            } else if(ranks[i].insignia == 2) {
                rankInsigniaImg.style.width = "1.75vw";
            } else if(ranks[i].insignia == 3) {
                rankInsigniaImg.style.width = "1.5vw";
            } else if(ranks[i].insignia == 4) {
                rankInsigniaImg.style.width = "1.25vw";
            } else if(ranks[i].insignia == 5) {
                rankInsigniaImg.style.width = "1.15vw";
            } else if(ranks[i].insignia == 6) {
                rankInsigniaImg.style.width = "0.85vw";
            } else if(ranks[i].insignia == 7) {
                rankInsigniaImg.style.width = "2vw";
            } else if(ranks[i].insignia == 8) {
                rankInsigniaImg.style.width = "3.75vw";
            } else if(ranks[i].insignia == 0) {
                rankInsigniaImg.style.width = "3vw";
            }
            rankInsigniaImg.style.display = "flex";
            rankInsigniaImg.style.justifyContent = "center";
            rankInsigniaImg.style.alignItems = "center";

            rankInsigniaContainer.appendChild(rankInsigniaImg);
        } else if(ranks[i].insignia == -1) {
            var rankNoInsignia = document.createElement("div");
            rankNoInsignia.id = "rank-no-insignia" + i;
            rankNoInsignia.innerHTML = "None!";
            rankNoInsignia.style.color = "salmon";

            rankInsigniaContainer.appendChild(rankNoInsignia);
        }

        var rankCallSign = document.createElement("div");
        rankCallSign.id = "rank-call-sign" + i;
        rankCallSign.innerHTML = ranks[i].callsign;
        rankCallSign.style.color = "white";
        rankCallSign.style.fontSize = "2vw";
        rankCallSign.style.fontWeight = "bold";
        rankCallSign.style.position = "relative";
        rankCallSign.style.top = "-2.75vw";
        rankCallSign.style.left = "61vw";

        var chainOfCommandContainer = document.getElementById("chainofcommand-container");
        chainOfCommandContainer.appendChild(rankContainer);
        rankContainer.appendChild(rank);
        rankContainer.appendChild(rankInsigniaContainer);
        rankContainer.appendChild(rankCallSign);

        rankContainer.setAttribute("onclick", "openRank(" + i + ")");
    }
}

loadRanks();

function openRank(rank) {
    if(rank == "close") {
        document.getElementById("coc-main-container").style.visibility = "hidden";
        var item1 = document.getElementById("player-level-title");
        var item2 = document.getElementById("player-level-container");
        var item3 = document.getElementById("police-level-title");
        var item4 = document.getElementById("police-level-container");
        item1.remove();
        item2.remove();
        item3.remove();
        item4.remove();
    } else if(rank != "close") {
        document.getElementById("coc-main-container").style.visibility = "visible";
        document.getElementById("coc-title").innerHTML = ranks[rank].name;
        document.getElementById("coc-description").innerHTML = ranks[rank].description;

        var playerLevelTitle = document.createElement("div");
        playerLevelTitle.id = "player-level-title";
        playerLevelTitle.innerHTML = "Player Level Required:";
        playerLevelTitle.style.fontSize = "1vw";
        playerLevelTitle.style.fontWeight = "600";
        playerLevelTitle.style.color = "salmon";
        playerLevelTitle.style.marginTop = "1vw";
        playerLevelTitle.style.textAlign = "center";

        var playerLevelContainer = document.createElement("div");
        playerLevelContainer.id = "player-level-container";
        playerLevelContainer.style.width = "15vw";
        playerLevelContainer.style.height = "1.25vw";
        playerLevelContainer.style.backgroundColor = "white";
        playerLevelContainer.style.display = "flex";
        playerLevelContainer.style.justifyContent = "center";
        playerLevelContainer.style.alignItems = "center";
        playerLevelContainer.style.marginTop = "0.25vw";
        playerLevelContainer.style.position = "absolute";
        playerLevelContainer.style.border = "white 1px solid";
        playerLevelContainer.style.marginLeft = "17.5vw";

        var playerLevel = document.createElement("div");
        playerLevel.id = "player-level";
        if(ranks[rank].playerRequirements == "Requires Whitelist") {
            var width = 15;
            playerLevel.style.backgroundColor = "red";
        } else {
            var width = ranks[rank].playerRequirements * 0.15;
            playerLevel.style.backgroundColor = "lime";
        }
        playerLevel.style.width = width + "vw";
        playerLevel.style.height = "1.25vw";
        playerLevel.style.position = "absolute";
        playerLevel.style.top = "0vw";
        playerLevel.style.left = "0vw";

        var playerLevelValue = document.createElement("div");
        playerLevelValue.id = "player-level-value";
        if(ranks[rank].playerRequirements == "Requires Whitelist") {
            playerLevelValue.innerHTML = ranks[rank].playerRequirements;
        } else {
            playerLevelValue.innerHTML = "Level " + ranks[rank].playerRequirements;
        }
        playerLevelValue.style.color = "black";
        playerLevelValue.style.textAlign = "center";
        playerLevelValue.style.fontWeight = "600";
        playerLevelValue.style.fontSize = "1vw";
        playerLevelValue.style.zIndex = "5";

        //////////////////
        ///Police level///
        //////////////////

        var policeLevelTitle = document.createElement("div");
        policeLevelTitle.id = "police-level-title";
        policeLevelTitle.innerHTML = "Police Level Required:";
        policeLevelTitle.style.fontSize = "1vw";
        policeLevelTitle.style.fontWeight = "600";
        policeLevelTitle.style.color = "salmon";
        policeLevelTitle.style.marginTop = "2vw";
        policeLevelTitle.style.textAlign = "center";

        var policeLevelContainer = document.createElement("div");
        policeLevelContainer.id = "police-level-container";
        policeLevelContainer.style.width = "15vw";
        policeLevelContainer.style.height = "1.25vw";
        policeLevelContainer.style.backgroundColor = "white";
        policeLevelContainer.style.display = "flex";
        policeLevelContainer.style.justifyContent = "center";
        policeLevelContainer.style.alignItems = "center";
        policeLevelContainer.style.marginTop = "0.25vw";
        policeLevelContainer.style.position = "absolute";
        policeLevelContainer.style.border = "white 1px solid";
        policeLevelContainer.style.marginLeft = "17.5vw";

        var policeLevel = document.createElement("div");
        policeLevel.id = "player-level";
        if(ranks[rank].policeRequirements == "Requires Whitelist") {
            var width = 15;
            policeLevel.style.backgroundColor = "red";
        } else {
            var width = ranks[rank].policeRequirements * 0.075;
            policeLevel.style.backgroundColor = "lime";
        }
        policeLevel.style.width = width + "vw";
        policeLevel.style.height = "1.25vw";
        policeLevel.style.position = "absolute";
        policeLevel.style.top = "0vw";
        policeLevel.style.left = "0vw";

        var policeLevelValue = document.createElement("div");
        policeLevelValue.id = "police-level-value";
        if(ranks[rank].policeRequirements == "Requires Whitelist") {
            policeLevelValue.innerHTML = ranks[rank].policeRequirements;
        } else {
            policeLevelValue.innerHTML = "Level " + ranks[rank].policeRequirements;
        }
        policeLevelValue.style.color = "black";
        policeLevelValue.style.textAlign = "center";
        policeLevelValue.style.fontWeight = "600";
        policeLevelValue.style.fontSize = "1vw";
        policeLevelValue.style.zIndex = "5";

        var rankInfoContainer = document.getElementById("coc-container");
        rankInfoContainer.appendChild(playerLevelTitle);
        rankInfoContainer.appendChild(playerLevelContainer);
        playerLevelContainer.appendChild(playerLevel);
        playerLevelContainer.appendChild(playerLevelValue);
        rankInfoContainer.appendChild(policeLevelTitle);
        rankInfoContainer.appendChild(policeLevelContainer);
        policeLevelContainer.appendChild(policeLevel);
        policeLevelContainer.appendChild(policeLevelValue);

        if(rank == 11 || rank == 12 || rank == 13) {
            document.getElementById("coc-description").style.fontSize = "1vw";
        } else {
            document.getElementById("coc-description").style.fontSize = "1.5vw";
        }

        //////////////
        //SUPERVISOR//
        //////////////
        
        /*if(rank == 0 || rank == 1 || rank == 2) {
            var supervisor = document.createElement("div");
            supervisor.id = "supervisor";
            supervisor.innerHTML = "SUPERVISOR";
            supervisor.style.color = "red";

            rankInfoContainer.appendChild(supervisor);
        }*/
    }
}

//If width of page is less than 1000, run function:
setInterval(function(){
    var pageWidth = document.body.clientWidth;
    var pageHeight = document.body.clientHeight;
    if(pageWidth < 1200 || pageHeight < 1000) {
        checkDims();
    }
}, 10);

var dimsAlert = 0;
function checkDims() {
    if(dimsAlert == 0) {
        interval = setInterval(fadeIn, 10);
        dimsAlert = 1;
    }
}

var opacity = 0;
function fadeIn() {
    if(opacity <= 75) {
        document.getElementById("dim-warning-container").style.visibility = "visible";
        document.getElementById("dim-warning-container").style.opacity = opacity + "%";
        opacity++;
    } else {
        clearInterval(inteval);
    }
}

function closeWarning() {
    document.getElementById("dim-warning-container").style.visibility = "hidden";
}

function loadTenCodes() {
    for(i = 0; i < tenCodesList.length; i++) {
        var tenCodeContainer = document.createElement("div");
        tenCodeContainer.id = "ten-code-container" + i;
        tenCodeContainer.style.border = "white solid 1px";
        tenCodeContainer.style.backgroundImage = "linear-gradient(#1E1E1E, black)";

        var code = document.createElement("div");
        code.id = "code" + i;
        code.innerHTML = tenCodesList[i].name;
        code.style.color = "white";
        code.style.padding = "0.5vw 0.75vw";
        code.style.fontSize = "2vw";
        code.style.fontWeight = "bold";

        var codeDetails = document.createElement("div");
        codeDetails.id = "code-details" + i;
        codeDetails.innerHTML = tenCodesList[i].meaning;
        codeDetails.style.color = "white";
        codeDetails.style.padding = "0.5vw 0.75vw";
        codeDetails.style.fontSize = "1vw";
        codeDetails.style.fontWeight = "500";

        var mainTenCodeContainer = document.getElementById("tencodes-container");
        mainTenCodeContainer.appendChild(tenCodeContainer);
        tenCodeContainer.appendChild(code);
        tenCodeContainer.appendChild(codeDetails);
    }
}

loadTenCodes();

function loadStatusCodes() {
    for(i = 0; i < statusCodes.length; i++) {
        var statusCodeContainer = document.createElement("div");
        statusCodeContainer.id = "status-code-container" + i;
        statusCodeContainer.style.border = "white solid 1px";
        statusCodeContainer.style.backgroundImage = "linear-gradient(#1E1E1E, black)";

        var statusCode = document.createElement("div");
        statusCode.id = "statusCode" + i;
        statusCode.innerHTML = statusCodes[i].name;
        if(i == 0) {
            statusCode.style.color = "green";
        } else if(i == 1) {
            statusCode.style.color = "yellow";
        } else if(i == 2) {
            statusCode.style.color = "orange";
        } else if(i == 3) {
            statusCode.style.color = "#9cff6b";
        } else if(i == 4) {
            statusCode.style.color = "red";
        }
        statusCode.style.padding = "0.5vw 0.75vw";
        statusCode.style.fontSize = "2vw";
        statusCode.style.fontWeight = "bold";

        var statusCodeDetails = document.createElement("div");
        statusCodeDetails.id = "status-code-details" + i;
        statusCodeDetails.innerHTML = statusCodes[i].description;
        statusCodeDetails.style.color = "white";
        statusCodeDetails.style.padding = "0.5vw 0.75vw";
        statusCodeDetails.style.fontSize = "1vw";
        statusCodeDetails.style.fontWeight = "500";

        var mainStatusCodeContainer = document.getElementById("codes-container");
        mainStatusCodeContainer.appendChild(statusCodeContainer);
        statusCodeContainer.appendChild(statusCode);
        statusCodeContainer.appendChild(statusCodeDetails);
    }
}

loadStatusCodes();
