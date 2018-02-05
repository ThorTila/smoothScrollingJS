var nav = document.querySelectorAll('.js-nav');
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", scrollToID, false);
}
function scrollToID(event) {
  var element = event.target;
  event.preventDefault();
  var targetAddress = targetAddr(element);
  self.targetElement = document.getElementById(targetAddress);
  var targetOffset = Math.round(targetElement.getBoundingClientRect().top);
  self.upOrDown = checkSign(targetOffset); //not used
  smoothScroll(targetOffset, duration = 500);
}
function targetAddr(element) {
  if (element.hasAttribute('href')) {
    return element.getAttribute('href').replace('#', '');
  } else {
      link = element.getElementsByTagName('a');
      for (var i = 0; i < link.length; i++) {
        if (link[i].hasAttribute('href') === true) {
        return link[i].getAttribute('href').replace('#', '');
      } else {
          console.log('Nie ma linka.');//Error msg
        }
    }
  }
}
function currentYOffset() { //not used
    // For normal browsers
    if (window.pageYOffset) return window.pageYOffset;
    // For Internet Explorer 6 in standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // For Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function checkSign(number) { //not used
  if (number >= 0) {
    return '+';
  }
  else {
    return '-';
  }
}
function roundDown(number) {
  if (number >= 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function smoothScroll(offset, duration) {
    //For normal browsers
  if (('scroll-behavior' in document.body.style) === false || (CSS.supports('scroll-behavior', 'smooth')) === false) {
	 var i = 0;
    var increments = roundDown(offset / (duration / 10));
    var incrementsRemainder = (offset % (duration / 10));
    animate();
    function animate() {
      window.scrollBy(0, increments);
      i++;
      if (i < (duration / 10)) {
        setTimeout(animate, 10);
      } else {
        window.scrollBy(0, incrementsRemainder);
        return;
      }
    }
  }
    //For older browsers and IE
  else {
    document.getElementsByTagName('html')[0].style['scroll-behavior'] = "smooth";
    window.scrollBy(0,offset);
  } 
}
