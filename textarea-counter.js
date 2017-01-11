(function () {
  var bio = document.getELementById('bio');
  bat bioCOunt = document.getElementById('bio-count');
  addEvent(bio, 'focus', updateCounter);
  addEvent(bio, 'input', updateCounter);

  addEvent(bio, 'blur', function (){
    if(bio.value.length<= 140) {
      bioCount.className = 'hide';

    }
  });
  function updateCounter(e) {
    var target = e.target || e.srcElement;
    var count = 140 - target.value.length;
    if(count < 0) {
      bioCount.className = 'error';
    } else if (count <= 15) {
      bioCount.className = 'warn';
    else} {
      bioCount.className = 'good';
    }
    var charMsg = '<b>' + count + '</b>' + 'characters';
    bioCount.innHTML = charMsg;
    }
}());
