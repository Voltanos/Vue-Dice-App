<template>
  <div id="app">
    
    <dice-panel></dice-panel>
    
    <!-- <text-output v-bind:place-holder="'Test output'"></text-output> -->
  </div>
</template>

<script>
// import DiceTable from "./components/DiceTable.vue"
// import TextOutput from "./components/TextOutput.vue"
import DicePanel from "./components/DicePanel.vue"

export default {
  name: 'app',
  components: {
    // DiceTable,
    // TextOutput,
    DicePanel
  }
}
</script>

<style>
</style>
