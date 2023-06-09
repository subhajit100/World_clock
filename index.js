const utcTimeList = new Map([
    ["india", 5.5],
    ["usa", -5],
    ["russia", 3],
    ["japan", 9]
  ]);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var intervalId;

const setTime = (country) => {
  let date;
  let currentDate;
  let time;

  clearInterval(intervalId);

  intervalId = setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = utcTimeList.get(country); // UTC of the country taken from utcTimeList map
    date = new Date(utc + (3600000 * offset));


    currentDate = date.toLocaleDateString(undefined, options);
    time =
      date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    
    var countryName = country.toString().charAt(0).toUpperCase() + country.toString().slice(1);
      document.querySelector(".country-name").innerHTML = `Time for ${countryName}`;   
    document.getElementById("time").innerHTML =
      "<b>" + time + "<br>on " + currentDate + "</b>";
  }, 1000);
};

// handling clicks on other countries and showing them different times
const handleClickedCountry = (event_id)=> {
    var countryName = event_id.toLowerCase();
    setTime(countryName);
    
}
