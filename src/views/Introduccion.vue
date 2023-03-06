<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Estimado aprendiz, bienvenido a este componente formativo, en el que podrá adquirir conocimientos relacionados con el levantamiento y gestión de requisitos para soluciones tecnológicas y desarrollo de <em>software</em>. Por otra parte, se apropiarán competencias sobre estándares establecidos y documentación, para garantizar que las primeras fases de los prototipos sean firmes y garanticen el éxito del producto; así mismo, se intenta reducir incertidumbres y cambios futuros para evitar sobrecostos, demoras en las entregas, o insatisfacción de lo que requiera el negocio.

        .cajon-b.color-primario.p-3.ps-0.mb-5.intro
          p.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-3
        figure
          img(src="@/assets/curso/introduccion/img-1.png")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
