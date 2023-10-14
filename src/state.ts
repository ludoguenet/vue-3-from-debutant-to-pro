import {ref, watchEffect} from "vue";
import axios from "axios";

export function useTodo() {
    const id = ref(1);
    const todo = ref();
    const url = "https://jsonplaceholder.typicode.com/todos/";

    watchEffect(async () => {
        let { data } = await axios.get(url + id.value);

        todo.value = data;
    });

    return {
        id,
        todo
    }
}