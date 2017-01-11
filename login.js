(funtion(){
  var form = document.getElementById('Login');

  addEvent(form, 'submit', function(e){
    e.preventDefault();
    var elements = this.elemnts;
    var username = elements.username.value;
    var msg = 'Welcome' + username;
    document.getElementById('main').textContent = msg;

  });
}());
