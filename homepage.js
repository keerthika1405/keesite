let availablekeywords=[
    'HTML',
    'css',
    'javascript',
    'java_practice_Q/A',
    'python_practice_Q/A',
    'DSA',
    'cloud_computing',
    'git',
    'github',
    'OSI_Model',
    'testing',
    'sdlc',
    'Networking',
    'JAVA_SE_/_EE',
    'Java_API',
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

//  'HTML',
//  'css',
//  'javascript',
//  'java practice Q/A',
//  'python practice Q/A',
//  'DSA',
//  'cloud computing',
//  'git',
//  'github',
//  'OSI Model',
//  'testing',
//  'sdlc',
//  'Networking',
//  'JAVA SE / EE',
//  'Java API',
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


  else if(searchvalue ==="java_practice_Q/A"){
    document.getElementById("java_practice_Q/A").submit();
  }
  else if(searchvalue ==="python_practice_Q/A"){
    document.getElementById("python_practice_Q/A").submit();
  }
  else if(searchvalue ==="DSA"){
    document.getElementById("DSA").submit();
  }


  else if(searchvalue ==="cloud_computing"){
    document.getElementById("cloud_computing").submit();
  }
  else if(searchvalue ==="git"){
    document.getElementById("git").submit();
  }
  else if(searchvalue ==="github"){
    document.getElementById("github").submit();
  }
  else if(searchvalue ==="OSI_Model"){
    document.getElementById("OSI_Model").submit();
  }
  else if(searchvalue ==="testing"){
    document.getElementById("testing").submit();
  }
  else if(searchvalue ==="sdlc"){
    document.getElementById("sdlc").submit();
  }
  else if(searchvalue ==="Networking"){
    document.getElementById("Networking").submit();
  }
  else if(searchvalue ==="JAVA_SE_/_EE"){
    document.getElementById("JAVA_SE_/_EE").submit();
  }
  else if(searchvalue ==="Java_API"){
    document.getElementById("Java_API").submit();
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