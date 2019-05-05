// THINK OF REDUX STATE (SINGLE SOUCE OF TRUTH)

const FriendStore = {
  data: {
    friends: ["tony", "phil"],
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;