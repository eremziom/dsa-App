<template>
    <div>
        DASHBOARD VIEW
        <div>
            <b-card-group deck>
                <b-card>
                    <b-card-img :src="require('../assets/umowa-abonencka.jpg')"></b-card-img>
                    <b-card-title>Umowa Abonencka</b-card-title>
                    <b-card-text>Klienci indywidualni</b-card-text>
                </b-card>
                <b-card>
                    <b-card-img :src="require('../assets/umowa-firmowa.jpg')"></b-card-img>
                    <b-card-title>Umowa Firmowa</b-card-title>
                    <b-card-text>Osoby fizyczne</b-card-text>
                </b-card>
                <b-card>
                    <b-card-img :src="require('../assets/umowa-firmowa.jpg')"></b-card-img>
                    <b-card-title>Umowa Firmowa</b-card-title>
                    <b-card-text>Inne podmioty</b-card-text>
                </b-card>
            </b-card-group>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Dashboard',

}
</script>