export default {
    state: {
        cars:[]
    },
    mutations: {
        getListOfCars(state, cars) {
            state.cars = cars;
        },
    },
    actions: {
        async getListOfCars({commit}){
            const data = await this.$services.cars.getListOfCars();
            commit("getListOfCars", data.data);
        }
    },
    getters: {
        allCars(state){
            return state.cars;
        }
    },
};