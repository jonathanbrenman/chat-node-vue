
import ChatScreen from '../chat-screen/ChatScreen.vue';
import ChatInput from '../chat-input/ChatInput.vue';
import ContactList from '../contact-list/ContactList.vue';

export default {
  name: 'chat',
  data: function() {
    return {
      choosenName: null,
      username: null,
      modalShow: true
    }
  },
  sockets: {
      customEmit: function (data) {
          console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      }
  },
  created: function () {},
  methods: {
    setUserName: function () {
      this.username = this.choosenName;
    }
  },
  components: {
    ChatScreen,
    ChatInput,
    ContactList
  }
}
