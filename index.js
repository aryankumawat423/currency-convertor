
let para=document.querySelector(".here")
let btn=document.querySelector(".btm")
const URL="https://cat-fact.herokuapp.com/facts";

const getfacts=async ()=>{
    console.log("getting data...");
    let response=await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.text);
    para.innerText=data[0].text;
};
btn.addEventListener("click",getfacts);