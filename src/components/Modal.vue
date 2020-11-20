<template>
  <section
    class="antialiased text-gray-900 font-sans overflow-x-hidden overflow-y-scroll fixed bg-none w-full h-64 items-center transition duration-500 ease-in-out flex justify-center pr-32 shadow-xl"
    v-if="modal.visible"
  >
    <div class="py-4" style="width: 45rem">
      <div
        style="width: 45rem"
        class="bg-white h-auto rounded-lg md:max-w-2xl md:mx-auto py-2 fixed inset-x-0 bottom-0 z-50 mb-4 md:relative"
      >
        <div class="md:flex items-center justify-around">
          <div
            class="rounded-full border border-gray-300 flex items-center justify-center w-12 h-12 flex-shrink-0 ml-4"
          >
            <i class="bx far fa-edit bx-error text-1xl"></i>
          </div>
          <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <Alert />
            <p class="font-bold">Farm record form</p>
            <p class="text-sm text-gray-700 mt-1"></p>
            <form>
              <label
                class="inline-block text-base font-sans font-medium"
                htmlfor="title"
                >Title:</label
              >
              <input
                type="text"
                name="text"
                placeholder="e.g yam harvest"
                aria-placeholder="e.g yam harvest"
                class="ml-2 text-sm text-gray-700 font-sans inline-block"
              />

              <label
                class="inline-block text-base font-sans font-medium"
                htmlfor="title"
                >Area:</label
              >
              <input
                type="text"
                name="text"
                placeholder="e.g plot 25"
                aria-placeholder="e.g yam harvest"
                class="ml-2 text-sm text-gray-700 font-sans inline-block"
              />

              <label
                class="inline-block text-base font-sans font-medium"
                htmlfor="title"
                >Photo:</label
              >
              <input
                type="text"
                name="text"
                placeholder="e.g photo url"
                aria-placeholder="e.g photo url"
                class="ml-2 px-1 text-sm text-gray-700 font-sans inline-block"
              />

              <label
                class="mt-1 inline-block text-base font-sans font-medium"
                htmlfor="title"
                >About:</label
              >

              <textarea
                cols="45"
                type="text"
                name="text"
                placeholder="e.g we harvested 25 tubers of yam..."
                aria-placeholder="e.g yam harvest"
                class="ml-5 text-sm text-gray-700 font-sans block"
              ></textarea>
            </form>
          </div>
        </div>
        <div
          class="text-center md:text-right mt-4 md:flex md:justify-end mr-32"
        >
          <button
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-2 ml-2"
          >
            Add Record
          </button>
          <button
            @click="store.commit('toggleModal', false)"
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import Alert from "@/components/Alert";

export default {
  name: "Modal",
  components: {
    Alert,
  },
  setup(props) {
    let store = useStore();
    let state = reactive({
      modal: {
        visible: computed(() => store.getters.getModalState),
      },
    });

    return { ...toRefs(state), store };
  },
};
</script>
