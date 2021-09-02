<template>
  <div class="menu">
    <div v-for="(items, key) in manual" :key="items" @click="select(key)">{{key}}
      <div v-if="key == selectKey">
        <p v-for="item in items" :key="item" @click="goto(key, item)" >{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "@/assets/manual/index"
export default {
  mounted() {
    this.manual = Data
  },
  data() {
    return{
      manual : [],
      selectKey: ''
    }
  },
  methods:{
    goto(key, item) {
      this.$router.push({
        path: "/menu",
        query: {
          name: item,
          key: key
        }
      })
    },
    select(selectKey) {
      this.selectKey = selectKey
    }
  }
}
</script>

<style scoped>
.menu{
  padding-left: 2em;
  text-align: left;
}
</style>  