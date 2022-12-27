<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="#3fa944">
      <v-list>
        <v-list-item-group>
          <div v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item dark :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Painel do Administrador</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="red" @click="logout()">Sair</v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app inset dark>
      <span class="white--text">&copy; Erick Santos - 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-home',
        text: 'Início',
        link: '/dashboard/home',
      },
      {
        icon: 'mdi-account-multiple',
        text: 'Sobre o Projeto',
        link: '/dashboard/aboutProject',
      },
      {
        icon: 'mdi-clipboard-account',
        text: 'Sensores',
        link: '/dashboard/sensors',
      },
      {
        icon: 'mdi-rocket',
        text: 'Laboratórios',
        link: '/dashboard/laboratories',
      },
      {
        icon: 'mdi-contacts',
        text: 'Contato',
        link: '/dashboard/contact',
      },
    ],
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
  head() {
    return {
      title: 'Painel Administrativo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para controlar o projeto base',
        },
      ],
    }
  },
}
</script>

<style>
.headline {
  background-color: #3fa944;
  color: white;
}

.tokenCode {
  color: green;
  font-size: 2rem;
}
</style>
