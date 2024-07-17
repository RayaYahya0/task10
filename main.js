async function getpizza(){
const response =await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
const pizza=await response.json();
const types=pizza.recipes;
const result=types.map(function(ele){
return`<div class="type">
<h2>${ele.title}</h2>
<img src="${ele.image_url}" />

</div>
`;

}


).join('');
document.querySelector(".typesOfPizza").innerHTML=result;


}
getpizza();