<template>
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="mt-1 expanding-search"
    :class="{'closed': searchClosed && !$store.state.search}"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
    ></v-text-field>
</template>

<script>
export default {
    data() {
        return {
            search: null,
            searchClosed: true
        }
    }
}
</script>

<style>
    .expanding-search .v-input__slot::before, ::after{
        border-color: transparent !important
    } 
    .closed {
        max-width: 40px !important;
    }
    .closed .v-input__slot {
        background: transparent !important;
        cursor: pointer !important;
    }
    .expanding-search {
        transition: max-width 0.3s;
    }
</style>