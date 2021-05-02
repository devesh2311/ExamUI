<template>

  <div class="hello">
  <div>

  <h2><u>RCR Labs</u> </h2>
  </div> 

  <button @click="addQues()" type="button">Add Questions in Question Paper</button>
  <button type="button">Generate Question Paper</button>
  <button type="button">Get Score List</button>


  </div>
  
</template>
<script>
export default {
  name: 'addQues',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    addQues()
    {
    this.$router.push('addQues');
    }
  }
}
</script>


<style scoped>
div.hello{
border-style:dotted;
}
</style>
