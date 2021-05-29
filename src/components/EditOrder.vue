<template>
    <div>
            <v-form>
                <v-container>
                    <v-container 
                        class = "text-center"
                    >
                        <span class="text-h6 font-weight-medium">
                            Редактирование заказа
                        </span>
                    </v-container>    
                    <v-row> 
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <span height='40'>
                            Номер Заказа {{order.numberOfOrder}}
                            </span>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <vue-tel-input-vuetify
                                solo
                                dense
                                v-model="order.phoneNumber"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            label="Имя заказчика"
                            solo
                            dense
                            v-model="order.nameOfCustomer"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            type='date'
                            label="Дата получения заказа"
                            solo
                            dense
                            v-model="order.dataOfReceipt"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            label="Вид техники"
                            solo
                            dense
                            v-model="order.typeOfAppliances"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            type="date"
                            label="Желаемая дата исполнения"
                            solo
                            dense
                            v-model="order.desiredDate"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            label="Название техники"
                            solo
                            dense
                            v-model="order.nameOfAppliances"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            label="Серийный номер"
                            solo
                            dense
                            v-model="order.serialNumber"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                            <v-text-field
                            label="Предполагаемая причина поломки"
                            solo
                            dense
                            v-model="order.suspectedCauseOfFaild"
                            ></v-text-field>
                        </v-col>
                        <v-container> Адрес </v-container>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Город"
                            solo
                            dense
                            v-model="city"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Улица"
                            solo
                            dense
                            v-model="street"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            type='number'
                            label="Дом"
                            solo
                            dense
                            v-model="house"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Корпус"
                            solo
                            dense
                            v-model="buildingOfHouse"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            type='number'
                            label="Подъезд"
                            solo
                            dense
                            v-model="entrance"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            type='number'
                            label="Этаж"
                            solo
                            dense
                            v-model="floor"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            type='number'
                            label="Квартира"
                            solo
                            dense
                            v-model="flat"
                            ></v-text-field>
                        </v-col>
                        <v-btn block @click="Orders">
                            Редактировать
                        </v-btn>
                    </v-row>
                </v-container>
            </v-form>    
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"

export default{
    components: {
        VueTelInputVuetify
    },    
    computed: mapState({
        order: state => state.currentOrder,
            
    }),
}

</script>

<style scoped>

</style>
