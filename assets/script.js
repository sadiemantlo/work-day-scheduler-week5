// adding the current date to the HTML
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

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
  var currHour = dayjs().hour();
  $('.time-block').each(function() {
    var scheduledHour = parseInt($(this).attr('id').split('-')[1]);

  if (scheduledHour < currHour) {
    $(this).addClass('past');
  } else if (scheduledHour === currHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
  })
}
