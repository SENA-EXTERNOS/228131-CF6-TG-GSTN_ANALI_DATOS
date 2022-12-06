<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La Elicitación de Requisitos constituye la base fundamental para el desarrollo de proyectos de <em>software</em>, debido al impacto en el diseño y demás fases del ciclo de vida del producto. Realizarla apropiadamente es ayudar a reducir los cambios y correcciones en los requisitos, optimizando los costos en el desarrollo de <em>software</em> y evitando por pérdidas de tiempo.

    p.mb-5 continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo:
     
    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Figura 15.</b> Documentación y validación de los requisitos del <em>software</em>
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
