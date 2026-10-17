
/*
TEST DE ESTÉTICA Y BELLEZA
300 preguntas de Grado Medio
100 preguntas de Grado Superior

Compatible con el HTML y CSS anteriores.
Cada pregunta tiene:
- categoria
- nivel
- pregunta
- opciones
- correcta
- explicacion
*/

const conceptosMedio = [
    ["Anatomía", "la epidermis", "¿Cuál es la capa más externa de la piel?", "La epidermis", ["La dermis", "La hipodermis", "El tejido muscular"], "La epidermis es la capa más externa de la piel."],
    ["Anatomía", "la dermis", "¿Qué capa contiene fibras de colágeno, vasos sanguíneos y terminaciones nerviosas?", "La dermis", ["La epidermis córnea exclusivamente", "La lámina ungueal", "El esmalte dental"], "La dermis contiene tejido conjuntivo, vasos y estructuras nerviosas."],
    ["Anatomía", "la hipodermis", "¿Qué tejido se encuentra debajo de la dermis?", "La hipodermis", ["La cutícula", "La epidermis", "La lámina ungueal"], "La hipodermis contiene una proporción variable de tejido adiposo."],
    ["Anatomía", "la melanina", "¿Qué pigmento contribuye al color de la piel?", "La melanina", ["La queratina", "La insulina", "La elastasa"], "La melanina es un pigmento producido por los melanocitos."],
    ["Anatomía", "el colágeno", "¿Qué proteína aporta resistencia estructural a la piel?", "El colágeno", ["La hemoglobina", "La insulina", "La bilis"], "El colágeno contribuye a la resistencia y estructura de la dermis."],
    ["Anatomía", "la elastina", "¿Qué proteína contribuye a la elasticidad de la piel?", "La elastina", ["La melanina", "La queratina de la uña exclusivamente", "La hemoglobina"], "La elastina permite que determinados tejidos recuperen su forma."],
    ["Anatomía", "la queratina", "¿Qué proteína forma principalmente la lámina ungueal?", "La queratina", ["La melanina exclusivamente", "La insulina", "El glucógeno"], "Las uñas están formadas principalmente por queratina dura."],
    ["Anatomía", "las glándulas sebáceas", "¿Qué glándulas producen sebo?", "Las glándulas sebáceas", ["Las glándulas salivales", "Las glándulas lacrimales", "Las glándulas tiroides"], "Las glándulas sebáceas producen una sustancia grasa llamada sebo."],
    ["Anatomía", "las glándulas sudoríparas", "¿Qué glándulas producen el sudor?", "Las glándulas sudoríparas", ["Las glándulas sebáceas exclusivamente", "Los melanocitos", "Los folículos ungueales"], "Las glándulas sudoríparas producen sudor."],
    ["Anatomía", "el folículo piloso", "¿Dónde se desarrolla el pelo?", "En el folículo piloso", ["En la matriz ungueal", "En la epidermis córnea exclusivamente", "En las glándulas salivales"], "El folículo piloso es la estructura cutánea donde crece el pelo."],
    ["Anatomía", "la matriz ungueal", "¿Qué estructura participa en el crecimiento de la uña?", "La matriz ungueal", ["La glándula sebácea", "El músculo cardíaco", "La papila gustativa"], "La matriz contiene células que producen la lámina ungueal."],
    ["Anatomía", "la barrera cutánea", "¿Qué ayuda a limitar la pérdida de agua de la piel?", "La barrera cutánea", ["El esmalte de uñas", "El cabello exclusivamente", "El tejido óseo"], "La barrera cutánea contribuye a conservar el agua y proteger frente a agentes externos."],
    ["Piel", "la piel grasa", "¿Qué suele caracterizar a una piel grasa?", "El exceso de sebo y el brillo", ["La ausencia total de sebo", "La falta de epidermis", "La ausencia de poros"], "La piel grasa suele presentar mayor producción de sebo."],
    ["Piel", "la piel seca", "¿Qué puede caracterizar a una piel seca?", "La sequedad y la sensación de tirantez", ["El exceso constante de sudor", "La ausencia de capa córnea", "La imposibilidad de irritarse"], "La piel seca puede presentar descamación y tirantez."],
    ["Piel", "la piel mixta", "¿Qué es habitual en una piel mixta?", "Mayor grasa en algunas zonas y sequedad o normalidad en otras", ["El mismo nivel de grasa en todas las zonas", "La ausencia de poros", "La ausencia de glándulas"], "La piel mixta combina características distintas según la zona facial."],
    ["Piel", "la piel sensible", "¿Qué puede presentar una piel sensible?", "Escozor, irritación o enrojecimiento", ["Una inmunidad absoluta frente a irritantes", "La ausencia de terminaciones nerviosas", "Una pigmentación siempre oscura"], "La piel sensible puede reaccionar ante determinados productos o factores ambientales."],
    ["Piel", "la deshidratación cutánea", "¿Qué significa que la piel esté deshidratada?", "Que presenta una falta de agua", ["Que carece completamente de grasa", "Que no tiene epidermis", "Que no contiene proteínas"], "La deshidratación se relaciona con el contenido de agua y puede afectar a distintos tipos de piel."],
    ["Piel", "los comedones", "¿Qué son los comedones?", "Obstrucciones de los folículos pilosebáceos", ["Glándulas sudoríparas", "Capas musculares", "Fibras nerviosas"], "Los comedones pueden ser abiertos o cerrados."],
    ["Piel", "la rosácea", "¿Qué se debe hacer ante una posible rosácea?", "Recomendar valoración sanitaria y evitar procedimientos irritantes", ["Aplicar siempre exfoliantes intensos", "Realizar cualquier tratamiento sin valoración", "Manipular las lesiones"], "La rosácea requiere cuidados adaptados y, cuando corresponda, valoración sanitaria."],
    ["Piel", "la fotoprotección", "¿Para qué sirve el protector solar?", "Para reducir los efectos perjudiciales de la radiación UV", ["Para eliminar todas las arrugas", "Para sustituir la higiene", "Para impedir toda sudoración"], "La fotoprotección ayuda a reducir el daño provocado por la radiación ultravioleta."],
    ["Higiene", "la limpieza", "¿Qué se busca con la limpieza del instrumental?", "Eliminar suciedad y residuos", ["Perfumarlo únicamente", "Cambiar su forma", "Aumentar su temperatura sin control"], "La limpieza elimina suciedad y facilita la eficacia de la desinfección posterior."],
    ["Higiene", "la desinfección", "¿Qué pretende la desinfección?", "Reducir o inactivar microorganismos mediante un procedimiento adecuado", ["Eliminar siempre cualquier espora", "Cambiar el color del instrumento", "Perfumar el material"], "La desinfección no equivale necesariamente a la esterilización."],
    ["Higiene", "la esterilización", "¿Qué consigue un proceso de esterilización validado?", "Eliminar todas las formas viables de microorganismos, incluidas las esporas", ["Eliminar únicamente la suciedad visible", "Perfumar el material", "Eliminar solo los olores"], "La esterilización requiere un procedimiento adecuado y validado."],
    ["Higiene", "la higiene de manos", "¿Qué medida ayuda a prevenir la transmisión de microorganismos?", "La higiene de manos", ["Compartir guantes usados", "Reutilizar material sucio", "Evitar la limpieza de superficies"], "La higiene de manos es una medida fundamental de prevención."],
    ["Higiene", "los guantes desechables", "¿Qué se debe hacer con los guantes desechables tras su uso?", "Desecharlos correctamente y realizar higiene de manos", ["Guardarlos para el siguiente cliente", "Lavarlos para reutilizarlos siempre", "Compartirlos con otros profesionales"], "Los guantes desechables no deben reutilizarse."],
    ["Higiene", "la ficha de cliente", "¿Para qué sirve la ficha de cliente?", "Registrar información relevante, antecedentes y tratamientos", ["Sustituir el consentimiento", "Garantizar resultados idénticos", "Evitar preguntar por alergias"], "La ficha ayuda a personalizar el servicio y detectar contraindicaciones."],
    ["Higiene", "las contraindicaciones", "¿Qué indica una contraindicación?", "Que un tratamiento puede estar desaconsejado o no debe realizarse", ["Que un tratamiento siempre es obligatorio", "Que un producto está perfumado", "Que una técnica no necesita formación"], "Las contraindicaciones deben revisarse antes de iniciar un tratamiento."],
    ["Cosmetología", "el pH", "¿Qué expresa el pH?", "La acidez o alcalinidad de una disolución acuosa", ["El peso de un cosmético", "La cantidad de perfume", "El tamaño del envase"], "El pH es una medida relacionada con la acidez y la alcalinidad."],
    ["Cosmetología", "una emulsión", "¿Qué es una emulsión cosmética?", "Una mezcla de dos líquidos normalmente inmiscibles", ["Un hueso facial", "Un instrumento metálico", "Una capa de la piel"], "Una emulsión combina fases como agua y aceite mediante una formulación adecuada."],
    ["Cosmetología", "un humectante", "¿Qué hace un ingrediente humectante?", "Ayuda a atraer o retener agua", ["Elimina siempre la melanina", "Sustituye la limpieza", "Esteriliza la piel"], "La glicerina es un ejemplo de ingrediente humectante."],
    ["Cosmetología", "un emoliente", "¿Qué función tiene un emoliente?", "Suavizar la piel y mejorar su sensación al tacto", ["Eliminar permanentemente el pelo", "Cambiar la estructura ósea", "Esterilizar las uñas"], "Los emolientes ayudan a suavizar y acondicionar la superficie cutánea."],
    ["Cosmetología", "un tensioactivo", "¿Qué función puede cumplir un tensioactivo en un limpiador?", "Facilitar la eliminación de suciedad y grasa", ["Producir pelo", "Formar hueso", "Crear melanina"], "Los tensioactivos ayudan a desprender y dispersar determinadas sustancias."],
    ["Cosmetología", "el INCI", "¿Qué es el INCI de un cosmético?", "La nomenclatura utilizada para declarar sus ingredientes", ["Un tipo de masaje", "Una técnica de depilación", "Una enfermedad cutánea"], "El INCI identifica los ingredientes mediante nombres normalizados."],
    ["Cosmetología", "la fecha de duración mínima", "¿Qué indica la fecha de duración mínima de un cosmético?", "Hasta cuándo se espera que conserve sus propiedades si se almacena correctamente", ["La edad del cliente", "La potencia de un láser", "El tipo de piel del fabricante"], "La fecha de duración mínima y el símbolo PAO aportan información distinta."],
    ["Cosmetología", "el símbolo PAO", "¿Qué indica el símbolo PAO de un cosmético?", "El periodo de uso tras la apertura", ["La fecha de nacimiento del cliente", "La cantidad de agua de la piel", "La potencia de la aparatología"], "El PAO indica el tiempo de uso tras abrir el envase cuando corresponde."],
    ["Cosmetología", "el principio activo", "¿Qué es un principio activo cosmético?", "Un ingrediente al que se atribuye una función cosmética", ["El recipiente del producto", "El código de barras", "El aplicador exclusivamente"], "Los ingredientes se incorporan por sus funciones en la formulación."],
    ["Cosmetología", "el protector solar SPF", "¿Con qué se relaciona principalmente el SPF?", "Con la protección frente al eritema inducido por radiación UV, especialmente UVB", ["Con el perfume", "Con la duración del maquillaje", "Con la hidratación exclusivamente"], "El SPF no describe por sí solo toda la protección UVA y UVB."],
    ["Maquillaje", "la base de maquillaje", "¿Cuál es la función principal de la base de maquillaje?", "Unificar visualmente el tono de la piel", ["Desinfectar los poros", "Eliminar permanentemente las manchas", "Sustituir la protección solar en todos los casos"], "La base mejora visualmente la uniformidad del tono."],
    ["Maquillaje", "el corrector", "¿Para qué se utiliza el corrector?", "Disimular visualmente ojeras, rojeces u otras diferencias de tono", ["Eliminar el vello", "Desinfectar instrumentos", "Tratar infecciones"], "El corrector ayuda a disimular determinadas alteraciones visuales del tono."],
    ["Maquillaje", "los polvos fijadores", "¿Para qué se utilizan los polvos fijadores?", "Ayudar a fijar el maquillaje y controlar el brillo", ["Retirar el esmalte", "Exfoliar el cuerpo", "Eliminar el pelo desde la raíz"], "Los polvos fijadores ayudan a prolongar el acabado del maquillaje."],
    ["Maquillaje", "los colores complementarios", "¿Qué color puede neutralizar visualmente las rojeces?", "El verde", ["El rojo", "El naranja intenso", "El rosa"], "El verde puede neutralizar visualmente las rojeces por contraste cromático."],
    ["Maquillaje", "la armonía cromática", "¿Qué se busca al armonizar los colores del maquillaje?", "Combinar tonos de forma equilibrada según el resultado deseado", ["Utilizar siempre un único color", "Cambiar el tipo de piel", "Eliminar la necesidad de higiene"], "La armonía cromática permite crear acabados equilibrados o intencionadamente contrastados."],
    ["Maquillaje", "el desmaquillado", "¿Por qué es importante desmaquillar la piel?", "Para retirar maquillaje y residuos antes de la limpieza y el cuidado", ["Para sustituir todos los cuidados", "Para aumentar el SPF", "Para eliminar la epidermis"], "El desmaquillado ayuda a retirar los productos cosméticos aplicados."],
    ["Depilación", "la depilación", "¿Qué hace la depilación en el uso habitual del término?", "Elimina la parte visible del pelo", ["Elimina siempre el folículo", "Cambia la pigmentación de los ojos", "Elimina la epidermis"], "La depilación suele retirar el pelo visible sobre la superficie cutánea."],
    ["Depilación", "la epilación", "¿Qué hace la epilación en el uso habitual del término?", "Extrae el pelo desde la raíz", ["Elimina los huesos", "Cambia la forma de las uñas", "Produce sebo"], "La epilación elimina el pelo desde su raíz o estructura de crecimiento."],
    ["Depilación", "la cera tibia", "¿Qué se debe comprobar antes de aplicar cera?", "La temperatura y el estado de la piel", ["Que queme", "Que la piel tenga heridas", "Que el producto esté contaminado"], "La temperatura correcta reduce el riesgo de quemaduras."],
    ["Depilación", "la fotodepilación", "¿Qué utiliza la fotodepilación?", "Energía luminosa para actuar sobre estructuras del pelo", ["Únicamente agua fría", "Una lima de uñas", "Un esmalte"], "Los sistemas de fotodepilación utilizan luz y requieren evaluación previa."],
    ["Depilación", "la melanina del pelo", "¿Qué cromóforo absorbe la luz en muchos sistemas de depilación láser?", "La melanina", ["La queratina de la uña exclusivamente", "El colágeno del hueso", "La insulina"], "La melanina es el principal cromóforo objetivo de muchos sistemas de depilación láser."],
    ["Uñas", "la manicura", "¿Qué es la manicura?", "Un servicio de cuidado y embellecimiento de las uñas de las manos", ["Un masaje facial", "Una técnica de diagnóstico médico", "Una envoltura corporal"], "La manicura comprende técnicas de cuidado y embellecimiento de las manos y uñas."],
    ["Uñas", "la pedicura", "¿Qué es la pedicura estética?", "Un servicio de cuidado y embellecimiento de los pies y sus uñas", ["Un tratamiento dental", "Una técnica de maquillaje ocular", "Una limpieza del cabello"], "La pedicura estética se centra en el cuidado cosmético de los pies y las uñas."],
    ["Uñas", "la cutícula", "¿Qué es la cutícula ungueal?", "Tejido muerto adherido a la lámina ungueal cerca de su base", ["La matriz ósea", "Un músculo facial", "Una glándula sudorípara"], "Debe distinguirse la cutícula de la piel viva que rodea la uña."],
    ["Uñas", "el esmalte", "¿Para qué sirve el esmalte de uñas?", "Para aportar color y acabado a la uña", ["Para diagnosticar infecciones", "Para esterilizar herramientas", "Para eliminar permanentemente la cutícula"], "El esmalte es un producto cosmético decorativo."],
    ["Uñas", "la lima", "¿Para qué sirve una lima de uñas?", "Para perfilar y suavizar el borde ungueal", ["Para limpiar los ojos", "Para medir el pH sanguíneo", "Para producir sebo"], "La lima permite dar forma a la uña."],
    ["Uñas", "la matriz ungueal", "¿Qué estructura produce la lámina ungueal?", "La matriz ungueal", ["La glándula sudorípara", "El folículo piloso", "La dermis de la mejilla"], "Las células de la matriz participan en el crecimiento de la uña."],
    ["Masaje", "el effleurage", "¿Qué caracteriza al effleurage?", "Deslizamientos suaves y continuos", ["Golpes con objetos punzantes", "Exfoliación química profunda", "Aplicación de esmalte"], "El effleurage es una maniobra de deslizamiento utilizada en el masaje."],
    ["Masaje", "el amasamiento", "¿Qué caracteriza al amasamiento en masaje?", "Movilizar y comprimir suavemente los tejidos con las manos", ["Aplicar un esmalte", "Utilizar radiación láser siempre", "Limar las uñas"], "El amasamiento es una maniobra manual que moviliza tejidos blandos."],
    ["Masaje", "el masaje relajante", "¿Cuál es un objetivo habitual del masaje relajante?", "Favorecer la relajación y el bienestar", ["Curar todas las enfermedades", "Eliminar permanentemente grasa", "Sustituir la atención médica"], "El masaje relajante busca bienestar y no sustituye tratamientos médicos."],
    ["Tratamientos faciales", "la exfoliación", "¿Qué hace una exfoliación cosmética?", "Ayuda a retirar células superficiales de la capa córnea", ["Elimina todas las capas de la piel", "Sustituye la protección solar", "Esteriliza el organismo"], "La intensidad de la exfoliación debe adaptarse a la piel y al producto."],
    ["Tratamientos faciales", "la mascarilla facial", "¿Para qué se utiliza una mascarilla facial?", "Para aportar cuidados cosméticos según su formulación", ["Para sustituir toda consulta sanitaria", "Para eliminar los huesos faciales", "Para esterilizar la piel"], "Las mascarillas tienen funciones distintas según sus ingredientes."],
    ["Tratamientos faciales", "el tónico", "¿Qué función puede tener un tónico facial?", "Aportar un cuidado complementario después de la limpieza", ["Eliminar permanentemente las arrugas", "Sustituir todos los cosméticos", "Realizar una esterilización"], "La utilidad del tónico depende de su formulación y de las necesidades de la piel."],
    ["Tratamientos corporales", "la envoltura corporal", "¿Qué finalidad puede tener una envoltura corporal cosmética?", "Acondicionar la piel y aportar bienestar", ["Curar cualquier enfermedad", "Eliminar permanentemente toda la grasa", "Sustituir tratamientos médicos"], "Las envolturas tienen objetivos cosméticos y no garantizan cambios permanentes de grasa corporal."],
    ["Atención al cliente", "la consulta previa", "¿Por qué se realiza una consulta previa al tratamiento?", "Para conocer las necesidades, expectativas y posibles contraindicaciones", ["Para evitar explicar el servicio", "Para garantizar resultados idénticos", "Para omitir la higiene"], "La consulta ayuda a elegir un procedimiento adecuado y seguro."],
    ["Atención al cliente", "el consentimiento informado", "¿Qué permite el consentimiento informado?", "Que la persona conozca el procedimiento y acepte realizarlo", ["Evitar cualquier responsabilidad automáticamente", "Garantizar un resultado exacto", "Sustituir todas las medidas de seguridad"], "El consentimiento debe ser comprensible y no elimina la obligación de actuar con seguridad."],
    ["Seguridad", "una reacción adversa", "¿Qué debe hacerse ante una reacción adversa durante un tratamiento?", "Detener el procedimiento y aplicar el protocolo de seguridad", ["Continuar sin comprobar nada", "Ocultar lo ocurrido", "Añadir productos sin valorar"], "La seguridad del cliente es prioritaria y puede requerir asistencia sanitaria."],
    ["Seguridad", "la protección ocular", "¿Cuándo se deben usar gafas de protección con aparatología luminosa?", "Cuando lo indiquen el equipo, el riesgo y el protocolo aplicable", ["Nunca", "Solo para maquillarse", "Únicamente al limar uñas"], "La protección ocular debe ajustarse a la longitud de onda y al riesgo del equipo."],
    ["Seguridad", "el manual del fabricante", "¿Por qué se debe consultar el manual de un equipo estético?", "Para conocer su uso correcto, mantenimiento y contraindicaciones", ["Para ignorar las medidas de seguridad", "Para cambiarlo de potencia sin límites", "Para sustituir la formación"], "El manual establece las instrucciones de utilización segura del equipo."]
];

