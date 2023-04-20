// TODO: add code here

window.addEventListener("load", (event) => {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    console.log(response);
    response.json().then(function (jsonResponse) {
      let container = document.getElementById("container");
      let newMarkup = "";
      for (const property in jsonResponse) {
        // console.log(jsonResponse[property].firstName);
        let skillsMarkup = jsonResponse[property].skills.join(', ')
        newMarkup += `<div class="astronaut">
        <div class="bio">
           <h3>${jsonResponse[property].firstName} ${jsonResponse[property].lastName}</h3>
           <ul>
              <li>Hours in space: ${jsonResponse[property].hoursInSpace} </li>
              <li>Active: ${jsonResponse[property].active} </li>
              <li>Skills: ${skillsMarkup} </li>
           </ul>
        </div>
        <img class="avatar" src=${jsonResponse[property].picture}>
     </div>`
      }
      container.innerHTML = newMarkup;
    });
  });
});
