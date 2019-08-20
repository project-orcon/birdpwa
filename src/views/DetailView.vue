<template>
  <div>
    <v-card class="mx-auto" :height="$vuetify.breakpoint.mdAndUp ? 600 : 300">
      <v-img class="white--text" height="100%" :src="pictures[$route.params.id].url"></v-img>
      <v-card-title>{{pictures[$route.params.id].comment}}</v-card-title>
      <v-card-text>{{pictures[$route.params.id].info}}</v-card-text>
    </v-card>
  </div>
</template>
<script>
import data from "../data";
export default {
  data() {
    return {
      pictures: data.pictures
    };
  }
};
</script>
</script>
<style scoped>
</style>