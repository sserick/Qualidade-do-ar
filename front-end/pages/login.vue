<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card height="350" class="elevation-12">
              <v-toolbar dark color="#3fa944">
                <v-img
                  max-width="30"
                  max-height="30"
                  src="/imagens/logoClimoscopio.png"
                />
                <v-toolbar-title class="titleLogin">LOGIN</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <input-auth v-model="email" placeholder="Email" />
              </v-card-text>
              <v-card-text>
                <input-auth
                  v-model="password"
                  placeholder="Senha"
                  type="password"
                />
                <v-spacer></v-spacer>
              </v-card-text>
              <v-card-text>
                <nuxt-link class="body-1 grey--text" to="/esqueci-a-senha">
                  Esqueceu a senha?
                </nuxt-link>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  large
                  dark
                  color="#3fa944"
                  class="mx-2"
                  @click="realizarLogin()"
                  >Entrar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import InputAuth from '../components/inputs/InputAuth.vue'

export default {
  components: { InputAuth },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {},
  methods: {
    realizarLogin() {
      this.$router.push('/dashboard')
      if (this.email === 'admin@cptufpr.com') {
        if (this.password === 'secret') {
          this.$router.push('/dashboard')
        } else {
          this.email = ''
          this.password = ''
        }
      } else {
        this.email = ''
        this.password = ''
      }
    },
  },
  head() {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para fazer login no sistema',
        },
      ],
    }
  },
  layout: 'auth',
}
</script>

<style scoped>
.titleLogin {
  padding-left: 20px;
}
.esqueceu-senha {
  width: 100%;
  text-align: right;
}
</style>
