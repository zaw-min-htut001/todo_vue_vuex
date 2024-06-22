<template>
  <div class="row mb-5">
    <div class="col-md-3"  >
        <label for="">Limit :</label>
    <select name="" class="form-control" v-model="data" @change="limit(data)">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
    </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
name : 'SelectBox',
data (){
    return{
        data : null
    }
},
methods :{
    ...mapActions(['limit']),
}
}
</script>

<style>

</style>