let btn = document.querySelector(".btn");
let text = document.querySelector(".inp");
let back = document.querySelector(".cont");

text.onkeydown = function(e){
    
    if(e.key=="Enter"){
    searchImg(text.value)

    }
}
btn.onclick = function(){
    searchImg(text.value)
}

function searchImg(keyword){
    let list = fetch('https://api.unsplash.com/search/photos?query='+keyword+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo');
    // console.log(keyword);
    list.then(res=>res.json()).then(res=>loadimg(res)).catch(err=>err)
}

function loadimg(item){
    back.innerHTML=''
console.log(item);
for(let i=0;i<item.results.length;i++){
    // console.log(item.results[i].urls.raw)
    let a  = document.createElement('img');
    let url = item.results[i].urls.small;
    a.setAttribute('src', url)
    back.appendChild(a);
    }

    let otherImg= document.getElementsByTagName("img");
    console.log(otherImg)
    for(let i1=0;i1<otherImg.length;i1++){
        otherImg[i1].onclick = function(e1){
            console.log(e1.target)
            modal.style.display = "flex";
            modal_content .style.backgroundImage= `url(${e1.target.getAttribute('src')})`

        }
    }
}
let modal = document.querySelector(".modal");
let modal_content = document.querySelector(".modal-content");
// console.log(modal_content)
let btn1 = document.getElementById("top1");

let span = document.getElementsByClassName("close")[0];


span.onclick = function(){
    modal.style.display = "none";
    console.log("span")
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

