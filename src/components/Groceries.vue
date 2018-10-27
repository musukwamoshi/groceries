<template>
  <div class="hello">
    <div class="holder">
       <form @submit.prevent="addSkill">

       <input type="text" placeholder="Add a grocery to the grocery list..." v-model="grocery" v-validate="'min:5'" name="skill" >
       <transition class="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX" >
       <p class="alert"  v-if="errors.has('grocery')">{{error.first('grocery')}} </p>
       </transition>

       </form>
       
       <ul>
       <transition-group enter-active-class="animated bounceInUp" leave-active-class="animated  bounceOutDown">
       <li v-for="(data, index) in groceries" :key='index'>
             {{data.grocery}}
       </li>
       </transition-group>

       </ul>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Groceries',
  props: {
    
  }

  data(){
     return {
      grocery:'';
      groceries:[
       {"grocery":"Cooking oil"},
       {"grocery":"Olive oil"}
      ]
     }
  }

  methods(){

    addGrocery(){
      
      this.groceries.push({grocery:this.grocery});

      this.grocery='';

    }

    removeGrocery(){

      this.groceries.splice(id,1);

     
    }

  }
}
</script>

<!-- Adding  "scoped" attribute to limits CSS to this component only -->
<style scoped>

.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
