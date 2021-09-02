<template>
  <div id="pdf">
    <div class="back" @click="goBack()">返回</div>
    <div class="top-container">
      <h3>{{$route.query.name}}</h3>
    </div>
  </div>
</template>

<script>
import Pdfh5 from "pdfh5"
export default {
  mounted() {
    let url = "http://4l192793w0.wicp.vip:9235/"+this.$route.query.key+"/"+this.$route.query.name+".pdf"
    new Pdfh5('#pdf', {
      pdfurl: url,
		});
  },
  name: 'Index',
  props: {
  },
  methods:{
    goBack() {
      this.$router.push({
        path: "/"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pdf{
  position: fixed;
  top: 3em;
  height: calc(100% - 3em);
}
.top-container{
  position: fixed;
  left: 0em;
  top: 0em;
  background: #3b99fb;
  width: 100%;
  height: 2em;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: 800;
  color: white;
}
.top-container>h3{
  text-align: center;
}
.back{
  width: 4em;
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  z-index: 1000;
}
</style>
