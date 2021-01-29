
var loadingSpiner=document.querySelector(".loading")

var api="https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/0/100";
var httpsClient=new XMLHttpRequest();
httpsClient.open("GET",api);
httpsClient.onloadstart=function(){
  console.log("loading hes start >>>>>");
}
httpsClient.onload=function(){
  console.log("loading .....");
}
httpsClient.onloadend=function(){
 console.log("ending........");
 loadingSpiner.style.display="none";

 var response=JSON.parse(httpsClient.responseText);
 console.log(response);
 renderCardArea(response);
}
httpsClient.send();

var renderArea=document.querySelector(".prodact-card")

function renderCardArea(prodactColection){
  prodactColection.forEach(item=> {
    renderArea.innerHTML += CardArea(item);
  });
}

function CardArea(item){
 return `   <div class="card mb-3" >
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="${item.CoverImages}"
      class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
          <h5 class="card-title">${item.Name}</h5>
           <p class="card-text">${item.LongDescription}</p>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
     </div>
   </div>
 </div>
</div>`

}

