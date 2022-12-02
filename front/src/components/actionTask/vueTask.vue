<template>
    {{params}}
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute() // permet d'accéder au paramètre de la route actuelle route.query, route.params... etc
const params = route.query
</script>
