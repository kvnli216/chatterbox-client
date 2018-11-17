var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // onclick="Rooms.add();"


  initialize: function () {
    $('#rooms button').on('click', function (event) {
      Rooms.add();
    });
  },

  render: function () {
  },

  renderRoom: function (element) {
    let tempRoomName = element.roomname;
    // debugger;

    let tempRoom = _.template('<option value="<%= tempRoomName %>"><%= tempRoomName %></option>');
    RoomsView.$select.append(tempRoom({ tempRoomName: tempRoomName }));
  }


};
