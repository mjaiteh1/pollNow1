const socket = io();
$('form').submit(() => {
  let question = $('#question').val();
  let answer1 = $('#answer1').val();
  let answer2 = $('#answer2').val();
  let answer3 = $('#answer3').val();
  let answer4 = $('#answer4').val();
  socket.emit('message', {question,answer1, answer2, answer3, answer4});
  $('#question').val('');
  $('#answer1').val('');
  $('#answer2').val('');
  $('#answer3').val('');
  $('#answer4').val('');
  window.location.href='/results';
  return false;
});
