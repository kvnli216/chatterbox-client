var Friends = {
  toggleStatus: function (username) {
    // $(this).attr('friend', true);
    // input string (friend name)
    $(`.username:contains(${username})`).attr('friend', true);


    // output boolean (true when friends, false if not friends)
  }
};

// "div:contains('John')"