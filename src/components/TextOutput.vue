<template>
    <div>
        <textarea readonly class="form-control" v-model="Output" rows="24">
        </textarea>
        <span class="btn-group" style="width: 100%">
            <a class="btn btn-default btn-block" v-on:click="Reset">Clear Output</a>
        </span>
    </div>
</template>

<script>
export default {
    name: "text-output",

    props: {
        DefaultText: {
            type: String,
            default: function () {
                return ""
            }
        }
    },
    
    data: function () {
        return {
            Output: ""
        }
    },

    mounted: function () {
        this.Output = this.DefaultText;
    },

    methods: {
        Reset: function () {
            this.Output = this.DefaultText;
            this.$emit("reset");
        }
    }
};
</script>

<style scoped>
</style>