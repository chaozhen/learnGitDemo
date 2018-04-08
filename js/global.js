// msg
var $headerContent = $('#header-content');

function navigatorTo (url) {
  window.location.assign(url);
}

function showHeaderContent (that){
  $(that).nextAll().show();
}

function fnModel (that){
  $(that).hide().prev().hide();
}

// msg2
var flag = false;
function fnChangeImg (that) {
  var urlb2 = '../src/images/msg-b-2.png';
  var urlb3 = '../src/images/msg-b-3.png';
  var img = $(that).children()[0];
  if (!flag) {
    $(img).attr('src', urlb3);
    flag = true;
  } else {
    $(img).attr('src', urlb2);
    flag = false;
  }  
}

var $msgfMore = $('#msgf-more');
function msgMore (){
  $msgfMore.show();
}

function msgCancle (){
  $msgfMore.hide();
}