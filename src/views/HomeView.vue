<template>
  <div class="list">
    <v-card
      class="mx-auto"
      v-for="birb in birbs"
      v-bind:key="birb.id"
      @click="displayDetails(birb.id)"
    >
      <v-img class="white--text" width="100%" :src="birb.url">
        <v-card-title class="align-end fill-height">
          <div class="card-title">{{birb.title}}</div>
        </v-card-title>
      </v-img>
    </v-card>
    <v-card v-if="birbs.length == 0" class="pink">
      <v-card-text text-center>No images added yet.</v-card-text>
    </v-card>
    <v-btn color="pink" dark fixed bottom right fab to="/post">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { db } from "../services/firebase.js";
export default {
  methods: {
    displayDetails(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    }
  },
  data() {
    return {
      birbs: []
    };
  },
  firestore: { birbs: db.collection("birbs") }
};
</script>
<style scoped>
.list {
  width: 100%;
  padding: 0;
}

.card-title {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: -15px;
  padding: 10px;
}
</style>
