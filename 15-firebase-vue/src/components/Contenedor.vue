<template>
  <div class="col s12 m7">
    <CardProject v-for="(project, i) in projects" :key="i" :data="project" />
  </div>
</template>

<script>
import CardProject from "./CardProject.vue";
export default {
  data: () => ({
    projects: [],
  }),
  components: {
    CardProject,
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await fetch(
        "https://crud-vue-c1a3a-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
      );

      const data = await res.json();

      for(let i in data) {
        this.projects.push(data[i]);
      }
    },
  },
};
</script>
