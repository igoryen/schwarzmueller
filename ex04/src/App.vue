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
            <hr>
            <button @click="fetchData">Get Data</button>
            <ul>
                <li v-for="u in users" v-bind:key="u.username">
                    {{ u.username }} ({{ u.email }})
                </li>
            </ul>
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
            },
            users: [],
            resource: {}
        };
    },
    methods: {
        submit() {
            this.resource.save({}, this.user); // this sends a POST request to the DB url
            // console.log(this.user);
            // this.$http
            // .post('data.json', this.user) // 'data' name is not mandatory
            //     .then(
            //         response => {
            //             console.log(response)
            //         },
            //         error => {
            //             console.log(error)
            //         }
            //     );
        },
        fetchData() {
            this.$http
            .get('data.json')
                .then(
                    response => {
                        return response.json();
                    }
                ).then (
                    data => {
                        const resultArray = [];
                        for (const key in data) {
                            resultArray.push( data[key] );
                        }
                        this.users = resultArray;
                    }
                );
        }
    },
    created() { // this is a lifecycle
        this.resource = this.$resource( 'data.json');
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
    li {
        padding: 0.2em;
        background-color: #fff;
        margin: 0.2em;
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
