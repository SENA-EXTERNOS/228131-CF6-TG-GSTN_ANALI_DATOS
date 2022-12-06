<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de riesgos en proyectos de <em>software</em>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img-1.png")
      .col-lg-10
        p Se define como la combinación de la probabilidad de un evento y la consecuencia. El riesgo es un evento o condición incierta, que siempre ocurre, y puede tener efectos malos o buenos sobre los objetivos del desarrollo. 

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0
          figure.posicion_imagen_dos
            img(src='@/assets/curso/temas/tema3/img-2.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.p-3 Todo proyecto de <em>software</em> tiene varias incertidumbres, riesgos y oportunidades ya que es una combinación única de exigencias, diseño y construcción, porque busca un producto tecnológico diferente. Los riesgos técnicos o comerciales, afectan a todo el grupo de interesados.

    p.mb-5 La gestión de los mismos tiene como meta mejorar la probabilidad de lograr la culminación del producto y convertir problemas en oportunidades; esta práctica es aplicada en proyectos ágiles que se caracterizan por responder rápidamente a los cambios solicitados por los clientes, empleando nuevas tecnologías o aceptando recursos adicionales. Este procedimiento es un proceso continuo y sistemático para identificar, analizar, manejar y monitorear los riesgos a lo largo del ciclo de vida del <em>software.</em>


    .row.mb-5  
      .col-lg-9  
        ul.lista-ul.ms-4
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
              h5 Identificación de los riesgos en proyectos de <em>software</em>
          li
        p <em>El PMI (Project Management Institute)</em> es una organización que estandariza de facto buenas prácticas para el manejo de proyectos, define la identificación de contratiempos como un proceso para determinar qué pueden afectar un prototipo, identificar y documentar las características, con el fin de registrar y conocer los peligros existentes, lo que permite aumentar la capacidad del equipo y anticiparse. Para lograrlo se hace un tratamiento que identificar los riesgos es un procedimiento recurrente, dado que siempre aparecen nuevas contingencias, es por ello que se sugiere usar un formato para declaraciones y así garantizar que se comprendan de forma clara y sin ambigüedades. Este documento debe respaldar la habilidad de comparar el efecto relativo de diferentes riesgos, e involucra al equipo del proyecto para desarrollar y mantener un sentido de pertenencia y responsabilidad por los peligros y las acciones de respuesta asociadas. En conjunto con la <em>IEEE Computer Society</em> publicaron el <em>software Extension to the </em>PMBOK Guide el cual se usa como estándar.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema3/img-3.png")

    p.mb-5 Para identificar los riesgos se usan diferentes técnicas y herramientas listadas a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0.text-small <b>Figura 11.</b> Empresario en el concepto de medición y gestión de riesgos

          figure
            img(src='@/assets/curso/temas/tema3/img-4.png')
            figcaption.mt-2 Nota. Adaptado de Empresario en el concepto de medición y gestión de riesgos, Elnur, (2003) 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.clase
        ImagenInfografica.color-secundario.mb-5.clase
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-puntos.svg')
          .tarjeta.color-punto-tres.p-3(x="55.5%" y="23%" numero="1")
            h5 Revisión de la documentación
            p Ejecutar un repaso estructurado de los planes, supuestos, memorias de proyectos anteriores, acuerdos y otra información.
          .tarjeta.color-punto-tres.p-3(x="70.3%" y="32.2%" numero="2")
            h5 Lluvia de ideas (Brainstorming)
            p Para obtener la lista de riesgos.
          .tarjeta.color-punto-tres.p-3(x="76.2%" y="47%" numero="3")
            h5 Técnica Delphi
            p Usada para obtener un consenso de los expertos.
          .tarjeta.color-punto-tres.p-3(x="73%" y="65%" numero="4")
            h5 Entrevistas
            p Para lograr ayuda de personas con experiencia en la identificación de riesgos.
          .tarjeta.color-punto-tres.p-3(x="60.9%" y="76%" numero="5")
            h5 Análisis Causa/Efecto
            p Permite identificar los problemas y las causas con el fin de tomar acciones preventivas.
          .tarjeta.color-punto-tres.p-3(x="44.7%" y="78%" numero="6")
            h5 Análisis de listas de chequeo
            p Son los que se elaboran con base en información histórica y conocimiento acumulado en proyectos previos.
          .tarjeta.color-punto-tres.p-3(x="29.7%" y="69%" numero="7")
            h5 Análisis de supuestos
            p Es un documento proyectado a partir de una serie de escenarios o hipótesis, se explora la validez de los supuestos para identificar riesgos por inexactitud, inestabilidad, inconsistencia o suposiciones incompletas.
          .tarjeta.color-punto-tres.p-3(x="22.7%" y="53%" numero="8")
            h5 Elaboración de diagramas
            p Como la causa/efecto (espina de pescado), diagramas de flujo que muestran los mecanismos y sus interrelaciones, y gráficos de influencia que son representaciones de situaciones y las influencias causales. 
          .tarjeta.color-punto-tres.p-3(x="26.7%" y="36%" numero="9")
            h5 Análisis FODA
            p Identifica fortalezas, oportunidades, debilidades y amenazas.
          .tarjeta.color-punto-tres.p-3(x="39.7%" y="25%" numero="10")
            h5 Juicio de expertos
            p Son opiniones relevantes de personas que conocen los temas por haber participado en proyectos similares.

    .row.mb-5  
      .col-lg-9  
        ul.lista-ul.ms-4
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
              h5 Riesgos más comunes en los proyectos de <em>software</em>
          li
        p Durante el proyecto el equipo debe trabajar en la identificación de los factores de riesgo, para saber cómo y cuáles son, hay varias clasificaciones o taxonomías, desglosadas por clase, restricciones, ingeniería del producto y entornos de creación; luego están por elementos como requerimientos y atributos, también la estabilidad o la formalidad de los requisitos. El PMI introdujo la estructura para desglose de riesgos (RBS – <em>Risk Breakdown Structure</em>) con el fin de describir y evaluar los peligros para entenderlos y gestionarlos con efectividad. La tabla muestra la taxonomía de riesgos por niveles.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema3/img-5.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0.text-small <b>Tabla 3.</b> Estructura RBS para desarrollo de <em>software</em>

          figure
            img(src='@/assets/curso/temas/tema3/img-tabla.svg')
            figcaption.mt-2 Nota. adaptado de Hilson, (2003).

    .row.mb-5  
      .col-lg-9  
        ul.lista-ul.ms-4
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
              h5 Estrategias para anticiparse y evitar la materialización de los riesgos
          li
        p Este debe implementar planes de respuesta, rastreo y monitoreo de amenazas remanentes, identificación de nuevos peligros y evaluación de la efectividad del proceso a lo largo del proyecto. Dicha técnica mejora la eficiencia del enfoque de contingencias a lo largo del ciclo de vida y optimiza continuamente las respuestas. Las contestaciones planificadas que están en el registro de riesgos se ejecutan durante el proyecto, pero el trabajo debe monitorearse continuamente para no dejar nada al azar.

        p Otros propósitos del proceso de control de riesgos son:
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema3/img-6.png")

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-tarjeta-tres.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-5.mt-3(src='@/assets/curso/temas/tema3/img-7.png')
        p.text-center La validez de los supuestos del proyecto.
      .tarjeta.color-tarjeta-tres.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4.mt-3(src='@/assets/curso/temas/tema3/img-8.png')
        p.text-center El análisis muestra que un riesgo evaluado ha cambiado o se puede retirar.
      .tarjeta.color-tarjeta-tres.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-5(src='@/assets/curso/temas/tema3/img-9.png')
        p.text-center.mb-4 Se siguen las políticas y procedimientos de gestión de peligros.
      .tarjeta.color-tarjeta-tres.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img-10.png')
        p.text-center Las reservas para contingencias provenientes de costos o cronograma se deben modificar de acuerdo con la actual evaluación de riesgos.
    



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
