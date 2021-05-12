<template>
    <div>
        <b-navbar class="topBar" type="dark">
            <b-navbar-brand to="/">
                    <img alt="TOYA SP. z o.o. LOGO" class="logo" src="../assets/logo.png">    
            </b-navbar-brand>
            <b-navbar-nav v-if="!isLogged" class="ml-auto">
                <b-nav-text>Niezalogowany</b-nav-text>
                <b-nav-item to="/login" right class="loginButton">LOG IN
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav v-else class="ml-auto">
                <b-nav-text >Zalogowany</b-nav-text>
                <b-nav-item href="/" right class="loginButton">LOG OUT</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TopBar',
    computed: mapGetters(['isLogged', 'isUser']),
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.topBar{
    background-color: rgb(42, 163, 204);
    .logo{
        max-height: 30px;
    }
}
</style>