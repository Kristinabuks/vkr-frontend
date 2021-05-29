<template>
    <v-container fluid>
      <v-app-bar
          color="deep-purple lighten-3"
          dark
        >
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/Profile'>Профиль</router-link>
        </v-btn>
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/Orders'>Заказы</router-link>
        </v-btn>
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/AddOrder'>Добавление заказа</router-link>
        </v-btn>
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/Customers'>Заказчики</router-link>
        </v-btn>
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/Worker'>Мастера</router-link>
        </v-btn>
        <v-btn outlined class="ml-4">
          <router-link class="link__no_decoration" to='/'>Выход</router-link>
        </v-btn>
      </v-app-bar>
    </v-container>

</template>

<script>


</script>

<style scoped>
.link__no_decoration {
  text-decoration: none;
  color: white;
}
</style>
