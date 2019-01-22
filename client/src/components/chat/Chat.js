
import Screen from './screen/Screen.vue';
import Input from './input/Input.vue';
import ContactList from './contact-list/ContactList.vue';

export default {
  name: 'Chat',
  data: function() {
    return {
      choosenName: null,
      username: null,
      modalShow: true,
      users: [],
      messages: []
    }
  },
  sockets: {
      askUsername: function () {
        if(this.choosenName) {
          this.setUserName();
        } else {
          this.modalShow   = true;
        }
      },
      newUserConnected: function (data) {
        this.users = data.users;
        this.messages.push({
          from: data.from,
          message: data.message,
          createdAt: data.createdAt
        });
      },
      newMessage: function (data) {
        this.messages.push({
          from: data.from,
          message: data.message,
          createdAt: data.createdAt
        });
        var container = this.$el.querySelector(".chat-screen");
        container.scrollTop = container.scrollHeight;
      }
  },
  created: function () {},
  methods: {
    setUserName: function () {
      this.username = this.choosenName;
      this.$socket.emit('newUser', this.username);
    }
  },
  components: {
    Screen,
    Input,
    ContactList
  }
}
