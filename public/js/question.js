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



  const getData = async () => {
    let response = await fetch('getPolls');
    let data = await response.json();
    let dataLength = data.length;
    if (dataLength >= 1) {
      //Showing the question
      $('#waiting').hide();
      $('#quest').text(data[dataLength-1].question);
      $('#quest').show();

      //Showing the answers
      $('#a1').text(data[dataLength-1].answer1);
      $('#a1').show();

      $('#a2').text(data[dataLength-1].answer2);
      $('#a2').show();

      $('#a3').text(data[dataLength-1].answer3);
      $('#a3').show();

      $('#a4').text(data[dataLength-1].answer4);
      $('#a4').show();

    }
  //  console.log(data[data.length-1]);
    console.log(data);

  }

  getData();
