<template>
    <div>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th>Type of Dice</th>
                    <th>Number of Rolls</th>
                    <th>Number of Sides</th>
                    <th>(+/-) Modifier</th>
                    <th>Actions</th>
                    <th style="width: 20%;">Results</th>
                </tr>
                <tr v-for="(item, index) in DiceList" :key="index">
                    <td>
                        {{item.Title}}
                    </td>
                    <td><input class="form-control" type="number" v-model="item.Rolls" min="1" /></td>
                    <td><input class="form-control" type="number" min="1" v-model="item.Sides" :readonly="item.ID !== 9" /></td>
                    <td><input class="form-control" type="number" v-model="item.Modifier" /></td>
                    <td><input class="btn-default form-control" type="button" name="Submit" value="Roll" v-on:click="Roll(index)" /></td>
                    <td><input class="form-control" type="number" v-model="item.Results" readonly /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DiceService from '../assets/DiceService.js'
import StringBuilder from '../assets/StringBuilder.js'
import DiceType from '../assets/DiceType.js'

export default {
    name: "dice-table",

    mounted: function () {
        var diceType = new DiceType.Create();
        
        this.DiceList = diceType.ToList();
    },

    data: function () {
        return {
            Results: "\n\nThis field records your latest roll at its top.",
            DiceList: [],
            SelectedDice: {}
        }
    },

    methods: {
        Roll: function (index) {
            this.SelectedDice = this.DiceList[index];
            this.SelectedDice.Results = 0;

            var builder = new StringBuilder.Create();

            builder.Append("\n");
            builder.Append("\n");
            builder.AppendFormat("Roll({0}):", [this.SelectedDice.Sides]);
            builder.Append("\n");

            builder = this.MakeIndividualRollsAndPutInStringBuilder(builder);

            builder.Append("\n");

            builder = this.CheckForModifier(builder);

            builder.AppendFormat("Total:  {0}", [this.SelectedDice.Results]);

            var output = builder.ToString();
            output += this.Results;
            this.Results = output;

            this.$emit("output-text", this.Results);
        },

        ResetResults: function () {
            this.Results = "\n\nThis field records your latest roll at its top.";
        },

        CheckForModifier: function (builder) {
            var modifier = this.ConvertToNumber(this.SelectedDice.Modifier);

            if (modifier !== 0) {
                this.SelectedDice.Results += modifier;
                builder.AppendFormat("+ ( {0} ) Modifier", [modifier]);
                builder.Append("\n");
            }

            return builder;
        },

        MakeIndividualRollsAndPutInStringBuilder: function (builder) {
            var roll = 0;
            var maxRolls = this.ConvertToNumber(this.SelectedDice.Rolls);
            var sides = this.ConvertToNumber(this.SelectedDice.Sides);

            for (var i = 0; i < maxRolls; i += 1) {
                if (i !== 0) {
                    builder.Append("+");
                }

                roll = this.RandomRoll(sides);
                builder.Append(roll);
                this.SelectedDice.Results += roll;
            }

            return builder;
        },

        ConvertToNumber: function (value) {
            var numValue = Number(value);

            if (numValue === NaN) {
                return 0;
            }

            return numValue;
        },

        RandomRoll: function (max) {
            var diceService = DiceService.Create();

            return diceService.DY(max);
        }
    }
};
</script>

<style scoped>
</style>