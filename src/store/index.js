import { createStore } from 'vuex'

export default createStore({
  state: {
    visible: false,
    farmers: {
      "arms@gmail.com": {
        name: "Armstrong Ndukwe",
        email: "arms@gmail.com",
        position: "Worker",
        company: "UAB Farms Inc. Nigeria",
        state: "Nigeria",
        LGA: "Obio/Akpor",
        Links: ['Enugu', 'Lagos State'],
        login: true,
        password: "777yam"
       }
    },
    FarmRecs: {
      "arms@gmail.com": [
        {
          imgUrl: "https://regenerationinternational.org/wp-content/uploads/2018/05/yams-farmers-work-harvest-sweet-potatoes-usda.jpg",
          timeStamp: "4:05:20pm | 17th July 2020 ",
          plot: "plot 21",
          bio: "The post-harvest activities peculiar to yam can be categorized into three classes of which the first set is that of collecting ",
          harvest: "Yam Harvest"
        },
        {
          imgUrl: "https://regenerationinternational.org/wp-content/uploads/2018/05/yams-farmers-work-harvest-sweet-potatoes-usda.jpg",
          timeStamp: "4:05:20pm | 17th July 2020 ",
          plot: "plot 21",
          bio: "The post-harvest activities peculiar to yam can be categorized into three classes of which the first set is that of collecting ",
          harvest: "Plantain Harvest"
        },
        {
          imgUrl: "https://regenerationinternational.org/wp-content/uploads/2018/05/yams-farmers-work-harvest-sweet-potatoes-usda.jpg",
          timeStamp: "4:05:20pm | 17th July 2020 ",
          plot: "plot 21",
          bio: "The post-harvest activities peculiar to yam can be categorized into three classes of which the first set is that of collecting ",
          harvest: "Fish Hunt"
        },
        {
          imgUrl: "https://regenerationinternational.org/wp-content/uploads/2018/05/yams-farmers-work-harvest-sweet-potatoes-usda.jpg",
          timeStamp: "4:05:20pm | 17th July 2020 ",
          plot: "plot 21",
          bio: "The post-harvest activities peculiar to yam can be categorized into three classes of which the first set is that of collecting ",
          harvest: "Snail Harvest"
        },
        {
          imgUrl: "https://regenerationinternational.org/wp-content/uploads/2018/05/yams-farmers-work-harvest-sweet-potatoes-usda.jpg",
          timeStamp: "4:05:20pm | 17th July 2020 ",
          plot: "plot 21",
          bio: "The post-harvest activities peculiar to yam can be categorized into three classes of which the first set is that of collecting ",
          harvest: "Fruit harvest"
        },
      ]
    }
  },
  mutations: {
    /**
 * Add a new farmer to the test db or state.
 * @param {object} authData - The details of the farmer we want to add to the test db.
 * @param {object} state - This is the same state object as the one above.
   */
     addFarmer(state, authData) {
       state[authData.email] = authData
    },

    addFarmRecs(state, farmData) {
      state.FarmRecs[farmData.owner] = [farmData.data, ...state.FarmRecs[farmData.owner]]
    },
    toggleModal(state, bol) {
      state.visible = bol
    }

  },
  getters: {
    getModalState: (state) => state.visible,
    getFarmerData: (state) => id => {
       switch (id) {
        case 'get-name':return Object.values(state.farmers)[0].name.split(' ')[0]
        case 'get-record': return Object.values(state.FarmRecs)[0]
        case 'get-bio': return Object.values(state.farmers)[0]
        case 'get-email': return Object.values(state.farmers)[0].email
         default:
          break;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
