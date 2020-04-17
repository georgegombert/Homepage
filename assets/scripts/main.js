$(document).ready(() => {

  let scrollPosition = 0;
  window.addEventListener("scroll", () => scrollPosition = window.scrollY );
  window.addEventListener("scroll", () => console.log(scrollPosition));

  const scrollBreak1 = 210;
  const scrollBreak2 = 900;
  const scrollBreak3 = 1692;
  const scrollBreak4 = 1800;

  const topTriangle = $(".top-triangle");
  const leftTriangle = $(".bottom-left-triangle");
  const rightTriangle = $(".bottom-right-triangle");

  //Navbar functionality
  $(document).on("click", (event) =>{
      switch(event.target.id){
        case "home":
          $('html,body').animate({
            scrollTop: $(".container-title").offset().top
          },800);
          break;
        case "about":
          $('html,body').animate({
            scrollTop: $(".container-about").offset().top
          },800);
          break;
        case "portfolio":
          $('html,body').animate({
            scrollTop: $(".container-portfolio").offset().top
          },800);
          break;
        case "contact":
          $('html,body').animate({
            scrollTop: $(".container-contact").offset().top
          },800);
          break;
        case "burger":
          $(".side-nav-container").toggleClass("side-nav-active");
          $("#burger").toggleClass("burger-active");
          break;
      }
  });


  //Triangle animations
  $(window).on("scroll", () => {
    if(scrollPosition >= 0 && scrollPosition < scrollBreak1){
      // document.body.style.backgroundColor = "green"
      topTriangle.removeClass("top-triangle-shift");
    }
    if(scrollPosition >= scrollBreak1 && scrollPosition < scrollBreak2){
      // document.body.style.backgroundColor = "red"
      topTriangle.addClass("top-triangle-shift");
      leftTriangle.removeClass("left-triangle-shift");
      rightTriangle.removeClass("right-triangle-shift");
    }
    if(scrollPosition >= scrollBreak2 && scrollPosition < scrollBreak3){
      // document.body.style.backgroundColor = "blue"
      topTriangle.addClass("top-triangle-shift");
      leftTriangle.addClass("left-triangle-shift");
      rightTriangle.addClass("right-triangle-shift");
      topTriangle.removeClass("top-triangle-shift-contact");
    }
    if(scrollPosition >= scrollBreak4){
      // document.body.style.backgroundColor = "orange"
      topTriangle.addClass("top-triangle-shift-contact");
    }
  });

});