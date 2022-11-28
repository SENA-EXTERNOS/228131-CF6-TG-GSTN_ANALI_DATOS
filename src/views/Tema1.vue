<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elicitación de requisitos 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-1.svg")
      .col-lg-10
        p El propósito de la elicitación de requerimientos es adquirir conocimientos relevantes del objeto de estudio, que se utilizará para producir una especificación formal del <em>software</em> necesario para resolverlo. “Un problema puede ser definido como la diferencia entre las cosas como se perciben y como se desean” (Wiegers, 2009).   Resaltando la importancia que tiene una comunicación asertiva entre desarrolladores y clientes; de esta correlación depende que las necesidades queden claras. Además, al final de la fase de análisis de requerimientos, el encargado podría llegar a tener un conocimiento extenso en el dominio del problema.

        a.anexo.mb-4.mb-lg-0.anexo_uno(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> <em>Software requirements 2, Microsoft</em>

    p.mb-5 La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; el significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información. Los objetivos de esta fase son:

    .row.justify-content-center.align-items-center.mb-5
       figure.img_siete
        img(src="@/assets/curso/temas/tema1/img-2.svg")

    p.mb-5 A partir de lo anterior, definir con claridad los requisitos:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-3.svg')
        h2.text-center Requisitos funcionales (RF): 
        p Establecen el modelo de funcionamiento del sistema y son el centro de las discusiones entre las partes, son la base para realizar las pruebas de verificación del software después de la implementación.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-4.svg')
        h2.text-center Requisitos no funcionales (RNF):
        p Son las limitaciones sobre servicios o funciones que tiene el dispositivo, incluye restricciones en el cronograma y en el proceso del mismo; además de las normas y estándares impuestos, también deben ser aplicadas como un todo y no como características individuales. Tienen un origen técnico y, aunque para el cliente no interesa tanto este aspecto, lo que sí importa es que sea funcional. Se derivan de las restricciones y están destinadas a encuadrar en el sistema dentro de un entorno de trabajo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>tabla 1</b>. Ejemplos de requisitos funcionales y no funcionales

        figure
          img(src='@/assets/curso/temas/tema1/img-tabla.svg')

    separador 

    #t_1_1.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3 1.1  Planeación

    p.mb-5 Para iniciar el proceso de elicitación, se deben definir los flujos de transformación de la información que se generan durante el desarrollo. En esta fase, se avanza desde las especificaciones iniciales para reconocer y contextualizar el problema, estructurar el procedimiento y el equipo de trabajo:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Figura 1.</b> Símbolo Ilícito

        figure.img_siete
          img(src='@/assets/curso/temas/tema1/img-5.svg')
          figcaption.mt-2 Nota: adaptad de/ Símbolo ilícito o lícito. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-6.png')
          .tarjeta.color-acento-botones.p-3(x="8.5%" y="115%" numero="1")
            p Conocimiento del dominio y el contexto
          .tarjeta.color-acento-botones.p-3(x="25.3%" y="115%" numero="2")
            p Comprensión del problema
          .tarjeta.color-acento-botones.p-3(x="42.2%" y="115%" numero="3")
            p Definición del modelo y las reglas del negocio
          .tarjeta.color-acento-botones.p-3(x="59%" y="115%" numero="4")
            p Unificación de criterios
          .tarjeta.color-acento-botones.p-3(x="75.9%" y="115%" numero="5")
            p Sensibilización de las partes interesadas
          .tarjeta.color-acento-botones.p-3(x="92.7%" y="115%" numero="6")
            p Especificaciones finales completas, formales y acordadas entre todos los participantes

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0
          figure.posicion_imagen
            img(src='@/assets/curso/temas/tema1/img-7.svg')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Se establece como la fase principal de un ciclo del desarrollo de <em>software</em>, está enfocada en recopilar y analizar los requerimientos y objetivos deseados para el sistema que van desde los diferentes puntos de vista de los interesados; por ejemplo: (clientes, usuarios y patrocinadores) y las restricciones o condiciones que tendrá según el entorno de operación del dispositivo, al igual que las necesidades de comercialización, utilización, compatibilidad, estándares, entre otras. Es importante acotar que existen diversas técnicas para la elicitación de requerimientos, a continuación, se mencionan las más comunes. 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta
          .col-10
            img(src='@/assets/curso/temas/tema1/img-8.svg') 
      .tarjeta
          .col-10
            img(src='@/assets/curso/temas/tema1/img-9.svg')
      .tarjeta
          .col-10
            img(src='@/assets/curso/temas/tema1/img-10.svg')
      .tarjeta
          .col-10
            img(src='@/assets/curso/temas/tema1/img-11.svg')
  

    p.mb-5 Seguidamente, podrá visualizar el ciclo de requerimientos desde la etapa inicial. Por lo general, dentro del grupo de interesados hay un analista de requerimientos, que puede ser un individuo o grupo dentro del personal técnico, que debe tener conocimiento más profundo de las necesidades de los interesados.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Figura 2.</b> Ciclos de requerimientos

        figure.img_siete
          img(src='@/assets/curso/temas/tema1/img-12.svg')
          figcaption.mt-2 Nota: adaptado de <em>Mastering Software Project Requirements, Davis, B. (2013), J Ross Publishing.</em> 

    separador 

    #t_1_2.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3 1.2 Técnicas e Instrumentos para elicitar requisitos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure.img_siete
          img(src='@/assets/curso/temas/tema1/img-13.svg')
      .col-lg-10
        p Existe una variedad de técnicas propuestas para la ingeniería de requerimientos (IR), por lo que es primordial resaltar que dichos procedimientos pueden ser aplicables a las distintas fases del proyecto de la (IR), teniendo en cuenta las características propias del mismo, para aprovechar al máximo el producto y lograr una mejor utilidad. 

        p A continuación, se dan a conocer una serie de herramientas destinadas a facilitar la elicitación correcta y efectiva de los requisitos dentro de un proceso de elaboración.

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0.mt-3
            h5.ms-5 Entrevista 
            p.ms-5 Es una forma de recoger información de otra persona a través de una comunicación interpersonal que se lleva a cabo por medio de una conversación estructurada.
            p.ms-5.text Se presentan en tres etapas, en la primera instancia se planifica y se estipula el tiempo de la misma, en la segunda los temas a tratar y en establecer el perfil de los entrevistados. Las primeras suelen dirigirse a los gerentes y líderes quienes tienen una visión global de negocio y en ellas se abordan aspectos generales y estratégicos sobre los objetivos corporativos. Luego, por lo general, se interrogan a los futuros usuarios del sistema para entender las tareas y flujos que llevan a cabo a diario y definir las necesidades.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-14.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 Encuesta
            p.ms-5 Pueden variar en cuanto a propósito, diseño y apariencia, son cuestionarios diseñados para que las personas involucradas respondan una serie de preguntas que buscan obtener información o conocer la opinión sobre un tema específico. Los individuos que participan en la investigación suelen leer los mismos listados de preguntas, lo que permite consistencia y precisión al analizar las respuestas. Una de las ventajas más destacadas de los temarios es simplificar la obtención de datos, preguntar directamente a los implicados, conseguir de manera contundente la información y aplicar el instrumento a un gran número de personas. Si bien las mismas pueden ser físicas, en la actualidad existen herramientas gratuitas, eficientes y sencillas que facilitan el diligenciamiento tanto a los usuarios como al analista a la hora de tabular los datos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 Preguntas abiertas y cerradas
            p.ms-5 Las abiertas so aquellas que no tienen limitación de respuestas, les dan más libertad a los funcionarios para escribir exponer su punto de vista, mientras que las cerradas, se condicionan y es necesario elegir una de las opciones disponibles.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-16.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 Observación <em>in situ</em>
            p.ms-5 Consiste en la percepción directa de las prácticas que se realizan habitualmente en el proceso de elaboración del software, esta técnica permite la obtención de datos, no desde el punto de vista de las personas, sino desde la evidencia directa, es decir lo que ve y percibe el analista de requisitos. Antes de realizar la observación in situ, se deben escoger un conjunto de operaciones que sean importantes para el nuevo sistema, las cuales se deben aplicar de manera constante, que tengan cierta complejidad de comprensión.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-17.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5.mb-5 Ventajas
            .col-11
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Los hechos se registran conforme sucede.
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Se interpreta mejor los procesos que se realizan.  
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p No se hace entrevistas para obtener la información deseada. 
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p La información es más exacta, de manera objetiva y profunda desde la experiencia técnica.  
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Facilita el acceso a datos que por lo general se obvian en las entrevistas.
                li 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-18.svg')

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 Desventajas
            .col-11
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p No se orienta a interpretar elementos como satisfacción, motivación y preferencias.
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Suele ser más costosa la observación in situ por el tiempo dedicado a ello, ocasionalmente se prolonga más de lo previsto.  
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Los usuarios o empleados pueden cambiar sus hábitos de procedimiento al notar que los observan, por esto se debe procurar que las personas no se sientan juzgadas o miradas.
                li 
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Las observaciones in situ suelen ser extensas.
                li 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-19.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 <em>Joint Application Development</em>
            p.ms-5 En español, el Desarrollo Conjunto de Aplicaciones o JAD, es un proceso destinado al adelanto de sistemas informáticos en su etapa inicial, pero también puede ser aplicable a otros tipos de etapa. Es un enfoque para garantizar la precisión entre la definición del alcance del proyecto y la entrega, a través de la colaboración continua de partes interesadas. Estas interacciones forman el núcleo de la etapa de desarrollo y el ciclo de vida de JAD. Es un medio moderno de recopilar y analizar los requisitos de <em>software</em>, que se discuten en una serie de reuniones y talleres entre los equipos involucrados. (Stephen, 2017)
            p.ms-5 JAD es más frecuente en entornos de entrega Agile, en la que los productos del sistema se crean y envían en ciclos cortos en función a los acuerdos entre los participantes.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-20.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h5.ms-5 Estudio de documentación
            p.ms-5 Consiste en realizar una lectura a profundidad basada en documentos del problema del nuevo sistema, esto dará un contexto general y a profundidad sobre el negocio y sus procedimientos. Los archivos darán cuenta de los objetivos de la organización, los enfoques profesionales y comerciales. Algunos de los principales registros que se pueden consultar y analizar son: los manuales de procedimientos y de funciones, informes generados por el sistema actual, legislaciones, manuales de usuario del sistema actual, e información general que podría estar incluso en la web de la empresa.

            p.ms-5 Existen otros recursos, los cuales se pueden sacar los requisitos y problemas; elegir el más adecuado depende de la naturaleza del negocio, la experiencia y conocimiento de la técnica, y otros factores específicos del proyecto a desarrollar. Entre otras tácticas se podría mencionar: lluvia de ideas, talleres de requisitos, prototipos, ingeniería inversa, etc.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-21.svg') 

    .row.tarjeta.justify-content-center.align-items-center.mb-5.color_unodos.tamano
      .col-lg-6
        figure.p-3
          img(src='@/assets/curso/temas/tema1/img-22.png') 
      .col-lg-6
        #t_1_3.titulo-segundo.color-acento-botones.color_subtemas.pb-2
          h3 Infografía Elicitación de requisitos
        p.mb-5 Aspectos principales de la elicitación de requisitos.
        a.boton.color-acento-botones(:href="obtenerLink('/downloads/ANEXO_Elicitacion_de_requisitos.pdf')" target="_blank")
          span Descargar
          i.fas.fa-file-download



    separador

    #t_1_3.titulo-segundo.color-acento-botones.color_subtemas.pb-2
      h3 1.3 Documentación e informe de requisitos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img-23.png")
      .col-lg-8
        p El propósito de un informe es comunicar y reflejar los hechos obtenidos por el analista de requisitos. Se documenta la investigación, estudio, análisis o trabajo. Debe ser claro y completo, dirigido a personas que incluso no tienen que ver con la organización, si bien contienen elementos técnicos, debe ser entendido para todos y para cualquier profesional del área técnica. Debe incluir métodos y proponer las soluciones.

        .cajon-b.color-primario.p-3.mb-5.unotres
          p.mb-0 Metodologías y certificación para elicitar requerimientos:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="IREB")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 IREB (<em>xInternational Requirements Engineering Board</em>) 
            p.decor Es una organización sin ánimo de lucro <a class= "decor" href="https://www.ireb.org/en/landingpage/es/">www.ireb.org</a>, que provee el esquema de certificación profesional en ingeniería de requisitos (CPRE), el consejo está compuesto por representantes y líderes en IR (requisitos internacionales), que provienen de la academia, investigación, empresa y consultoría.

            p Esta organización surge en Alemania en el año 2006, sin embargo, es un comité con alcance internacional, su objetivo es destacar la importancia de los requerimientos como una disciplina completa y mostrar su valor agregado a la industria del <em>software</em>.

            p Podría denominarse que la IREB es un movimiento que procura valorizar la importancia de los requerimientos, que los sectores económicos y la industria dispongan de este componente la categoría y valoración que merece.

          .col-md-6
            .titulo-sexto.color_tabla.pb-0
              p.mb-0.text-small <b>Figura 7.</b> El CPRE
            figure
              img.mb-2(src='@/assets/curso/temas/tema1/img-24.png')
              figcaption Nota: adaptado de roles dentro del esquema CPRE. international requeriments engineering board.
      .py-3.py-md-4(titulo="CPRE")
        .row
          .col-md-6
            h4 Certificación CPRE (<em>Certifield Profesional on Requirements Engineering</em>)
            p.mb-0 Es gestionada y entregada por IREB, dirigida a los profesionales en: 
            p.mb-0 análisis de negocio, administradores y analistas de procesos que se enfocan en mejorar y optimizar áreas de soluciones tecnológicas, ingenieros de <em>software</em> o requerimientos expertos en el estudio de requisitos y planteamientos de soluciones informáticas.
            p <b>Pruebas:</b> expertos en testeos de aplicaciones y soluciones tecnológicas, evalúan si el proyecto sí cumple con lo pactado o prometido, emplean técnicas y métodos establecidos, según el tipo de prueba que desean ejecutar.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-25.png')
      .py-3.py-md-4(titulo="IEEE")
        .row
          .col-md-6
            h4 Estándar IEEE. (<em>Instituto de Ingenieros Eléctricos y Electrónicos</em>)
            p El instituto de Ingenieros Eléctricos y Electrónicos es la organización internacional más grande que se encarga de promover avances científicos en las áreas de la electrónica, eléctrica, informática, energética y relacionadas. Adicional, es el que regula y estandariza las normas internaciones de estas disciplinas. Surge en Estados Unidos en la década de los sesenta.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-26.png')
      .py-3.py-md-4(titulo="SCRUM")
        .row
          .col-md-6
            h4 SCRUM (historias de usuario)
            p <em>SCRUM</em> está enmarcado en una de las metodologías ágiles, en el entorno actual es el más empleado por las empresas y la estrategia de desarrollo está basado en este modelo.
            p A diferencia de lo expuesto en <em>IREB</em>, en este se realiza la toma de requisitos de manera tradicional; a través de las reuniones con clientes, expresar en qué consiste el requisito, sin que haya detalles minuciosos y luego estimar las reglas, priorizarlas y plasmarlas en historias de usuario.
            p Las metodologías tradicionales proponen fijar los requerimientos con un alto nivel de detalle al inicio del proyecto y, a partir de esto se hace una estimación de los costos y la fecha de entrega. Esto podría implicar fácilmente inconvenientes, dado que con frecuencia los clientes no tienen claridad sobre sus necesidades, lo anterior se suma que en las metodologías tradicionales un cambio a mitad del proyecto podría resultar en problemas y trabas que implicarían costos, ya sea de resultados finales o incrementos presupuestales, (Lasa Gómez, Álvarez García, & de las Herras del Dedo, 2017).
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-27.png')

    p.mb-5 La estandarización de los requisitos de <em>software</em>, están basados en las normas IEEE 830. Antes de ahondar en los detalles del estatuto, se exponen algunos conceptos previos importantes para tener en cuenta:

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0
          figure.posicion_imagen
            img(src='@/assets/curso/temas/tema1/img-28.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <b>Especificación de Requisitos de <em>Software</em> (ERS):</b> se refiere a una descripción que indica algo, esta especificación debe ser entendida por el cliente. La ERS no puede llevar elementos de implementación o de desarrollo de soluciones técnicas, a partir de una determinación especifica, surgen otras más detalladas producto de la descripción documentada.
              li

    p.mb-5 La metodología IEEE 830 presenta la siguiente estructura:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Tabla 2.</b> <em>Estructura del ERS, del estándar IEEE </em>
        figure
          img(src='@/assets/curso/temas/tema1/img-tabla-2.svg')

    p.mb-5 A continuación, encuentra la diferencia de los enfoques entre las metodologías tradicionales y las ágiles:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Figura 8.</b> Paradigmas de metodologías para desarrollo y entrega de soluciones informáticas.
        figure
          img(src='@/assets/curso/temas/tema1/img-29.svg')
          figcaption Nota: adaptado de Álvarez García, & de las Herras del Dedo, (2017)

    .row.mb-5  
      .col-lg-12   
        ul.lista-ul.ms-4
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
              h5 Criterios de aceptación
                p.mt-3 Se resumen en el cumplimiento del requisito o de la funcionalidad del sistema o proyecto. Hacen parte de la historia de usuario en la metodología <em>Scrum.</em>
                p Es la parte en la que el cliente evalúa y establece si el desarrollo de la parte del proyecto es o no aceptada; propone de manera correcta los criterios, evita controversias en los proyectos y deja claro los alcances y funcionalidades.
          li

    p.mb-5 <b>Características principales de los criterios de aceptación:</b>

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-tarjeta-blanca.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img-30.png')
        p.text-center.mb-5 Se deben redactar con frases concretas y que concluyan las historias de usuarios.
      .tarjeta.color-tarjeta-blanca.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img-31.png')
        p.text-center.mb-5 Enriquece el relato y hace posible las pruebas.
      .tarjeta.color-tarjeta-blanca.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img-32.png')
        p.text-center.mb-4 Los resultados de las pruebas solo deben tener dos estados: Correcto o incorrecto.
      .tarjeta.color-tarjeta-blanca.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-3(src='@/assets/curso/temas/tema1/img-33.png')
        p.text-center.text-small.mb-4 Se debe asegurar el entendimiento por parte de todo el equipo para que exista unanimidad en la consideración si es o no aceptada y finalizada.

    p.mb-5 <b>Tipos de criterio de aceptación</b>

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-34.png").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Condiciones:")
              .col-12
                p.mb-0 Se refiere a la manera de reaccionar frente a las opciones de comportamiento y ante situaciones que no se cumplen.

            .row(titulo="Funcionales:")
              .col-12
                p.mb-0 Es lo que se espera ver o que hace la solución.

            .row(titulo="No funcional:")
              .col-12
                p.mb-0 Hace referencia a la accesibilidad, seguridad, performance, soporte, etc.

            .row(titulo="Usabilidad:")
              .col-12
                p.mb-0 Da cuenta de la facilidad de uso, eficiencia, navegabilidad, errores, experiencia de usuario.


    p.mb-5 Si bien, el formato o plantillas son muy diversas, esto depende de los líderes o de la compañía, deben tener unos elementos mínimos. A continuación, un ejemplo de una tarjeta o documento de historia de usuario y sus componentes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color_tabla.pb-0
          p.mb-0.text-small <b>Figura 9.</b> Contenido de una historia de usuario
        figure
          img(src='@/assets/curso/temas/tema1/img-35.svg')
          figcaption Nota. Adaptado de Ejemplo de una tarjeta de historia de usuario,<em> Menzinsk, Gertrudis</em> López & Juan Palacio (2018). 

    .cajon.p-4.mb-4.color-cajon
      p Los criterios de aceptación en la metodología <em>Scrum</em> y otras del marco de investigaciones ágiles, los requisitos se expresan a modo de validación y dan luz sobre los test que se deben realizar por parte del equipo de pruebas y aprobación de dicha historia.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
