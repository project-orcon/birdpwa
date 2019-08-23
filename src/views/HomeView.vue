<template>
  <div class="list">
    <v-card
      class="mx-auto"
      v-for="birb in getBirbs()"
      v-bind:key="birb.id"
      @click="displayDetails(birb.id)"
    >
      <v-img class="white--text" width="100%" :src="birb.url">
        <v-card-title class="align-end fill-height">
          <div class="card-title">{{birb.title}}</div>
        </v-card-title>
      </v-img>
    </v-card>
    <v-card v-if="getBirbs().length == 0" class="pink">
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
    },
    getBirbs() {
      if (navigator.onLine) {
        console.log("YOU ARE ONLINE");
        this.saveBirbsToCache();
        return this.birbs;
      } else {
        console.log("YOU ARE OFFLINE");
        return JSON.parse(localStorage.getItem("birbs"));
      }
    },
    saveBirbsToCache() {
      db.collection("birbs")
        .get()
        .then(querySnapshot => {
          const birbs1 = querySnapshot.docs.map(x => {
            var y;
            y = x.data();
            y.id = x.id;
            return y;
          });
          localStorage.setItem("birbs", JSON.stringify(birbs1));
        });
    }
  },
  mounted() {
    if (navigator.onLine) {
      this.saveBirbsToCache();
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
