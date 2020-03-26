<template>
  <section class="section AboutCourse">
    <div class="container AboutCourseContainer">
      <StyledTitle margin="0px 0px 30px 0px">Sobre o curso</StyledTitle>
      <p>Varrendo a internet, encontramos diversos treinamentos sobre
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>
      <br>
      <p>
        Este treinamento foi
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>
    </div>
  </section>
</template>

<script>
import StyledTitle from "./Title";

export default {
  name: "AboutCourse",
  components: { StyledTitle }
};
</script>

<style lang="scss" scoped>
.AboutCourse {
  > .AboutCourseContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 20px;
      text-align: justify;
    }
  }
}
</style>
