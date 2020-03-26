<template>
  <section class="section Hero">
    <div class="container HeroContainer">
      <h1>Descomplicando aplicações Serverless na AWS com Node.js</h1>
      <p class="subtitle">
        <i>By</i>
        <strong>@erickwendel_</strong>
      </p>
      <StyledButton margin="50px 0px">{{ getRightText }}</StyledButton>
    </div>
  </section>
</template>

<script>
import StyledButton from "./Button.vue";
import { getRightText } from "@/utils/helpers";

export default {
  name: "Hero",
  components: { StyledButton },
  computed: {
    getRightText
  }
};
</script>

<style lang="scss" scoped>
.Hero {
  height: 100vh;
  // background-image: url(../assets/banner.jpg);
  // background-image: url(https://ewtimeline.blob.core.windows.net/timeline-erickwendel/2018-07-05-gerenciando_o_fluxo_assincrono_de_opera%C3%A7%C3%B5es_javascript/800x800/Palestrante%20Erick%20Wendel%20EWIT%20-%20JS%202018%20-%2005-07-2018%20-%20DSC2634.jpg?st=2019-05-23T18%3A25%3A05Z&se=2095-05-23T20%3A05%3A05Z&sp=r&sv=2018-03-28&sr=b&sig=MmUf16d2w%2FM1g0wJqtIqUGVtWW58QWgSkRh4Z4lQV2U%3D);
  background-image: url(../assets/banner3.png);
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > .HeroContainer {
    text-align:center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > a {
      left: 35%      
    }
    > h1 {
      color: #fff;
      font-size: 50px;
      font-weight: 700;
    }
    .subtitle {
      color: #fff;
      font-size: 30px;
      font-weight: 300;

      > strong {
        color: #fff;
      }
    }
  }
}
</style>

