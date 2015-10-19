$(document).ready(function() {
  console.log( "trip ready!" );
    // $("#tripCardTemplate").hide();


  function addCard(row) {
    // var happyDial = $
    var card = $("#tripCardTemplate").clone()
    // card[0].addClass("1")
    // var id = $('#tripCardTemplate').child().attr('id');
    card.find('.date').text(row.time)

    var distractPerc = '<div class="percentages"> \
      <svg class="percentages-title" fill="#3498db" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--3-col mdl-cell--9-col-desktop"> \
        <use xlink:href="#piechart" mask="url(#piemask)" /> \
        <text id="distractedness-text" x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">'+ Math.floor(row.distractedness) +'<tspan font-size="0.2" dy="-0.07">%</tspan></text> \
      </svg> \
      <p class="percentages-title">Distractedness</p> \
    </div>'
    var happyPerc = '<div class="percentages"> \
      <svg class="percentages-title" fill="#f1c40f" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--3-col mdl-cell--9-col-desktop"> \
        <use xlink:href="#piechart" mask="url(#piemask)" /> \
        <text id="happiness-text" x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">'+ Math.floor(row.happiness) +'<tspan font-size="0.2" dy="-0.07">%</tspan></text> \
      </svg> \
      <p class="percentages-title">Happiness</p> \
    </div>'

    var fidgetPerc = '<div class="percentages"> \
      <svg class="percentages-title" fill="#2ecc71" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--3-col mdl-cell--9-col-desktop"> \
        <use xlink:href="#piechart" mask="url(#piemask)" /> \
        <text id="fidgetiness-text" x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">'+ Math.floor(row.fidgetiness) +'<tspan font-size="0.2" dy="-0.07">%</tspan></text> \
      </svg> \
      <p class="percentages-title">Fidgetiness</p> \
    </div>'

    $(card).find('#dial-conatiner').append($(distractPerc))
    $(card).find('#dial-conatiner').append($(happyPerc))
    $(card).find('#dial-conatiner').append($(fidgetPerc))

    $("#trip-container").append($(card).html())
  }
  $.get("http://159.203.247.122:5000/rides",function(data){
    // console.log(JSON.parse(data))
    console.log(data)
    addCard(data)
  })
  //addCard({time: "Oct 18 | 2:37 AM - 3:02 AM", distractedness: 30.356, happiness: 60.435, fidgetiness: 32.76})
  //addCard({time: "Oct 15 | 6:15 PM - 6:27 PM", distractedness: 43.356, happiness: 52.435, fidgetiness: 30.76})
  // addCard()

})
