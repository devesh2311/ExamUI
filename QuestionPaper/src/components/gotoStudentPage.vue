<template>

  <div>
  <div>

  <h2><u>RCR Labs</u> </h2>
  <label for="subjects">Select Subject:</label>
  <select id="subjects" name="subjects" @change="onChange($event)" v-model="model.subj">
  <option value="1" >English</option>
  <option value="2" >Maths</option>
  <option value="3" >Science</option>

</select>
  </div> 

    <h2>Question Paper</h2>
<button @click="FetchQuestions()">Get Question Paper</button>
  <button type="button">Submit</button>


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
    FetchQuestions()
    {
    this.$http.get('http://localhost:60909/api/Exam/getQuestions')
    .then(Response=>{
        console.log(Response)
    });
    },
    model:{
      subj:'test',
    }
  }
}
</script>


<style scoped>
div.hello{
border-style:dotted;
}
</style>
