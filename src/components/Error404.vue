<template>
    <div>
        Ups, somethig went wrong... Probabely wrong path!
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Error404',
    mounted() {
        this.setError(true);
    },
    destroyed() {
        this.setError(false);
    },
    methods: {
        ...mapActions(['setErrorOn']),
        setError(arg) {
            this.setErrorOn(arg);
        },
    }
}
</script>