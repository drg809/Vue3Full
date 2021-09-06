<template>
  <div class="container">
    <div class="row">
      <router-link
        to="/proyectos"
        class="col s12 waves-effect waves-light btn amber darken-3"
      >
        <i class="material-icons">arrow_back</i>Regresar a la lista
      </router-link>
    </div>
    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="name"
              type="text"
              class="validate"
              v-model="project.title"
              placeholder="Nombre del Proyecto"
            />
          </div>
          <div class="input-field col s12">
            <input
              id="description"
              type="text"
              class="validate"
              v-model="project.description"
              placeholder="Descripción del Proyecto"
            />
          </div>
          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="html"
                checked="checked"
              />
              <span>HTML</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" v-model="project.langs" value="js" />
              <span>JavaScript</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" v-model="project.langs" value="node" />
              <span>Node.js</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" v-model="project.langs" value="ts" />
              <span>Typescript</span>
            </label>
          </p>
          <button type="submit" class="waves-effect waves-light btn col s12">
            <i class="material-icons">send</i>Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: "",
        description: "",
        langs: [],
        status: true,
      },
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    async getProject() {
      
      const res = await fetch(
        `https://crud-vue-c1a3a-default-rtdb.europe-west1.firebasedatabase.app/projects/${this.id}.json`
      );

      this.project = await res.json();
    },
    async updateProject() {
      const res = await fetch(
        `https://crud-vue-c1a3a-default-rtdb.europe-west1.firebasedatabase.app/projects/${this.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(this.project),
        }
      );
    },
  },
};
</script>
