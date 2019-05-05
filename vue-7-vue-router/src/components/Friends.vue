<template>
  <div>
    <h1>From Friends.vue</h1>
    {{id}}
    {{age}}
    {{weight}}
  </div>
</template>

<script>
export default {  
  props: [
    'id',
    'age',
    'weight',
  ]

}
</script>

