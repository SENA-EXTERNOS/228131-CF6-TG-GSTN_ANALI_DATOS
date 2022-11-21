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
        p Estimado aprendiz, sea bienvenido a este componente formativo en el que podrá adquirir conocimientos relacionados con el levantamiento y gestión de requisitos para soluciones tecnológicas y desarrollo de software. Por otra parte, se apropiarán competencias sobre estándares establecidos y documentación para garantizar que las primeras fases de los prototipos sean firmes y garanticen el éxito del producto; así mismo, se intenta reducir incertidumbres y cambios futuros para evitar sobrecostos, demoras en las entregas o insatisfacción de lo que requiera el negocio.

        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 En el siguiente enlace encontrará un vídeo en el que podrá conocer las temáticas que se abordarán a lo largo de este estudio, <b>¡muchos éxitos en este proceso!</b>
      .col-lg-3
        figure
          img(src="@/assets/curso/introduccion/img-1.png")
    
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
