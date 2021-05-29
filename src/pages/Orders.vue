<template>
    <div>
        <v-container>
            <v-container
                class="mx-auto text-center"
                width="110px"
                outlined
            >
                <span class="text-h6 font-weight-medium ">
                    Заказы
                </span>
            </v-container>
            <v-container
                class="text-center"
            >
                 <v-card>
                        <v-card-text>
                            <v-row >
                                <v-col>
                                <v-card-text>
                                    Введите первую дату
                                </v-card-text>
                                <v-text-field
                                    type='date'
                                    label="Solo"
                                    placeholder="Placeholder"
                                    solo
                                ></v-text-field>
                                </v-col>
                                <v-col>
                                <v-card-text>
                                    Ведите вторую дату
                                </v-card-text>  
                                <v-text-field
                                    type='date'
                                    label="Solo"
                                    placeholder="Placeholder"
                                    solo
                                ></v-text-field>
                                </v-col>
                                
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox
                                        :label="`Отобразить незакрытые заказы`"
                                    > 
                                    </v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox
                                        :label="`Отобразить закрытые заказы`"
                                    > 
                                    </v-checkbox>
                                </v-col>
                            </v-row>
                            <v-btn @click="fetchOrders" block>
                                Найти
                            </v-btn>
                        </v-card-text>
                    </v-card>
            </v-container>
            <OrdersList />
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import OrdersList from '../components/OrdersList'

export default{
    components: {
        OrdersList
    },
    methods: {
        ...mapActions([
            'fetchOrders'
        ])
    }
}

</script>

<style scoped>

</style>
