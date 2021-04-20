<template>
  <base-font>
    <div class="home">
      <h1>Let's memorize your daily memories!</h1>
      <h1 class="thai-font">มาบันทึกไดอารี่ประจำวันกันเถอะ!</h1>
      <the-adding-mem @survey-submit="addNewSurvey">
        <form @submit.prevent="submitForm" class="text-gray-700">
          <h2>How was your Day?</h2>

          <input
            class="input"
            :class="{ 'bg-red-50': invalidMemInput }"
            id="name"
            type="text"
            v-model.trim="enteredMem"
            @blur="validateName"
          />

          <p v-if="invalidMemInput" class="text-pink-600 pt-2 font-bold">
            Please enter your Memory!
          </p>
          <center>
            <button
              label="Submit"
              class="save-button grid justify-items-center m-5"
            >
              <img src="@/assets/save_white.svg" class="self-center w-1/2" />
            </button>
          </center>
        </form>
      </the-adding-mem>

      <!-- ! showing results -->

      <div>
        <ul v-for="mem in memories" :key="mem.texts">
          <div class="grid justify-items-center">
            <center>
              <li class="p-6 m-6 border border-yellow-600 rounded-3xl">
                <span class="text-purple-600 italic">{{ mem.texts }}</span>
                <button @click="deleteMem($event, mem.id)">
                  <img src="@/assets/delete_black.svg">
                </button>
              </li>
            </center>
          </div>
        </ul>
      </div>
    </div>
  </base-font>
</template>

<script>
// @ is an alias to /src

import TheAddingMem from "@/components/TheAddingMem.vue";
export default {
  name: "Home",
  components: {
    TheAddingMem,
  },
  emits: ["survey-submit"],
  data() {
    return {
      enteredMem: "",
      invalidMemInput: false,
      url: "http://localhost:5100/memories",
      errorMessage: null,
      oldId: "",
      oldName: "",
      memories: [],
      isEdit: false,
    };
  },
  methods: {
    submitForm() {
      this.invalidMemInput = this.enteredMem === "" ? true : false;

      console.log(`name value: ${this.enteredMem}`);

      if (this.enteredMem !== "") {
        // this.memories.push({
        //   texts: this.enteredMem,
        // });

        this.addNewSurvey({
          texts: this.enteredMem,
        });
      }
      this.enteredMem = "";
      //  this.$emit("survey-submit", newSurveySubmitted);
    },
    async getMemory() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        alert(`Cannot Get ${error}`);
      }
    },

    async addNewSurvey(newSurvey) {
      const newData = {
        texts: newSurvey.texts,
      };
      console.log(`new data`, newData);
      try {
        const res = await fetch(this.url, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(newData),
        });
        console.log(`respond`, res);

        const data = await res.json();
        //spread array
        this.memories = [...this.memories, data];
      } catch (error) {
        alert(`Cannot Memorize your Memory ${error}`);
      }
    },
    async deleteMem(id) {
      const res = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.memories = this.memories.filter((mem) => mem.id !== id))
        : alert("Error to delete mem");
    },
  },
  async created() {
    this.memories = await this.getMemory();
  },
};
</script>
<style scoped>
.save-button {
  width: 4em;
  height: 4em;
  background-color: #de3163;
  border: line whitesmoke 3%;
  border-radius: 30%;
}
.save-button:hover {
  background-color: #fd5c63;
}
.input {
  color: dimgray;
  font-family: "Mitr", sans-serif;
  padding: 2%;
  min-width: 75%;
  min-height: 10rem;
}
h2 {
  padding: 2%;
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Original Surfer", cursive;
}

h1.thai-font {
  padding: 1%;
  color: palevioletred;
  font-family: "Mitr", sans-serif;
}
h1 {
  padding: 1.5% 1.5% 0% 1.5%;
  color: #4158d0;
  font-weight: bolder;
  font-size: 2em;
  font-family: "Original Surfer", cursive;
}
</style>