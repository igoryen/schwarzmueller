<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 100, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions([
            "asyncIncrement", 
            "asyncDecrement"
        ])
    }
};
</script>
<style scoped>
    div {
        background-color: #f2f2f2;
        padding: 1em;
    }
</style>