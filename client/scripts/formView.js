var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // STILL NEEDS a means of tracking other message properties (username..etc)
    var userMessage = $('#message').serializeArray();
    Parse.create(userMessage[0].value, console.log('poo'));
    // updates in our messageArr

    // 2. whatever is in the textbox => DOM
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};