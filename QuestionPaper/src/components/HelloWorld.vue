<template>

  <div class="hello">
  <div>
  <h2><u>RCR Labs</u> </h2>
  </div> 
   <input type="radio" id="student" name="profession" value="1" v-model="profession" >
   <label for="student">Student</label>
   <input type="radio" id="teacher" name="profession" value="2" v-model="profession" >
   <label for="teacher">Teacher</label><br><br>
 

</select>


 User Name <input type ="text" placeholder = "Enter UserName" v-model="model.User"/><br><br>
   Password <input type ="Password" placeholder = "Enter Password" v-model="model.pswd" /><br><br>
      <button @click="gotoTeacherPage()" type="button">Sign in</button>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      profession:1,
      model:{
      User:'test',
      pswd:'test'
      }
    }
  },
  methods:{

         gotoTeacherPage()
            {   
              this.$http.post('http://localhost:60909/',this.model)
              .then(response=>{
                console.log(response);
              },error=>{
                console.log(error);

              });

            if(this.profession==2)
            {
            this.$router.push('gotoTeacherPage');
            }
            else{
              this.$router.push('gotoStudentPage');
            }
          }
                      
         },
       
                                         
     
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.hello{
border-style:dotted;

}
</style>
