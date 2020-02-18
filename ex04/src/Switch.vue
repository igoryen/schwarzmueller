<template>
    <div>
        <div id="on" @click="switched(true)" :class="{active: value}">ON</div>
        <div id="off" @click="switched(false)" :class="{active: !value}">OFF</div>
    </div>
</template>

<script>
export default {
    props: ["value"],
    methods: {
        switched( isOn ){
            this.$emit("input", isOn ); // v-model is waiting for event from 'input'
        }
    }
};
</script>

<style lang="scss" scoped>
#on,
#off {
    background-color: #f2f2f2;
    box-sizing: content-box;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin: 10px -2px;
    padding: 2px;
    text-align: center;
    width: 40px;
}
#on {
    &:hover,
    &.active
    {
        background-color: lightgreen;
    }
}

#off {
    &:hover,
    &.active    
    {
        background-color: lightcoral;
    }
}

</style>