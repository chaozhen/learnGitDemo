//适配iPhone6的稿
;(function() {
  var doc = document, win = window;
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var calced = false;
  recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth || calced) return;
      if (clientWidth >= 750 && clientWidth <= 1000 ) {
          docEl.style.fontSize = 100 + 'px';
      } else if(clientWidth >= 1000){
          docEl.style.fontSize = 100 * (1000 / 750) + 'px';
      }else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
      calced = true;
  }
  recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})();