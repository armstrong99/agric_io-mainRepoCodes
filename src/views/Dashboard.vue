<template>
  <div id="container">
    <section class="bg-green-900 h-screen">
      <section class="w-100 h-32 flex justify-center bg-white">
        <img :src="Logo" alt="agrik_io" class="h-20 w-20 self-center" />
      </section>
      <ul id="ulBox" class="mt-3">
        <li
          class="text-white cursor-pointer font-semibold font-sans"
          v-for="(navs, _i) in navBtn"
          :key="_i"
          @click="switchUI"
        >
          <i :class="navs.icon"></i> {{ navs.title }}
        </li>
      </ul>
    </section>

    <section class="bg-blue-200 h-screen" id="rowCon">
      <article
        style="
          background-image: url(https://media.giphy.com/media/41fUblVkZ0QForRGrH/giphy.gif);
        "
        class="text-white bg-black-700 bg-no-repeat bg-center bg-cover flex flex-col"
      >
        <div class="absolute inset-0 bg-black opacity-75 h-full flex flex-col">
          <h1 class="text-3xl font-sans mt-2 font-medium">
            Welcome, {{ name }} and {{ greetUser }}
          </h1>
          <p class="text-gray-500 text-center mt-1">
            How are u doing today? you can seemlessly track <br />
            your progress with agrik_io
          </p>
          <button
            @click="store.commit('toggleModal', true)"
            class="btn mt-8 px-2 outline-none self-center relative py-2 border-none rounded bg-green-500 font-semibold font-sans w-32 text-white text-sm"
          >
            Enter record
          </button>
        </div>
      </article>
      <Modal />

      <section id="recBox">
        <section class="bg-white overflow-y-scroll">
          <h2 class="mt-4">
            <span
              class="pb-1 border-b-2 font-sans font-semibold border-green-500"
            >
              Records
            </span>
          </h2>
          <section class="flex mt-8 justify-around flex-wrap">
            <article
              v-for="(ik, i) in farmRecs"
              id="articleCon"
              class="transition duration-500 ease-in-out hover:bg-green-900 transform hover:-translate-y-1 hover:scale-110 hover:font-sans hover:font-light rounded-xl my-4 hover:cursor-pointer hover:text-gray-200 hover:shadow-md bg-green-100 hover:z-40 z-20"
              :key="i"
            >
              <img :src="ik.imgUrl" alt="farm harvest" class="h-32 w-full" />
              <h3 class="text-left font-sans font-bold pl-1 text-sm">
                {{ ik.harvest }}
              </h3>
              <p
                class="text-left font-sans font-bold mt-1 pl-1 text-xs"
                style="color: brown"
              >
                {{ ik.timeStamp }}
              </p>
              <p
                class="text-left font-sans font-bold pl-1 text-xs"
                style="color: brown"
              >
                {{ ik.plot }}
              </p>
              <section class="px-2">
                <p class="text-sm mt-2 rounded-md font-sans font-semibold">
                  {{ ik.bio }}
                </p>
              </section>
            </article>
          </section>
        </section>
        <section class="bg-gray-200">
          <h2>Charts</h2>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { computed, reactive, readonly, toRefs } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Modal";

export default {
  name: "Dashboard",
  components: {
    Modal,
  },
  setup(props) {
    let store = useStore();
    let state = reactive({
      visible: false,
      navBtn: [
        { title: "Profile", icon: "fas fa-user-alt" },
        { title: "Record", icon: "fas fa-record-vinyl" },
        { title: "Support", icon: "fas fa-phone-volume" },
        { title: "Blog", icon: "fas fa-blog" },
      ],
      name: store.getters.getFarmerData("get-name"),
      farmRecs: store.getters.getFarmerData("get-record"),
      greetUser: computed(() => {
        let myHrs = new Date().getHours();

        let greet =
          myHrs < 12
            ? "Good morning"
            : myHrs >= 12 && myHrs <= 17
            ? "Good Afternoon"
            : myHrs >= 17 && myHrs <= 24
            ? "Good Evening"
            : "";

        return greet;
      }),
    });

    const switchUI = (index, label) => {};
    const Logo = require("../assets/img/myl.png");

    return { ...toRefs(state), switchUI, Logo, store };
  },
};
</script>

<style scoped>
#container {
  position: relative;
  display: grid;
  grid-template-columns: 15% 85%;
  overflow-x: hidden;

  @media screen and (max-width: 48rem) {
    grid-template-columns: 100%;
  }
}

#rowCon {
  position: relative;
  display: grid;
  grid-template-rows: 35% 65%;
  overflow-y: hidden;

  @media screen and (max-width: 48rem) {
    grid-template-rows: 100%;
  }
}
#ulBox {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 45vh;
}
#recBox {
  position: relative;
  display: grid;
  grid-template-columns: 80% 20%;
  overflow-y: hidden;

  @media screen and (max-width: 48rem) {
    grid-template-columns: 100%;
  }
}

#articleCon {
  width: 15rem;
  height: 18rem;
}
</style>
