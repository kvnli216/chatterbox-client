var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // STILL NEEDS a means of tracking other message properties (username..etc)
    // var userMessage = $('#message').serializeArray()[0].value;
    // var currentUser = App.username;
    // var currentRoom = $('#rooms option:selected').text();
    // debugger;


    var message = {
      username: App.username,
      text: $('#message').serializeArray()[0].value,
      roomname: $('#rooms option:selected').text()
    };
    // debugger;
    Parse.create(message);
    // Need to update

    // 2. whatever is in the textbox => DOM
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};