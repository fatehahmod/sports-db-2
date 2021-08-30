const sportsdb=()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t')
    .then(res=>res.json())
    .then(data=>displayTeam(data.teams))
}
sportsdb();

const displayTeam = teams =>{
    // console.log(teams);
    const teamDiv=document.getElementById('sports')
    teams.forEach(team => {
        const Div =document.createElement('div');
    Div.classList.add('col-md-2');
    Div.innerHTML=`
    <div class="card">
      <img Width 50% src="${team.strTeamBadge}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${team.strTeam}</h5>
        <button>Details</button>
      </div>
    </div>
    `;
    teamDiv.appendChild(Div);
        
    });
    
    
};
// search button start 

document.getElementById('button').addEventListener('click',function(){
  const searchInput=document.getElementById('search-input')
  
  const searchtext=searchInput.value;
  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchtext}`)
  // fatch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal`)
  .then(res=>res.json())
  .then(data=>displaysports(data.teams))
  searchInput.value='';
})
const displaysports= sports =>{
  console.log(sports);
  
  const sportDiv=document.getElementById('sports-details')
  sportDiv.innerHTML='';
  sports.forEach(sport =>{
      
      const div=document.createElement('div')
      div.classList.add('country')
      div.classList.add('col')
      div.innerHTML=`
      
      <div class="card">
         
          <div class="card-body">
          
            <h5 class="card-title">${sport.strTeam}</h5>
            <p class="card-text">${sport.strLeague}</p>
            <img  src="${sport.strTeamBadge}" class="card-img-top w-25" alt="...">
          </div>
        </div>
     


      `;
      
      sportDiv.appendChild(div);
      
  });
}