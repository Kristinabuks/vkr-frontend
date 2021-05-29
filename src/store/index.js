import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// '8 (985) 387-77-98'
// '2021-05-14'
const defaultOrders = [
    {
        numberOfOrder: 1,
        phoneNumber: '8 (926) 497-70-70',
        nameOfCustomer: 'Сергей',
        dataOfReceipt: '2021-05-12',
        typeOfAppliances: 'П.м',
        desiredDate: '2021-05-13',
        nameOfAppliances: 'Bosch',
        serialNumber: 'gf562y',
        suspectedCauseOfFaild: 'Не моет',
        address: {
            city:'г.Москва',
            street:'улица Кравченко',
            numberOfHouse:'д4 подъезд 2 этаж 5 кв 41 ',
            
        }, 
        workerOfOrder:'Сергей Исщук',
        orderStatus: 'закрыт',
        costOfWork: '500',
    },
    {
        numberOfOrder: 2,
        phoneNumber: '8 (926) 375-28-03',
        nameOfCustomer: 'Елена',
        dataOfReceipt: '2021-05-12',
        typeOfAppliances: 'С.м',
        desiredDate: '2021-05-18',
        nameOfAppliances: 'Ariston',
        serialNumber: 'ygy65656j',
        suspectedCauseOfFaild: 'Шумит',
        address:'г. Москва улица Марии Ульяновой д22 подъезд 5 этаж 5 кв 142 ',
        workerOfOrder:'Александр Дронов',
        orderStatus: 'закрыт',
        costOfWork: '666',
    },
    {
        numberOfOrder: 3,
        phoneNumber: '8 (926) 915-03-44',
        nameOfCustomer: 'Андрей',
        dataOfReceipt: '2021-05-12',
        typeOfAppliances: 'С.м',
        desiredDate: '2021-05-15',
        nameOfAppliances: 'Beko',
        serialNumber: 'h56tgf',
        suspectedCauseOfFaild: 'Не стирает',
        address:'г. Москва улица Марии Антоновой д87 подъезд 7 этаж 12 кв 524 ',
        workerOfOrder:'Вячеслав Зайцев',
        orderStatus: 'закрыт',
        costOfWork: '1200',
    },    
    {
        numberOfOrder: 4,
        phoneNumber: '8 (926) 333-77-76',
        nameOfCustomer: 'Тимофей Александрович',
        dataOfReceipt: '2021-05-19',
        typeOfAppliances: 'С.м',
        desiredDate: '2021-05-22',
        nameOfAppliances: 'Ariston',
        serialNumber: '8f4ds8',
        suspectedCauseOfFaild: 'Не стирает',
        address:'г. Москва улица  Казенный Малый переулок д10 подъезд 2 этаж 1 кв 32',
        workerOfOrder:'Вячеслав Зайцев',
        orderStatus: 'открыт',
        costOfWork: '',
    },
    {
        numberOfOrder: 5,
        phoneNumber: '8 (926) 128-93-27',
        nameOfCustomer: 'Пётр',
        dataOfReceipt: '2021-05-19',
        typeOfAppliances: 'С.м',
        desiredDate: '2021-05-25',
        nameOfAppliances: 'Vestfrost',
        serialNumber: 'hh435dsx',
        suspectedCauseOfFaild: 'Шумит',
        address:'г. Москва улица Каспийская д1 подъезд 3 этаж 12 кв 345 ',
        workerOfOrder:'Александр Дронов',
        orderStatus: 'открыт',
        costOfWork: '',
    },
]

const api = {
    async fetchOrders() {
        return new Promise(resolve => (
            setTimeout(() => resolve(defaultOrders), 1000)
        ))
    }
}

export default new Vuex.Store({
    state: {
        currentOrder: null,
        orders: [],
    },
    mutations: {
        setCurrentOrder(state, order) {
            state.currentOrder = order
        },
        setOrders(state, orders) {
            state.orders = orders
        }
    },
    actions: {
        async fetchOrders({ commit }) {
            commit('setOrders', await api.fetchOrders())
        }
    }
})
