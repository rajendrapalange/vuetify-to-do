<template>
    <div class="ml-4 text-subtitle-h1">
        {{ dateTime }}
    </div>
</template>

<script>
import {format} from 'date-fns';
export default {
    data() {
        return {
            dateTime: null
        }
    },
    methods: {
        getDate() {
            this.dateTime = format(new Date(), 'MMMM do, yyyy H:mm:ss')
            setTimeout(this.getDate, 1000)
        }
    },
    mounted() {
        this.getDate()
    }

}
</script>

<style>

</style>