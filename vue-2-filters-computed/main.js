const app = new Vue({
  el: '#app', 
  data: {
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
    humphreyFullName(){
      return `${this.humphrey.last} ${this.humphrey.first}` // outputs baby humphrey
    }
  },
  filters: {
    ageInOneYear(age){
      return age + 1;
    },
    theFullName(val){
      return `${val.first} ${val.last}`
    }
  },
  template: `<div>
  <h3>hello friend</h3>
  <h5> hola </h5>
  <h5> First Name: {{ humphrey.first }} </h5> 
  <h5> Full Name from filter object: {{ humphrey | theFullName }} </h5> 
  <h5> Age: {{ humphrey.age }} </h5>
  <h5> Humphrey's full name: {{ humphreyFullName() }} </h5>
  </div>` // think of TEMPLATE as RENDER, can only return ONE ROOT ELEMENT TAG
  //  'MUSTACHE' syntax for rendering JAVASCRIPT in HTML
  // retrieves from 'data' object
})
