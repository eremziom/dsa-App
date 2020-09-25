<template>
    <div>
        <b-navbar class="topBar" type="dark">
            <b-navbar-brand href="#">
                <img alt="TOYA SP. z o.o. LOGO" class="logo" src="../assets//logo.png">
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="test" right class="loginButton">LOGIN</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    methods: {
        test(){
            console.log('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.topBar{
    background-color: rgb(42, 163, 204);
    .logo{
        max-height: 30px;
    }
    .loginButton{
        font-family: 'Orbitron', sans-serif;
    }
}
</style>