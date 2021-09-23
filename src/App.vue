<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            TO DO
          </v-list-item-title>
          <v-list-item-subtitle>
            Manage your To Do
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="moutains-2.jpg"
      height="170"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0">

        <v-row>

          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          
          <v-spacer class=""></v-spacer>

          <search/>
    
        </v-row>
      
        <v-row>
    
          <v-toolbar-title class="ml-4 text-h-4">
            To Do By Vuetify
          </v-toolbar-title>

        </v-row>
          
        <v-row>
          <live-date-time/>
        </v-row>

      </v-container>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar></snackbar>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'To Do', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'About', icon: 'mdi-help-box', to:'/about' },
        ], 
    }),
    components:{
      'snackbar': require('@/components/Shared/Snackbar.vue').default,
      'search': require('@/components/Tools/Search.vue').default,
      'live-date-time': require('@/components/Tools/LiveDateTime.vue').default
    }
  }
</script>