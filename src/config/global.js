export default {
  global: {
    componenteFormativo: `Documentación y validación de los requisitos del <em>software</em>`,
    descripcionCurso: `La elicitación de requisitos constituye la base fundamental para el desarrollo de proyectos de <em>software</em>, debido al impacto en el diseño y demás fases del ciclo de vida del producto. Realizarla apropiadamente es ayudar a reducir los cambios y correcciones en los requisitos, optimizando los costos en el diseño de del dispositivo y evitando pérdidas de tiempo.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Planeación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas e Instrumentos para elicitar requisitos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Documentación e informe de requisitos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Validación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Variables y restricciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Validación de resultados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Gestión de cambio de requisitos y proyecto',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de riesgos en proyectos de<em> software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Etapas en la construcción del prototipo de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Determinación de la calidad del <em>software</em> (ISO 9126)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: `Desarrollo de un prototipo informático de consulta y asignación de plazas libres en parqueaderos.`,
      referencia: `Andrade, J. C. (2012). <em>Desarrollo de un prototipo informático de consulta y asignación de plazas libres en parqueaderos</em>. Pontifica Universidad Católica del Ecuador.`,
      tipo: `Tesis`,
      link: 'http://repositorio.puce.edu.ec/handle/22000/6354',
    },
    {
      tema: `IEEE Standard | IEEE Xplore. `,
      referencia: `IEEE (1993). 830-1998 - <em>IEEE Recommended Practice for Software Requirements Specifications</em>. IEEE explore. `,
      tipo: `Página web . `,
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      tema: `Acuerdos de nivel de servicio (SLA)`,
      referencia: `Maximo for Service Providers. (2021). <em>Acuerdos de nivel de servicio (SLA)</em>.IBM. `,
      tipo: `Documento web`,
      link: `https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas`,
    },
    {
      tema: `Instructivo uso del estilo APA 7ª edición`,
      referencia: `SENA, (2020), <em>Instructivo uso del estilo APA 7a edición</em>. Servicio general de aprendizaje SENA.`,
      tipo: `Instructivo`,
      link: 'https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf',
    },
  ],
  glosario: [
    {
      termino: `Analista`,
      significado: `Rol técnico que se encarga de entender los problemas y soluciones y plasmarlas de manera clara para ser acatadas por programadores, clientes y demás participantes.`,
    },
    {
      termino: `Agile`,
      significado: `Se refiere a las metodologías ágiles, que permiten enfocarse en soluciones así cambien en el desarrollo.`,
    },
    {
      termino: `CPRE`,
      significado: `<em>Certifield Profesional on Requirements Engineering</em>, certificación para profesionales en ingeniería de requisitos. El documento es emitido por el comité de experto IREB.`,
    },
    {
      termino: `Dominio del problema`,
      significado: `es el ámbito, marco o contexto del sistema de información o proceso. Son los elementos que se interrelacionan; se usa para entender el área o desarrollo del negocio.`,
    },
    {
      termino: `<em>Frameworks</em>`,
      significado: `es un esquema o contexto de trabajo para la creación de aplicaciones; usar <em>framework</em> agiliza y facilita el procedimiento de estas herramientas digitales.`,
    },
    {
      termino: `In situ`,
      significado: `indica el lugar donde suceden las acciones.`,
    },
    {
      termino: `<em>Insigth</em>`,
      significado: `término de la psicología que indica una verdad general, en términos de informática y marketing se refiere a las verdades (a veces relativa según tiempo y condiciones), que generan los datos o los comportamientos de consumo.`,
    },
    {
      termino: `Inteligencia de negocio`,
      significado: `BI, combinación de estrategias y gestión de datos. Se integra análisis, analítica, minería de datos, visualización, infraestructura y datos.`,
    },
    {
      termino: `Librerías`,
      significado: `son herramientas internas de los lenguajes de programación, que consisten en archivos que contienen códigos que se usan para emplear funciones en medio del desarrollo de <em>software.</em>`,
    },
    {
      termino: `Modelar`,
      significado: `se refiere a pasar un problema real que se describe en lenguaje natural a un modelo lógico o matemático que pueda ser plasmado en un programa de cómputo.`,
    },
    {
      termino: `Requisitos funcionales (RF)`,
      significado: `definen las funcionalidades como reglas de negocio, condiciones, cálculos, etc.`,
    },
    {
      termino: `Requisitos no funcionales (RNF)`,
      significado: `son los requerimientos transversales del sistema, no son propiamente de función del sistema, pero si necesarios, tales como el ambiente gráfico, proveedores de servicios, fiabilidad, velocidad, etc.`,
    },
    {
      termino: `<em>Stackholders</em>`,
      significado: `partes interesadas. Son los grupos o actores que participan en la construcción de los sistemas de información.`,
    },
    {
      termino: `Tabular los datos:`,
      significado: `es el análisis de los resultados de los datos obtenidos a partir de las herramientas para tomarlos. Por lo general, se realiza a través de técnicas de la estadística descriptiva.`,
    },
    {
      termino: `Testeos`,
      significado: `<em>testing de software</em>. Área de la ingeniería que emplea metodologías de pruebas para detectar errores de programación o funcionales a partir de los requisitos.`,
    },
  ],
  referencias: [
    {
      referencia: `Lasa Gómez, C. et.al, (2017),<em> Métodos ágiles: Scrum, Kanban, Lean.</em> Madrid: Anaya multimedia. `,
      link: `https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933`,
    },
    {
      referencia: `Netec, (2021), Proceso de gestión de niveles de servicio. <em>Curso Fundamentos de ITIL® V3</em> | EOL.`,
      link: `https://www.netecdigital.com/courses/195795/lectures/3432553`,
    },
    {
      referencia: `Presman, R., & Maxim, B, (2021), <em>Ingeniería de software - un enfoque práctico.</em>`,
      link: `https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16414`,
    },
    {
      referencia: `Stephen, O. (2017), <em>Joint Application Development: Definition, Phases & Methodology</em>,Study.com.`,
      link: `https://study.com/academy/lesson/joint-application-development-definition-phases-methodology.html`,
    },
    {
      referencia: `Wiegers, K. (2003), <em>Software requirements: practical techniques for gathering and managing requirements throughout the product development cycle</em>, Upgrade this ebook with O’Reilly`,
      link: `https://www.pdfdrive.com/software-requirements-practical-techniques-for-gathering-and-managing-requirements-throughout-the-product-development-cycle-2nd-edition-d193204082.html `,
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
