
function SmoothScroll(){
  const InternalLink = document.querySelector(".js-nav a[href^='#']");
  const hrefLink = InternalLink.getAttribute("href");

  InternalLink.addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(hrefLink).scrollIntoView({block: "start", behavior: "smooth"});
  });
}

SmoothScroll();
