<template>
    <div>
        <h4>LOGIN MODULE</h4>    
    </div>
    
</template>

<script>
import mapActions from 'vuex';

export default {
    name: 'Login',
    methods: mapActions(['logIn', 'logOut']),
}
</script>