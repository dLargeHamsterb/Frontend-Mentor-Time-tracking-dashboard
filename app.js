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
  `<div class="big-card">
  <div class="person">
    Report for
    Jeremy Robson
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
  `<div class="${element.title} smallCard">
    <div class="bg-icon">
      <img src="images/icon-${element.title}.svg" alt="${element.title} icon">
    </div>
    <div class="title">
      <p>${element.title}</p>
      <img src="images/icon-ellipsis.svg" alt="dote icon">
    </div>
    <div class="time">
    <p>${element.timeframes.daily.current}hrs</p>
    <p>${element.timeframes.daily.previous}</p>
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
          e.innerHTML = `<p>${day[i].timeframes[d].current}hrs</p>
          <p>Previous - ${day[i].timeframes[d].previous}hrs</p>`
          i++
        });
        i=0;
      });
    })

}

