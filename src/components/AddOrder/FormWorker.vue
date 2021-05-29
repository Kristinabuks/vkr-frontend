<template>
    <v-container>
        <v-container> 
            <v-card class="demo">
                <v-list disabled>
                    <v-subheader class="text-h5">Текущий заказ</v-subheader>
                    <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                    >
                    <v-list-item v-for="k of Object.keys(order)" :key="k">
                    {{ k }}: {{ order[k] }}
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-container>
    <v-simple-table
        fixed-header
        height="300px"
    >
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                    ID
                    </th>
                    <th class="text-left">
                    Имя
                    </th>
                    <th class="text-left">
                    Телефон
                    </th>
                    <th class="text-left">
                    Занятость
                    </th>
                    <th class="text-left">
                    Опыт
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr :key="w.id" v-for="w in workers">
                    <td>{{ w.id }}</td>
                    <td>{{ w.name }}</td>
                    <td>{{ w.number }}</td>
                    <td>{{ w.employmentRate }}</td>
                    <td>{{ w.experience }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    <v-btn block>Добавить мастера</v-btn>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

const defaultWorkers = [
    {
        id: 324,
        name: 'Вячеслав Зайцев',
        number: 79015853016,
        employmentRate: 67,
        experience: 7,
    },
    {
        id: 32,
        name: 'Александ Дронов',
        number: 79146891632,
        employmentRate: 33,
        experience: 2,
    },
    {
        id: 123,
        name: 'Николай Аркелян',
        number: 79218893345,
        employmentRate: 90,
        experience: 10,
    },
    {
        id: 12,
        name: 'Сергей Исщук',
        number: 79110965076,
        employmentRate: 10,
        experience: 15,
    },
]

const api = {
    async fetchWorkers() {
        return await new Promise(resolve => {
            setTimeout(() => resolve(defaultWorkers), 1000)
        })
    }
}

export default{
    data: ()  => ({
        workers: []
    }),
    async mounted() {
        this.workers = await api.fetchWorkers()
    },
    computed: mapState({
        order: state => state.currentOrder,
            
    }),
   
}

</script>

<style scoped>

</style>
