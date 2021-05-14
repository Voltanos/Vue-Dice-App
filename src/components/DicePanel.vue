<template>
    <div class="container body-content">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="row">
                    <div class="panel panel-info">
                        <div class="panel-heading">Dice App</div>

                        <div class="panel-body">
                            <div class="col-md-6 col-sm-12">
                                <div class="row">
                                    <dice-table ref="DiceTable" v-on:output-text="UpdateResults"></dice-table>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <div class="row">
                                    <text-output ref="TextOutput" :default-text="DefaultText" v-on:reset="ResetDiceTable"></text-output>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DiceTable from "./DiceTable.vue"
import TextOutput from "./TextOutput.vue"

export default {
    name: "dice-panel",

    data: function () {
        return {
            DefaultText: "\n\nThis field records your latest roll at its top."
        }
    },

    methods: {
        UpdateResults: function(results) {
            this.$refs.TextOutput.Output = results;
        },

        ResetDiceTable: function () {
            this.$refs.DiceTable.ResetResults();
        }
    },

    components: {
        DiceTable,
        TextOutput
    }
};
</script>

<style scoped>
</style>