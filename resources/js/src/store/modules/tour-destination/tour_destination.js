// import axios from 'axios'
const state = {
    tour_destinations: [],
    total: null,
};
const getters = {
    all_tour_destinations: function (state) {
        return state.tour_destinations
    },
};
const actions = {
    async fetchTourDestination({commit}) {
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.tour_destinations.length >= state.total) {
            try {
                axios.post(route('tour-destination.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_USER', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_USER', _data);
                                await f(_data.next_page_url);
                            });
                        }
                    }
                    await f(data.next_page_url)
                });
            } catch (e) {
                return false
            }
        }
    },
    async storeTourDestination({commit}, data) {
        try {
            const res = await axios.post(route('tour-destination.store'), data);
            commit('STORE_TOUR_DESTINATION', res.data);
            return true
        } catch (e) {
            return false
        }
    },
    async updateUser({commit}, data) {
        try {
            const res = await axios.put(route('user.update', data.id), data);
            commit('UPDATE_USER', res.data);
            return true
        } catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_TOUR_DESTINATION: function (state, data) {
        state.tour_destinations.unshift(data)
    },
    SET_USER: function (state, data) {
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.users.push(item);
        });
    },
    UPDATE_USER: function (state, data) {
        let index = state.users.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.users.splice(index, 1, data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}