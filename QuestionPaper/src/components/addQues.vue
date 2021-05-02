<template>
<div class="hello">

  <h2><u>RCR Labs</u> </h2>
  <label for="subjects">Select Subject:</label>
  <select id="subjects" name="subjects" v-model="model.subj">
  <option value="1" >English</option>
  <option value="2" >Maths</option>
  <option value="3" >Science</option>

</select>
<h1><u> Add Questions</u> </h1>
<textarea type="text" v-model="Questions" class="form-control" placeholder="Enter Question"/>
<button @click="onAdd()" type="button">Add</button><br><br><br><br><br>
<div class="row">
<table class="center" >

<th>Questions</th>  

 <tr v-for="(item,x) in tasks" v-model="model.text" >    
    <td> {{item.Questions}} </td>
</tr>
</table><br><br>
<button @click=onSubmit() type="button">Submit</button>
</div>

 </div> 
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "",
      Question: "",
      tasks: [
        {  Questions: "push your code to github" },
        {  Questions: "Email to your manager" },
        {  Questions: "go for running" }
      ],
      model:{
      subj:'',
      text:''
      }
    };
  },
  methods: {
    onAdd() {
      var obj = { Questions: this.Questions };
      this.tasks.push(obj);
      this.Questions = "";
      const formData = {
         subject: this.subj,
         text: this.obj
        };
      this.$http.post('http://localhost:60909/api/Exam/postQuestion',formData , {emulateJSON: true})
              .then(Response=>{
                console.log(Response);
              },error=>{
                console.log(error);

              });
    },
    
    onSubmit()
    {
              this.$http.post('http://localhost:60909/api/Exam/postQuestion',this.model)
              .then(Response=>{
                console.log(Response);
              },error=>{
                console.log(error);

              });
    
    }
  }
};
</script>

<style scoped>
table.center
{
    margin-left: auto;
    margin-right: auto;
}
table, th, td {
  border: 1px solid black;
}
div.hello{
border-style:dotted;

}
</style>