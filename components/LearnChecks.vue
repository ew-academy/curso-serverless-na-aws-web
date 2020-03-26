<template>
  <section class="section LearnChecks">
    <div class="container LearnChecksContainer">
      <StyledTitle
        color="#fff"
        margin="0px 0px 20px 0px">O que você vai aprender?</StyledTitle>
      <div class="LearnChecksContainer-list">
        <ul>
          <li> <span>⚡️</span> Projetar e entender os principais beneficios de aplicações serverless</li>
          <li> <span>😍</span> Dividir e organizar projetos de grande porte</li>
          <li> <span>🦄</span> Entender e criar seu fluxo de testes</li>
          <li> <span>🙀</span> Publicar e manter aplicações gastando menos</li>
        </ul>
        <ul>
          <li> <span>😎</span> Conhecer e aplicar boas práticas</li>
          <li> <span>🔥</span> Segurança em ambientes serverless</li>
          <li> <span>🌎</span> Projetar e manter projetos front-end usando serviços AWS</li>
          <li> <span>💻</span> Dividir e projetar ambientes de desenvolvimento</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'

export default {
  name: 'LearnChecks',
  components: { StyledTitle }
}
</script>

<style lang="scss" scoped>
.LearnChecks {
  background-color: #232323;

  > .LearnChecksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.LearnChecksContainer-list {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }

  > ul {
    color: #fff;

    > li {
      display: flex;
      align-items: center;
      padding: 20px 0px;
      font-size: 25px;

      > span {
        font-size: 55px;
        margin-right: 5px;
      }
    }
  }
}
</style>
