<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://myApiEndpoint.com/login', {
                    email: this.email,
                    password: this.password
                })
                console.log(response.data)
            } catch(error) {
                console.log(error.response.data)
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent='login'>
            <label>
                Email:
                <input type='email' v-model='email' required>
            </label>
            <label>
                Password:
                <input type='password' v-model='password' required>
            </label>
            <button type='submit' @click.prevent="login()">Login</button>
        </form>
    </div>
</template>