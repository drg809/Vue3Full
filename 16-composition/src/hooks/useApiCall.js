import { onMounted, provide } from 'vue';

export function useApiCall() {
   async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      provide("listadoPost", data);

      console.log(data);
   }
}