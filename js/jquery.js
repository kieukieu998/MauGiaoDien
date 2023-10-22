$(function () {
    $(window).scroll(function (event) {
        /* Act on the event */
        var vitri = $(window).scrollTop();
        if (vitri < 400) {
            $('.backtotop').removeClass('show-backtotop1');
        }
        else if (vitri < 600) {
            $('.backtotop').addClass('show-backtotop1');
            $('.backtotop').removeClass('show-backtotop2');
        }
        else if (vitri < 1100) {
            $('.backtotop').addClass('show-backtotop2');
            $('.backtotop').removeClass('show-backtotop3');
        }
        else if (vitri < 1800) {
            $('.backtotop').addClass('show-backtotop3');
            $('.backtotop').removeClass('show-backtotop4');
        }
        else if (vitri < 2500) {
            $('.backtotop').addClass('show-backtotop4');
            $('.backtotop').removeClass('show-backtotop');
        }
        else {
            $('.backtotop').addClass('show-backtotop');
        }
    });

    $('.backtotop').click(function (event) {
        $('body, html').animate({ scrollTop: 0 }, 1000);
    });

})

//modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("myNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// count up 
var countUpElements = document.querySelectorAll('.count-up');

countUpElements.forEach(function(element) {
  var countTo = element.getAttribute('data-count');
  var countNum = parseInt(element.innerText, 10);
  var duration = 8000;
  var startTime = null;

  function animateCountUp(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var increment = (countTo - countNum) * (progress / duration);
    var currentCount = countNum + increment;
    
    element.innerText = Math.floor(currentCount);

    if (progress < duration) {
      requestAnimationFrame(animateCountUp);
    } else {
      element.innerText = countTo;
      //alert('finished');
    }
  }

  requestAnimationFrame(animateCountUp);
});
