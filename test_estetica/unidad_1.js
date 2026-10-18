const preguntas = [
    // ==========================================
    // GRADO MEDIO - ANATOMÍA Y FISIOLOGÍA
    // ==========================================

    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Cuál es la capa más externa de la piel?",
        opciones: ["La epidermis", "La dermis", "La hipodermis", "El tejido subcutáneo muscular"],
        correcta: 0,
        explicacion: "La epidermis es la capa más externa de la piel."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿En qué capa de la piel se encuentran principalmente los vasos sanguíneos?",
        opciones: ["En la epidermis córnea", "En la dermis", "En la superficie de la uña", "En la cutícula"],
        correcta: 1,
        explicacion: "La dermis contiene vasos sanguíneos que contribuyen a nutrir los tejidos cutáneos."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Qué células producen la melanina?",
        opciones: ["Los fibroblastos", "Los queratinocitos exclusivamente", "Los melanocitos", "Los adipocitos"],
        correcta: 2,
        explicacion: "Los melanocitos producen melanina, el pigmento que contribuye al color de la piel y el pelo."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Qué proteína contribuye a la resistencia de la dermis?",
        opciones: ["La melanina", "La insulina", "La queratina de la uña", "El colágeno"],
        correcta: 3,
        explicacion: "El colágeno aporta resistencia estructural a la dermis."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Qué estructura produce el sebo?",
        opciones: ["La glándula sebácea", "La glándula sudorípara", "El melanocito", "La matriz ungueal"],
        correcta: 0,
        explicacion: "Las glándulas sebáceas producen sebo, una sustancia grasa que contribuye a lubricar la piel y el pelo."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Qué estructura participa en el crecimiento de las uñas?",
        opciones: ["El folículo piloso", "La matriz ungueal", "La glándula sudorípara", "La glándula sebácea"],
        correcta: 1,
        explicacion: "La matriz ungueal contiene células que participan en la formación de la lámina ungueal."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Cuál es la función principal de las glándulas sudoríparas ecrinas?",
        opciones: ["Producir melanina", "Formar la lámina ungueal", "Producir sudor y contribuir a regular la temperatura", "Producir colágeno"],
        correcta: 2,
        explicacion: "El sudor ecrino contribuye a la termorregulación mediante su evaporación."
    },
    {
        categoria: "Anatomía",
        nivel: "Grado Medio",
        pregunta: "¿Qué función tiene principalmente la hipodermis?",
        opciones: ["Producir el esmalte de las uñas", "Formar la capa córnea", "Producir melanina", "Almacenar grasa y amortiguar impactos"],
        correcta: 3,
        explicacion: "La hipodermis contiene cantidades variables de tejido adiposo y ayuda al aislamiento y la amortiguación."
    },

    // ==========================================
    // GRADO MEDIO - TIPOS Y ALTERACIONES DE LA PIEL
    // ==========================================

    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué característica es habitual en una piel grasa?",
        opciones: ["Exceso de sebo y brillo", "Ausencia total de poros", "Falta completa de glándulas sebáceas", "Imposibilidad de presentar comedones"],
        correcta: 0,
        explicacion: "La piel grasa suele presentar mayor producción de sebo y brillo, especialmente en determinadas zonas."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué puede indicar que una piel está deshidratada?",
        opciones: ["Que carece por completo de lípidos", "Que presenta falta de agua", "Que no tiene epidermis", "Que no puede producir sudor"],
        correcta: 1,
        explicacion: "La deshidratación cutánea está relacionada con una cantidad insuficiente de agua en la piel."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué caracteriza habitualmente a una piel mixta?",
        opciones: ["La ausencia de sebo en toda la cara", "La misma sequedad en todas las zonas", "Mayor presencia de grasa en unas zonas que en otras", "La ausencia de poros visibles"],
        correcta: 2,
        explicacion: "La piel mixta puede presentar más grasa en la zona T y características diferentes en las mejillas."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué son los comedones?",
        opciones: ["Vasos sanguíneos superficiales", "Fibras de colágeno", "Glándulas sudoríparas inflamadas en todos los casos", "Obstrucciones de los folículos pilosebáceos"],
        correcta: 3,
        explicacion: "Los comedones son obstrucciones foliculares y pueden ser abiertos o cerrados."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué actuación es adecuada si se observan lesiones cutáneas sospechosas?",
        opciones: ["Evitar manipularlas y recomendar valoración sanitaria", "Exfoliarlas intensamente", "Extraerlas con instrumental", "Aplicar cualquier producto sin consultar"],
        correcta: 0,
        explicacion: "El profesional de estética no debe diagnosticar lesiones sospechosas ni realizar procedimientos que puedan agravarlas."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué función cumple la barrera cutánea?",
        opciones: ["Impedir cualquier reacción alérgica", "Ayudar a proteger la piel y limitar la pérdida de agua", "Eliminar permanentemente el vello", "Evitar toda producción de sebo"],
        correcta: 1,
        explicacion: "La barrera cutánea contribuye a proteger frente a agentes externos y a reducir la pérdida de agua."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué medida ayuda a prevenir el daño causado por la radiación ultravioleta?",
        opciones: ["Usar exfoliantes todos los días", "Evitar cualquier producto hidratante", "Utilizar fotoprotección adecuada", "Aplicar perfume antes de tomar el sol"],
        correcta: 2,
        explicacion: "La fotoprotección incluye el uso adecuado de protector solar y otras medidas, como buscar sombra y utilizar ropa protectora."
    },
    {
        categoria: "Piel",
        nivel: "Grado Medio",
        pregunta: "¿Qué se debe hacer ante una reacción intensa durante un tratamiento facial?",
        opciones: ["Continuar para terminar el protocolo", "Aumentar la cantidad de producto", "Aplicar otro cosmético sin comprobar su compatibilidad", "Interrumpir el tratamiento y actuar según el protocolo de seguridad"],
        correcta: 3,
        explicacion: "La seguridad del cliente es prioritaria. Se debe detener el procedimiento y valorar si necesita asistencia sanitaria."
    },

    // ==========================================
    // GRADO MEDIO - HIGIENE Y SEGURIDAD
    // ==========================================

    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Cuál es el objetivo principal de la limpieza del instrumental?",
        opciones: ["Eliminar suciedad y residuos", "Garantizar por sí sola la esterilización", "Cambiar el color del material", "Perfumar las herramientas"],
        correcta: 0,
        explicacion: "La limpieza elimina residuos y facilita que los procesos posteriores de desinfección o esterilización sean eficaces."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Qué diferencia hay entre desinfección y esterilización?",
        opciones: ["Son exactamente el mismo procedimiento", "La esterilización validada elimina todas las formas viables de microorganismos, incluidas las esporas", "La desinfección siempre elimina todas las esporas", "La esterilización solo elimina la suciedad visible"],
        correcta: 1,
        explicacion: "La esterilización validada busca eliminar todas las formas viables de microorganismos, incluidas las esporas."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Cuándo debe realizarse la higiene de manos en un servicio estético?",
        opciones: ["Solo al comenzar la jornada", "Únicamente cuando las manos parecen sucias", "En los momentos indicados por el protocolo de higiene", "Solo después de limpiar el local"],
        correcta: 2,
        explicacion: "La higiene de manos debe realizarse en los momentos establecidos para reducir el riesgo de transmisión de microorganismos."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Qué debe hacerse con unos guantes desechables después de atender a un cliente?",
        opciones: ["Guardarlos para otra persona", "Limpiarlos con una toalla y reutilizarlos", "Dejarlos sobre la mesa de trabajo", "Desecharlos correctamente y realizar higiene de manos"],
        correcta: 3,
        explicacion: "Los guantes desechables no deben reutilizarse entre clientes."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Para qué sirve la ficha de cliente antes de un tratamiento?",
        opciones: ["Recoger información relevante, antecedentes y posibles contraindicaciones", "Evitar preguntar por alergias", "Garantizar un resultado idéntico en todas las personas", "Sustituir las medidas de higiene"],
        correcta: 0,
        explicacion: "La ficha permite adaptar el servicio y detectar circunstancias que podrían hacer desaconsejable un procedimiento."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Qué significa que un tratamiento tenga una contraindicación?",
        opciones: ["Que debe realizarse con más intensidad", "Que puede estar desaconsejado por motivos de seguridad", "Que el producto tiene un aroma intenso", "Que no necesita valoración previa"],
        correcta: 1,
        explicacion: "Las contraindicaciones deben revisarse antes de realizar el tratamiento."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Qué debe hacerse si un instrumento reutilizable puede entrar en contacto con sangre?",
        opciones: ["Limpiarlo superficialmente y guardarlo", "Compartirlo con otro cliente", "Aplicar el protocolo específico de seguridad y reprocesamiento correspondiente", "Sumergirlo siempre en agua sin más medidas"],
        correcta: 2,
        explicacion: "El material debe gestionarse siguiendo las normas aplicables al riesgo y al tipo de instrumento."
    },
    {
        categoria: "Higiene",
        nivel: "Grado Medio",
        pregunta: "¿Por qué es importante mantener ordenada la zona de trabajo?",
        opciones: ["Para evitar tener que limpiar", "Para poder reutilizar material sucio", "Para reducir la ventilación", "Para disminuir riesgos y facilitar una correcta higiene"],
        correcta: 3,
        explicacion: "Una zona ordenada facilita la limpieza y ayuda a prevenir accidentes y contaminaciones."
    },

    // ==========================================
    // GRADO MEDIO - COSMETOLOGÍA
    // ==========================================

    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué expresa el pH de una disolución acuosa?",
        opciones: ["Su grado de acidez o alcalinidad", "Su peso total", "Su cantidad de perfume", "Su fecha de fabricación"],
        correcta: 0,
        explicacion: "El pH permite expresar el grado de acidez o alcalinidad de una disolución acuosa."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué es una emulsión cosmética?",
        opciones: ["Un instrumento para depilar", "Una mezcla de dos líquidos normalmente inmiscibles, como agua y aceite", "Una capa de la epidermis", "Una técnica de masaje"],
        correcta: 1,
        explicacion: "Las emulsiones permiten combinar fases acuosas y oleosas mediante una formulación adecuada."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué función tiene un ingrediente humectante como la glicerina?",
        opciones: ["Esterilizar el cosmético en cualquier circunstancia", "Eliminar permanentemente las manchas", "Ayudar a atraer y retener agua", "Sustituir la higiene facial"],
        correcta: 2,
        explicacion: "La glicerina es un humectante utilizado para ayudar a mantener la hidratación cutánea."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué función cumple un emoliente en un cosmético?",
        opciones: ["Eliminar el folículo piloso", "Producir pigmento en la piel", "Esterilizar las herramientas", "Suavizar la piel y mejorar su tacto"],
        correcta: 3,
        explicacion: "Los emolientes ayudan a suavizar y acondicionar la superficie de la piel."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué información aparece en la lista INCI de un cosmético?",
        opciones: ["Los ingredientes de la formulación mediante una nomenclatura normalizada", "El historial médico de cada cliente", "Los resultados garantizados del tratamiento", "Las instrucciones de todos los aparatos del centro"],
        correcta: 0,
        explicacion: "La lista INCI identifica los ingredientes cosméticos mediante nombres normalizados."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué indica el símbolo PAO de un cosmético?",
        opciones: ["El nivel de hidratación de la piel", "El periodo de uso recomendado después de abrir el envase", "El número de tratamientos que puede realizar un profesional", "La cantidad de perfume que contiene"],
        correcta: 1,
        explicacion: "El PAO suele representarse con un envase abierto y una duración expresada en meses."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Para qué se utilizan los conservantes en muchas formulaciones cosméticas?",
        opciones: ["Para cambiar el tipo de piel", "Para aumentar siempre el perfume", "Para limitar el crecimiento de microorganismos en el producto", "Para garantizar la eliminación de todas las arrugas"],
        correcta: 2,
        explicacion: "Los conservantes contribuyen a proteger la formulación frente al crecimiento microbiano."
    },
    {
        categoria: "Cosmetología",
        nivel: "Grado Medio",
        pregunta: "¿Qué debe hacerse si un cosmético presenta un cambio extraño de olor, color o textura?",
        opciones: ["Añadir agua y seguir utilizándolo", "Mezclarlo con otro producto", "Aplicarlo en una zona más grande", "Dejar de utilizarlo y comprobar su estado y condiciones de conservación"],
        correcta: 3,
        explicacion: "Los cambios anómalos pueden indicar que el producto se ha alterado."
    },

    // ==========================================
    // GRADO MEDIO - MAQUILLAJE
    // ==========================================

    {
        categoria: "Maquillaje",
        nivel: "Grado Medio",
        pregunta: "¿Cuál es la función principal de la base de maquillaje?",
        opciones: ["Unificar visualmente el tono de la piel", "Eliminar permanentemente las manchas", "Desinfectar los poros", "Sustituir todos los cuidados faciales"],
        correcta: 0,
        explicacion: "La base de maquillaje ayuda a conseguir un tono visualmente más uniforme."
    },
    {
        categoria: "Maquillaje",
        nivel: "Grado Medio",
        pregunta: "¿Qué color corrector se utiliza habitualmente para neutralizar visualmente las rojeces?",
        opciones: ["Amarillo", "Verde", "Azul oscuro", "Marrón"],
        correcta: 1,
        explicacion: "El verde puede neutralizar visualmente las rojeces por contraste cromático."
    },
    {
        categoria: "Maquillaje",
        nivel: "Grado Medio",
        pregunta: "¿Para qué se utiliza principalmente el corrector de maquillaje?",
        opciones: ["Para retirar el vello", "Para esterilizar los pinceles", "Para disimular visualmente ojeras y diferencias de tono", "Para tratar infecciones cutáneas"],
        correcta: 2,
        explicacion: "El corrector ayuda a disimular determinadas diferencias de tono."
    },
    {
        categoria: "Maquillaje",
        nivel: "Grado Medio",
        pregunta: "¿Qué finalidad tienen los polvos fijadores?",
        opciones: ["Exfoliar la piel", "Eliminar el esmalte", "Retirar el pelo desde la raíz", "Ayudar a fijar el maquillaje y controlar el brillo"],
        correcta: 3,
        explicacion: "Los polvos fijadores ayudan a mantener el acabado del maquillaje y a controlar el brillo."
    },
    {
        categoria: "Maquillaje",
        nivel: "Grado Medio",
        pregunta: "¿Por qué es importante limpiar los pinceles de maquillaje con regularidad?",
        opciones: ["Para retirar restos de producto y reducir la acumulación de suciedad", "Para cambiar el color natural del pelo del pincel", "Para aumentar la pigmentación de las sombras", "Para evitar tener que limpiar la piel"],
        correcta: 0,
        explicacion: "La limpieza de los pinceles ayuda a mantener la higiene y el buen funcionamiento de las herramientas."
    },

    // ==========================================
    // GRADO MEDIO - DEPILACIÓN
    // ==========================================

    {
        categoria: "Depilación",
        nivel: "Grado Medio",
        pregunta: "¿Qué diferencia habitual existe entre depilación y epilación?",
        opciones: ["Son dos nombres exclusivos para la manicura", "La depilación elimina el pelo visible y la epilación lo extrae desde la raíz", "La epilación solo se realiza en las uñas", "La depilación elimina siempre el folículo de forma permanente"],
        correcta: 1,
        explicacion: "En el uso habitual, la depilación elimina la parte visible del pelo y la epilación lo extrae desde la raíz."
    },
    {
        categoria: "Depilación",
        nivel: "Grado Medio",
        pregunta: "¿Qué se debe comprobar antes de aplicar cera caliente?",
        opciones: ["Que esté lo más caliente posible", "Que la piel tenga heridas", "Que la temperatura sea adecuada y la piel esté en condiciones de recibir el tratamiento", "Que el producto se haya utilizado con otra persona"],
        correcta: 2,
        explicacion: "Comprobar la temperatura y el estado de la piel ayuda a reducir el riesgo de quemaduras e irritaciones."
    },
    {
        categoria: "Depilación",
        nivel: "Grado Medio",
        pregunta: "¿Qué pigmento es el principal objetivo de muchos sistemas de depilación láser?",
        opciones: ["La queratina de la uña", "El colágeno de los huesos", "La hemoglobina exclusivamente", "La melanina del pelo"],
        correcta: 3,
        explicacion: "La melanina absorbe la energía luminosa en muchos sistemas de depilación láser."
    },
    {
        categoria: "Depilación",
        nivel: "Grado Medio",
        pregunta: "¿Qué se debe hacer antes de un tratamiento de fotodepilación?",
        opciones: ["Valorar la piel, los antecedentes y las contraindicaciones, y seguir el protocolo del equipo", "Aplicar el equipo sin consultar nada", "Aumentar siempre la potencia al máximo", "Evitar las medidas de protección ocular"],
        correcta: 0,
        explicacion: "La valoración previa y el cumplimiento del protocolo son esenciales para la seguridad."
    },

    // ==========================================
    // GRADO MEDIO - UÑAS Y MASAJE
    // ==========================================

    {
        categoria: "Uñas",
        nivel: "Grado Medio",
        pregunta: "¿Cuál es la función de una lima de uñas?",
        opciones: ["Producir queratina", "Dar forma y suavizar el borde de la uña", "Eliminar infecciones", "Aumentar la producción de sudor"],
        correcta: 1,
        explicacion: "La lima se utiliza para perfilar y suavizar el borde ungueal."
    },
    {
        categoria: "Uñas",
        nivel: "Grado Medio",
        pregunta: "¿Qué debe hacerse si se sospecha una infección en una uña?",
        opciones: ["Cubrirla siempre con esmalte", "Retirar tejido con instrumental", "Evitar procedimientos que puedan agravarla y recomendar valoración sanitaria", "Compartir las herramientas sin limpiarlas"],
        correcta: 2,
        explicacion: "Una posible infección requiere precaución y puede necesitar valoración sanitaria."
    },
    {
        categoria: "Masaje",
        nivel: "Grado Medio",
        pregunta: "¿Qué caracteriza al effleurage en masaje?",
        opciones: ["La aplicación de esmalte", "El uso de una lima", "La extracción del vello", "Los deslizamientos suaves y continuos de las manos"],
        correcta: 3,
        explicacion: "El effleurage es una maniobra de deslizamiento suave utilizada en masaje."
    },
    {
        categoria: "Masaje",
        nivel: "Grado Medio",
        pregunta: "¿Qué caracteriza al amasamiento?",
        opciones: ["La movilización y compresión de los tejidos blandos con las manos", "La aplicación de maquillaje", "La limadura de la lámina ungueal", "La aplicación de radiación luminosa"],
        correcta: 0,
        explicacion: "El amasamiento moviliza los tejidos blandos mediante maniobras manuales."
    },
    {
        categoria: "Masaje",
        nivel: "Grado Medio",
        pregunta: "¿Qué se debe hacer si el cliente siente dolor durante un masaje?",
        opciones: ["Aumentar la presión para acostumbrarlo", "Detener o adaptar la maniobra y comprobar cómo se encuentra", "Ignorar sus indicaciones", "Continuar siempre hasta terminar el tiempo"],
        correcta: 1,
        explicacion: "El masaje debe adaptarse a la tolerancia de la persona y no debe continuar ignorando el dolor."
    },

    // ==========================================
    // GRADO SUPERIOR - CONOCIMIENTOS AVANZADOS
    // ==========================================

    {
        categoria: "Anatomía avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué función desempeñan los fibroblastos en la dermis?",
        opciones: ["Producir sudor exclusivamente", "Formar la lámina ungueal", "Sintetizar componentes de la matriz extracelular, como el colágeno", "Producir melanina como función principal"],
        correcta: 2,
        explicacion: "Los fibroblastos participan en la síntesis de colágeno y otros componentes de la matriz extracelular."
    },
    {
        categoria: "Anatomía avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué se entiende por microcirculación?",
        opciones: ["El crecimiento de la uña", "La producción de sebo", "La renovación del esmalte", "La circulación de la sangre por vasos pequeños, como los capilares"],
        correcta: 3,
        explicacion: "La microcirculación comprende el flujo sanguíneo en vasos pequeños y participa en el intercambio de sustancias."
    },
    {
        categoria: "Cosmetología avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué propiedad cosmética se asocia al ácido hialurónico tópico?",
        opciones: ["Su capacidad para captar y retener agua", "La esterilización del instrumental", "La eliminación permanente del folículo piloso", "La producción directa de melanina"],
        correcta: 0,
        explicacion: "El ácido hialurónico se utiliza como ingrediente humectante."
    },
    {
        categoria: "Cosmetología avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué función puede tener la niacinamida en una formulación cosmética?",
        opciones: ["Actuar como instrumento de depilación", "Aportar una función cosmética relacionada con el cuidado de la piel", "Sustituir todos los conservantes", "Esterilizar cualquier producto"],
        correcta: 1,
        explicacion: "La niacinamida es una forma de vitamina B3 utilizada en cosméticos para distintas necesidades cutáneas."
    },
    {
        categoria: "Cosmetología avanzada",
        nivel: "Grado Superior",
        pregunta: "¿De qué depende la intensidad de una exfoliación química?",
        opciones: ["Solo del color del envase", "Solo de la edad del cliente", "Del agente utilizado, su concentración, el pH, el tiempo de contacto y el estado de la piel", "Únicamente del tamaño del centro estético"],
        correcta: 2,
        explicacion: "La intensidad depende de varios factores y el procedimiento debe adaptarse a la formulación y a la persona."
    },
    {
        categoria: "Cosmetología avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué se evalúa al estudiar la estabilidad de un cosmético?",
        opciones: ["La preferencia musical del cliente", "La talla del uniforme", "El tamaño del mobiliario", "Si el producto mantiene sus características dentro de las condiciones previstas"],
        correcta: 3,
        explicacion: "La estabilidad considera características físicas, químicas y, cuando corresponde, microbiológicas."
    },
    {
        categoria: "Aparatología",
        nivel: "Grado Superior",
        pregunta: "¿Qué tipo de energía utiliza la radiofrecuencia estética?",
        opciones: ["Energía electromagnética que puede producir calentamiento tisular", "Únicamente energía sonora audible", "Energía procedente de una lima manual", "Exclusivamente luz visible de una lámpara convencional"],
        correcta: 0,
        explicacion: "La radiofrecuencia utiliza energía electromagnética y puede producir calentamiento de los tejidos."
    },
    {
        categoria: "Aparatología",
        nivel: "Grado Superior",
        pregunta: "¿Qué caracteriza a la corriente galvánica?",
        opciones: ["Es una radiación luminosa", "Es una corriente eléctrica continua", "Es una onda sonora", "Es un ingrediente cosmético"],
        correcta: 1,
        explicacion: "La corriente galvánica es una corriente eléctrica continua."
    },
    {
        categoria: "Aparatología",
        nivel: "Grado Superior",
        pregunta: "¿Qué son los ultrasonidos?",
        opciones: ["Un tipo de crema hidratante", "Una corriente eléctrica continua", "Ondas acústicas con una frecuencia superior al límite audible humano", "Una técnica de limado de uñas"],
        correcta: 2,
        explicacion: "Los ultrasonidos son ondas acústicas de frecuencia superior al rango que puede oír una persona."
    },
    {
        categoria: "Aparatología",
        nivel: "Grado Superior",
        pregunta: "¿De qué depende la elección de gafas de protección para un equipo láser?",
        opciones: ["Del color del uniforme", "Del precio de la montura únicamente", "Del tipo de maquillaje que se utilice", "De la longitud de onda y de los requisitos de protección del equipo"],
        correcta: 3,
        explicacion: "La protección ocular debe corresponder a la radiación y al riesgo específico del equipo."
    },
    {
        categoria: "Seguridad avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Qué significa la trazabilidad de un tratamiento estético?",
        opciones: ["Poder registrar y reconstruir la información relevante del procedimiento", "Garantizar que nunca haya reacciones", "Evitar registrar los productos utilizados", "Sustituir el mantenimiento de los equipos"],
        correcta: 0,
        explicacion: "La trazabilidad permite documentar información relevante del tratamiento, como productos, parámetros y actuaciones."
    },
    {
        categoria: "Seguridad avanzada",
        nivel: "Grado Superior",
        pregunta: "¿Para qué sirve el mantenimiento preventivo de un equipo estético?",
        opciones: ["Para aumentar siempre su potencia", "Para reducir fallos y ayudar a conservar unas condiciones de funcionamiento seguras", "Para evitar consultar el manual", "Para modificar sus características sin control"],
        correcta: 1,
        explicacion: "El mantenimiento preventivo debe seguir las instrucciones del fabricante y ayuda a reducir fallos."
    },
    {
        categoria: "Evaluación estética",
        nivel: "Grado Superior",
        pregunta: "¿Por qué deben realizarse fotografías de seguimiento con condiciones comparables?",
        opciones: ["Para cambiar el aspecto real de la piel", "Para garantizar resultados idénticos", "Para facilitar una comparación visual más fiable de la evolución", "Para sustituir la ficha de cliente"],
        correcta: 2,
        explicacion: "Mantener una iluminación, distancia y encuadre comparables facilita la interpretación de los cambios."
    },
    {
        categoria: "Atención profesional",
        nivel: "Grado Superior",
        pregunta: "¿Cómo deben tratarse los datos personales de los clientes?",
        opciones: ["Publicándolos sin autorización", "Compartiendo fotografías libremente", "Guardándolos sin medidas de seguridad", "De forma confidencial y conforme a la normativa aplicable"],
        correcta: 3,
        explicacion: "Los datos personales deben tratarse respetando la normativa y aplicando medidas de protección adecuadas."
    },
    {
        categoria: "Atención profesional",
        nivel: "Grado Superior",
        pregunta: "¿Qué debe hacerse ante una hinchazón repentina e inexplicada?",
        opciones: ["Recomendar valoración sanitaria en lugar de tratarla como un problema exclusivamente estético", "Realizar siempre un masaje intenso", "Aplicar calor extremo", "Ignorar el síntoma"],
        correcta: 0,
        explicacion: "Una hinchazón repentina e inexplicada puede necesitar valoración sanitaria."
    }
];

// Mezcla las opciones sin perder la respuesta correcta.
function mezclarOpciones(opciones) {
    const copia = [...opciones];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

console.log("Preguntas cargadas:", preguntas.length);
console.log(
    "Grado Medio:",
    preguntas.filter(p => p.nivel === "Grado Medio").length
);
console.log(
    "Grado Superior:",
    preguntas.filter(p => p.nivel === "Grado Superior").length
);
