<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Validación de requisitos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-1.png') 
      .col-lg-9.color_dos_uno
        p.p-3 Los Requisitos surgen como el proceso de entender las necesidades, deseos y expectativas establecidas por los clientes, su principal objetivo es la comprensión de lo que los clientes y los usuarios esperan que el sistema haga. Se identifican los aspectos clave que el sistema requiere y se descartan los aspectos irrelevantes, se incluyen Requisitos Funcionales (RF) y restricciones o Requisitos No Funcionales (RNF), comienza con el grupo de interesados reunidos para definir las necesidades del negocio, descripción de los escenarios en los que se desempeñarán los usuarios, se delinean las funciones y características del producto de <em>software</em> o solución tecnológica, y se identifican las limitaciones del proyecto, que dependen de las herramientas empleadas para gestionar el conocimiento del grupo de interesados y generar productos <em>software</em> de alta calidad (Presman & Maxim, 2021).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.color_dos_dos.p-4
        p Para la validación de requisitos, es necesario seguir una serie de recomendaciones que garanticen el cumplimiento y la gestión de necesidades ya establecidas.

        p Después de definir y registrar los requisitos, es importante someterlos a una observación y evaluación que procure el cumplimiento de los elementos mínimos para garantizar que no se presenten dudas o ambigüedades en fases posteriores. Que si bien, ningún proyecto está exento de que algunas cosas cambien, que estas novedades de cambios no sucedan por mal análisis y captura de requisitos errados.

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png')

    separador

    #t_2_1.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3 2.1 Variables y restricciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-3.png")
      .col-lg-10
        p Según <em>Presman & Maxim,</em> (2021) en su libro “Ingeniería del <em>software</em>”, indican que la ingeniería de requisitos abarca siete tareas: concepción, indagación, elaboración, negociación, especificación, validación y gestión.

        p En este sentido, los informes de requisitos deben contener aspectos mínimos ya sea de manera explícita o implícita dentro de la documentación. La validación es clave para determinar un buen registro. A continuación, se presentan algunos elementos a detalla que serán de gran utilidad al momento de presentarlos:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img-4.png")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Concepción") La documentación y registros de requisitos deben enmarcar la razón o motivación para la elaboración del proyecto tecnológico, es decir, se identifica la necesidad, el nuevo mercado o servicio potencial. La concepción podría tomarse como la comprensión básica del problema, el área o equipo que requiere la solución, y de qué tipo o naturaleza sería la solución deseada (<em>hardware, software</em>, BI, etc.).

          p(numero="2" titulo="Indagación") No se trata de una simple entrevista con los clientes o potenciales usuarios para tomar las opiniones de lo que es suplir una necesidad, este aspecto, si bien a la ligera parece fácil, es todo lo contrario, la mayoría de personas pueden tener un problema en el proceso, pero con frecuencia no lo expresan de forma correcta, y si lo hacen no lo saben modelar; lo que se traduce en algo difícil. La indagación debe iniciar por las metas del negocio, qué resultados se tendrán en el mediano y largo plazo. Es importante documentar las metas y objetivos de la organización de manera concreta y especifica que permita resolver conflictos, dado que el desarrollo puede tener diferentes visiones y prioridades según desde el punto vista que se analice. Asociar o relacionar los requisitos a las metas es un elemento poderoso para aclarar dudas sobre qué necesidades existen y cuáles tienen mayor ponderación.

          p(numero="3" titulo="Elaboración") Es un proceso de análisis, los requisitos se deben ir traduciendo en soluciones, crear un escenario que sea más visible para las partes es básico para la claridad y validación de los requerimientos. Se debe hacer uso de recursos gráficos (diagramas, pantallas, flujo de trabajo e información, etc.), la descripción debe ser lo más concisa posible. 

          p(numero="4" titulo="Negociación") Una reacción común, es que los clientes piden más de lo que puede lograrse; otro elemento frecuente, se da entre diferentes usuarios que tienen diversas necesidades, incluso contradiciéndose con otros; dado los recursos y tiempo limitado es indispensable reconciliar los conflictos a través de la negociación, el trato siempre debe estar basado en gana / gana; el cliente debe quedar con claridad del alcance, las restricciones y lo que se resuelve, dejando a lo mejor otros aspectos pendientes.

          p(numero="5" titulo="Especificación") Para registrar este ítem se recomienda usar plantillas, emplear técnicas según la metodología de desarrollo seleccionada; el archivo de requisitos debe tener la lista y detalle de cada uno, según los paramentos establecidos en el método de investigación. Esto varía según el tamaño y la complejidad del proyecto a desarrollar, así como los estándares de las organizaciones, dado a que algunas empresas por gestión de calidad, exige usar formatos establecidos.<br>Según la técnica elegida, estas especificaciones combinan lenguaje natural con inclusión de técnicas, para que los programadores tengan absoluta claridad de lo que se espera que haga el sistema.

          p(numero="6" titulo="Validación") Los productos que surgen a partir del análisis de requisitos deben entrar a evaluarse y validar puntos importantes como la consistencia (que no existan ambigüedades), que efectivamente brinden soluciones óptimas al problema planteado. Esta revisión debe estar bajo un enfoque técnico, el equipo de validación deben ser profesionales en el desarrollo, preferiblemente con experiencia y habilidades computacionales y una comunicación asertiva. Pues si bien los expertos dan validación en aspectos de su área, el cliente también debe entender y validar el resultad planteado. Un ejemplo de mala comunicación es: <em>“Como requisito se lista que el sistema tendrá buen desempeño”</em>, para el usuario ¿qué es exactamente <em>“buen desempeño”</em>? es importante, en lo más que se pueda usar valores específicos para determinar la solución (ej.: una consulta no debe tardar más de x milisegundos), o <em>“la aplicación debe superar el 99% de disponibilidad de servicio”.</em>

          p(numero="7" titulo="Gestión de cambios") Este aspecto, debe estar tratado en la documentación de requisitos; ya que los clientes persisten en cambiarlos durante el ciclo de vida del sistema, siempre ven mejoras, persisten querrán más y más. La gestión es un conjunto de actividades que ayudan al equipo del proyecto a identificar, controlar y rastrear los requerimientos y los cambios en cualquier momento, mientras el proyecto avanza, (Presman & Maxim, 2021).


    separador

    #t_2_2.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3.mb-5 2.2 Validación de resultados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row 
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema2/img-5.png")
          .col-lg-7
            .cajon-b.color-primario.mb-5.dos_uno
              p Según la metodología seleccionada, se emplean diversas técnicas de criterios y validación, durante toda la formación, se mencionan en numerosos enfoques las metodologías ágiles, es por esto que poco se profundizará en ello. Existen unos parámetros establecidos que independiente del modelo de gestión seleccionado, deben estar inmersos en los documentos de requisitos.

              p Es muy importante, analizar cada exigencia a detalle, pues equivocaciones en esta parte podrían suponer costos y atrasos futuros; se busca es que la experiencia de creación e implantación del proyecto sea la mejor posible, fluida, bien planeada y sin novedades graves.

              p Es conveniente revisar cada requerimiento frente a unas preguntas puntuales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row 
          .titulo-sexto.color_tabla.pb-0
            p.mb-0.text-small <b>Figura 10.</b> Ejemplo para comprobar validez de cada requisito

          figure
            img(src='@/assets/curso/temas/tema2/img-6.svg')
            figcaption.mt-2 Nota. Adaptado de Presman & Maxim, (2021)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-7.png")
      .col-lg-10
        p Las preguntas anteriores, entre otras que puedan surgir a partir de la naturaleza del desarrollo tecnológico o del encargo mismo, ayudan a establecer la validez e identificar de manera puntual en qué se debe ajustar en el requisito especificado. Si bien inicialmente podría tomar tiempo hacer estas comprobaciones; vale la pena realizarlas, dado que esto garantiza un mejor control, registro, seguimiento del proyecto y entrega final.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0
          figure.posicion_imagen_dos
            img(src='@/assets/curso/temas/tema2/img-8.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.p-3 <b>¿Qué otras preguntas podrían surgir para ayudar a validar el requisito?</b> por ejemplo, para la metodología <em>Scrum</em>, es importante corroborar si el requerimiento tiene un peso o una ponderación en el esquema establecido. Pues hay precisiones relevantes que tienen una puntuación mayor que otras; ya sea por su importancia funcional, la complejidad al momento de la fabricación, entre otros factores.



    separador

    #t_2_3.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3 2.3 Gestión de cambio de requisitos y proyecto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img-9.png")
      .col-lg-8
        p Un <em>insigth</em> que aplica para el desarrollo de proyectos tecnológicos podría ser “cuando se soluciona un problema, aparece otro”, en otras palabras, se satisface una necesidad, surge otra y al resolverla una nueva y así sucesivamente, esto traducido a soluciones tecnológicas y transformación digital, es que cuando se presenta resultados a los interrogantes del cliente y/o usuarios , lo que hace que a ellos les surjan nuevas ideas, planteando más retos, basados en las respuestas de los técnicos y en las posibilidades que los programas informáticos presentan; lo anterior es un asunto que perdura siempre en el tiempo de creación del sistema tecnológico. La gestión de cambios es un cúmulo de actividades, políticas o protocolos establecidos que facilite al equipo de trabajo identificar, controlar, registrar y rastrear los requerimientos y las variaciones a los mismos en cualquier momento, incluso en fases avanzadas.

        p Parte de la característica de las metodologías ágiles, es que los requisitos no deben ser una camisa de fuerza, inflexibles e inmutables, pero sí es necesario tener claridad entre mejorar una solicitud (optimizar el formato de presentación de un campo, por ejemplo), y que el requisito ajustar según los acuerdos ya pactados. Una cosa es que el cliente sugiera mejorar un aspecto de navegabilidad en una aplicación, dado que en la práctica la programación inicial sea confusa, pero otra es que solicite agregar funcionalidades al requisito como nuevos cálculos o sumar elementos que impliquen cambios estructurales en el <em>software.</em>

    .cajon.p-4.mb-4.color-cajon
      p En términos generales, las herramientas de gestión del cambio ya están dadas, tales como la validación, aceptación y protocolos de desarrollo para llevar el control de cambios, sin embargo, para la gestión de proyectos de <em>software</em> o inteligencia de negocio es importante tener conceptos sobre <em>SLAS</em>. Que ayuda a diligenciar ajustes en los niveles de servicio.

    .row.mb-5  
      .col-lg-8   
        ul.lista-ul.ms-4
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
              h5 Acuerdos de nivel de servicio <em>(SLAS)</em>
          li
        p El propósito del proceso de gestión de niveles de servicio es asegurar que estos estén actualización y planificados, que sean entregados de acuerdo con lo pactado y dentro de los objetivos establecidos.

        p Lo anterior es posible a través de un ciclo constante de negociaciones, donde haya acuerdos, supervisión, reporte y revisión los objetivos del servicio de manera constante, informando de los logros y las diferentes acciones para mejorar el nivel del servicio entregado, (Netec, 2021).

        p Todo el contexto de las soluciones entregadas, deben estar en el marco de los <em>SLAS</em>, y deben estar muy especificadas en relación a los alcances y prestaciones pactadas.

        p Existe un marco metodológico para llevar a cabo la gestión de los <em>SLAS</em>, estos pactos pueden ser flexibles, pero deben tener seguimiento y un requisito nuevo, por ejemplo, entra en la gestión de <em>SLAS</em> y este debe ser gestionado entre proveedor de desarrollo y el negocio; el cual puede ser aceptado o no.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img-10.png")
    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-tarjeta-dos.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-11.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Si desea profundizar en acuerdos de nivel de servicio (Slas), visite el siguiente sitio web.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas" target="_blank")
                    span Enlace web
                    i.fa.fa-link
                

</template>

<script>
export default {
  name: 'Tema2',
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
