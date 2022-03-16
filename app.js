const wrapper = document.querySelector('.wrapper');
wrapper.innerHTML="";

async function card(){
  const response = await fetch ('data.json');
  const jsonOBJ = await response.json();
  person()
  newCard(jsonOBJ)
  btnclick(jsonOBJ)
}
card()

function person(){

  const bigCard =
  `<div class="bigCard">
  <div class="person">
    <div class="photo">
     <img src="images/image-jeremy.png" alt="jeremy">
    </div>
    <div class="personRaport">
    <p class="raport">Report for</p>
    <div class="name">
      <p class="personName">Jeremy</p>
      <p class="lastName">Robson</p>
      </div>
    </div>
  </div>

  <div class="data">
    <button id="daily" class="btn">Daily</button>
    <button id="weekly" class="btn">Weekly</button>
    <button id="monthly" class="btn">Monthly</button>
  </div>
  `
  wrapper.innerHTML +=bigCard
}


function newCard(data){

  data.forEach(element => {
   const smallCard=
  `<div class="smallCard">
    <div class="bgIcon" id="${element.title}">
      <p></br></br>
      </p>
    </div>
    <div class="title">
      <p>${element.title}</p>
      <div><img src="images/icon-ellipsis.svg" alt="dote icon"></div>
      </div>
    <div class="time">
    <p class="current" >${element.timeframes.weekly.current}hrs</p>
    <p class="previous">Last Week - ${element.timeframes.weekly.previous}hrs</p>
  </div>
    `
    wrapper.innerHTML +=smallCard
  });
}
function btnclick(data){
  const smallCard = document.querySelectorAll('.time')
  const btn = document.querySelectorAll('.btn')
 const day = data
  btn.forEach((e) => {
    let i = 0
    let d = e.id
      e.addEventListener('click', function () {
        smallCard.forEach((e) => {
          if(d=="daily"){
          e.innerHTML = `<p class="current">${day[i].timeframes.daily.current}hrs</p>
          <p class="previous">Yesterday - ${day[i].timeframes.daily.previous}hrs</p>`
          i++};
          if(d=="weekly"){
          e.innerHTML = `<p class="current">${day[i].timeframes.weekly.current}hrs</p>
          <p class="previous">Last Week - ${day[i].timeframes.weekly.previous}hrs</p>`
          i++};
          if(d=="monthly"){
          e.innerHTML = `<p class="current">${day[i].timeframes.monthly.current}hrs</p>
          <p class="previous">Last Month - ${day[i].timeframes.monthly.previous}hrs</p>`
          i++};
        });
        i=0;
      });
    })

}

