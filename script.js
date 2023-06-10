function clock() {
    var clock = new Date();
  
    var date = clock.getDate();
    var month = clock.getMonth() + 1; 
    var year = clock.getFullYear();
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
  

    hours = hours % 12;
    hours = hours ? hours : 12;
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    var formattedDate = `${date}/${month}/${year}`;
    var formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    document.getElementById("date").textContent = formattedDate;
    document.getElementById("hour").textContent = `${hours}:`;
    document.getElementById("min").textContent = `${minutes}:`;
    document.getElementById("sec").textContent = `${seconds}`;
    document.getElementById("timechange").textContent = ampm;
  
    setTimeout(function() {
      location.reload();
    }, 1000); 
  }
  
  clock(); // Start the clock and auto-reload
  
  