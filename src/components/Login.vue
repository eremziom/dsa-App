<template>
    <div>
        <form v-if="!isLogged" class="loginForm">
            <b-form-group>
                <b-form-input id="userLogin" v-model="user">
                </b-form-input>
                <label for="userLogin">Użytkownik</label>
                <b-form-input id="passwordLogin">
                </b-form-input>
                <label for="passwordLogin">Hasło</label>
            </b-form-group>
            <b-button @click="logInToApp">LOGIN</b-button>
        </form>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Login',
    computed: mapGetters(['isLogged', 'isUser']),
    mounted() {
        this.$emit('setLoginViewOn');
    },
    methods: {
        ...mapActions(['logIn', 'logOut']),
        logInToApp: function(){
            this.logIn(this.user);
            this.$router.push({path: '/dashboard'});
        }
    },
    data: function(){
        return {
            user: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    .loginForm {
        input{
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>