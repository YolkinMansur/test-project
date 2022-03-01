<template>
  <div class="home">
  <!-- <filters/> -->
  <!-- <todolist/> -->
  <calculator/>
  <!-- <addblock/> -->
  <!-- <calendar/> -->
  <!-- <test v-bind:transfer= "transferData"/> -->
   <samsung/>
  </div>
</template>

<script>
// import filters from '@/components/filters'
// import todolist from '@/components/toDoList'
import calculator from '@/components/calculator'
// import addblock from '@/components/addblock'
// import calendar from '@/components/calendar'
// import test from '@/components/test'
// import samsung from '@/components/samsung'
export default {
  name: 'Home',
  components: {
    // filters,
    // todolist,
    calculator,
    // addblock,
    // calendar,
    // test,
    // samsung
  },
  data(){
    return{
      transferData: 'Переменная передана ',
     
    }
  }
}
</script>

  