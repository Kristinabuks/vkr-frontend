<template>
    <div>
        <v-container align-center justify-center>
            <div class="text-h4">
                Добавление заказа
            </div>
        </v-container>
        <FormOrder v-if="router.currentRoute.path === '/AddOrder'" />
        <FormWorker v-else-if="router.currentRoute.path === '/FormWorker'" />
    </div>
    
</template>

<script>
import FormOrder from "@/components/AddOrder/FormOrder";
import FormWorker from "@/components/AddOrder/FormWorker"
import router from '../router'

export default {
    components: {
        FormOrder,
        FormWorker
    },
    data: () => ({
        router
    })
}

</script>

<style scoped>

</style>
