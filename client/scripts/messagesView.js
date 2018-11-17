var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  // render: function () { //this was the default
  // }

  renderMessage: function (element) {
    var messageNode = MessageView.render({ username: element.username, text: element.message });
    MessagesView.$chats.append(messageNode);
  }

};