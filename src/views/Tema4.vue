<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Etapas en la construcción del prototipo de <em>software</em>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema4/img-1.png")
      .col-lg-9
        p El prototipo es un producto en un modelo o versión temprana e incompleta del #[em software], que tiene la misma arquitectura y un mecanismo para identificar los requisitos del programa informático. Por lo general, es un boceto funcional del dispositivo y se utiliza para la demostración de características, interfaces de usuario o funcionalidades y para ahondar en la solución de un problema y las alternativas. Muestra cómo se ve el producto y cómo trabaja ante los #[em stakeholders] y esto aumenta o no, la confianza en la capacidad del equipo; incluso sirve como herramienta de venta, dado que se puede hacer un artículo diferente, durante el estudio de factibilidad y exponerlo a los interesados, de tal forma, que se realiza una impresión de lo que obtendrán, una vez que el producto esté finalizado. También se utiliza para mostrar una vista preliminar de una parte del software, para ponerlo a prueba y error, en espera de aprobación de los #[em stakeholders]; según la respuesta, se sabe si se entra a modificar y corregir el error hasta que sea satisfactorio. Una ventaja es que se construye en poco tiempo y a bajo costo, y es el paso inicial antes de empezar a fabricar el artilugio. Facilita que el equipo informático final, tenga mejor calidad y una interfaz de usuario agradable y útil. Un prototipo podrá ser construido, solo si es posible experimentar con el #[em software].

    p.mb-5 El video que encuentra a continuación, es un tutorial que le va a enseñar sobre la creación de prototipos:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yjs8yV_fMoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    p.mb-5 Las etapas para elaborar un prototipo exitoso son:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema4/img-2.png")
      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-tarjeta-cuatro.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.mb-5(src='@/assets/curso/temas/tema4/img-3.png')
            p.text-center.mb-5 Elicitación, refinamiento y documentación de requisitos.
          .tarjeta.color-tarjeta-cuatro.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.mb-4(src='@/assets/curso/temas/tema4/img-4.png')
            p.text-center.mb-5 Diseño o modelado rápido, centrado en lo que ve el usuario y lo que se utiliza del <em>software.</em>
          .tarjeta.color-tarjeta-cuatro.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img-5.png')
            p.text-center.mb-5 Construcción y evaluación del prototipo; el uso por parte de los <em>stackholders,</em> ayuda a redefinir los requisitos previos.
          .tarjeta.color-tarjeta-cuatro.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img-6.png')
            p.text-center Depuración y refinamiento del prototipo; este proceso iterativo sirve para que el cliente valide las necesidades y, a su vez, mejore el entendimiento con el equipo de trabajo.
          .tarjeta.color-tarjeta-cuatro.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.mb-4(src='@/assets/curso/temas/tema4/img-7.png')
            p.text-center.mb-5 Producto de ingeniería, cuando el prototipo debe planificarse de nuevo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema4/img-8.png")
      .col-lg-7
        .cajon-b.color-primario.mb-5.dos_uno
          p La finalidad de los prototipos es la de llegar a una versión de prueba (Beta) de la creación final; esto conlleva varias ventajas:

          ul.lista-ul.ms-4
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 No cambia el ciclo de vida del <em>software.</em>
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 Reduce los riesgos de desarrollar un programa informático que no satisfaga los requerimientos.
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 Minimiza costos y aumenta las probabilidades de éxito.
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 Ayuda a conformar el conjunto de las herramientas, librerías o <em>frameworks</em> adecuados.
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 Ofrece un mejor enfoque cuando hay dudas en un algoritmo, migración a un sistema operativo o interacción humano-máquina.
             

    .row 
      ul.lista-ul.ms-4
        li 
          <i class="fas fa-angle-right" aria-hidden="true"></i>
          h5 Proceso iterativo de revisión y depurado 
            p.mt-4 Es un desarrollo continuo que se realiza, corrige, realimenta y cambia; hay dos tipos principales de modelos: desechable y evolucionario.

            p El desechable se elabora en varias etapas e iteraciones, sirve para eliminar dudas sobre lo que realmente quiere el cliente porque al final del proceso se han capturado todos los requerimientos, que a medida que se va evolucionando tendrán toda la especificación de requisitos hechos previamente.

            p A continuación, se muestra la operación cíclica que representa las iteraciones del proceso de prototipado: diseño rápido – construcción– evaluación – refinar el bosquejo y volver a comenzar: 
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0 <b>Figura 5</b> 
            p.mb-0 <em>Proceso iterativo del prototipo desechable</em>

          figure
            img(src='@/assets/curso/temas/tema4/img-9.svg')
            figcaption.mt-2 Nota. Adaptado de Ahmed & Prasad (2016).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/img-10.png")
      .col-lg-10
        p El evolucionario  reutiliza un código existente, lo que implica mayor esfuerzo y costo, pero es un modelo funcional y parcial del producto de #[em software]. Los prototipos evolucionarios se usan mucho en procesos ágiles, porque se van desarrollando de forma incremental, de forma que se fracciona el esfuerzo del desarrollo del #[em software]. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0 <b>Figura 6</b> 
            p.mb-0 <em>Proceso iterativo del prototipo evolucionado</em>

          figure
            img(src='@/assets/curso/temas/tema4/img-11.svg')
            figcaption.mt-2 Nota. Adaptado de Ahmed & Prasad (2016).
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
