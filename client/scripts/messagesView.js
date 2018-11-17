var MessagesView = {

  $chats: $('#chats'),



  //   $('#stop').click(function() {
  //     $('next').attr('onclick','stopMoving()');
  // }

  initialize: function () {

  },

  // render: function () { //this was the default
  // }

  renderMessage: function (element) {
    var messageNode = MessageView.render({ username: element.username, text: element.text });
    MessagesView.$chats.append(messageNode);
    // debugger;
  }

};