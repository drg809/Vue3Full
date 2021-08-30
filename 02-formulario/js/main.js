const app = Vue.createApp({
   data: () => ({
      title: "Formularios",
      datos: {
         name: "",
         age: 15,
         langs: [],
         gener: "m",
      },
   }),
   methods: {
      handleSubmit(e) {
         e.preventDefault()

         console.log(this.datos)
      }
   }
})