<template>
  <div class="card horizontal" v-if="data.data.status">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ data.data.title }}</span>
        <p>
          {{ data.data.description }}
        </p>
        <p>
          Tecnologías:
          <span v-for="(lang, i) in data.data.langs" :key="i">
            {{
              data.data.langs.length - 1 > i
                ? `${lang.toUpperCase()}, `
                : lang.toUpperCase()
            }}
          </span>
        </p>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link
            class="col s6 waves-effect waves-light btn amber darken-3"
            :to="`/edit-project/${data.id}`"
          >
            <i class="material-icons">edit</i>
          </router-link>
          <button
            @click="deleteProject"
            class="col s6 waves-effect waves-light btn red darken-3"
          >
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    async deleteProject() {
      const id = this.data.id;
      const res = await fetch(
        `https://crud-vue-c1a3a-default-rtdb.europe-west1.firebasedatabase.app/projects/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({status: false}),
        }
      );
      const data = await res.json();

      this.data.data.status = data["status"];
    },
  },
};
</script>
