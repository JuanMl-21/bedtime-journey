export interface BlogContent {
  type: "intro" | "heading" | "paragraph" | "list" | "references";
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: BlogContent[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "por-que-tu-bebe-se-despierta-cada-hora",
    title: "Por qué tu bebé se despierta cada hora (y cómo ayudarlo a dormir mejor)",
    excerpt: "Entender la ciencia detrás de los despertares nocturnos es el primer paso para acompañar a tu bebé hacia un descanso más reparador para toda la familia.",
    category: "Sueño Infantil",
    date: "Mayo 2025",
    readTime: "8 min lectura",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80",
    content: [
      {
        type: "intro",
        text: "Son las 2 de la mañana. Tu bebé acaba de despertarse por tercera vez en las últimas cuatro horas, y tú te preguntas si esto es normal, si hay algo malo, o si simplemente estás haciendo algo mal. Respira. Lo que está viviendo tu bebé no es una falla tuya ni de él: es biología pura. Los despertares nocturnos frecuentes en los primeros doce meses de vida son una de las realidades más agotadoras de la crianza, pero también una de las más malentendidas."
      },
      {
        type: "intro",
        text: "En Bedtime Journey te acompañamos a entender qué pasa realmente en el cerebro y el cuerpo de tu bebé mientras duerme, por qué se despierta con tanta frecuencia, y qué herramientas basadas en evidencia existen para apoyarlo a conectar sus ciclos de sueño de forma más autónoma. Conocer la ciencia no solo te da tranquilidad: te da poder para tomar decisiones informadas y compasivas."
      },
      {
        type: "heading",
        text: "Los ciclos de sueño de los bebés son biológicamente distintos a los de los adultos"
      },
      {
        type: "paragraph",
        text: "Un adulto tiene ciclos de sueño de aproximadamente 90 minutos, con transiciones relativamente suaves entre etapas de sueño profundo (NREM) y sueño activo (REM). Un recién nacido, en cambio, tiene ciclos de apenas 50 a 60 minutos, y pasa cerca del 50% de su tiempo de sueño en sueño activo o REM —comparado con el 20% de un adulto. Este sueño activo es fundamental para el desarrollo neurológico: es cuando el cerebro procesa información, consolida aprendizajes y construye conexiones sinápticas a velocidad extraordinaria. Pero también es un sueño mucho más ligero y susceptible a interrupciones."
      },
      {
        type: "paragraph",
        text: "A medida que el bebé crece, sus ciclos de sueño se alargan gradualmente. La investigadora Jodi A. Mindell, del Children's Hospital of Philadelphia, y sus colegas documentaron en un estudio longitudinal publicado en Sleep cómo los patrones de sueño evolucionan significativamente durante el primer año, con la consolidación nocturna ocurriendo de forma escalonada entre los 3 y los 12 meses. No existe un interruptor que «de repente» haga que el bebé duerma toda la noche: es un proceso madurativo gradual, influenciado tanto por la biología como por el entorno."
      },
      {
        type: "heading",
        text: "¿Qué son las asociaciones de sueño y por qué importan tanto?"
      },
      {
        type: "paragraph",
        text: "Todos los seres humanos, bebés y adultos, nos despertamos brevemente al final de cada ciclo de sueño. La diferencia es que los adultos aprendemos a volver a dormirnos solos, casi sin registrar conscientemente ese momento. Los bebés, en cambio, aprenden a asociar el inicio del sueño con las condiciones que estaban presentes cuando se durmieron originalmente. Si tu bebé se duerme en tus brazos, amamantando, o con el chupón en la boca, cuando despierte al final de cada ciclo buscará exactamente esas mismas condiciones para volver a dormirse. Es completamente lógico desde su perspectiva: él está haciendo lo que le funciona."
      },
      {
        type: "paragraph",
        text: "Mindell et al. (2006) describieron este fenómeno como «trastorno de asociación de inicio de sueño» en su revisión exhaustiva publicada en la revista Sleep, identificándolo como la causa más común de los despertares nocturnos frecuentes en bebés y niños pequeños. No es una patología en el sentido clínico: es simplemente un patrón aprendido. Y los patrones aprendidos pueden ser modificados con paciencia y consistencia."
      },
      {
        type: "heading",
        text: "El papel de los padres y las cogniciones parentales"
      },
      {
        type: "paragraph",
        text: "No solo importa lo que hace el bebé: también importa enormemente cómo los padres interpretan y responden a esos despertares. Los investigadores israelíes Liat Tikotzky y Avi Sadeh han dedicado décadas a estudiar exactamente esto. En un estudio longitudinal publicado en Child Development, Tikotzky y Sadeh (2009) demostraron que las cogniciones maternas relacionadas con el sueño —las creencias y preocupaciones que la madre tiene sobre el sueño de su bebé— predicen significativamente la calidad del sueño infantil a lo largo del primer año de vida. Las madres con más ansiedad sobre los despertares nocturnos tienden a responder de forma que refuerzan las asociaciones de sueño. Esto no es una crítica: es información valiosa que nos recuerda que el trabajo en el sueño infantil siempre es un trabajo familiar."
      },
      {
        type: "heading",
        text: "Tips prácticos basados en evidencia para apoyar el sueño"
      },
      {
        type: "list",
        items: [
          "Acuesta a tu bebé somnoliento pero despierto: Esto le da la oportunidad de practicar el inicio del sueño de forma independiente. No es una regla rígida para recién nacidos, pero a partir de los 3-4 meses puede comenzarse a introducir gradualmente.",
          "Establece una rutina de sueño consistente y predecible: La investigación de Mindell et al. (2009) demostró en un ensayo aleatorizado con 405 familias que una rutina nocturna breve (baño, masaje, canción, cuna) redujo significativamente los despertares nocturnos en solo dos semanas.",
          "Observa las ventanas de sueño por edad: Respetar los tiempos de vigilia apropiados evita el sobre-cansancio, que paradójicamente dificulta el inicio del sueño. Un bebé de 3 meses no debería estar despierto más de 60-90 minutos antes de su próxima siesta.",
          "Crea un ambiente de sueño óptimo: La oscuridad total y el ruido blanco constante reducen la susceptibilidad a estímulos externos durante las fases de sueño ligero.",
          "Sé consistente con las respuestas nocturnas: La inconsistencia en cómo respondes a los despertares puede prolongar el período de ajuste. Un plan claro y aplicado con calma es más efectivo que responder diferente cada noche.",
          "Ten expectativas realistas según la edad: Un bebé de 6 semanas que se despierta cada 2-3 horas está dentro de la norma biológica. No es un problema a resolver; es una fase a atravesar con apoyo."
        ]
      },
      {
        type: "paragraph",
        text: "Los despertares nocturnos frecuentes son uno de los retos más universales de la crianza temprana, y también uno de los que más culpa y agotamiento generan. Entender que hay biología sólida detrás de lo que vive tu bebé no elimina el cansancio, pero sí cambia la narrativa: de «mi bebé tiene algo malo» a «mi bebé está haciendo exactamente lo que su cerebro en desarrollo le pide». Desde ahí, con información y acompañamiento, es posible trabajar hacia un descanso mejor para toda la familia, respetando siempre el ritmo y las necesidades únicas de tu bebé y las tuyas."
      },
      {
        type: "references",
        items: [
          "Mindell, J. A., Kuhn, B., Lewin, D. S., Meltzer, L. J., & Sadeh, A. (2006). Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep, 29(10), 1263–1276. https://doi.org/10.1093/sleep/29.10.1263",
          "Mindell, J. A., Telofski, L. S., Wiegand, B., & Kurtz, E. S. (2009). A nightly bedtime routine: Impact on sleep in young children and maternal mood. Sleep, 32(5), 599–606. https://doi.org/10.1093/sleep/32.5.599",
          "Tikotzky, L., & Sadeh, A. (2009). Maternal sleep-related cognitions and infant sleep: A longitudinal study from pregnancy through the first year. Child Development, 80(3), 860–874. https://doi.org/10.1111/j.1467-8624.2009.01302.x",
          "Sadeh, A., Flint-Ofir, E., Tirosh, T., & Tikotzky, L. (2007). Infant sleep and parental sleep-related cognitions. Journal of Family Psychology, 21(1), 74–87. https://doi.org/10.1037/0893-3200.21.1.74",
          "Sadeh, A., Mindell, J. A., Luedtke, K., & Wiegand, B. (2009). Sleep and sleep ecology in the first 3 years: A web-based study. Journal of Sleep Research, 18(1), 60–73. https://doi.org/10.1111/j.1365-2869.2008.00699.x",
          "Hirshkowitz, M., Whiton, K., Albert, S. M., et al. (2015). National Sleep Foundation's sleep time duration recommendations: Methodology and results summary. Sleep Health, 1(1), 40–43. https://doi.org/10.1016/j.sleh.2014.12.010"
        ]
      }
    ]
  },
  {
    id: "metodo-extincion-gradual-que-dice-la-ciencia",
    title: "El método de extinción gradual: qué dice la ciencia realmente",
    excerpt: "Más allá de los mitos y las polémicas en redes sociales, la evidencia científica tiene mucho que decir sobre el entrenamiento de sueño y sus efectos reales en los bebés.",
    category: "Ciencia del Sueño",
    date: "Mayo 2025",
    readTime: "10 min lectura",
    image: "https://images.unsplash.com/photo-1524808533204-cda7fe65ff05?w=1200&q=80",
    content: [
      {
        type: "intro",
        text: "Pocas decisiones en la crianza generan tanta controversia como el «sleep training» o entrenamiento de sueño. En un extremo, hay quienes lo presentan como la solución definitiva al agotamiento familiar; en el otro, quienes lo describen como un acto traumatizante que dañará el apego de tu hijo para siempre. La realidad, como suele ocurrir en la ciencia, es bastante más matizada y más tranquilizadora que cualquiera de esos extremos."
      },
      {
        type: "intro",
        text: "En Bedtime Journey creemos que las familias merecen información honesta, no dogmas. Por eso revisamos directamente qué dice la investigación sobre los principales métodos de entrenamiento de sueño: sus beneficios demostrados, sus limitaciones reales, los mitos sobre cortisol y apego que circulan en internet, y las alternativas más respetuosas para familias que prefieren un camino distinto."
      },
      {
        type: "heading",
        text: "Los métodos principales: de la extinción completa al fading gradual"
      },
      {
        type: "paragraph",
        text: "Los métodos conductuales de sueño se ubican en un espectro según el nivel de intervención parental que implican. En un extremo está la extinción completa (también llamada «cry it out»): los padres colocan al bebé en la cuna despierto y no responden a su llanto hasta la mañana siguiente. Es el método con más detractores, aunque también con décadas de evidencia de efectividad en cuanto a reducción de despertares."
      },
      {
        type: "paragraph",
        text: "En el punto medio se encuentra la extinción gradual, popularizada por el pediatra Richard Ferber en su libro «Solve Your Child's Sleep Problems» (1985, revisado en 2006). El método consiste en intervalos de espera progresivamente más largos antes de hacer visitas breves de reconfort al bebé, sin tomarlo en brazos. En el otro extremo del espectro están el «bedtime fading» y métodos sin llanto como el de Elizabeth Pantley, que implican retiro muy gradual de las asociaciones de sueño existentes."
      },
      {
        type: "heading",
        text: "Lo que encontró la ciencia: el estudio de Gradisar y colegas (2016)"
      },
      {
        type: "paragraph",
        text: "El ensayo clínico aleatorizado más citado sobre este tema fue publicado en 2016 en la revista Pediatrics por Michael Gradisar y colaboradores de la Universidad Flinders de Australia. El estudio asignó aleatoriamente a 43 bebés de 6 a 16 meses a tres grupos: extinción gradual (Ferber), bedtime fading, y un grupo control de educación sobre sueño. Los resultados fueron claros en varios frentes cruciales."
      },
      {
        type: "paragraph",
        text: "En cuanto a efectividad: tanto la extinción gradual como el bedtime fading produjeron reducciones significativas en los despertares nocturnos. En cuanto al estrés fisiológico: los niveles de cortisol salival de los bebés mostraron disminuciones pequeñas a moderadas en los grupos de intervención —no hubo elevación sostenida, contrariamente a lo que con frecuencia se afirma en redes sociales. Y el hallazgo quizás más tranquilizador: en el seguimiento a los 12 meses, no se encontraron diferencias en el apego seguro ni en los problemas emocionales o conductuales de los niños."
      },
      {
        type: "heading",
        text: "El debate sobre el cortisol: contexto y matices imprescindibles"
      },
      {
        type: "paragraph",
        text: "El estudio que más ha alimentado el temor al sleep training fue publicado por Wendy Middlemiss y colegas en 2012 en la revista Early Human Development. Middlemiss et al. documentaron que los bebés dejaban de llorar al tercer día de extinción completa pero sus niveles de cortisol seguían siendo elevados, mientras que los de sus madres disminuían. Esta «asincronía» entre comportamiento y fisiología fue interpretada por muchos como evidencia de que los bebés aprendían a «resignarse»."
      },
      {
        type: "paragraph",
        text: "Es un estudio importante que merece ser tomado en serio. Pero también tiene limitaciones significativas: muestra pequeña (25 bebés), entorno artificial hospitalario, uso de extinción completa (no gradual), y ausencia de seguimiento longitudinal. Los hallazgos de Gradisar et al. (2016), con diseño más robusto y seguimiento a un año, apuntan en una dirección más tranquilizadora. El estudio de seguimiento a 5 años de Price et al. (2012) en Pediatrics también encontró que a los 6 años no había diferencias en salud mental, desarrollo ni calidad del vínculo padre-hijo entre quienes recibieron intervención conductual de sueño y quienes no."
      },
      {
        type: "heading",
        text: "¿Qué método es el correcto para tu familia?"
      },
      {
        type: "list",
        items: [
          "Extinción gradual (Ferber): Efectiva, bien estudiada, produce resultados en 3-7 días. Implica escuchar llanto con intervalos de reconfort. Apropiada a partir de los 5-6 meses con bebé sano.",
          "Bedtime fading: Ajusta la hora de dormir para que coincida con la señal biológica de sueño del bebé. Menos llanto que extinción. Puede tardar más semanas.",
          "Métodos graduales sin llanto (Pantley, Chair Method): Mayor proceso, menor angustia parental a corto plazo. Requieren más semanas y alta consistencia.",
          "Plan de Hall (2015): Un ensayo canadiense mostró que incluso una sesión de psicoeducación de 2 horas sobre sueño infantil redujo significativamente los problemas de sueño. La educación sola puede ser poderosa.",
          "Cualquier método requiere consistencia: el mayor predictor de éxito no es qué método eliges, sino cuán consistentemente lo aplicas."
        ]
      },
      {
        type: "paragraph",
        text: "La decisión de hacer o no sleep training, y de qué forma, es completamente tuya. Lo que la ciencia sí nos dice claramente es esto: no hay evidencia de que el sleep training bien aplicado dañe el apego ni cause problemas emocionales a largo plazo. Y también nos dice que el agotamiento crónico parental tiene consecuencias documentadas en el bienestar familiar y la salud mental materna. Ninguna de las dos realidades debe ser ignorada cuando tomas esta decisión."
      },
      {
        type: "references",
        items: [
          "Gradisar, M., Jackson, K., Spurrier, N. J., Gibson, J., Whitham, J., Williams, A. S., Dolby, R., & Kennaway, D. J. (2016). Behavioral interventions for infant sleep problems: A randomized controlled trial. Pediatrics, 137(6), e20151486. https://doi.org/10.1542/peds.2015-1486",
          "Middlemiss, W., Granger, D. A., Goldberg, W. A., & Nathans, L. (2012). Asynchrony of mother–infant hypothalamic–pituitary–adrenal axis activity following extinction of infant crying responses induced during the transition to sleep. Early Human Development, 88(4), 227–232. https://doi.org/10.1016/j.earlhumdev.2011.08.010",
          "Price, A. M. H., Wake, M., Ukoumunne, O. C., & Hiscock, H. (2012). Five-year follow-up of harms and benefits of behavioral infant sleep intervention: Randomized trial. Pediatrics, 130(4), 643–651. https://doi.org/10.1542/peds.2011-3467",
          "Hall, W. A., Hutton, E., Brant, R. F., Collet, J. P., Gregg, K., Biro, S., et al. (2015). A randomized controlled trial of an intervention for infants' behavioral sleep problems. BMC Pediatrics, 15(1), 181. https://doi.org/10.1186/s12887-015-0492-7",
          "Mindell, J. A., Kuhn, B., Lewin, D. S., Meltzer, L. J., & Sadeh, A. (2006). Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep, 29(10), 1263–1276. https://doi.org/10.1093/sleep/29.10.1263",
          "Tikotzky, L., & Sadeh, A. (2009). Maternal sleep-related cognitions and infant sleep: A longitudinal study from pregnancy through the first year. Child Development, 80(3), 860–874. https://doi.org/10.1111/j.1467-8624.2009.01302.x"
        ]
      }
    ]
  },
  {
    id: "rutinas-de-sueno-bebes-0-5-anos-guia-completa",
    title: "Rutinas de sueño para bebés de 0 a 5 años: la guía completa por edad",
    excerpt: "Cada etapa del desarrollo tiene sus propias necesidades de sueño, señales de cansancio y estructuras de rutina. Aquí encontrarás todo lo que necesitas saber, organizado por edad.",
    category: "Guías Prácticas",
    date: "Abril 2025",
    readTime: "12 min lectura",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=1200&q=80",
    content: [
      {
        type: "intro",
        text: "Una de las preguntas más frecuentes que recibimos en Bedtime Journey es: «¿cuánto debería dormir mi hijo y cuándo debería ser su rutina?». La respuesta cambia significativamente con cada etapa del desarrollo. Las necesidades de sueño de un recién nacido no tienen nada que ver con las de un bebé de 8 meses, y estas a su vez son completamente distintas a las de un niño de 3 años. Entender estas diferencias es fundamental para crear expectativas realistas y rutinas que realmente funcionen."
      },
      {
        type: "intro",
        text: "Esta guía fue construida sobre las recomendaciones de la Academia Americana de Medicina del Sueño (AASM), avaladas por la Academia Americana de Pediatría (AAP) en 2016, y complementada con la investigación de referencia en sueño infantil. Te acompañamos a navegar cada etapa con claridad práctica y sin agobio."
      },
      {
        type: "heading",
        text: "Recién nacidos (0-3 meses): sin rutinas fijas, pero con ritmo"
      },
      {
        type: "paragraph",
        text: "Los recién nacidos necesitan entre 14 y 17 horas de sueño en 24 horas, distribuidas en múltiples períodos cortos de 2 a 4 horas. Su ritmo circadiano aún no está desarrollado: el núcleo supraquiasmático del hipotálamo, que regula el ciclo sueño-vigilia, necesita meses de exposición a luz natural y señales sociales para sincronizarse. Esto significa que, por diseño biológico, los recién nacidos no distinguen entre día y noche. Intentar imponer una rutina rígida en esta etapa va en contra de la fisiología y genera frustración innecesaria."
      },
      {
        type: "list",
        items: [
          "Horas de sueño recomendadas: 14-17 horas en 24 horas (NSF, 2015).",
          "Ventana de vigilia: 45-60 minutos entre ciclos de sueño.",
          "Señales de cansancio: mirada perdida, parpadeo lento, desconexión del entorno, llanto de agotamiento distinto al de hambre.",
          "Foco de la rutina: consistencia en la secuencia, no en el horario. El horario vendrá solo con la maduración circadiana.",
          "Entorno ideal: oscuridad, temperatura fresca (18-20°C), ruido blanco constante.",
          "Expectativa realista: los despertares nocturnos de 2-4 horas son completamente normales. No hay nada que «entrenar» en esta etapa."
        ]
      },
      {
        type: "heading",
        text: "Bebés de 3 a 6 meses: el gran salto en la organización del sueño"
      },
      {
        type: "paragraph",
        text: "Entre los 3 y los 6 meses ocurre una de las transiciones más importantes en el sueño infantil. El ritmo circadiano comienza a consolidarse, la melatonina empieza a secretarse de forma más predecible, y los ciclos de sueño NREM/REM se van diferenciando. Muchos bebés en esta etapa comienzan a dormir un período nocturno más largo (4-6 horas seguidas), aunque esto varía enormemente de un bebé a otro y no es universal."
      },
      {
        type: "list",
        items: [
          "Horas de sueño recomendadas: 12-16 horas en 24 horas (incluyendo siestas).",
          "Número de siestas: 3-4 siestas al día, reduciéndose a 3 hacia los 6 meses.",
          "Ventana de vigilia: 1.5-2 horas entre períodos de sueño.",
          "Horario orientativo: sueño nocturno entre las 7:00 y las 8:30 p.m.",
          "Rutina sugerida: baño tibio → masaje → pijama → canción o cuento breve → lactancia o biberón → cuna somnoliento pero despierto.",
          "Señales de cansancio: bostezo, frotarse los ojos, pérdida de interés en juguetes, mayor irritabilidad."
        ]
      },
      {
        type: "heading",
        text: "Bebés de 6 a 12 meses: consolidación y trabajo en las asociaciones"
      },
      {
        type: "paragraph",
        text: "Los bebés de 6 a 12 meses necesitan entre 12 y 16 horas de sueño en 24 horas, con 2-3 siestas que se irán reduciendo a 2 hacia los 8-9 meses. La investigación de Sadeh, Mindell y colegas (2009) mostró que a esta edad los bebés ya tienen la madurez neurológica suficiente para aprender a iniciar el sueño de forma más independiente si se les da la oportunidad y el apoyo adecuado. No significa que sea obligatorio ni que todos deban hacerlo al mismo tiempo: significa que si tu familia está sufriendo por falta de sueño, hay herramientas disponibles y apropiadas para esta etapa."
      },
      {
        type: "list",
        items: [
          "Horas de sueño recomendadas: 12-16 horas en 24 horas.",
          "Siestas: 2 siestas hacia los 9-12 meses. La transición de 3 a 2 siestas suele ocurrir entre los 6-9 meses.",
          "Hora de dormir: entre las 6:30 y las 8:00 p.m. Los bebés de esta edad tienen una ventana circadiana temprana.",
          "Rutina: 20-30 minutos. Puede incluir baño, masaje, lectura de un cuento breve, canción. La consistencia del orden importa más que los elementos.",
          "Trabajo en asociaciones: si deseas trabajar en autonomía de sueño, esta etapa es apropiada para comenzar de forma gradual."
        ]
      },
      {
        type: "heading",
        text: "Niños de 1 a 5 años: transiciones, resistencia y rutinas que protegen"
      },
      {
        type: "paragraph",
        text: "Los toddlers de 1 a 2 años necesitan entre 11 y 14 horas de sueño en 24 horas, incluyendo la siesta. Los preescolares de 3 a 5 años necesitan entre 10 y 13 horas. Una de las transiciones más desafiantes es el abandono de la siesta, que generalmente ocurre entre los 3 y los 5 años. Forzar su eliminación antes de que el niño esté listo puede resultar en sobre-cansancio que dificulta el sueño nocturno."
      },
      {
        type: "list",
        items: [
          "Toddlers (1-2 años): 11-14 horas totales. Hora de dormir: 7:00-8:30 p.m.",
          "Preescolares (3-5 años): 10-13 horas totales. Siesta opcional. Hora de dormir: 7:00-8:30 p.m.",
          "Rutina para toddlers y preescolares: 30-45 minutos. Puede incluir baño, pijama, cepillado de dientes, 1-2 cuentos, canción.",
          "Estrategia para la resistencia: dar opciones controladas («¿quieres el cuento del oso o el de la luna?») aumenta la sensación de autonomía sin abrir la puerta a negociaciones infinitas.",
          "Transición de siesta: cuando el niño empieza a resistir la siesta, considerar un «tiempo tranquilo» aunque no duerma."
        ]
      },
      {
        type: "paragraph",
        text: "Cada etapa del sueño infantil es una fase, no un estado permanente. Lo que funciona a los 4 meses necesitará ajustarse a los 8, y lo de los 8 meses volverá a cambiar al año. La rutina de sueño más efectiva no es la más perfecta: es la que tu familia puede sostener con consistencia, amor y una dosis razonable de flexibilidad. En Bedtime Journey estamos aquí para acompañarte en cada uno de esos ajustes."
      },
      {
        type: "references",
        items: [
          "Paruthi, S., Brooks, L. J., D'Ambrosio, C., Hall, W. A., Kotagal, S., Lloyd, R. M., et al. (2016). Consensus statement of the American Academy of Sleep Medicine on the recommended amount of sleep for healthy children. Journal of Clinical Sleep Medicine, 12(11), 1549–1561. https://doi.org/10.5664/jcsm.6288",
          "Hirshkowitz, M., Whiton, K., Albert, S. M., et al. (2015). National Sleep Foundation's sleep time duration recommendations. Sleep Health, 1(1), 40–43. https://doi.org/10.1016/j.sleh.2014.12.010",
          "Mindell, J. A., Telofski, L. S., Wiegand, B., & Kurtz, E. S. (2009). A nightly bedtime routine: Impact on sleep in young children and maternal mood. Sleep, 32(5), 599–606. https://doi.org/10.1093/sleep/32.5.599",
          "Mindell, J. A., Kuhn, B., Lewin, D. S., Meltzer, L. J., & Sadeh, A. (2006). Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep, 29(10), 1263–1276. https://doi.org/10.1093/sleep/29.10.1263",
          "Sadeh, A., Mindell, J. A., Luedtke, K., & Wiegand, B. (2009). Sleep and sleep ecology in the first 3 years: A web-based study. Journal of Sleep Research, 18(1), 60–73. https://doi.org/10.1111/j.1365-2869.2008.00699.x",
          "Mindell, J. A., & Williamson, A. A. (2018). Benefits of a bedtime routine in young children: Sleep, development, and beyond. Sleep Medicine Reviews, 40, 93–108. https://doi.org/10.1016/j.smrv.2017.10.007"
        ]
      }
    ]
  }
];
