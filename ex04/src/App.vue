<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />

        <hr />
        <div class="http">
            <h1>Http</h1>
            <div class="field">
                <label for>Username</label>
                <input type="text" v-model="user.username" />
            </div>
            <div class="field">
                <label for>Mail</label>
                <input type="text" v-model="user.email" />
            </div>
            <button @click="submit">Submit</button>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            user: {
                username: "",
                email: ""
            }
        };
    },
    methods: {
        submit() {
            // console.log(this.user);
            this.$http.post('https://vuejs-http-d34ff.firebaseio.com/data.json', this.user) // 'data' name is not mandatory
                .then(
                    response =>
                    {
                        console.log(response)
                    },
                    error => {
                        console.log(error)
                    }

                );

        }
    }
};
</script>

<style lang="scss">
.http {
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
    max-width: 200px;
    .field {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
    }
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
