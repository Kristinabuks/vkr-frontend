<template>
    <span v-if="orders.length !== 0">
    <v-simple-table
        fixed-header
    >
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                    Номер заказа
                    </th>
                    <th class="text-left">
                    Телефон
                    </th>
                    <th class="text-left">
                    Имя заказчика
                    </th>
                    <th class="text-left">
                    Дата приёма заказа
                    </th>
                    <th class="text-left">
                    Вид техники
                    </th>
                    <th class="text-left">
                    Желаемая дата исполнения
                    </th>
                    <th class="text-left">
                    Название техники
                    </th>
                    <th class="text-left">
                    Серийный номер
                    </th>
                    <th class="text-left">
                    Предполагаемая причина поломки
                    </th>
                    <th class="text-left">
                    Адрес
                    </th>
                    <th class="text-left">
                    Мастер
                    </th>
                    <th class="text-left">
                    Статус заказа
                    </th>
                    <th class="text-left">
                    Стоимость работы
                    </th>
                    <th class="text-left">
                    Редактировать
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr :key="w.numberOfOrder" v-for="w in orders">
                    <td>{{ w.numberOfOrder }}</td>
                    <td>{{ w.phoneNumber }}</td>
                    <td>{{ w.nameOfCustomer }}</td>
                    <td>{{ w.dataOfReceipt }}</td>
                    <td>{{ w.typeOfAppliances }}</td>
                    <td>{{ w.desiredDate }}</td>
                    <td>{{ w.nameOfAppliances }}</td>
                    <td>{{ w.serialNumber }}</td>
                    <td>{{ w.suspectedCauseOfFaild }}</td>
                    <td>{{ w.address.city}} {{w.address.street}}</td>
                    <td>{{ w.workerOfOrder }}</td>
                    <td>{{ w.orderStatus }}</td>
                    <td>{{ w.costOfWork }}</td>
                    <td><v-btn @click="() => redirectToOrder(w.numberOfOrder, w)">Редактировать</v-btn></td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    </span>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default{
    computed: {
        ...mapState(['orders'])
    },
    methods: {
        redirectToOrder(orderId, order) {
            this.setCurrentOrder(order)
            this.$router.push(`/EditOrder/${orderId}`)
        },
        ...mapMutations([
            'setCurrentOrder'
        ])
    }
}

</script>

<style scoped>

</style>
