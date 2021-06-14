let btn =document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-search");
let right =document.querySelector(".right ul li")



btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}


right.addEventListener("click", function(){
    this.classList.toggle("active");
});
