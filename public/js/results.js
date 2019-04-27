const getData = async () => {
  let response = await fetch('getPolls');
  let data = await response.json();
  console.log(data[data.length-1]);

}

getData();
