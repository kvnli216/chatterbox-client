var Friends = {
  toggleStatus: function (username) {
    if (!$(`.username:contains(${username})`).hasClass('friend')) {
      $(`.username:contains(${username})`).addClass('friend');
    } else {
      $(`.username:contains(${username})`).removeClass('friend');
    }
  }
};