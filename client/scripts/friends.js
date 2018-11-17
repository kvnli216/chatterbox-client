var Friends = {
  toggleStatus: function (username) {
    // $(this).attr('friend', true);
    // input string (friend name)
    if (!$(`.username:contains(${username})`).hasClass('friend')) {
      $(`.username:contains(${username})`).addClass('friend');
    } else {
      $(`.username:contains(${username})`).removeClass('friend');
    }


    // output boolean (true when friends, false if not friends)
  }
};

// "div:contains('John')"