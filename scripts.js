let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

// var counterContainer = document.querySelector('.website-counter');
// var visitCount = localStorage.getItem("page_view");
// 
Check if page_view entry is present
// 
// if (visitCount)
// {
  // visitCount = Number(visitCount) + 1;
// }
// 
// else
// {
  // visitCount = 1;
  // localStorage.setItem("page_view", 1);
// }
// 
// counterContainer.innerHTML = visitCount;
// 
// 
// function webpageViews(response) 
// {
  // document.getElementById('visits').innerText = response.value;
// }



function $sel(el) {
  return document.querySelector(el);
}

let progressStartValue = 0, progressEndValue = 87, speed = 50;


var sk1=$sel("#skill1");
var sk2=$sel("#skill2");
var sk3=$sel("#skill3");
var sk4=$sel("#skill4");
var sk5=$sel("#skill5");
var sk6=$sel("#skill6");

AOS.init({
    duration: 1000
  });


document.addEventListener('aos:in:sk',()=>{
  animation.play();
  });
  
document.addEventListener('aos:out:sk',()=>{
  animation.reset();
  });

  var skills = {
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    s6: 0
  }
  
  
  
  var animation = anime({
    targets: skills,
    s1: 87,
    s2: 85,
    s3: 65,
    s4: 35,
    s5: 15,
    s6: 40,
    round: 1,
    delay: 500,
    easing: 'linear',
    duration: 2000,
    autoplay: false,
    update: function(){
      sk1.style.background= "conic-gradient(#e8862a,"+(skills.s1*3.5)+"deg, #ededed 0deg)";
      sk2.style.background= "conic-gradient(#1faaef,"+(skills.s2*3.5)+"deg, #ededed 0deg)";
      sk3.style.background= "conic-gradient(#720AC7,"+(skills.s3*3.6)+"deg, #ededed 0deg)";
      sk4.style.background= "conic-gradient(#fad000,"+(skills.s4*3.6)+"deg, #ededed 0deg)";
      sk5.style.background= "conic-gradient(#3ab8b8,"+(skills.s5*3.6)+"deg, #ededed 0deg)";
      sk6.style.background= "conic-gradient(#144bb8,"+(skills.s6*3.6)+"deg, #ededed 0deg)";     
    }
  })
  