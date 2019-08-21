<template>
  <div>
    <v-card class="mx-auto card">
      <img :src="birdUrl" width="100%"/>
      <div class="loader text-center" v-if="loading">
        <v-progress-circular indeterminate color="pink"></v-progress-circular>
      </div>
      <v-card-title>
        <v-text-field v-model="title" placeholder="Title" />
      </v-card-title>
      <v-card-text>
        <v-textarea v-model="info" placeholder="Add Info"></v-textarea>
        <v-btn class="pink white--text" @click="postBirb()">Save</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { db } from '../services/firebase.js';

export default {
  data() {
    return {
      birdUrl: null,
      title: "",
      info: "",
      loading: true
    };
  },
  mounted() {
    this.$http
      .get(this.$corsWorkaround + "https://random.birb.pw/tweet.json")
      .then(response => {
        this.birdUrl = "https://random.birb.pw/img/" + response.data.file;
        this.loading = false;
      });
  },
  methods: {
    postBirb() {
      db.collection("birbs").add({
          url: this.birdUrl,
          title: this.title,
          info: this.info,
          created_at: -1 * new Date().getTime()
        })
        .then(this.$router.push("/"));
    }
  }
};
</script>
<style scoped>

.waiting {
  padding: 10px;
  color: #555;
}
</style>
