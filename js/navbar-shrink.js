window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "20px 0px";
  } else {
    document.getElementById("header").style.padding = "30px 0px";
  }
}