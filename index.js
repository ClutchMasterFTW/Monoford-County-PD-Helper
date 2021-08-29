var charges, ranks, tenCodesList, statusCodes;
$(document).ready(function() {
    $.getJSON('data/charges.json', function(data) {
        charges = data;
        loadCharges();
    });
    $.getJSON('data/ranks.json', function(data) {
        ranks = data;
        loadRanks();
    });
    $.getJSON('data/tencodes.json', function(data) {
        tenCodesList = data;
        loadTenCodes();
    });
    $.getJSON('data/status.json', function(data) {
        statusCodes = data;
        loadStatusCodes();
    })
});

var sentence = 0;
var fine = 0;
var nonFineCount = 0;

function loadCharges()
{
    var $container = $('#charges-container');
    $.each(charges, function(i, v)
    {
        var $chargeContainer = $('<div>', {id: 'charge-'+i, 'class': 'charge'});

        var $charge = $('<div>', {'class': 'charge-name'});
        $charge.html(v.name);
        $chargeContainer.append($charge);

        var $level = $('<div>', {'class': 'level'});
        $level.addClass(v.class);
        if(v.class == 'CapitalFelony')
            $level.html('Capital Felony');
        else
            $level.html(v.class);
        $chargeContainer.append($level);

        var $chargeAmount = $('<div>', {'class': 'charge-amount'});
        $chargeAmount.html(v.amount);
        $chargeContainer.append($chargeAmount);

        var $chargeAdd = $('<div>', {'class': 'charge-add'});
        $chargeAdd.data('id', i);
        $chargeAdd.on('click', function() {
            addSentence($(this).data('id'));
        });
        var $chargeAddImg = $('<img>');
        $chargeAddImg.attr('src', 'images/plus.png');
        $chargeAdd.append($chargeAddImg);
        $chargeContainer.append($chargeAdd);


        var $chargeRemove = $('<div>', {'class': 'charge-remove'});
        $chargeRemove.data('id', i);
        $chargeRemove.on('click', function() {
            removeSentence($(this).data('id'));
        });
        var $chargeRemoveImg = $('<img>');
        $chargeRemoveImg.attr('src', 'images/minus.png');
        $chargeRemove.append($chargeRemoveImg);
        $chargeContainer.append($chargeRemove);

        $('#charges-container').append($chargeContainer);
    });
}

function addSentence(id)
{
    var charge = charges[id];
    sentence += charge.sentence;
    charges[id].amount++;
    $('#charge-'+id).children('.charge-amount').html(charges[id].amount);
    setCharge();

    var noFine = false;
    if(charge.fine != null)
    {   
        fine += charge.fine;
        if(nonFineCount > 0)
            noFine = true;
    }
    else 
    {
        nonFineCount++;
        noFine = true;
    }
    if(fine < 0)
        fine = 0;
    setFine(noFine);
}

function removeSentence(id)
{
    if(charges[id].amount > 0)
    {
        var charge = charges[id];
        sentence -= charge.sentence;
        charges[id].amount--;
        $('#charge-'+id).children('.charge-amount').html(charges[id].amount);
        setCharge();

        var noFine = false;
        if(charge.fine != null)
        {   
            fine -= charge.fine;
            if(nonFineCount > 0)
                noFine = true;
        }
        else 
        {
            nonFineCount--;
            if(nonFineCount == 0)
                noFine = false;
            else
                noFine = true;
        }
        if(fine < 0)
            fine = 0;
        setFine(noFine);
    }
}

function setCharge()
{
    var sentenceMax = 30;
    var percentOfMax = sentence / sentenceMax;
    if(sentence >= 200) {
        $('#sentence').addClass('execution').css('color', 'darkred');
        $('#sentence').html('Execution');
        $('#sentence-container').css('width', '25vw');
        $('#sentence-units').html('(Or 30 years)');
    }
    else {
        if(sentence >= sentenceMax)
            $('#sentence').html(sentenceMax);
        else
            $('#sentence').html(sentence);
        $('#sentence').removeClass('execution');
        $('#sentence-units').html('year(s) (minutes)');
        $('#sentence-container').css('width', '35vw');
    }

    if((sentence >= sentenceMax && sentence < 200) || (percentOfMax < 1 && percentOfMax >= .75))
        $('#sentence').css('color', 'red');
    else if(percentOfMax < .75 && percentOfMax >= .5)
        $('#sentence').css('color', 'orange');
    else if(percentOfMax < .5 && percentOfMax >= .16)
        $('#sentence').css('color', 'yellow');
    else if(percentOfMax < .16)
        $('#sentence').css('color', '#54ff00');
}

