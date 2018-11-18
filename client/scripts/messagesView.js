var MessagesView = {

  $chats: $('#chats'),


  initialize: function () {

  },

  renderMessage: function (element) {
    var messageNode = MessageView.render({ username: element.username, text: element.text });
    MessagesView.$chats.append(messageNode);

    $('#chats').on('click', '.username', function (event) {
      debugger;
      let name = $(this).text();
      Friends.toggleStatus(name);
    });
  }
};