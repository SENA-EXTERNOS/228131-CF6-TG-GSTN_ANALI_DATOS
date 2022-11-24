<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Determinación de la calidad del <em>software</em> (ISO 9126)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema5/img-1.png")
      .col-lg-10
        p La calidad en los proyectos siempre ha sido un tema importante que conlleva muchas horas de estudio, la norma ISO/IEC 25010:2011 <em>Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - System and software quality models</em>, es una ley vigente que emplea un modelo de calidad compuesto de cinco características, que relacionan los resultados de la interacción cuando un producto interactúa en un contexto particular. Se aplica a la correlación humano-computador, a los sistemas informáticos en función y los productos de <em>software</em>. El modelo de calidad se compone de ocho características donde relacionan las propiedades estáticas del dispositivo y los sistemas de cómputo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.color_dos_dos.p-4
        p También proporcionan un conjunto de condiciones con las que se puede comparar la integridad de los requisitos de calidad establecidos. Aunque se pretende que el alcance de este modelo sea el <em>software</em> y los sistemas informáticos, muchas de las características también son relevantes para sistemas y servicios más amplios. El ámbito de aplicación incluye el soporte de la especificación, evaluación y sistemas de cómputo intensivos en la creación desde diferentes perspectivas: adquisición, requisitos, desarrollo, uso, evaluación, soporte, mantenimiento, garantía y control de calidad y auditoría. En la siguiente figura se muestra las características de ISO/IEC 25010:

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema5/img-2.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0.text-small <b>Figura 14.</b> ISO/IEC 25012 características

          figure
            img(src='@/assets/curso/temas/tema5/img-3.svg')
            figcaption.mt-2 Nota. Adaptado de Gestión en las organizaciones basada en datos de calidad, Aenor, Revista de la Evaluación de la Conformidad. 2020: 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
