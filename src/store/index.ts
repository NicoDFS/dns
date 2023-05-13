import { createStore } from 'vuex';
import network from "./modules/network";
import user from "./modules/user";
import degen from "./modules/degen";


const store = createStore({
  modules: {
    network,
    user,
    degen
  }
})

export default store;