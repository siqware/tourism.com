// import axios from 'axios'
const state = {
    users: [],
    total: null,
};
const getters = {
    all_users: function (state) {
        return state.users
    },
};
const actions = {
    async fetchUser({commit}) {
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.users.length >= state.total) {
            try {
                axios.post(route('user.json')).then(function (res) {
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
    async storeUser({commit}, data) {
        try {
            const res = await axios.post(route('user.store'), data);
            commit('STORE_USER', res.data);
            return true
        } catch (e) {
            return false
        }
    },
    async toggleUserStatus({commit}, data) {
        try {
            const res = await axios.delete(route('user.destroy', data.id));
            commit('TOGGLE_USER_STATUS', res.data);
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
    async updateUserPassword({commit},data){
        try {
            await axios.post(route('user.change.password',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_USER: function (state, data) {
        state.users.unshift(data)
    },
    SET_USER: function (state, data) {
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.users.push(item);
        });
    },
    TOGGLE_USER_STATUS: function (state, data) {
        let index = state.users.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.users.splice(index, 1, data);
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