Vue.component('friend-component', {
  props: ['friend'],
  filters: {
    ageInOneYear(age){
      return age + 1;
    },
    fullName(val){
      return `${val.last}, ${val.first}`
    }
  },
  methods: {
    incrementAge(friend){
      friend.age = friend.age + 1
    },
    decrementAge(friend){
      friend.age = friend.age - 1
    }
  },
  template: `<div>
    <h4>{{friend.first}}</h4>
    <h4>age: {{friend.age}}</h4>
    <button v-on:click='friend.age = friend.age - 1'>decrement age from template</button>
    <button v-on:click='friend.age = friend.age + 1'>increment age from template</button>
    <button v-on:click='decrementAge(friend)'>decrement age from methods</button>
    <button v-on:click='incrementAge(friend)'>increment age from methods</button>
    <input v-model='friend.first' /> 
  </div>`
}) // component is CALLED FRIEND, can be 'rendered' as <friend /> in other components


const app = new Vue({
  el: '#app', 
  data: {
    friends: [{
      first: 'tony',
      last: 'soprano',
      age: 40
    },{
      first: 'johnny',
      last: 'sacrimoni',
      age: 50
    },{
      first: 'jimmy',
      last: 'altieri',
      age: 35
    }],
    humphrey: {
    first: 'humphrey',
    last: 'baby',
    age: 7
  }, jimmy: {
    name: 'jimmy',
    age: 25
  }
  },
  computed: {

    }
  },
  filters: {

  },
  methods: {

  }, // IN CODE BELOW: friend is being passed in to the friends component
  template: `<div>
    <friend-component v-for='friend in friends' v-bind:friend='friend'> 

    </h2>
  </div>` // think of TEMPLATE as RENDER, can only return ONE ROOT ELEMENT TAG
  //  'MUSTACHE' syntax for rendering JAVASCRIPT in HTML
  // retrieves from 'data' object
  // v-for directive maps over array and outputs each val
  // v-model has two way data binding; can mutate on the fly
})
