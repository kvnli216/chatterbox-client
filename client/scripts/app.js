var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      // iterate through the data
      let messageArr = [];
      let roomArr = [];
      let friends = {};
      data.results.forEach(element => {
        if (element.hasOwnProperty('text') && element.hasOwnProperty('username') && element.hasOwnProperty('roomname')) {
          messageArr.push(element);
          // console.log(element);
          // debugger;
          // let tempMessage = _.template('<%= message %>');

          MessagesView.renderMessage(element);
          let tempRoomName = element.roomname;

          if (!roomArr.includes(tempRoomName)) {
            roomArr.push(tempRoomName);
            RoomsView.renderRoom(element);
          }
        }
      });

      $('#chats').on('click', '.username', function (event) {
        // debugger;
        let name = $(this).text();
        if (!friends.hasOwnProperty(name)) {
          friends[name];
        }
        //Get all elements that have the same text as the element we clicked on
        // let $futureFriends = $('.username').text(name);
        Friends.toggleStatus(name);
      }

      );
      //   // $('.username');


      //   sort it by moving "alike" type data to appropriate containers
      // within those containers, they utilize ajax to dynamically update

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
