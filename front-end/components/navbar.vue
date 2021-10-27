<template>
  <v-container fluid class="NavbarGeral">
    <v-container fluid class="navbarSize d-none d-lg-flex">
      <v-toolbar height="90" flat :color="bg">
        <v-spacer class="d-sm-none d-md-flex"></v-spacer>
        <v-toolbar-title class="d-md-none d-lg-flex">
          <router-link to="/" tag="span" style="cursor: pointer;">
            <v-img
              max-width="50"
              max-height="50"
              src="../imagens/logoClimoscopio.png"
            />
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            flat
            :to="item.link"
            depressed
            small
            text
            :class="button"
          >
            <div v-if="item.title === 'ENTRAR'" v-bind="attrs" v-on="on">
              <v-row align="center" justify="center" class="ButtonContact">
                {{ item.title }}
              </v-row>
            </div>
            <div v-else v-bind="attrs" :class="button" v-on="on">
              <v-row align="center" justify="center">
                {{ item.title }}
              </v-row>
            </div>
          </v-btn>
        </v-toolbar-items>
        <v-spacer class="d-md-none d-lg-flex"></v-spacer>
      </v-toolbar>
    </v-container>

    <v-container fluid class="d-flex d-lg-none">
      <v-row align="center" justify="start">
        <v-app-bar-nav-icon
          class="d-md-none"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="d-md-none d-lg-flex">
          <router-link to="/" tag="span" style="cursor: pointer;">
            <v-img
              max-width="180"
              max-height="70"
              src="../imagens/logoUp.png"
            />
          </router-link>
        </v-toolbar-title>
      </v-row>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title class="navbar-button">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bg: 'transparent',
      button: 'navbar-button navbarButtonColor',
      drawer: false,
      items: [
        {
          title: 'INÍCIO',
          link: '/',
        },
        {
          title: 'SOBRE O PROJETO',
          link: '/aboutProject',
        },
        {
          title: 'MONITORAMENTO',
          link: '/monitoring',
        },
        {
          title: 'HISTÓRICO',
          link: '/historic',
        },
        {
          title: 'ENTRAR',
          link: '/login',
        },
      ],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY > 100) {
        this.bg = 'white'
        this.button = 'navbar-button'
      } else if (window.scrollY === 0) {
        this.bg = 'transparent'
        this.button = 'navbar-button navbarButtonColor'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.navbarSize {
  padding: 0px;
  position: fixed;
  z-index: 1000;
}

.NavbarGeral {
  padding: 0px;
}

.v-btn:before {
  background-color: transparent;
}

.ButtonContact {
  background-color: #3ab63e;
  height: 40px;
  width: 90px;
  color: white;
  border-radius: 50px;
}

.ButtonContact:hover {
  transform: translateX(0px) scale(1.1);
}

.navbar-button {
  text-transform: capitalize;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  margin-right: 30px;
  font-weight: bold;
}

.navbarButtonColor {
  color: white;
}

.navbar-button:hover {
  color: #3ab63e;
}

.v-btn:not(.v-btn--round).v-size--small {
  padding: 0;
}
</style>
