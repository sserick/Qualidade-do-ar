<template>
  <v-container>
    <snack-alert ref="alert" />
    <v-layout class="padding">
      <v-flex>
        <h2 class="page-title">Contato</h2>
      </v-flex>
    </v-layout>
    <v-divider color="#3fa944" />
    <v-btn
      color="#3fa944"
      dark
      depressed
      class="mt-8"
      @click.stop="openRegister()"
      @click="isEdit = false"
      >Adicionar Informações de Contato</v-btn
    >
    <v-layout class="mt-8">
      <v-flex>
        <v-data-table :headers="headers" :items="members" hide-default-footer>
          <template>
            <v-icon medium color="blue" @click="dialogEdit(item)">
              mdi-circle-edit-outline
            </v-icon>
            <v-icon medium color="error" @click="deletaMembro(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="openModal"
      max-width="800px"
      no-click-animation
      persistent
    >
      <!--Inicio modal de criação-->
      <v-card>
        <v-card-title>
          <span>{{ handlerModalTitle() }} </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap column>
              <v-flex xs12 sm6 md4>
                <v-form ref="form" v-model="validation">
                  <v-text-field
                    v-model="member.address"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="Endereço"
                  />
                  <v-text-field
                    v-model="member.mail"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="Email"
                  />
                  <v-text-field
                    v-model="member.phone"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="Telefone"
                  />
                  <v-text-field
                    v-model="member.face"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="link do Facebook"
                  />
                  <v-text-field
                    v-model="member.insta"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="link do Instagram"
                  />
                  <v-text-field
                    v-model="member.youtube"
                    :rules="[(v) => !!v || 'Campo Obrigatório']"
                    color="cyan darken-2"
                    label="link do Youtube"
                  />
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="#FF3D00" text @click="close()"> Cancelar </v-btn>
          <v-btn color="#FF3D00" text @click="submit()"> Salvar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--Fim modal de criação-->
  </v-container>
</template>

<script>
import SnackAlert from '~/components/Dashboard/SnackAlert'
export default {
  layout: 'dashboard',
  components: { SnackAlert },

  data() {
    return {
      headers: [
        {
          text: 'Endereço',
          align: 'left',
          sortable: true,
          value: 'address',
        },
        {
          text: 'E-mail',
          align: 'left',
          sortable: true,
          value: 'mail',
        },
        {
          text: 'Telefone',
          align: 'left',
          sortable: true,
          value: 'phone',
        },
        {
          text: 'Facebook',
          align: 'left',
          sortable: true,
          value: 'face',
        },
        {
          text: 'Instagram',
          align: 'left',
          sortable: true,
          value: 'insta',
        },
        {
          text: 'Youtube',
          align: 'left',
          sortable: true,
          value: 'youtube',
        },
      ],
      members: [],

      openModal: false,
      isEdit: false,
      imageName: '',
      imageNameBackup: '',
      member: {
        id: '',
        address: '',
        mail: '',
        phone: '',
        face: '',
        insta: '',
        youtube: '',
      },
    }
  },

  methods: {
    openRegister() {
      this.openModal = true
    },
    submit() {
      if (this.isEdit === true) {
        this.editMember()
      } else {
        this.addMember()
      }
    },
    close() {
      this.$refs.form.reset()
      this.openModal = !this.openModal
    },
    handlerUrl(url) {
      return url.split('/')[1].split('.')[0]
    },
    handlerModalTitle() {
      return this.isEdit ? 'Edite o laboratório' : 'Adicione um laboratório'
    },
    dialogEdit(item) {
      this.isEdit = true
      this.openModal = true
      this.editedIndex = item.id
      this.member = Object.assign({}, item)
      this.imageName = this.handlerUrl(item.image_path)
      this.imageNameBackup = this.handlerUrl(item.image_path)
      this.member.image = item.image
    },
    pickSelectImage(input) {
      const image = input.target.files
      if (image[0] !== undefined) {
        this.imageName = image[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        this.member.image = image[0]
      } else {
        this.member.image = {}
        this.imageName = ''
      }
    },
    addMember() {},
    editMember() {},
    updateImage() {
      const image = new FormData()
      image.append('image', this.member.image)
    },
    deletaMembro(i) {
      const ok = window.confirm('Deseja excluir')
      if (ok) {
        this.members = this.members.filter((s) => s.id !== i.id)
        this.$refs.alert.showSnack({
          color: 'success',
          text: 'Laboratório deletado com sucesso!',
        })
      }
    },
  },
}
</script>

<style scoped>
.padding {
  margin-top: 3%;
}
</style>
