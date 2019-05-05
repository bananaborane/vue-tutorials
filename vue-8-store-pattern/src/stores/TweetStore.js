const TweetStore = {
    data: {
      tweets: ["remember when is the lowest form of conversation", "ive been in the can 20 years"],
    },
    methods: {
      addFriend(name) {
        TweetStore.data.friends.push(name);
      }
    }
  };
  
  export default TweetStore;

  