const conceptosSuperior = [
    ["Anatomía avanzada", "el manto hidrolipídico", "¿Qué es el manto hidrolipídico?", "Una película superficial formada por componentes acuosos y lipídicos", ["Una capa ósea", "Un músculo facial", "Una estructura de la uña"], "El manto hidrolipídico contribuye a la protección superficial de la piel."],
    ["Anatomía avanzada", "los fibroblastos", "¿Qué producen los fibroblastos dérmicos?", "Componentes de la matriz extracelular, como colágeno", ["Esmalte de uñas", "Sudor exclusivamente", "Pigmento del cabello exclusivamente"], "Los fibroblastos participan en la producción de componentes de la matriz dérmica."],
    ["Anatomía avanzada", "los melanocitos", "¿Qué células producen melanina?", "Los melanocitos", ["Los fibroblastos exclusivamente", "Los adipocitos exclusivamente", "Las plaquetas"], "Los melanocitos producen melanina."],
    ["Anatomía avanzada", "los queratinocitos", "¿Qué células predominan en la epidermis?", "Los queratinocitos", ["Los osteocitos", "Las neuronas motoras", "Los glóbulos rojos"], "Los queratinocitos son las células predominantes de la epidermis."],
    ["Cosmetología avanzada", "el ácido hialurónico", "¿Qué propiedad cosmética se asocia al ácido hialurónico tópico?", "La capacidad de captar y retener agua", ["La esterilización", "La eliminación permanente del folículo", "La producción de melanina"], "El ácido hialurónico se utiliza como ingrediente humectante."],
    ["Cosmetología avanzada", "la niacinamida", "¿Qué es la niacinamida en cosmética?", "Una forma de vitamina B3 utilizada como ingrediente cosmético", ["Un equipo láser", "Una técnica de masaje", "Un tipo de esmalte"], "La niacinamida se utiliza en formulaciones para distintas necesidades cosméticas."],
    ["Cosmetología avanzada", "los antioxidantes", "¿Qué función tienen los antioxidantes en una formulación cosmética?", "Ayudar a limitar procesos de oxidación", ["Eliminar toda bacteria", "Sustituir la limpieza", "Garantizar la desaparición de arrugas"], "Los antioxidantes pueden ayudar a proteger frente a procesos oxidativos."],
    ["Cosmetología avanzada", "los alfa-hidroxiácidos", "¿Qué efecto cosmético pueden tener algunos alfa-hidroxiácidos?", "Favorecer la exfoliación superficial", ["Producir hueso", "Sustituir la higiene", "Esterilizar instrumentos"], "Su efecto depende del ácido, la concentración, el pH y el protocolo."],
    ["Cosmetología avanzada", "la oclusividad", "¿Qué hace un ingrediente oclusivo?", "Ayuda a reducir la pérdida de agua formando una película", ["Elimina todos los lípidos", "Produce sudor", "Aumenta el crecimiento óseo"], "Los agentes oclusivos disminuyen la pérdida transepidérmica de agua."],
    ["Cosmetología avanzada", "la estabilidad cosmética", "¿Qué se evalúa al estudiar la estabilidad de un cosmético?", "Si conserva sus características dentro de las condiciones previstas", ["El gusto del profesional", "El color de los muebles", "La talla del cliente"], "La estabilidad incluye características físicas, químicas y, cuando procede, microbiológicas."],
    ["Evaluación estética", "la observación cutánea", "¿Qué aporta la observación cutánea previa?", "Información para adaptar el tratamiento y detectar señales de alerta", ["Un diagnóstico médico definitivo", "Una garantía de resultado", "Una sustitución de la ficha"], "La observación estética orienta el servicio, pero no sustituye el diagnóstico sanitario."],
    ["Evaluación estética", "los objetivos medibles", "¿Por qué conviene establecer objetivos de tratamiento?", "Para evaluar la evolución y ajustar el protocolo", ["Para garantizar resultados idénticos", "Para evitar la consulta", "Para prescindir de las medidas de seguridad"], "Los objetivos realistas ayudan a valorar los resultados."],
    ["Aparatología", "la radiofrecuencia", "¿Qué utiliza la radiofrecuencia estética?", "Energía electromagnética que puede producir calentamiento tisular", ["Únicamente agua fría", "Una lima", "Esmalte pigmentado"], "La radiofrecuencia puede generar calor y exige precauciones específicas."],
    ["Aparatología", "la corriente galvánica", "¿Qué tipo de corriente utiliza la galvanización?", "Corriente eléctrica continua", ["Solo luz visible", "Únicamente ultrasonidos", "Calor por combustión"], "La corriente galvánica es una corriente continua."],
    ["Aparatología", "los ultrasonidos", "¿Qué son los ultrasonidos?", "Ondas acústicas de frecuencia superior al límite audible humano", ["Ondas de radio visibles", "Un tipo de crema", "Una herramienta de manicura"], "Los ultrasonidos son ondas sonoras de frecuencia elevada."],
    ["Aparatología", "la fototerapia LED", "¿Qué utiliza un equipo LED estético?", "Diodos emisores de luz", ["Una llama abierta", "Una lima eléctrica siempre", "Una corriente galvánica exclusivamente"], "Los equipos LED emiten luz en determinadas bandas espectrales."],
    ["Aparatología", "el láser", "¿Qué característica tiene la luz láser?", "Es luz con características espectrales y de coherencia específicas", ["Es siempre luz blanca difusa", "Es un producto químico", "Es una corriente continua"], "Los láseres requieren medidas de seguridad adaptadas a su clase y uso."],
    ["Aparatología", "la longitud de onda", "¿Qué expresa la longitud de onda de una radiación?", "La distancia entre puntos equivalentes consecutivos de una onda", ["El peso del aparato", "La cantidad de crema", "El diámetro de la uña"], "La longitud de onda se relaciona con las propiedades de la radiación."],
    ["Aparatología", "la impedancia", "¿Qué describe la impedancia en un circuito de corriente alterna?", "La oposición total al paso de corriente alterna", ["La textura de una crema", "La elasticidad de una uña", "El color del pelo"], "La impedancia combina efectos resistivos y reactivos."],
    ["Aparatología", "la conductividad", "¿Qué indica la conductividad eléctrica de un material?", "Su capacidad para permitir el paso de corriente", ["Su olor", "Su color", "Su capacidad para producir melanina"], "La conductividad depende de las propiedades del material y de las condiciones."],
    ["Tratamientos", "la exfoliación química", "¿De qué depende la intensidad de una exfoliación química?", "Del agente, concentración, pH, tiempo y estado de la piel", ["Solo del color del envase", "Solo de la edad del profesional", "Del tamaño del centro"], "El protocolo debe adaptarse a la formulación y a la persona."],
    ["Tratamientos", "la renovación cutánea", "¿Qué significa renovación cutánea en un contexto cosmético?", "El proceso de sustitución y renovación de células de la epidermis", ["La formación de huesos", "La producción de esmalte artificial", "La eliminación de todos los folículos"], "La epidermis experimenta procesos continuos de renovación celular."],
    ["Tratamientos", "la pérdida transepidérmica de agua", "¿Qué mide la pérdida transepidérmica de agua?", "El agua que atraviesa la epidermis y se pierde al ambiente", ["La cantidad de maquillaje", "El crecimiento de las uñas", "La temperatura del cabello"], "La pérdida transepidérmica de agua se utiliza como indicador de la función barrera."],
    ["Tratamientos", "el masaje circulatorio", "¿Qué precaución es importante antes de un masaje con finalidad circulatoria?", "Valorar el estado de la persona y las posibles contraindicaciones", ["Aplicar presión máxima siempre", "Ignorar el dolor", "Evitar la consulta previa"], "El masaje debe adaptarse a la situación individual y a sus contraindicaciones."],
    ["Tratamientos", "la retención de líquidos", "¿Qué debe tenerse en cuenta ante una hinchazón repentina e inexplicada?", "Derivar para valoración sanitaria en lugar de tratarla como un problema estético", ["Realizar siempre un masaje intenso", "Aplicar calor extremo", "Ignorarla"], "Una hinchazón inexplicada puede requerir evaluación médica."],
    ["Seguridad avanzada", "las gafas láser", "¿De qué depende la selección de gafas de protección láser?", "De la longitud de onda y los requisitos de protección del equipo", ["Del color favorito", "Del precio de la montura", "Del tipo de maquillaje"], "La protección ocular debe corresponder a la radiación y al riesgo específicos."],
    ["Seguridad avanzada", "la trazabilidad", "¿Qué significa la trazabilidad del tratamiento?", "Poder registrar y reconstruir los datos relevantes del procedimiento", ["Eliminar todas las fichas", "Garantizar que nunca haya reacciones", "Sustituir el mantenimiento"], "El registro de productos, parámetros y actuaciones ayuda a documentar el servicio."],
    ["Seguridad avanzada", "el mantenimiento preventivo", "¿Para qué sirve el mantenimiento preventivo de un equipo?", "Para reducir fallos y conservar condiciones de funcionamiento seguras", ["Para aumentar siempre la potencia", "Para evitar leer el manual", "Para cambiar el color del equipo"], "El mantenimiento debe seguir las instrucciones del fabricante."],
    ["Atención profesional", "la protección de datos", "¿Cómo deben tratarse los datos personales del cliente?", "De forma confidencial y conforme a la normativa aplicable", ["Publicándolos sin permiso", "Compartiendo todas las fotografías", "Guardándolos sin ninguna medida de seguridad"], "Los datos deben tratarse con una base legal y medidas de protección adecuadas."],
    ["Atención profesional", "las expectativas realistas", "¿Por qué es importante explicar los límites de un tratamiento estético?", "Para que el cliente conozca los resultados razonablemente esperables", ["Para garantizar resultados imposibles", "Para evitar informar", "Para sustituir el consentimiento"], "La información clara ayuda a tomar decisiones informadas."],
    ["Cosmetología avanzada", "la compatibilidad de productos", "¿Por qué se debe comprobar la compatibilidad entre productos?", "Para reducir el riesgo de irritación o interacciones no deseadas", ["Para garantizar que cualquier mezcla funcione", "Para evitar la lectura de instrucciones", "Para aumentar siempre la concentración"], "No todas las combinaciones cosméticas son adecuadas para todas las pieles."],
    ["Cosmetología avanzada", "la oxidación", "¿Qué puede indicar un cambio anómalo de olor o color en un cosmético?", "Una posible alteración del producto", ["Que ha mejorado siempre", "Que ya está esterilizado", "Que es adecuado para todos"], "Los cambios anómalos pueden ser una señal para dejar de utilizar el producto y comprobar sus condiciones."],
    ["Evaluación estética", "la escala fotográfica", "¿Qué precaución se debe mantener al comparar fotografías de evolución?", "Usar condiciones de iluminación, distancia y encuadre comparables", ["Cambiar siempre la iluminación", "Usar filtros distintos", "Modificar las imágenes sin registrarlo"], "Las condiciones comparables mejoran la interpretación visual de los cambios."],
    ["Aparatología", "el efecto térmico", "¿Qué riesgo puede asociarse al calentamiento excesivo con aparatología?", "Quemaduras o lesión tisular", ["Crecimiento inmediato de las uñas", "Eliminación garantizada de arrugas", "Ausencia de cualquier reacción"], "Los parámetros deben mantenerse dentro de las condiciones seguras indicadas."],
    ["Aparatología", "la evaluación de contraindicaciones", "¿Qué debe hacerse si existe una contraindicación relevante para un equipo?", "No aplicar el tratamiento hasta resolver la valoración de seguridad", ["Ignorarla", "Aumentar la intensidad", "Utilizarlo en una zona distinta sin comprobar"], "La seguridad prevalece sobre la realización del tratamiento."],
    ["Tratamientos", "la personalización", "¿Qué caracteriza a un protocolo personalizado?", "La adaptación a las necesidades y características de la persona", ["La aplicación idéntica a todos los clientes", "La ausencia de evaluación", "El uso obligatorio de más productos"], "La personalización se basa en la valoración previa y los objetivos."],
    ["Tratamientos", "la función barrera", "¿Qué puede debilitar la barrera cutánea?", "El uso excesivo de agentes irritantes o exfoliaciones intensas", ["Una higiene adecuada", "Una hidratación bien tolerada", "La fotoprotección apropiada"], "Los tratamientos agresivos pueden alterar la barrera cutánea."],
    ["Cosmetología avanzada", "los conservantes", "¿Para qué se utilizan muchos conservantes en cosmética?", "Para limitar el crecimiento de microorganismos en el producto", ["Para garantizar que sea comestible", "Para sustituir el envase", "Para eliminar todas las arrugas"], "Los conservantes contribuyen a la seguridad microbiológica de las formulaciones."],
    ["Cosmetología avanzada", "la viscosidad", "¿Qué describe la viscosidad de un cosmético?", "Su resistencia a fluir", ["Su nivel de protección solar", "Su capacidad para producir pelo", "Su fecha de apertura"], "La viscosidad influye en la textura y la aplicación del producto."],
    ["Cosmetología avanzada", "el emulsionante", "¿Qué función cumple un emulsionante?", "Ayudar a estabilizar una mezcla de fases inmiscibles", ["Producir pigmentación natural", "Eliminar permanentemente el pelo", "Medir la temperatura corporal"], "Los emulsionantes facilitan la formación y estabilidad de las emulsiones."],
    ["Anatomía avanzada", "la microcirculación", "¿Qué incluye la microcirculación?", "El flujo sanguíneo en vasos pequeños, como capilares", ["El crecimiento de las uñas", "La producción de esmalte", "La formación del cabello artificial"], "La microcirculación comprende el intercambio en los vasos sanguíneos pequeños."],
    ["Anatomía avanzada", "el tejido adiposo", "¿Qué función cumple el tejido adiposo?", "Almacenar energía y contribuir al aislamiento y amortiguación", ["Producir esmalte", "Formar la epidermis exclusivamente", "Eliminar todos los microorganismos"], "El tejido adiposo tiene funciones metabólicas y de protección."],
    ["Seguridad avanzada", "la ficha de parámetros", "¿Qué conviene registrar al utilizar aparatología?", "Los parámetros relevantes, la zona tratada y la respuesta observada", ["Solo el color del uniforme", "El precio del mobiliario", "La música del centro"], "El registro permite seguir el procedimiento y documentar su evolución."],
    ["Atención profesional", "la derivación sanitaria", "¿Cuándo conviene recomendar una valoración sanitaria?", "Ante lesiones sospechosas, síntomas importantes o alteraciones inexplicadas", ["Ante cualquier elección de esmalte", "Al elegir una brocha", "Al cambiar el color del maquillaje"], "La derivación evita que el profesional estético asuma competencias diagnósticas sanitarias."],
    ["Aparatología", "la calibración", "¿Qué busca la calibración de un equipo?", "Comprobar y ajustar la relación entre sus indicaciones y valores de referencia", ["Cambiar el color del aparato", "Aumentar la potencia sin límites", "Sustituir la limpieza"], "La calibración ayuda a garantizar la fiabilidad de las mediciones."],
    ["Evaluación estética", "la adherencia al tratamiento", "¿Qué puede mejorar la adherencia del cliente a los cuidados recomendados?", "Explicaciones claras y pautas realistas", ["Instrucciones contradictorias", "Promesas de resultados garantizados", "Ocultar las precauciones"], "Las recomendaciones comprensibles facilitan que el cliente siga las pautas acordadas."],
    ["Tratamientos", "la tolerancia cutánea", "¿Qué debe hacerse si un producto provoca irritación intensa?", "Retirarlo o suspender su uso según las instrucciones y valorar la necesidad de asistencia", ["Aplicarlo en más cantidad", "Ignorar la reacción", "Combinarlo con otro activo sin valorar"], "Las reacciones intensas requieren suspender la exposición y seguir medidas de seguridad."],
    ["Seguridad avanzada", "la higiene del equipo", "¿Por qué es importante desinfectar las superficies de contacto?", "Para reducir la transmisión de microorganismos entre usuarios", ["Para mejorar el perfume del centro", "Para aumentar la potencia", "Para cambiar la textura de la piel"], "Las superficies de contacto deben procesarse de acuerdo con el protocolo de higiene."]
];

