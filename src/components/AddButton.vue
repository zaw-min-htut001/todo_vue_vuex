<template>
  <div>
    <CInputGroup class="mb-3">
    <CFormInput v-model="newTodo.title" aria-label="Recipient's username"
      aria-describedby="basic-addon2" />
     
    <CInputGroupText id="basic-addon2">
      <button @click="createTodo(newTodo)" class="btn btn-primary">Add New</button>
    </CInputGroupText>
  </CInputGroup>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
name : "AddButton",
data(){
  return {
    newTodo :{
      title : '',
    }
  }
},
methods :{
  ...mapActions(['createTodo'])
}
}
</script>

<style>

</style>