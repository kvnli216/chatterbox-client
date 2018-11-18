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
      let messageArr = [];
      let roomArr = [];
      let friends = {};

      data.results.forEach(element => {
        if (element.hasOwnProperty('text') && element.hasOwnProperty('username') && element.hasOwnProperty('roomname')) {
          messageArr.push(element);
          MessagesView.renderMessage(element);
          let tempRoomName = element.roomname;

          if (!roomArr.includes(tempRoomName)) {
            roomArr.push(tempRoomName);
            RoomsView.renderRoom(element);
          }
        }
      });
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
