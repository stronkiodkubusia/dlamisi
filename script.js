document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("tak"),n=document.getElementById("nie"),s=document.querySelector(".pyt"),i=document.querySelector(".container"),o=new Audio("happy.mp3");function e(){var e;document.querySelector(".gifMis")||((e=document.createElement("img")).src="miski.gif",e.classList.add("gifMis"),e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",i.insertBefore(e,i.firstChild),o.play()),t.style.display="none",n.style.display="none",s.style.display="none"}t.addEventListener("click",e),n.addEventListener("click",e),n.addEventListener("mouseover",function(){n.classList.remove("btn2"),n.classList.add("btn"),n.innerHTML="tak"}),n.addEventListener("mouseout",function(){n.classList.remove("btn"),n.classList.add("btn2"),n.innerHTML="nie"})});