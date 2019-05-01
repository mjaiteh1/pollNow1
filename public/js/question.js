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


 window.data;
  const getData = async () => {
    let response = await fetch('getPolls');
    window.data = await response.json();
    let dataLength = data.length;

  // Data- passing in an object not an array
    if (dataLength >= 1) {
      //Display latest entry
      let info = data[data.length-1];
      //Showing the question
      $('#waiting').hide();
      $('#quest').text(info.question);
      $('#quest').show();

      //Showing the answers
      $('#a1').text(info.answer1);
      $('#a1').show();

      $('#a2').text(info.answer2);
      $('#a2').show();

      $('#a3').text(info.answer3);
      $('#a3').show();

      $('#a4').text(info.answer4);
      $('#a4').show();

    }

  }

  getData();


const updatePoll  = async (event)  => {
  if (!window.data)  {
    await getData();
  }
  console.log(event.value);

  let response =  await fetch('/updatePoll', {
    method: 'PUT',
    body: JSON.stringify({name: event.value, question: window.data[window.data.length-1].question}), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
  let response_data = await response.json();
  console.log(response_data);

}
