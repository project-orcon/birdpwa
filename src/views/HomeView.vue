<template>
  <div class="list">
    <v-card
      class="mx-auto"
      :height="$vuetify.breakpoint.mdAndUp ? 500 : 300"
      v-for="(picture,index) in pictures"
      v-bind:key="index"
      @click="displayDetails(picture.id)"
    >
      <v-img class="white--text" height="100%" :src="picture.url">
        <v-card-title class="align-end fill-height">
          <div class="card-title">{{picture.comment}}</div>
        </v-card-title>
      </v-img>
    </v-card>
    <v-btn color="pink" dark fixed bottom right fab to="/post">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
import data from "../data";
export default {
  methods: {
    displayDetails(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    }
  },
  data() {
    return {
      pictures: data.pictures
    };
  }
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
  padding: 10px;
}
</style>
