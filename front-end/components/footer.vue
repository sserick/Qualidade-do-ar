<template>
  <footer class="footer-background">
    <v-row class="footer-row FooterRowSection" align="center" justify="center">
      <v-col
        cols="11"
        sm="11"
        md="11"
        lg="4"
        xl="4"
        class="footerItems borderRight"
      >
        <v-row align="center" justify="center">
          <v-img
            max-width="50"
            max-height="50"
            src="../imagens/logoClimoscopio.png"
          />
        </v-row>
        <v-row justify="center" align="center">
          <h3 class="textFooter textFooterRedes">
            Siga-Nos:
          </h3>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="2" class="paddingFootRedes">
            <v-row justify="center" align="center">
              <v-btn
                href="https://www.facebook.com/cienciaufpr"
                class="mx-2 buttonFooter"
                fab
                target="_blank"
                dark
                small
                color="#3ab63e"
              >
                <v-icon dark>
                  mdi-facebook
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="2" class="paddingFootRedes">
            <v-row justify="center" align="center">
              <v-btn
                href="https://www.instagram.com/cptufpr/"
                target="_blank"
                class="mx-2 buttonFooter"
                fab
                dark
                small
                color="#3ab63e"
              >
                <v-icon dark>
                  mdi-instagram
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="2" class="paddingFootRedes">
            <v-row justify="center" align="center">
              <v-btn
                href="https://www.youtube.com/channel/UC653xTB6AEfzd1RiC7CNVzQ"
                target="_blank"
                class="mx-2 buttonFooter"
                fab
                dark
                small
                color="#3ab63e"
              >
                <v-icon dark>
                  mdi-youtube
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="11"
        sm="11"
        md="11"
        lg="4"
        xl="4"
        class="footerItems borderRight MediaMap"
      >
        <v-icon class="IconFooter" color="#3ab63e" size="40"
          >mdi-map-marker</v-icon
        >
        <h5 class="textFooter">
          Francisco H dos Santos, S/N Centro Politécnico, Setor de Tecnologia -
          Jardim das Américas, Curitiba - PR, 81531-990
        </h5>
      </v-col>
      <v-col cols="11" sm="11" md="11" lg="4" xl="4" class="footerItems">
        <v-icon class="IconFooterOne" color="#3ab63e" size="40"
          >mdi-email</v-icon
        >
        <h5 class="textFooter FooterEmail">ericksilva@ufpr.br</h5>
        <v-icon class="IconFooterOne IconFooterWhats" color="#3ab63e" size="40"
          >mdi-phone-classic</v-icon
        >
        <h5 class="textFooter">(41) 3361-3432</h5>
      </v-col>
    </v-row>
    <v-row class="footer-row" align="center" justify="center">
      <v-col cols="12" class="FooterFinal">
        <h5 class="textFooter">
          Desenvolvido com <v-icon>mdi-heart</v-icon> por
          <a
            target="_blank"
            href="https://www.linkedin.com/in/erick-santos-5a31a9110"
            >Erick Santos</a
          >
          © 2021
        </h5>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.footer-background {
  background-color: rgba(58, 182, 62, 0.2);
}

a {
  text-decoration: none;
  color: white;
}

.FooterFinal {
  background-color: #3ab63e;
}

.footer-row {
  margin: 0;
}

.FooterRowSection {
  padding-right: 50px;
}

.IconFooter {
  margin-bottom: 10%;
}

.IconFooterOne {
  margin-bottom: 3%;
}

.IconFooterWhats {
  margin-top: 3%;
}

.FooterEmail:hover {
  color: #3ab63e;
}

.footerItems {
  margin-top: 2%;
  margin-bottom: 2%;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.borderRight {
  border-right: rgba(58, 182, 62, 0.4);
  border-right-width: 1px;
  border-right-style: solid;
}

.textFooter {
  color: black;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

.textFooterRedes {
  padding-bottom: 15px;
  color: #3ab63e;
}

.paddingFootRedes {
  padding-top: 0px;
  padding-bottom: 0px;
}

.buttonFooter:hover {
  transform: translateX(0px) scale(1.2);
}

.SizeNewsButton {
  width: 250px;
}

.TextAreaFooter {
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 599px) {
  .footerItems {
    height: 200px;
    border: none;
  }

  .MediaMap {
    height: 150px;
  }

  .IconFooter {
    margin-bottom: 5%;
    color: white;
  }

  .FooterRowSection {
    padding-right: 0px;
    padding-bottom: 6%;
  }
}

@media (min-width: 600px) and (max-width: 1025px) {
  .footerItems {
    height: 200px;
    border: none;
  }

  .MediaMap {
    height: 150px;
  }

  .IconFooter {
    margin-bottom: 5%;
    color: white;
  }

  .FooterRowSection {
    padding-right: 0px;
    padding-bottom: 2%;
  }
}
</style>
