const app = new Vue({
  el: '#app',
  data: {
    friends: ['anthony soprano', 'phil leotardo', 'johnny sacrimoni']
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
    <li v-for='friend in friends'>{{friend}}</li>
  </div>`
}) // beforeCreate, create, beforeMount and mounted are VUE's LIFECYCLE METHODS




// type in console: app.$mount('#app')
// forces the vue component to mount to the dom


