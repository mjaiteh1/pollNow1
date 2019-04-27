const socket = io();
  socket.on('info', (data) => {
    //Showing the question
    $('#waiting').hide();
    $('#quest').text(data.question);
    $('#quest').show();
    //Showing the answers
    $('#a1').text(data.answer1);
    $('#a1').show();

    $('#a2').text(data.answer2);
    $('#a2').show();

    $('#a3').text(data.answer3);
    $('#a3').show();

    $('#a4').text(data.answer4);
    $('#a4').show();
  });
