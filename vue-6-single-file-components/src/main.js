const app = new Vue({
  el: '#app',
  data: {
    friends: ['anthony soprano', 'phil leotardo', 'johnny sacrimoni'],
    editFriend: false
  },
  methods: {
    deleteFriend(id, i){
      fetch(`http://rest.learncode.acedemy/api/vue-5/friends/${id}`, {
        method: 'DELETE'
      })
      .then(()=>{
        console.log(`deleted!`)
        this.friends.splice(i, 1)
      })
      .catch(err=>console.log(`Vue component fetch method error: ${err}`))
      // on mounting to the DOM, the component will fetch data from an outside source
    },
    updateFriend(friend){
      fetch(`http://rest.learncode.acedemy/api/vue-5/friends/${friend.id}`, {
        body: JSON.stringify(friend),
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(()=>{
        this.editFriend = null;
      })
      .catch(err=>console.log(`Vue component fetch method error: ${err}`))
    }
  },
  beforeCreate(){
    
  },
  create(){

  },
  beforeMount(){

  },
  mounted(){
    console.log('in mounted lifecycle method')
    fetch(`http://rest.learncode.acedemy/api/vue-5/friends`)
      .then(res=> {res.json()
      this.friends = data}) // on mounting to the DOM, the component will fetch data from an outside source
      .catch(err=>console.log(`Vue component fetch method error: ${err}`))
  },
  template: `<div>
    <li v-for='friend, i in friends'>
      <div v-if='editFriend === friend.id'>
        <input v-on:keyup.13='updateFriend(friend)' v=model='friend.name' />
        <button v-on:click='updateFriend(friend)'>save</button>
      </div>
      <div v-else>
        <button v-on:click='editFriend = friend.id'>edit</button>
        <button v-on:click='deleteFriend(friend.id, i)'>x</button>
      </div>
      {{friend}}<button v-on:click='deleteFriend(friend.id, i)'>x</button>
    </li>
  </div>`
}) // beforeCreate, create, beforeMount and mounted are VUE's LIFECYCLE METHODS
    // v-for='friend in friends' can also take i along in the callback
    // v-if runs the if statement and v-else renders if that statement is false
    // v-on:keyup.13 references when the ENTER key is hit


// type in console: app.$mount('#app')
// forces the vue component to mount to the dom