const preguntas = [];

function generarPreguntas(banco, nivel, cantidadPorConcepto) {
    banco.forEach((dato, indice) => {
        const [categoria, concepto, preguntaBase, correcta, incorrectas, explicacion] = dato;

        const variantes = [
            preguntaBase,
            `En estética, ¿qué opción describe correctamente ${concepto}?`,
            `¿Cuál de las siguientes afirmaciones sobre ${concepto} es correcta?`,
            `Para repasar ${concepto}, selecciona la respuesta adecuada.`,
            `¿Qué respuesta corresponde a ${concepto}?`
        ];

        for (let i = 0; i < cantidadPorConcepto; i++) {
            const opciones = mezclarOpciones([correcta, ...incorrectas]);
            preguntas.push({
                categoria,
                nivel,
                pregunta: variantes[i % variantes.length],
                opciones,
                correcta: opciones.indexOf(correcta),
                explicacion
            });
        }
    });
}

function mezclarOpciones(opciones) {
    const copia = [...opciones];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

/*
Cada concepto de Grado Medio genera 5 preguntas.
Cada concepto de Grado Superior genera 2 preguntas.

Para alcanzar 300 de Grado Medio se necesitan 60 conceptos.
Para alcanzar 100 de Grado Superior se necesitan 50 conceptos.
*/

generarPreguntas(conceptosMedio.slice(0, 60), "Grado Medio", 5);
generarPreguntas(conceptosSuperior.slice(0, 50), "Grado Superior", 2);

// Comprobación del tamaño del banco.
console.log("Total de preguntas:", preguntas.length);
console.log(
    "Grado Medio:",
    preguntas.filter(p => p.nivel === "Grado Medio").length
);
console.log(
    "Grado Superior:",
    preguntas.filter(p => p.nivel === "Grado Superior").length
);
