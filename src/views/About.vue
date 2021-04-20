<template>
  <div class="about">
    <h1>This is an about page</h1>

        <!-- ! showing results -->
      <div>
        <ul v-for="mem in memories" :key="mem.texts">
          <div class="flex flex-row items-center">
            <li class="p-2">
              <span class="text-purple-600 italic">{{ mem.texts }}</span>
            </li>
          </div>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  
    async created() {
    this.memories = await this.getMemory()
  }
}
</script>
