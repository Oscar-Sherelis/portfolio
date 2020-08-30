const debounce = (fn) => {
    let frame;
    return (...params) => {
      if (frame) { 
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
   } 
};
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    let screenWidth = document.querySelector('html').offsetWidth;
    if (screenWidth <= 640) {
        if (document.documentElement.dataset.scroll > 270) {
            document.querySelectorAll('nav a').forEach( a => {
                a.style.color = "#3F7FBF";
            });
            $(document).ready(function(){
                $("nav a").hover(function(){
                  $(this).css("border-bottom", "2px solid #3F7FBF");
                  }, function(){
                  $(this).css("border-bottom", "none");
                });
              });
        } else {
            document.querySelectorAll('nav a').forEach( a => {
                a.style.color = "#fff";
            });
            $(document).ready(function(){
                $("nav a").hover(function(){
                  $(this).css("border-bottom", "2px solid #fff");
                  }, function(){
                    $(this).css("border-bottom", "none");
                  });
              });
        }
    } else {
        if (document.documentElement.dataset.scroll >= 550) {
            document.querySelectorAll("nav a").forEach( a => {
                a.style.color = "#3F7FBF";
            });
            $(document).ready(function(){
                $("nav a").hover(function(){
                  $(this).css("border-bottom", "2px solid #3F7FBF");
                  }, function(){
                    $(this).css("border-bottom", "none");
                  });
              });
        } else {
            document.querySelectorAll('nav a').forEach( a => {
                a.style.color = "#fff";
            });
            $(document).ready(function(){
                $("nav a").hover(function(){
                  $(this).css("border-bottom", "2px solid #fff");
                  }, function(){
                    $(this).css("border-bottom", "none");
                  });
              });
        }
    }
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();