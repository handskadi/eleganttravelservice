import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FaLock, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "https://www.eleganttravelservice.com/privacy" },
  };
}

type Section = { id: string; title: string; content: string };

function getSections(locale: string): Section[] {
  const isAr = locale === "ar";
  const isFr = locale === "fr";
  const isEs = locale === "es";
  const isDe = locale === "de";
  const isIt = locale === "it";

  if (isAr) return [
    { id: "1", title: "من نحن", content: `Elegant Travel Service ("نحن" أو "لنا") هي وكالة سفر مقرها في مراكش، المغرب. عنواننا المسجل هو 12 شارع يوسف بن تاشفين، مراكش 40000.\n\nنشغّل الموقع eleganttravel.ma ومنصة الحجز المرتبطة به. نحن المتحكم في البيانات الشخصية المجمّعة عبر هذا الموقع. تواصل معنا على privacy@eleganttravel.ma لأي استفسارات تتعلق بالبيانات.` },
    { id: "2", title: "البيانات التي نجمعها", content: `نجمع الفئات التالية من البيانات الشخصية:\n\nبيانات الهوية: الاسم، اسم المستخدم، تاريخ الميلاد، الجنسية.\nبيانات الاتصال: البريد الإلكتروني، رقم الهاتف، العنوان البريدي.\nبيانات الحجز: اختيارات الجولة، تواريخ السفر، حجم المجموعة، المتطلبات الخاصة.\nالبيانات المالية: تفاصيل بطاقة الدفع (تُعالج من قبل مزود الدفع الآمن لدينا).\nالبيانات التقنية: عنوان IP، نوع المتصفح، معرّفات الجهاز، ملفات تعريف الارتباط.` },
    { id: "3", title: "كيف نستخدم بياناتك", content: `نستخدم بياناتك الشخصية للأغراض التالية:\n\n• معالجة وإدارة حجوزاتك ومدفوعاتك\n• إرسال تأكيدات الحجز وتفاصيل البرنامج ومعلومات ما قبل الرحلة\n• إرسال رسائل تسويقية (بموافقتك فقط، ويمكنك إلغاء الاشتراك في أي وقت)\n• الرد على الاستفسارات وتقديم دعم العملاء\n• تحسين موقعنا وخدماتنا من خلال التحليلات\n• الامتثال للالتزامات القانونية` },
    { id: "4", title: "مشاركة بياناتك", content: `نشارك بياناتك الشخصية مع أطراف ثالثة فقط عند الضرورة:\n\nمشغّلو الجولات والمرشدون: لتنفيذ تجربتك المحجوزة.\nمزودو الإقامة: نشارك أسماء الضيوف والتواريخ والمتطلبات الخاصة مع الفنادق والرياض.\nمعالجو الدفع: تُعالج بيانات الدفع من قبل شركائنا المعتمدين.\n\nلا نبيع بياناتك الشخصية لأي طرف ثالث.` },
    { id: "5", title: "النقل الدولي للبيانات", content: `بوصفنا شركة مغربية نتعامل مع شركاء دوليين، قد تُنقل بعض بياناتك خارج المغرب. حيثما ننقل البيانات إلى دول لا تتمتع بمستوى مكافئ من حماية البيانات، نضع ضمانات مناسبة لضمان حماية بياناتك.` },
    { id: "6", title: "الاحتفاظ بالبيانات", content: `نحتفظ ببياناتك الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض التي جمعناها من أجلها، بما في ذلك:\n\n• سجلات الحجز: 7 سنوات (التزام قانوني/محاسبي)\n• تفضيلات التسويق: حتى إلغاء اشتراكك أو طلب الحذف\n• بيانات الحساب: طوال مدة حسابك بالإضافة إلى سنتين بعد التوقف عن النشاط\n• سجلات الدفع: 7 سنوات` },
    { id: "7", title: "ملفات تعريف الارتباط", content: `نستخدم أنواع ملفات تعريف الارتباط التالية:\n\nملفات الضروريات: مطلوبة لعمل الموقع ونظام الحجز. لا يمكن تعطيلها.\nملفات التحليلات: تساعدنا على فهم كيفية استخدام الزوار لموقعنا. نجعل عناوين IP مجهولة المصدر.\nملفات التسويق: تُستخدم لتتبع فعالية إعلاناتنا. تُوضع بموافقتك فقط.` },
    { id: "8", title: "حقوقك", content: `بموجب قانون حماية البيانات المعمول به، لديك الحقوق التالية:\n\n• حق الوصول: طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك\n• حق التصحيح: طلب تصحيح بيانات غير دقيقة أو منقوصة\n• حق الحذف: طلب حذف بياناتك في ظروف معينة\n• حق تقييد المعالجة: طلب إيقاف معالجة بياناتك مؤقتاً\n• حق قابلية نقل البيانات: استلام بياناتك بصيغة قابلة للقراءة آلياً\n• حق الاعتراض: الاعتراض على المعالجة بناءً على المصالح المشروعة\n\nلممارسة أي من هذه الحقوق، راسلنا على privacy@eleganttravel.ma. سنرد خلال 30 يوماً.` },
    { id: "9", title: "الأمان", content: `نأخذ أمان بياناتك الشخصية على محمل الجد وننفذ تدابير تقنية وتنظيمية مناسبة لحمايتها من الوصول غير المصرح به أو الفقدان أو الإتلاف.\n\nتشمل هذه التدابير تشفير SSL/TLS وضوابط الوصول والمراجعات الأمنية المنتظمة وتدريب الموظفين.` },
    { id: "10", title: "الاتصال والشكاوى", content: `إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك، يرجى الاتصال بفريق الخصوصية لدينا:\n\nالبريد الإلكتروني: privacy@eleganttravel.ma\nالعنوان: 12 شارع يوسف بن تاشفين، مراكش 40000، المغرب\n\nإذا لم تكن راضياً عن ردنا، يحق لك تقديم شكوى إلى هيئة حماية البيانات المغربية (CNDP).` },
  ];

  if (isFr) return [
    { id: "1", title: "Qui sommes-nous", content: `Elegant Travel Service (« nous ») est une agence de voyage basée à Marrakech, Maroc. Notre siège social est au 12 Rue Youssef Ibn Tachfin, Marrakech 40000.\n\nNous exploitons le site eleganttravel.ma et la plateforme de réservation associée. Contactez-nous à privacy@eleganttravel.ma pour toute question relative aux données.` },
    { id: "2", title: "Données collectées", content: `Nous collectons les catégories de données personnelles suivantes :\n\nDonnées d'identité : Nom, nom d'utilisateur, date de naissance, nationalité.\nCoordonnées : Adresse e-mail, numéro de téléphone, adresse postale.\nDonnées de réservation : Sélections de circuits, dates de voyage, taille du groupe, exigences particulières.\nDonnées financières : Détails de carte bancaire (traités par notre prestataire de paiement sécurisé — nous ne conservons pas les numéros de carte complets).\nDonnées techniques : Adresse IP, type de navigateur, identifiants d'appareils, cookies.` },
    { id: "3", title: "Utilisation de vos données", content: `Nous utilisons vos données personnelles aux fins suivantes :\n\n• Traiter et gérer vos réservations et paiements\n• Communiquer les confirmations de réservation et informations pré-voyage\n• Envoyer des e-mails marketing (avec votre consentement uniquement, résiliable à tout moment)\n• Répondre aux demandes et fournir un service client\n• Améliorer notre site et nos services via des analyses\n• Respecter les obligations légales` },
    { id: "4", title: "Partage de vos données", content: `Nous partageons vos données personnelles avec des tiers uniquement lorsque nécessaire :\n\nOpérateurs et guides : Pour réaliser votre expérience réservée.\nHébergeurs : Nous partageons les noms des clients, les dates et les exigences spéciales avec les hôtels et riads.\nProcesseurs de paiement : Les données de paiement sont traitées par notre partenaire certifié PCI-DSS.\n\nNous ne vendons pas vos données personnelles à des tiers.` },
    { id: "5", title: "Transferts internationaux", content: `En tant que société marocaine travaillant avec des partenaires internationaux, certaines de vos données peuvent être transférées en dehors du Maroc. Nous mettons en place des garanties appropriées pour assurer la protection de vos données.` },
    { id: "6", title: "Conservation des données", content: `Nous conservons vos données personnelles aussi longtemps que nécessaire :\n\n• Dossiers de réservation : 7 ans (obligation légale/comptable)\n• Préférences marketing : Jusqu'à désinscription ou demande d'effacement\n• Données de compte : Durée du compte + 2 ans après inactivité\n• Relevés de paiement : 7 ans` },
    { id: "7", title: "Cookies", content: `Nous utilisons les types de cookies suivants :\n\nCookies strictement nécessaires : Requis pour le fonctionnement du site et du système de réservation.\nCookies analytiques : Nous aident à comprendre comment les visiteurs utilisent notre site.\nCookies marketing : Utilisés pour mesurer l'efficacité de notre publicité. Placés uniquement avec votre consentement.` },
    { id: "8", title: "Vos droits", content: `En vertu de la législation applicable sur la protection des données, vous disposez des droits suivants :\n\n• Droit d'accès\n• Droit de rectification\n• Droit à l'effacement\n• Droit à la limitation du traitement\n• Droit à la portabilité des données\n• Droit d'opposition\n• Droit de retrait du consentement\n\nPour exercer l'un de ces droits, contactez privacy@eleganttravel.ma. Nous répondrons dans les 30 jours.` },
    { id: "9", title: "Sécurité", content: `Nous prenons la sécurité de vos données personnelles au sérieux et mettons en œuvre des mesures techniques et organisationnelles appropriées pour les protéger contre tout accès non autorisé, toute perte ou destruction.\n\nCes mesures comprennent le chiffrement SSL/TLS, des contrôles d'accès, des audits de sécurité réguliers et la formation du personnel.` },
    { id: "10", title: "Contact et réclamations", content: `Pour toute question concernant cette Politique de confidentialité :\n\nE-mail : privacy@eleganttravel.ma\nAdresse : 12 Rue Youssef Ibn Tachfin, Marrakech 40000, Maroc\n\nSi vous n'êtes pas satisfait de notre réponse, vous avez le droit de déposer une réclamation auprès de l'autorité marocaine de protection des données (CNDP).` },
  ];

  if (isEs) return [
    { id: "1", title: "Quiénes somos", content: `Elegant Travel Service somos una agencia de viajes con sede en Marrakech, Marruecos. Nuestra sede registrada está en 12 Rue Youssef Ibn Tachfin, Marrakech 40000.\n\nOperamos el sitio web eleganttravel.ma y la plataforma de reservas asociada. Contáctenos en privacy@eleganttravel.ma para cualquier consulta relacionada con datos.` },
    { id: "2", title: "Datos que recopilamos", content: `Recopilamos las siguientes categorías de datos personales:\n\nDatos de identidad: Nombre, nombre de usuario, fecha de nacimiento, nacionalidad.\nDatos de contacto: Correo electrónico, número de teléfono, dirección postal.\nDatos de reserva: Selecciones de tours, fechas de viaje, tamaño del grupo, requisitos especiales.\nDatos financieros: Detalles de la tarjeta de pago (procesados por nuestro proveedor de pago seguro).\nDatos técnicos: Dirección IP, tipo de navegador, identificadores de dispositivo, cookies.` },
    { id: "3", title: "Cómo usamos sus datos", content: `Utilizamos sus datos personales para los siguientes fines:\n\n• Procesar y gestionar sus reservas y pagos\n• Comunicar confirmaciones de reserva e información previa al viaje\n• Enviar correos de marketing (solo con su consentimiento, puede darse de baja en cualquier momento)\n• Responder a consultas y brindar atención al cliente\n• Mejorar nuestro sitio web y servicio mediante análisis\n• Cumplir con las obligaciones legales` },
    { id: "4", title: "Compartir sus datos", content: `Compartimos sus datos personales con terceros solo cuando es necesario:\n\nOperadores y guías: Para cumplir con su experiencia reservada.\nProveedores de alojamiento: Compartimos nombres de huéspedes, fechas y requisitos especiales con hoteles y riads.\nProcesadores de pago: Los datos de pago son gestionados por nuestro socio certificado PCI-DSS.\n\nNo vendemos sus datos personales a ningún tercero.` },
    { id: "5", title: "Transferencias internacionales", content: `Como empresa marroquí que trabaja con socios internacionales, algunos de sus datos pueden transferirse fuera de Marruecos. Cuando transferimos datos a países sin nivel equivalente de protección de datos, implementamos garantías adecuadas.` },
    { id: "6", title: "Retención de datos", content: `Conservamos sus datos personales durante el tiempo necesario:\n\n• Registros de reservas: 7 años (obligación legal/contable)\n• Preferencias de marketing: Hasta que se dé de baja o solicite la eliminación\n• Datos de cuenta: Duración de la cuenta + 2 años después de inactividad\n• Registros de pago: 7 años` },
    { id: "7", title: "Cookies", content: `Utilizamos los siguientes tipos de cookies:\n\nCookies estrictamente necesarias: Requeridas para el funcionamiento del sitio web y el sistema de reservas.\nCookies analíticas: Nos ayudan a entender cómo los visitantes usan nuestro sitio.\nCookies de marketing: Se usan para rastrear la efectividad de nuestra publicidad. Solo se colocan con su consentimiento.` },
    { id: "8", title: "Sus derechos", content: `Bajo la ley de protección de datos aplicable, tiene los siguientes derechos:\n\n• Derecho de acceso\n• Derecho de rectificación\n• Derecho de supresión\n• Derecho a la limitación del tratamiento\n• Derecho a la portabilidad de datos\n• Derecho de oposición\n• Derecho a retirar el consentimiento\n\nPara ejercer cualquiera de estos derechos, envíe un correo a privacy@eleganttravel.ma. Responderemos en 30 días.` },
    { id: "9", title: "Seguridad", content: `Tomamos la seguridad de sus datos personales en serio e implementamos medidas técnicas y organizativas adecuadas para protegerlos contra acceso no autorizado, pérdida o destrucción.\n\nEstas medidas incluyen cifrado SSL/TLS, controles de acceso, revisiones de seguridad periódicas y formación del personal.` },
    { id: "10", title: "Contacto y reclamaciones", content: `Para preguntas sobre esta Política de Privacidad:\n\nCorreo: privacy@eleganttravel.ma\nDirección: 12 Rue Youssef Ibn Tachfin, Marrakech 40000, Marruecos\n\nSi no está satisfecho con nuestra respuesta, tiene derecho a presentar una reclamación ante la autoridad de protección de datos de Marruecos (CNDP).` },
  ];

  if (isDe) return [
    { id: "1", title: "Wer wir sind", content: `Elegant Travel Service ist ein Reisebüro mit Sitz in Marrakesch, Marokko. Unsere eingetragene Adresse lautet: 12 Rue Youssef Ibn Tachfin, Marrakesch 40000.\n\nWir betreiben die Website eleganttravel.ma und die zugehörige Buchungsplattform. Kontaktieren Sie uns unter privacy@eleganttravel.ma für datenbezogene Anfragen.` },
    { id: "2", title: "Welche Daten wir erheben", content: `Wir erheben folgende Kategorien personenbezogener Daten:\n\nIdentitätsdaten: Name, Benutzername, Geburtsdatum, Staatsangehörigkeit.\nKontaktdaten: E-Mail-Adresse, Telefonnummer, Postanschrift.\nBuchungsdaten: Tourauswahl, Reisedaten, Gruppengröße, besondere Anforderungen.\nFinanzdaten: Zahlungskartendaten (verarbeitet von unserem sicheren Zahlungsdienstleister).\nTechnische Daten: IP-Adresse, Browsertyp, Gerätekennungen, Cookies.` },
    { id: "3", title: "Wie wir Ihre Daten verwenden", content: `Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:\n\n• Bearbeitung und Verwaltung Ihrer Buchungen und Zahlungen\n• Kommunikation von Buchungsbestätigungen und Reiseinformationen\n• Versand von Marketing-E-Mails (nur mit Ihrer Einwilligung, jederzeit kündbar)\n• Beantwortung von Anfragen und Bereitstellung von Kundensupport\n• Verbesserung unserer Website und unseres Dienstes durch Analysen\n• Erfüllung gesetzlicher Pflichten` },
    { id: "4", title: "Weitergabe Ihrer Daten", content: `Wir geben Ihre personenbezogenen Daten nur dann an Dritte weiter, wenn es notwendig ist:\n\nReiseveranstalter und Guides: Zur Durchführung Ihrer gebuchten Erfahrung.\nUnterkunftsanbieter: Wir teilen Gästenamen, Daten und besondere Anforderungen mit Hotels und Riads.\nZahlungsabwickler: Zahlungsdaten werden von unserem PCI-DSS-zertifizierten Zahlungspartner verarbeitet.\n\nWir verkaufen Ihre personenbezogenen Daten nicht.` },
    { id: "5", title: "Internationale Datenübermittlungen", content: `Als marokkanisches Unternehmen, das mit internationalen Partnern zusammenarbeitet, können einige Ihrer Daten außerhalb Marokkos übermittelt werden. Wir stellen geeignete Schutzmaßnahmen sicher.` },
    { id: "6", title: "Datenspeicherung", content: `Wir speichern Ihre personenbezogenen Daten so lange wie nötig:\n\n• Buchungsunterlagen: 7 Jahre (gesetzliche/buchhalterische Pflicht)\n• Marketingpräferenzen: Bis zur Abmeldung oder Löschanforderung\n• Kontodaten: Dauer des Kontos + 2 Jahre nach Inaktivität\n• Zahlungsunterlagen: 7 Jahre` },
    { id: "7", title: "Cookies", content: `Wir verwenden folgende Cookie-Typen:\n\nUnbedingt erforderliche Cookies: Für den Betrieb der Website notwendig.\nAnalytische Cookies: Helfen uns zu verstehen, wie Besucher unsere Website nutzen.\nMarketing-Cookies: Zur Messung der Wirksamkeit unserer Werbung. Nur mit Ihrer Einwilligung gesetzt.` },
    { id: "8", title: "Ihre Rechte", content: `Nach dem geltenden Datenschutzrecht haben Sie folgende Rechte:\n\n• Auskunftsrecht\n• Berichtigungsrecht\n• Löschungsrecht\n• Recht auf Einschränkung der Verarbeitung\n• Datenübertragbarkeit\n• Widerspruchsrecht\n• Recht auf Widerruf der Einwilligung\n\nUm diese Rechte auszuüben, schreiben Sie an privacy@eleganttravel.ma. Wir antworten innerhalb von 30 Tagen.` },
    { id: "9", title: "Sicherheit", content: `Wir nehmen die Sicherheit Ihrer personenbezogenen Daten ernst und implementieren geeignete technische und organisatorische Maßnahmen zum Schutz vor unbefugtem Zugriff, Verlust oder Zerstörung.\n\nDiese Maßnahmen umfassen SSL/TLS-Verschlüsselung, Zugriffskontrollen, regelmäßige Sicherheitsüberprüfungen und Mitarbeiterschulungen.` },
    { id: "10", title: "Kontakt und Beschwerden", content: `Bei Fragen zu dieser Datenschutzrichtlinie:\n\nE-Mail: privacy@eleganttravel.ma\nAdresse: 12 Rue Youssef Ibn Tachfin, Marrakesch 40000, Marokko\n\nWenn Sie mit unserer Antwort nicht zufrieden sind, haben Sie das Recht, eine Beschwerde bei der marokkanischen Datenschutzbehörde (CNDP) einzureichen.` },
  ];

  if (isIt) return [
    { id: "1", title: "Chi siamo", content: `Elegant Travel Service è un'agenzia di viaggi con sede a Marrakech, Marocco. Il nostro ufficio registrato si trova in 12 Rue Youssef Ibn Tachfin, Marrakech 40000.\n\nGestiamo il sito web eleganttravel.ma e la piattaforma di prenotazione associata. Contattaci all'indirizzo privacy@eleganttravel.ma per qualsiasi richiesta relativa ai dati.` },
    { id: "2", title: "Dati che raccogliamo", content: `Raccogliamo le seguenti categorie di dati personali:\n\nDati di identità: Nome, nome utente, data di nascita, nazionalità.\nDati di contatto: Indirizzo email, numero di telefono, indirizzo postale.\nDati di prenotazione: Selezione di tour, date di viaggio, dimensione del gruppo, requisiti speciali.\nDati finanziari: Dettagli della carta di pagamento (elaborati dal nostro fornitore di pagamenti sicuri).\nDati tecnici: Indirizzo IP, tipo di browser, identificatori del dispositivo, cookie.` },
    { id: "3", title: "Come utilizziamo i tuoi dati", content: `Utilizziamo i tuoi dati personali per i seguenti scopi:\n\n• Elaborare e gestire le tue prenotazioni e pagamenti\n• Comunicare conferme di prenotazione e informazioni pre-viaggio\n• Inviare email di marketing (solo con il tuo consenso, puoi annullare in qualsiasi momento)\n• Rispondere alle richieste e fornire assistenza clienti\n• Migliorare il nostro sito web e servizio tramite analisi\n• Adempiere agli obblighi legali` },
    { id: "4", title: "Condivisione dei dati", content: `Condividiamo i tuoi dati personali con terze parti solo quando necessario:\n\nOperatori e guide: Per realizzare la tua esperienza prenotata.\nFornitori di alloggio: Condividiamo nomi degli ospiti, date e requisiti speciali con hotel e riad.\nElaboratori di pagamento: I dati di pagamento sono gestiti dal nostro partner certificato PCI-DSS.\n\nNon vendiamo i tuoi dati personali a terze parti.` },
    { id: "5", title: "Trasferimenti internazionali", content: `Come società marocchina che lavora con partner internazionali, alcuni dei tuoi dati potrebbero essere trasferiti al di fuori del Marocco. Implementiamo garanzie adeguate per garantire la protezione dei tuoi dati.` },
    { id: "6", title: "Conservazione dei dati", content: `Conserviamo i tuoi dati personali per tutto il tempo necessario:\n\n• Registrazioni prenotazioni: 7 anni (obbligo legale/contabile)\n• Preferenze marketing: Fino all'annullamento dell'iscrizione o alla richiesta di cancellazione\n• Dati account: Durata dell'account + 2 anni dopo inattività\n• Registrazioni pagamenti: 7 anni` },
    { id: "7", title: "Cookie", content: `Utilizziamo i seguenti tipi di cookie:\n\nCookie strettamente necessari: Richiesti per il funzionamento del sito web e del sistema di prenotazione.\nCookie analitici: Ci aiutano a capire come i visitatori usano il nostro sito.\nCookie di marketing: Utilizzati per monitorare l'efficacia della nostra pubblicità. Vengono inseriti solo con il tuo consenso.` },
    { id: "8", title: "I tuoi diritti", content: `In base alla normativa applicabile sulla protezione dei dati, hai i seguenti diritti:\n\n• Diritto di accesso\n• Diritto di rettifica\n• Diritto alla cancellazione\n• Diritto alla limitazione del trattamento\n• Diritto alla portabilità dei dati\n• Diritto di opposizione\n• Diritto di revocare il consenso\n\nPer esercitare questi diritti, scrivi a privacy@eleganttravel.ma. Risponderemo entro 30 giorni.` },
    { id: "9", title: "Sicurezza", content: `Prendiamo sul serio la sicurezza dei tuoi dati personali e implementiamo misure tecniche e organizzative adeguate per proteggerli da accessi non autorizzati, perdita o distruzione.` },
    { id: "10", title: "Contatti e reclami", content: `Per domande sulla presente Informativa sulla Privacy:\n\nEmail: privacy@eleganttravel.ma\nIndirizzo: 12 Rue Youssef Ibn Tachfin, Marrakech 40000, Marocco\n\nSe non sei soddisfatto della nostra risposta, hai il diritto di presentare un reclamo all'autorità di protezione dei dati del Marocco (CNDP).` },
  ];

  // English default
  return [
    { id: "1", title: "Who We Are", content: `Elegant Travel Service ("we", "our", "us") is a travel agency based in Marrakech, Morocco. Our registered office is at 12 Rue Youssef Ibn Tachfin, Marrakech 40000.\n\nWe operate the website eleganttravel.ma and associated booking platform. We are the data controller for personal data collected through this site. Contact us at privacy@eleganttravel.ma for any data-related enquiries.` },
    { id: "2", title: "What Data We Collect", content: `We collect the following categories of personal data:\n\nIdentity data: Name, username, date of birth, nationality.\nContact data: Email address, phone number, postal address.\nBooking data: Tour selections, travel dates, group size, special requirements, dietary or medical information you provide.\nFinancial data: Payment card details (processed by our secure payment provider; we do not store full card numbers).\nTechnical data: IP address, browser type, device identifiers, cookies, and usage data.` },
    { id: "3", title: "How We Use Your Data", content: `We use your personal data for the following purposes:\n\n• To process and manage your bookings and payments\n• To communicate booking confirmations, itinerary details, and pre-trip information\n• To send marketing emails (only with your consent, and you can unsubscribe at any time)\n• To respond to enquiries and provide customer support\n• To improve our website and service through analytics\n• To comply with legal obligations` },
    { id: "4", title: "Sharing Your Data", content: `We share your personal data with third parties only where necessary:\n\nTour operators and guides: To fulfil your booked experience.\nAccommodation providers: We share guest names, dates, and special requirements with hotels and riads.\nPayment processors: Payment data is handled by our PCI-DSS certified payment partner.\n\nWe do not sell your personal data to any third party.` },
    { id: "5", title: "International Transfers", content: `As a Moroccan company working with international partners, some of your data may be transferred outside Morocco. Where we transfer data to countries without an equivalent level of data protection, we put in place appropriate safeguards to ensure your data is protected.` },
    { id: "6", title: "Data Retention", content: `We retain your personal data for as long as necessary to fulfil the purposes we collected it for, including:\n\n• Booking records: 7 years (legal/accounting obligation)\n• Marketing preferences: Until you unsubscribe or request erasure\n• Account data: For the duration of your account plus 2 years after inactivity\n• Payment records: 7 years` },
    { id: "7", title: "Cookies", content: `We use the following types of cookies:\n\nStrictly necessary cookies: Required for the website and booking system to function.\nAnalytical cookies: Help us understand how visitors use our site (e.g. Google Analytics). We anonymise IP addresses.\nMarketing cookies: Used to track the effectiveness of our advertising. Only placed with your consent.` },
    { id: "8", title: "Your Rights", content: `Under applicable data protection law, you have the following rights:\n\n• Right of access\n• Right to rectification\n• Right to erasure\n• Right to restrict processing\n• Right to data portability\n• Right to object\n• Right to withdraw consent\n\nTo exercise any of these rights, email privacy@eleganttravel.ma. We will respond within 30 days.` },
    { id: "9", title: "Security", content: `We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, loss, or destruction.\n\nThese measures include SSL/TLS encryption, access controls, regular security reviews, and staff training.` },
    { id: "10", title: "Contact & Complaints", content: `If you have questions about this Privacy Policy or how we handle your data, please contact our Privacy team:\n\nEmail: privacy@eleganttravel.ma\nAddress: 12 Rue Youssef Ibn Tachfin, Marrakech 40000, Morocco\n\nIf you are not satisfied with our response, you have the right to lodge a complaint with the Moroccan data protection authority (CNDP).` },
  ];
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const sections = getSections(locale);
  const isRTL = locale === "ar";

  const labels = {
    badge: isRTL ? "قانوني" : locale === "fr" ? "Juridique" : locale === "es" ? "Legal" : locale === "de" ? "Datenschutz" : locale === "it" ? "Privacy" : "Legal",
    heading: isRTL ? "سياسة الخصوصية" : locale === "fr" ? "Politique de Confidentialité" : locale === "es" ? "Política de Privacidad" : locale === "de" ? "Datenschutzrichtlinie" : locale === "it" ? "Informativa sulla Privacy" : "Privacy Policy",
    subtitle: isRTL ? "كيف نجمع بياناتك الشخصية ونستخدمها ونحميها عند استخدام خدماتنا." : locale === "fr" ? "Comment nous collectons, utilisons et protégeons vos données personnelles." : locale === "es" ? "Cómo recopilamos, usamos y protegemos sus datos personales." : locale === "de" ? "Wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen." : locale === "it" ? "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali." : "How we collect, use, and protect your personal data when you use our services.",
    updated: isRTL ? "آخر تحديث: يونيو 2025" : locale === "fr" ? "Dernière mise à jour : juin 2025" : locale === "es" ? "Última actualización: junio 2025" : locale === "de" ? "Zuletzt aktualisiert: Juni 2025" : locale === "it" ? "Ultimo aggiornamento: giugno 2025" : "Last updated: June 2025",
    trustTitle: isRTL ? "خصوصيتك تهمنا" : locale === "fr" ? "Votre vie privée compte" : locale === "es" ? "Su privacidad importa" : locale === "de" ? "Ihre Privatsphäre ist uns wichtig" : locale === "it" ? "La tua privacy è importante" : "Your Privacy Matters",
    trustBody: isRTL ? "لا نبيع بياناتك. نستخدمها فقط لتقديم خدماتنا وتحسينها. يمكنك طلب حذف بياناتك في أي وقت عبر مراسلتنا على" : locale === "fr" ? "Nous ne vendons pas vos données. Nous les utilisons uniquement pour fournir et améliorer nos services. Vous pouvez demander la suppression de vos données à tout moment en nous contactant à" : locale === "es" ? "No vendemos sus datos. Solo los usamos para brindar y mejorar nuestros servicios. Puede solicitar la eliminación de sus datos en cualquier momento contactándonos en" : locale === "de" ? "Wir verkaufen Ihre Daten nicht. Wir verwenden sie nur, um unsere Dienste bereitzustellen und zu verbessern. Sie können jederzeit die Löschung Ihrer Daten beantragen, indem Sie uns kontaktieren unter" : locale === "it" ? "Non vendiamo i tuoi dati. Li utilizziamo solo per fornire e migliorare i nostri servizi. Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento contattandoci a" : "We do not sell your data. We only use it to provide and improve our services. You can request deletion of your data at any time by contacting us at",
    contents: isRTL ? "المحتويات" : locale === "fr" ? "Sommaire" : locale === "es" ? "Contenido" : locale === "de" ? "Inhalt" : locale === "it" ? "Contenuto" : "Contents",
    questions: isRTL ? "أسئلة؟" : locale === "fr" ? "Des questions ?" : locale === "es" ? "¿Preguntas?" : locale === "de" ? "Fragen?" : locale === "it" ? "Domande?" : "Questions?",
    contactPrivacy: isRTL ? "تواصل مع فريق الخصوصية" : locale === "fr" ? "Contacter notre équipe Privacy" : locale === "es" ? "Contactar a nuestro equipo de privacidad" : locale === "de" ? "Datenschutz-Team kontaktieren" : locale === "it" ? "Contatta il nostro team Privacy" : "Contact our Privacy team",
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">{labels.badge}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{labels.heading}</h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">{labels.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs">
            <FaCalendarAlt className="w-3.5 h-3.5" />
            {labels.updated}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-2xl p-6 flex gap-4 mb-10 text-white">
          <FaLock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm mb-1">{labels.trustTitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {labels.trustBody}{" "}
              <a href="mailto:privacy@eleganttravel.ma" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                <FaEnvelope className="w-3 h-3" /> privacy@eleganttravel.ma
              </a>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
          <h2 className="font-bold text-slate-700 text-sm uppercase tracking-widest mb-3">{labels.contents}</h2>
          <ol className="space-y-1.5">
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#priv-${s.id}`} className="text-sm text-amber-600 hover:text-amber-700 hover:underline">
                  {s.id}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-8">
          {sections.map(s => (
            <section key={s.id} id={`priv-${s.id}`} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-amber-500 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">{s.id}</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-400">
          {labels.questions}{" "}
          <Link href="/contact" className="text-amber-600 hover:underline">{labels.contactPrivacy}</Link>
        </div>
      </div>
    </div>
  );
}
