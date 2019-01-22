

export default {
  name: 'Input',
  props: ['username'],
  data: function () {
    return {
      message: null
    }
  },
  methods: {
    writeMessage: function () {
      if(this.message) {
        this.$socket.emit('sendMessage', {
          username: this.username,
          message: this.message
        });
        this.message = null;
      }
    }
  },
  components: {}
}
