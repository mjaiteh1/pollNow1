
//Save data to use in graph
window.data;
const getData = async () => {
  let response = await fetch('getPolls');
  window.data = await response.json();
}
getData();

//Get Votes
window.votes;
const getVotes = async () => {
  let response = await fetch('getPollAnswers');
  window.votes = await response.json();
}
getVotes();


window.onload = function() {

  setTimeout(function() {
    let info = data[data.length-1];
    var node = document.createElement("H3");
    var textnode = document.createTextNode(info.question);
    node.appendChild(textnode);
    document.getElementById("g").appendChild(node);
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [info.answer1, info.answer2, info.answer3, info.answer4],
            datasets: [{
                label: '# of Votes',
                data: [votes.answer1, votes.answer2, votes.answer3, votes.answer4],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });


  }, 0000);

}
