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
    // $('#chats').on('click', '.username', function (event) {
    //   let name = $(this).text();
    //   if (!friends.hasOwnProperty(name)) {
    //     friends[name];
    //   }
    //   //Get all elements that have the same text as the element we clicked on
    //   // let $futureFriends = $('.username').text(name);
    //   Friends.toggleStatus.call(this);
    // };

    $('#chats').on('click', '.username', function (event) {
      debugger;
      let name = $(this).text();
      // if (!friends.hasOwnProperty(name)) {
      //   friends[name];
      // }
      //Get all elements that have the same text as the element we clicked on
      // let $futureFriends = $('.username').text(name);
      Friends.toggleStatus(name);
    });
    // Friends.toggleStatus(element.username);
  }

};