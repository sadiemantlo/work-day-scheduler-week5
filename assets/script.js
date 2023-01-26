// adding the current date to the HTML
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
// adding variable for the current hour
var currHour = dayjs().hour();

$(function () {
    // event listner for save buttons and saving to local storage
    $('.saveBtn').click(function() {
      var blockEl = $(this).parent();
      var userInput = blockEl.children('textarea').val();
      var blockId = blockEl.attr('id');
      localStorage.setItem(blockId, userInput);
    })
    // matching local storage to the user input
    for (var i = 9; i <= 17; i++) {
      $('#hour-' + i).children('textarea').val(localStorage.getItem('hour-' + i));
    }
});

for (var i = 9; i <= 17; i++) {
  updateHour(i);
}


function updateHour() {
 
  $('.time-block').each(function() {
// checking the hour of each time block  
    var scheduledHour = parseInt($(this).attr('id').split('-')[1]);
// setting the class to match if the time block hour is in past, present or future 
  if (scheduledHour < currHour) {
    $(this).addClass('past');
  } else if (scheduledHour === currHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
  })
}
