let availablekeywords=[
    'HTML',
    'css',
    'javascript',
    'java',
    'python',
    'docker',
    'machine learning',
    'git',
    'github',
    'dsa',
    'testing',
    'sdlc',
    'probability and statics',
    'numpy',
    'panda',
];

const resultbox =document.querySelector(".result-box");
const inputbox =document.getElementById("input-box");


inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    
    if(input.length){
        result=availablekeywords.filter((keyword)=>{
         return   keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultbox.innerHTML='';
    }
}
 function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" +  list + "</li>";
    });
    resultbox.innerHTML="<ul>" +content.join('') +"<ul>";
 }

 function selectInput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';
 }


 document.getElementById("search").addEventListener("submit", function(e){
   e.preventDefault();
   var searchvalue=document.getElementById("input-box").value;
   if(searchvalue ==="HTML"){
     document.getElementById("HTML").submit();
   }
   else if(searchvalue ==="css"){
     document.getElementById("css").submit();
   }
   else if(searchvalue ==="javascript"){
    document.getElementById("javascript").submit();
  }
   else{
     alert("invalid search input")
   }

 });

 
//  let countries = [];
//  const list=document.querySelector("#country-list");


// function fetchdata(){
 
//   fetch("https://restcountries.com/v3.1/all")
//   .then((response)=>response.json())
//   .then((data)=>{
//     countries = data.map((x) => x.name.common);
//     countries.sort();

//     loadData(countries ,list );
//     // console.log(countries);
//   });
// }
// fetchdata();

// function loadData(data ,element){
  
//   if(data){
//     element.innerHTML="";
//     let innerelement="";
//     data.forEach((item) => {
//       innerelement +=` 
//       <li>${item}</li>`;
     
//     });
// element.innerHTML=innerelement;

//   }
// }