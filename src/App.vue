<template>
  <div>
    <h1 class="text-center text-primary mt-5">Todo Lists</h1>
    <div class="container">
      <AddButton />
      <SelectBoxVue/>
      <div class="row " v-for="data in getTododata" :key="data.id">
        <div @dblclick="toggle(data)" class=" mb-3">
          <CCard class="border border-primary">
            <CCardBody :class="complete(data)">
              <div  class="">{{ data?.title }} <span @click="deleTodo(data?.id)" class="float-end text-danger material-symbols-outlined">
                  <button class="btn btn-danger font-5">cancel</button>
                </span> </div>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddButton from './components/AddButton.vue';
import SelectBoxVue from './components/SelectBox.vue';

export default {
  name: "App",
  data () {
    return{
    }
  } ,
  components: { AddButton ,SelectBoxVue },
  computed: {
    ...mapGetters(["getTododata"]),
  },
  methods: {
      toggle(data){
        data.completed = !data.completed;
        this.completeCheck(data)
      },
      complete(data){
        return data.completed ? 'text-decoration-line-through text-danger' : ''
      },
    ...mapActions(['getData','deleTodo','completeCheck']),
  },
  mounted() {
    this.getData()
  }
};
</script>