function setFine(noFine = false)
{
    if(noFine)
    {
        $('#fine').html('N/A');
        $('#fine').css('color', 'darkred');
    }
    else
    {
        $('#fine').html('$'+fine);
        if(fine <= 500)
            $('#fine').css('color', '#54ff00');
        else if(fine <= 1000 && fine > 500)
            $('#fine').css('color', 'yellow');
        else if(fine <= 2000 && fine > 1000)
            $('#fine').css('color', 'orange');
        else if(fine > 2000)
            $('#fine').css('color', 'red');
    }
}

function changeTab(tab)
{
    $('.nav-tab').removeClass('active');
    $('.container').hide();
    $('#'+tab).show();
    $('#'+tab+'-tab').addClass('active');
}

function miranda(value) {
    if(value == 1)
        $('#miranda-main-container').css('visibility', 'visible');
    else
        $('#miranda-main-container').css('visibility', 'hidden');
}

function loadRanks()
{
    var $container = $('#chainofcommand-container');
    $.each(ranks, function(i, v) {
        var $rankContainer = $('<div>', {id: 'rank-container'+i, 'class': 'rank-container'});
        $rankContainer.data('id', i);

        var $rank = $('<div>', {'class': 'rank'});
        $rank.html(v.name);
        $rankContainer.append($rank);

        var $insigContainer = $('<div>', {'class': 'insignia-container'});
        $insigContainer.html('Insignia:');
        if(v.insignia != -1) 
        {
            var $rankImg = $('<img>', {'src': 'images/insignias/'+v.insignia+'.png'});
            $insigContainer.append($rankImg);
        }
        else 
        {
            var $noImg = $('<div>', {'class': 'no-image'});
            $noImg.html("None!");
            $insigContainer.append($noImg);
        }
        $rankContainer.append($insigContainer);

        var $rankCallSign = $('<div>', {'class': 'rank-callsign'});
        $rankCallSign.html(v.callsign);
        $rankContainer.append($rankCallSign);

        $rankContainer.click(function() {
            openRank(ranks[$(this).data('id')]);
        });

        $container.append($rankContainer);
    });
}

function openRank(rank)
{
    if(rank == 'close')
        $('#coc-main-container').hide();
    else
    {
        $('#coc-main-container').show();
        $('.coc.title').html(rank.name);
        $('.coc.description').html(rank.description);
        var playerWidth = rank.playerRequirements * .15;
        var playerColor = 'lime';
        if(rank.playerRequirements == -1)
        {
            playerWidth = 15;
            playerColor = 'red';
        }
        $('.player.level').width(playerWidth+'vw');
        $('.player.level').css('background-color', playerColor);
        if(rank.playerRequirements == -1)
            $('.player.level-value').html('Requires Whitelist');
        else
            $('.player.level-value').html('Level '+rank.playerRequirements);

        var policeWidth = rank.policeRequirements * .075;
        var policeColor = 'lime';
        if(rank.policeRequirements == -1)
        {
            policeWidth = 15;
            policeColor = 'red';
        }
        $('.police.level').width(policeWidth+'vw');
        $('.police.level').css('background-color', policeColor);
        if(rank.policeRequirements == -1)
            $('.police.level-value').html('Requires Whitelist');
        else
            $('.police.level-value').html('Level '+rank.policeRequirements);
    }
}

function loadTenCodes() {
    var $container = $('#tencodes-container');
    $.each(tenCodesList, function(i, v) {
        var $tenContainer = $('<div>', {'class': 'ten-code-container'});
        
        var $code = $('<div>', {'class': 'code'});
        $code.html(v.name);
        $tenContainer.append($code);

        var $codeDetails = $('<div>', {'class': 'code-details'});
        $codeDetails.html(v.meaning);
        $tenContainer.append($codeDetails);

        $container.append($tenContainer);
    });
}

function loadStatusCodes()
{
    var $container = $('#codes-container');
    $.each(statusCodes, function(i, v) {
        var $codeContainer = $('<div>',  {'class': 'status-code-container'});

        var $statusCode = $('<div>', {'class': 'status-code'});
        var color = 'green';
        switch(i) {
            case 1:
                color = 'yellow';
                break;
            case 2:
                color = 'orange';
                break;
            case 3:
                color = '#9cff6b';
                break;
            case 4:
                color = 'red';
                break;
            case 5:
                color = 'darkred';
                break;
        }
        $statusCode.html(v.name);
        $statusCode.css('color', color);
        $codeContainer.append($statusCode);

        var $statusCodeDetails = $('<div>', {'class': 'status-code-details'});
        $statusCodeDetails.html(v.description);
        $codeContainer.append($statusCodeDetails);

        $container.append($codeContainer);
    });
}