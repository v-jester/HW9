$(document).ready(function () {
  $('div').eq(2).after('<h3>header3</h3>');
  $('h3').each(function () {
    let nextDiv = $(this).nextAll('div').first();
    if (nextDiv.length) {
      nextDiv.insertBefore($(this));
    }
  });
});