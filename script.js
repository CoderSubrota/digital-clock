//get document of html
let showHours = document.querySelector(".showHours");
let showMinutes = document.querySelector(".showMinutes");
let showSeocnds = document.querySelector(".showSeocnds");
let showTimeStatus = document.querySelector(".showTimeStatus");
//hours
setInterval(() => {
  let hours = new Date().getHours();

  //time status
  //hours == 12 || hours > 12
  if (hours >= 12 && hours < 24) {
    //when 12 or time is 12  to 24 that is pm
    //12 <= that means it is just noon time almost
    showTimeStatus.innerHTML = `<p>PM</p>`;
    //12pm to 11pm
  } else if (hours == 24) {
    showTimeStatus.innerHTML = `<p>AM</p>`;
  } else if (hours < 12) {
    //12am to 11am
    showTimeStatus.innerHTML = `<p>AM</p>`;
  }

  //convert time to digital clock from universal clock
  if (hours > 12) {
    // 12 > that means 13 -12 = 1 if hours < 10 than add
    //01 = 0 1 // 13 - 24

    if (hours - 12 < 10) {
      showHours.innerHTML = `<p> 0${hours - 12} </p>`;
    } else {
      showHours.innerHTML = `<p> ${hours - 12} </p>`;
    }
  } else {
    // 1 - 12
    if (hours < 10) {
      showHours.innerHTML = `<p> 0${hours} </p>`;
    } else {
      showHours.innerHTML = `<p> ${hours} </p>`;
    }
  }
  //maintain 00
  if (hours == 0) {
    showHours.innerHTML = `<p> 12 </p>`;
  }
}, 1000);

//minutes
setInterval(() => {
  let minutes = new Date().getMinutes();

  //minutes maintain
  if (minutes < 10) {
    showMinutes.innerHTML = `<p> 0${minutes} </p>`;
  } else {
    showMinutes.innerHTML = `<p> ${minutes} </p>`;
  }
  //maintain 00
  if (minutes == 0) {
    showMinutes.innerHTML = `<p> 60 </p>`;
  }
}, 1000);

//seconds

setInterval(() => {
  let seconds = new Date().getSeconds();
  //seconds maintain
  if (seconds < 10) {
    showSeocnds.innerHTML = `<p> 0${seconds} </p>`;
  } else {
    showSeocnds.innerHTML = `<p> ${seconds} </p>`;
  }

  //maintain 00
  if (seconds == 0) {
    showSeocnds.innerHTML = `<p> 60 </p>`;
  }
}, 1000);

//show message
setInterval(() => {
  let message = document.querySelector("#message");
  let hours = new Date().getHours();
  if (hours > 5 && hours < 12) {
    message.innerHTML = "Good morning dear";
  } else if (hours >= 12 && hours <= 15) {
    //1 to 3 pm
    message.innerHTML = "Good noon dear";
  } else if (hours > 15 && hours <= 17) {
    //3 to 5
    message.innerHTML = "Good after noon dear";
  } else if (hours >= 17 && hours <= 20) {
    //6-8 pm
    message.innerHTML = "Good evening dear";
  } else {
    message.innerHTML = "Good night dear";
  }
}, 1000); //update after  1 second to fetch new time
//interective display
let digitalClockDiv = document.querySelector(".digitalClockDiv");
let loadingText = document.querySelector("#loading");
let showMessage = document.querySelector(".showMessage");
setTimeout(() => {
  digitalClockDiv.style.visibility = "visible";
  showMessage.style.visibility = "visible";
  loadingText.style.visibility = "hidden";
}, 2000);

