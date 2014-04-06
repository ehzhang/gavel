Template.login.events({
  'click .login.button': function () {
    login();
    clearInputs();
  },
  'keyup #password' : function (event) {
    if (event.keyCode === 13) {
      login();
      clearInputs();
    }
  },
  'keyup .form' : function () {
    hideErrorMessage();
  }
});

login = function () {
  Meteor.loginWithPassword(getUsername(), getPassword(),
    function (error) {
      if (error) {
        showErrorMessage();
      }
    });
};

showErrorMessage = function () {
  $('.error.message').addClass('visible');
};

hideErrorMessage = function () {
  $('.error.message').removeClass('visible');
};

getUsername = function () {
  return $('#username').val();
};

getPassword = function () {
  return $('#password').val();
};

clearInputs = function () {
  $('input').val("");
};