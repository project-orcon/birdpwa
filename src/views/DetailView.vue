<template>
  <div>
    <v-card class="mx-auto">
      <v-img class="white--text" width="100%" :src="currentBirb.url"></v-img>
      <v-card-title>{{currentBirb.title}}</v-card-title>
      <v-card-text>{{currentBirb.info}}</v-card-text>
    </v-card>
  </div>
</template>
<script>
import { db } from "../services/firebase.js";
export default {
  created() {
    //https://vuefire.vuejs.org/vuefire/querying.html#one-time-read
    db.collection("birbs")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        this.currentBirb = snapshot.data();
      });
  },
  data() {
    return {
      currentBirb: {}
    };
  }
};
</script>
</script>
<style scoped>
</style>