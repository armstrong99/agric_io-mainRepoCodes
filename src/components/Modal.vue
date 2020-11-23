<template>
  <section class="antialiased text-gray-900 font-sans overflow-x-hidden overflow-y-auto fixed bg-none w-full h-64 items-center transition duration-500 ease-in-out flex justify-center pr-32 shadow-xl" v-if="modal.visible">
    <div class="py-4 overflow-y-auto" style="width: 45rem">
      <div id="modalResp" class="bg-white h-auto rounded-lg md:max-w-2xl md:mx-auto py-2 fixed inset-x-0 bottom-0 z-50 mb-4 md:relative overflow-y-auto">
        <div class="md:flex items-center justify-around">
          <div class="rounded-full border border-gray-300 flex items-center justify-center w-12 h-12 flex-shrink-0 ml-4">
            <i class="bx far fa-edit bx-error text-1xl"></i>
          </div>
          <div class="mt-4 overflow-y-auto md:mt-0 md:ml-6 text-center md:text-left">
            <p class="font-bold">Farm record form</p>
            <p class="text-sm text-gray-700 mt-1"></p>
            <form id="formResp">
              <label class="inline-block text-base font-sans font-medium" htmlfor="title">Title:</label>
              <input id="inputResp" v-model="harvest" type="text" name="text" placeholder="e.g yam harvest" aria-placeholder="e.g yam harvest" class="ml-2 text-sm text-gray-700 font-sans inline-block" />

              <label class="inline-block text-base font-sans font-medium" htmlfor="title">Area:</label>
              <input id="inputResp" v-model="plot" type="text" name="text" placeholder="e.g plot 25" aria-placeholder="e.g yam harvest" class="ml-2 text-sm text-gray-700 font-sans inline-block" />

              <label class="inline-block text-base font-sans font-medium" htmlfor="title">Photo:</label>
              <input id="inputResp" v-model="imgUrl" type="text" name="text" placeholder="e.g photo url" aria-placeholder="e.g photo url" class="ml-2 px-1 text-sm text-gray-700 font-sans inline-block" />

              <label class="mt-1 inline-block text-base font-sans font-medium" htmlfor="title">About:</label>
              <section class="w-full h-auto">
                <textarea id="txtA" v-model="bio" cols="45" name="text" placeholder="e.g we harvested 25 tubers of yam..." aria-placeholder="e.g yam harvest" class="ml-5 text-sm text-gray-700 font-sans block"></textarea>
              </section>
            </form>
          </div>
        </div>
        <br />
        <div id="btnBottoms" class="text-center md:text-right mt-4 md:flex md:justify-end mr-32">
          <button @click="addRecord()" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-2 ml-2">Add Record</button>
          <button @click="store.commit('toggleModal', false)" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-1">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "Modal",
  setup(props) {
    let store = useStore();
    let state = reactive({
      modal: {
        visible: computed(() => store.getters.getModalState),
      },
      harvest: "",
      plot: "",
      imgUrl: "",
      bio: "",
      timeStamp: new Date().toLocaleDateString(),
    });

    const addRecord = () => {
      let checkFilled = Object.keys(state)
        .filter((val) => val !== "modal")
        .filter((val) => state[val] !== "");

      if (checkFilled.length >= 4) {
        store.commit("addFarmRecs", {
          owner: store.getters.getFarmerData("get-email"),
          data: {
            imgUrl: state.imgUrl,
            timeStamp: state.timeStamp,
            plot: state.plot,
            bio: state.bio,
            harvest: state.harvest,
          },
        });

        Object.keys(state)
          .filter((val) => val !== "modal")
          .map((val) => {
            state[val] = "";
          });
      } else {
      }
    };

    return { ...toRefs(state), store, addRecord };
  },
};
</script>
<style lang="scss">
#inputResp {
  @media screen and (min-width: 48rem) {
    max-width: 7rem;
    margin-right: 1rem;
  }
}
#modalResp {
  width: 48rem;
  @media screen and (max-width: 48rem) {
    width: calc(100% - 2rem);
    margin: auto auto;
    top: 0;
  }
}
#formResp {
  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* width: 35rem; */
    height: 50vh;
    overflow: scroll;
  }
}

#btnBottoms {
  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    width: calc(100% - 6rem);
    // align-items: center;
    justify-content: space-around;
    height: 7rem;
    align-items: center;
    margin: 0 auto;
    & button:nth-child(2) {
      margin-top: 1rem;
    }
  }
}

#txtA {
  @media screen and (max-width: 48rem) {
    margin: auto auto;
    height: 5rem;
    outline: none !important;
  }
}
</style>
