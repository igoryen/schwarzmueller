<template>
    <div>
        <div id="on" @click="isOn = true" class="{active: isOn}">ON</div>
        <div id="off" @click="isOn = false" class="{active: !isOn}">OFF</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                email: "",
                password: "",
                age: 27
            },
            message: "A new text",
            sendMail: [],
            gender: "Mail",
            selectedPriority: "High",
            priorities: ["High", "Medium", "Low"]
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
    &:active,
    &:hover {
        background-color: lightgreen;
    }
}

#off {
    &:active,
    &:hover {
        background-color: lightcoral;
    }
}

</style>