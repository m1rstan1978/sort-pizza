import { createStore } from 'vuex'

export default createStore( {
    state:{
        ordersMoney:0,
        orders:0,
        listOrders:[],
    },
    mutations:{
        addListOrders( state, payload ) {
            const findObject = state.listOrders.findIndex( el => {
                if( el.name === payload.name && ( el.dlina === payload.dlina && el.sloi === payload.sloi ) ) {
                    return el
                }
            } )

            if( findObject !== -1 ) {
                state.listOrders[findObject].summ += state.listOrders[findObject].price
                state.listOrders[findObject].count += 1
                state.orders += 1
                state.ordersMoney += Number( payload.price )
            }
            else {
            state.orders += 1
            payload.count = 1
            payload.summ = Number( payload.price )
            payload.price = Number( payload.price )
            state.listOrders.push( payload )
            state.ordersMoney += Number( payload.price )
            }
        },
        addOrder( state, payload ) {
            const findObject = state.listOrders.findIndex( el => {
                if( el.name === payload.name && ( el.dlina === payload.dlina && el.sloi === payload.sloi ) ) {
                    return el
                }
            })
            if( findObject !== -1 ) {
            state.listOrders[findObject].summ += state.listOrders[findObject].price
            state.listOrders[findObject].count += 1
            state.orders += 1
            state.ordersMoney += Number( payload.price )
            }

        },
        removeOrder( state, payload ) {
            const findObject = state.listOrders.findIndex( el => {
                if( el.name === payload.name && ( el.dlina === payload.dlina && el.sloi === payload.sloi ) ) {
                    return el
                }
            })
            if( findObject !== -1 && 1 < state.listOrders[findObject].count ) {
            state.listOrders[findObject].summ -= state.listOrders[findObject].price
            state.listOrders[findObject].count -= 1
            state.orders -= 1
            state.ordersMoney -= Number( payload.price )
            }
            else if( findObject !== -1 && 1 >= state.listOrders[findObject].count ) {
            state.listOrders.splice( findObject, 1 )
            state.orders -= 1
            state.ordersMoney -= Number( payload.price )
            console.log('Привет')
            } 
        },
        deleteOrder( state, payload ) {
            const listOrdersIndex = state.listOrders.findIndex( el => {
                if( el.name === payload.name && el.dlina === payload.dlina && el.sloi === payload.sloi) return el
            } )
            state.ordersMoney -= state.listOrders[listOrdersIndex].summ
            state.listOrders.splice( listOrdersIndex, 1 )
            if( state.listOrders.length < 1 ) {
                state.orders = 0
                state.ordersMoney = 0
            }
        },
        clearAll( state ) {
            state.listOrders = []
            state.ordersMoney = 0
            state.orders = 0
        }
    },
    getters:{
         getListOrders( state ) {
            return state.listOrders
         }
    }
} )