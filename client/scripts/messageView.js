var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username" friend=false><%- username %></div>
        <div><%- text %></div>
      </div>
    `)

};