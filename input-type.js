(function(){
  var pwd = documnet.getElementById('pwd');
  var chk = documnet.getElementById('showpwd');

  addEvent(chk, 'change', funciton(e) {
     var target = e.target || e.srcElement;
     try{
       if (target.checked) {
         pwd.type = 'text';
       }else{
         pwd.type ='password';

       }
     }catch(error) {
       alert('This browser cannot switch type');
     }
});
}());
