import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FaShieldAlt, FaCalendarAlt } from "react-icons/fa";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "https://www.eleganttravelservice.com/terms" },
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
    { id: "1", title: "قبول الشروط", content: `من خلال الوصول إلى موقع Elegant Travel Service أو استخدام منصة الحجز ("الخدمة")، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام الخدمة.\n\nتسري هذه الشروط على جميع الزوار والمستخدمين والعملاء الذين يصلون إلى الخدمة أو يستخدمونها. تحتفظ Elegant Travel Service بالحق في تحديث هذه الشروط في أي وقت.` },
    { id: "2", title: "الحجز والدفع", content: `عند إجراء حجز عبر منصتنا، فإنك تبرم عقداً مع Elegant Travel Service. جميع الحجوزات خاضعة للتوفر والتأكيد.\n\nمطلوب دفع وديعة غير قابلة للاسترداد بنسبة 20% لتأمين حجزك. يحل الرصيد المتبقي قبل 30 يوماً من تاريخ المغادرة. بالنسبة للحجوزات التي تُجرى في غضون 30 يوماً من المغادرة، يُشترط السداد الكامل وقت الحجز.\n\nنقبل الدفع ببطاقات الائتمان/الخصم الرئيسية والتحويل البنكي. جميع الأسعار مدرجة بالدولار الأمريكي/اليورو/الدرهم المغربي وتشمل الضرائب المعمول بها ما لم يُذكر خلاف ذلك.` },
    { id: "3", title: "سياسة الإلغاء", content: `يجب تقديم طلبات الإلغاء كتابةً عبر البريد الإلكتروني إلى info@eleganttravel.ma.\n\nتُطبَّق رسوم الإلغاء التالية:\n• قبل 60 يوماً أو أكثر من المغادرة: خسارة الوديعة فقط\n• قبل 30-59 يوماً من المغادرة: 50% من إجمالي تكلفة الحجز\n• قبل 15-29 يوماً من المغادرة: 75% من إجمالي تكلفة الحجز\n• 14 يوماً أو أقل: لا يوجد استرداد\n\nفي حالة القوة القاهرة، سنعمل معك على إعادة الجدولة أو تقديم قسيمة ائتمان. نوصي بشدة بشراء تأمين السفر.` },
    { id: "4", title: "تغييرات على البرنامج", content: `تحتفظ Elegant Travel Service بالحق في إجراء تغييرات طفيفة على البرامج عند الضرورة بسبب ظروف خارجة عن إرادتنا (الطقس، أحوال الطرق، الأحداث المحلية). سنخطرك دائماً بأي تغييرات جوهرية في أقرب وقت ممكن.\n\nإذا أُجري تغيير جوهري قبل المغادرة، يحق لك قبول التغيير أو الحصول على استرداد كامل أو نقل حجزك إلى جولة بديلة بقيمة مساوية أو أقل.` },
    { id: "5", title: "الصحة والسلامة ومسؤولياتك", content: `أنت مسؤول عن التأكد من لياقتك الطبية والجسدية للجولة التي اخترتها. يجب إعلامنا بأي حالات طبية أو متطلبات غذائية أو قيود على التنقل وقت الحجز.\n\nتوافق على اتباع تعليمات مرشدك في جميع الأوقات. تحتفظ Elegant Travel Service بالحق في إقصاء أي مشارك يُشكّل خطراً على نفسه أو على الآخرين. لن يصدر أي استرداد في مثل هذه الحالات.\n\nيجب أن يحمل جميع المشاركين تأمين سفر ساري المفعول يشمل النفقات الطبية والإخلاء والإلغاء.` },
    { id: "6", title: "جوازات السفر والتأشيرات والوثائق", content: `تقع على عاتقك مسؤولية التأكد من حيازتك لجواز سفر ساري المفعول وأي تأشيرات ضرورية لدخول المغرب وأي دول عبور. لا تتحمل Elegant Travel Service أي مسؤولية عن أي نفقات تنشأ جراء عدم الحصول على الوثائق الصحيحة.\n\nمعظم حاملي الجوازات الأوروبية والبريطانية والأمريكية والكندية يدخلون المغرب دون تأشيرة لمدة تصل إلى 90 يوماً.` },
    { id: "7", title: "المسؤولية القانونية", content: `تعمل Elegant Travel Service كوكيل للفنادق ومزودي خدمات النقل ومنظمي الأنشطة. ورغم اختيارنا الحذر لشركائنا، فإننا لسنا مسؤولين عن أي أفعال أو إغفالات من مزودي الخدمات الخارجيين.\n\nإجمالي مسؤوليتنا تجاهك لن يتجاوز المبلغ الذي دفعته مقابل الجولة. لسنا مسؤولين عن الخسائر غير المباشرة أو التبعية أو خسارة التمتع.` },
    { id: "8", title: "الخصوصية والبيانات", content: `خصوصيتك مهمة بالنسبة لنا. نجمع بياناتك الشخصية ونعالجها وفقاً لسياسة الخصوصية الخاصة بنا. من خلال إجراء حجز، فإنك توافق على جمع بياناتك واستخدامها كما هو موضح في سياسة الخصوصية.` },
    { id: "9", title: "الملكية الفكرية", content: `جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والرسومات والشعارات ومقاطع الفيديو، هي ملك لـ Elegant Travel Service أو مورديها ومحمية بموجب قوانين حقوق النشر المغربية والدولية.` },
    { id: "10", title: "القانون المعمول به", content: `تخضع هذه الشروط والأحكام وتُفسَّر وفقاً لقوانين المملكة المغربية. أي نزاعات تنشأ بموجب هذه الشروط تخضع للاختصاص الحصري لمحاكم مراكش، المغرب.` },
  ];

  if (isFr) return [
    { id: "1", title: "Acceptation des conditions", content: `En accédant au site web Elegant Travel Service ou à la plateforme de réservation (le « Service »), vous acceptez d'être lié par ces Conditions Générales. Si vous n'acceptez pas une partie de ces conditions, vous ne devez pas utiliser le Service.\n\nCes Conditions s'appliquent à tous les visiteurs, utilisateurs et clients qui accèdent ou utilisent le Service. Elegant Travel Service se réserve le droit de mettre à jour ces Conditions à tout moment.` },
    { id: "2", title: "Réservation et paiement", content: `En effectuant une réservation via notre plateforme, vous concluez un contrat avec Elegant Travel Service. Toutes les réservations sont soumises à disponibilité et confirmation.\n\nUn acompte non remboursable de 20 % est requis pour sécuriser votre réservation. Le solde est dû 30 jours avant votre date de départ. Pour les réservations effectuées dans les 30 jours précédant le départ, le paiement intégral est exigé au moment de la réservation.\n\nNous acceptons les principales cartes de crédit/débit et les virements bancaires. Tous les prix sont indiqués en USD/EUR/MAD et comprennent les taxes applicables sauf mention contraire.` },
    { id: "3", title: "Politique d'annulation", content: `Les annulations doivent être effectuées par écrit par e-mail à info@eleganttravel.ma.\n\nLes frais d'annulation suivants s'appliquent :\n• 60+ jours avant le départ : Perte de l'acompte uniquement\n• 30–59 jours avant le départ : 50 % du coût total de la réservation\n• 15–29 jours avant le départ : 75 % du coût total de la réservation\n• 14 jours ou moins : Aucun remboursement\n\nEn cas de force majeure, nous travaillerons avec vous pour reporter ou fournir un avoir. Nous recommandons vivement de souscrire une assurance voyage.` },
    { id: "4", title: "Modifications d'itinéraire", content: `Elegant Travel Service se réserve le droit d'apporter des modifications mineures aux itinéraires lorsque les circonstances l'exigent (météo, état des routes, événements locaux). Nous vous informerons toujours des changements importants dès que raisonnablement possible.\n\nSi un changement important est effectué avant le départ, vous avez le droit d'accepter le changement, d'obtenir un remboursement intégral ou de vous transférer vers un autre circuit de valeur équivalente ou inférieure.` },
    { id: "5", title: "Santé, sécurité et responsabilités", content: `Vous êtes responsable de vous assurer que vous êtes médicalement et physiquement apte pour votre circuit. Vous devez nous informer de toute condition médicale, exigence alimentaire ou restriction de mobilité au moment de la réservation.\n\nVous acceptez de suivre les instructions de votre guide en tout temps. Elegant Travel Service se réserve le droit d'exclure tout participant présentant un risque pour lui-même ou pour les autres. Aucun remboursement ne sera effectué dans ces cas.\n\nTous les participants doivent être couverts par une assurance voyage valide comprenant les frais médicaux, l'évacuation et l'annulation.` },
    { id: "6", title: "Passeports, visas et documents de voyage", content: `Il vous appartient de vous assurer que vous détenez un passeport valide et tout visa nécessaire pour l'entrée au Maroc et dans les pays de transit. Elegant Travel Service n'est pas responsable des dépenses engagées en raison du défaut d'obtention des documents requis.\n\nLa plupart des ressortissants de l'UE, du Royaume-Uni, des États-Unis et du Canada peuvent entrer au Maroc sans visa pour une période allant jusqu'à 90 jours.` },
    { id: "7", title: "Responsabilité", content: `Elegant Travel Service agit en qualité d'agent pour les hôtels, les prestataires de transport et les opérateurs d'activités. Bien que nous sélectionnions soigneusement nos partenaires, nous ne sommes pas responsables des actes ou omissions des prestataires tiers.\n\nNotre responsabilité totale à votre égard ne peut excéder le montant que vous avez payé pour le circuit. Nous ne sommes pas responsables des pertes indirectes ou consécutives, de la perte de jouissance ou des pertes non directement liées à nos obligations principales.` },
    { id: "8", title: "Confidentialité et données", content: `Votre vie privée nous importe. Nous collectons et traitons vos données personnelles conformément à notre Politique de confidentialité. En effectuant une réservation, vous consentez à la collecte et à l'utilisation de vos données telles que décrites dans notre Politique de confidentialité.` },
    { id: "9", title: "Propriété intellectuelle", content: `Tout le contenu de ce site web, y compris les textes, images, graphiques, logos et vidéos, est la propriété d'Elegant Travel Service ou de ses fournisseurs de contenu et est protégé par les lois marocaines et internationales sur le droit d'auteur.` },
    { id: "10", title: "Droit applicable", content: `Les présentes Conditions Générales sont régies et interprétées conformément aux lois du Royaume du Maroc. Tout litige découlant de ces Conditions sera soumis à la juridiction exclusive des tribunaux de Marrakech, Maroc.` },
  ];

  if (isEs) return [
    { id: "1", title: "Aceptación de los Términos", content: `Al acceder o utilizar el sitio web y la plataforma de reservas de Elegant Travel Service (el «Servicio»), acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar el Servicio.\n\nEstos Términos se aplican a todos los visitantes, usuarios y clientes que accedan o utilicen el Servicio. Elegant Travel Service se reserva el derecho de actualizar estos Términos en cualquier momento.` },
    { id: "2", title: "Reserva y Pago", content: `Al realizar una reserva a través de nuestra plataforma, está celebrando un contrato con Elegant Travel Service. Todas las reservas están sujetas a disponibilidad y confirmación.\n\nSe requiere un depósito no reembolsable del 20% para asegurar su reserva. El saldo restante vence 30 días antes de su fecha de salida. Para reservas realizadas dentro de los 30 días anteriores a la salida, se requiere el pago completo en el momento de la reserva.\n\nAceptamos pago con las principales tarjetas de crédito/débito y transferencia bancaria. Todos los precios se cotizan en USD/EUR/MAD e incluyen los impuestos aplicables salvo que se indique lo contrario.` },
    { id: "3", title: "Política de Cancelación", content: `Las cancelaciones deben realizarse por escrito por correo electrónico a info@eleganttravel.ma.\n\nSe aplican las siguientes tarifas de cancelación:\n• 60+ días antes de la salida: Solo se pierde el depósito\n• 30–59 días antes de la salida: 50% del coste total de la reserva\n• 15–29 días antes de la salida: 75% del coste total de la reserva\n• 14 días o menos: Sin reembolso\n\nEn caso de fuerza mayor, trabajaremos con usted para reprogramar o proporcionar un vale de crédito. Recomendamos encarecidamente contratar un seguro de viaje.` },
    { id: "4", title: "Cambios en el Itinerario", content: `Elegant Travel Service se reserva el derecho de realizar cambios menores en los itinerarios cuando las circunstancias lo requieran (clima, condiciones de las carreteras, eventos locales). Siempre le informaremos de los cambios significativos lo antes posible.\n\nSi se realiza un cambio significativo antes de la salida, tiene derecho a aceptar el cambio, recibir un reembolso completo o transferirse a un tour alternativo de igual o menor valor.` },
    { id: "5", title: "Salud, Seguridad y Sus Responsabilidades", content: `Usted es responsable de asegurarse de que está médica y físicamente en condiciones para el tour elegido. Debe informarnos de cualquier condición médica, requisito dietético o restricción de movilidad en el momento de la reserva.\n\nAcepta seguir las instrucciones de su guía en todo momento. Elegant Travel Service se reserva el derecho de excluir a cualquier participante que suponga un riesgo para sí mismo o para otros. No se emitirá ningún reembolso en tales casos.\n\nTodos los participantes deben llevar un seguro de viaje válido que cubra gastos médicos, evacuación y cancelación.` },
    { id: "6", title: "Pasaportes, Visados y Documentos", content: `Es su responsabilidad asegurarse de que tiene un pasaporte válido y los visados necesarios para entrar a Marruecos y en los países de tránsito. Elegant Travel Service no acepta ninguna responsabilidad por los gastos en que se incurra como resultado de no obtener la documentación correcta.\n\nLa mayoría de los ciudadanos de la UE, el Reino Unido, EE. UU. y Canadá pueden entrar a Marruecos sin visado por hasta 90 días.` },
    { id: "7", title: "Responsabilidad", content: `Elegant Travel Service actúa como agente de hoteles, proveedores de transporte y operadores de actividades. Aunque seleccionamos cuidadosamente a nuestros socios, no somos responsables de los actos u omisiones de los proveedores de servicios externos.\n\nNuestra responsabilidad total con usted en relación con cualquier tour no superará el importe que pagó por ese tour.` },
    { id: "8", title: "Privacidad y Datos", content: `Su privacidad nos importa. Recopilamos y procesamos sus datos personales de acuerdo con nuestra Política de Privacidad. Al realizar una reserva, usted consiente la recopilación y el uso de sus datos tal como se describe en nuestra Política de Privacidad.` },
    { id: "9", title: "Propiedad Intelectual", content: `Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos, logotipos y vídeos, es propiedad de Elegant Travel Service o de sus proveedores de contenido y está protegido por las leyes de derechos de autor marroquíes e internacionales.` },
    { id: "10", title: "Legislación Aplicable", content: `Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes del Reino de Marruecos. Cualquier disputa que surja en virtud de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Marrakech, Marruecos.` },
  ];

  if (isDe) return [
    { id: "1", title: "Annahme der Bedingungen", content: `Durch den Zugriff auf die Website und Buchungsplattform von Elegant Travel Service (den „Dienst") erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Wenn Sie einem Teil dieser Bedingungen nicht zustimmen, dürfen Sie den Dienst nicht nutzen.\n\nDiese Bedingungen gelten für alle Besucher, Nutzer und Kunden, die auf den Dienst zugreifen oder ihn nutzen. Elegant Travel Service behält sich das Recht vor, diese Bedingungen jederzeit zu aktualisieren.` },
    { id: "2", title: "Buchung und Zahlung", content: `Wenn Sie über unsere Plattform eine Buchung vornehmen, schließen Sie einen Vertrag mit Elegant Travel Service ab. Alle Buchungen unterliegen der Verfügbarkeit und der Bestätigung.\n\nZur Sicherung Ihrer Buchung ist eine nicht rückerstattbare Anzahlung von 20 % erforderlich. Der Restbetrag ist 30 Tage vor Ihrem Abreisedatum fällig. Für Buchungen, die innerhalb von 30 Tagen vor Abreise erfolgen, ist zum Zeitpunkt der Buchung eine vollständige Zahlung erforderlich.\n\nWir akzeptieren Zahlung per Kredit-/Debitkarte und Banküberweisung. Alle Preise sind in USD/EUR/MAD angegeben und enthalten die anfallenden Steuern, sofern nicht anders angegeben.` },
    { id: "3", title: "Stornierungsrichtlinie", content: `Stornierungen müssen schriftlich per E-Mail an info@eleganttravel.ma erfolgen.\n\nEs gelten folgende Stornogebühren:\n• 60+ Tage vor Abreise: Nur Anzahlung geht verloren\n• 30–59 Tage vor Abreise: 50 % der Gesamtbuchungskosten\n• 15–29 Tage vor Abreise: 75 % der Gesamtbuchungskosten\n• 14 Tage oder weniger: Keine Erstattung\n\nIm Falle höherer Gewalt arbeiten wir mit Ihnen zusammen, um eine Umbuchung oder eine Gutschrift vorzunehmen. Wir empfehlen dringend den Abschluss einer Reiseversicherung.` },
    { id: "4", title: "Änderungen am Reiseverlauf", content: `Elegant Travel Service behält sich das Recht vor, geringfügige Änderungen an Reiseverläufen vorzunehmen, wenn Umstände außerhalb unserer Kontrolle dies erfordern (Wetter, Straßenverhältnisse, lokale Ereignisse). Wir werden Sie stets so schnell wie möglich über wesentliche Änderungen informieren.` },
    { id: "5", title: "Gesundheit, Sicherheit und Ihre Verantwortung", content: `Sie sind dafür verantwortlich sicherzustellen, dass Sie medizinisch und körperlich für Ihre gewählte Tour geeignet sind. Sie müssen uns zum Zeitpunkt der Buchung über medizinische Erkrankungen, Ernährungsanforderungen oder Mobilitätseinschränkungen informieren.\n\nSie stimmen zu, jederzeit den Anweisungen Ihres Reiseleiters zu folgen. Elegant Travel Service behält sich das Recht vor, Teilnehmer auszuschließen, die ein Risiko für sich selbst oder andere darstellen.` },
    { id: "6", title: "Reisepässe, Visa und Reisedokumente", content: `Sie sind dafür verantwortlich sicherzustellen, dass Sie einen gültigen Reisepass und alle erforderlichen Visa für die Einreise nach Marokko besitzen. Elegant Travel Service übernimmt keine Haftung für Kosten, die durch das Fehlen korrekter Dokumente entstehen.\n\nDie meisten EU-, britischen, US-amerikanischen und kanadischen Staatsangehörigen können visumfrei für bis zu 90 Tage nach Marokko einreisen.` },
    { id: "7", title: "Haftung", content: `Elegant Travel Service handelt als Vermittler für Hotels, Transportanbieter und Aktivitätenbetreiber. Obwohl wir unsere Partner sorgfältig auswählen, haften wir nicht für Handlungen oder Unterlassungen von Drittdienstleistern.\n\nUnsere Gesamthaftung Ihnen gegenüber übersteigt nicht den von Ihnen für die Tour gezahlten Betrag.` },
    { id: "8", title: "Datenschutz und Daten", content: `Ihre Privatsphäre ist uns wichtig. Wir erheben und verarbeiten Ihre personenbezogenen Daten gemäß unserer Datenschutzrichtlinie. Durch eine Buchung stimmen Sie der Erhebung und Verwendung Ihrer Daten zu.` },
    { id: "9", title: "Geistiges Eigentum", content: `Alle Inhalte dieser Website, einschließlich Texte, Bilder, Grafiken, Logos und Videos, sind Eigentum von Elegant Travel Service oder deren Inhaltslieferanten und durch marokkanische und internationale Urheberrechtsgesetze geschützt.` },
    { id: "10", title: "Anwendbares Recht", content: `Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen des Königreichs Marokko und werden nach diesen ausgelegt. Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, unterliegen der ausschließlichen Zuständigkeit der Gerichte in Marrakesch, Marokko.` },
  ];

  if (isIt) return [
    { id: "1", title: "Accettazione dei Termini", content: `Accedendo o utilizzando il sito web e la piattaforma di prenotazione di Elegant Travel Service (il "Servizio"), accetti di essere vincolato da questi Termini e Condizioni. Se non sei d'accordo con qualsiasi parte di questi termini, non devi utilizzare il Servizio.` },
    { id: "2", title: "Prenotazione e Pagamento", content: `Effettuando una prenotazione tramite la nostra piattaforma, stai stipulando un contratto con Elegant Travel Service. Tutte le prenotazioni sono soggette a disponibilità e conferma.\n\nÈ richiesto un deposito non rimborsabile del 20% per garantire la tua prenotazione. Il saldo rimanente è dovuto 30 giorni prima della data di partenza. Per le prenotazioni effettuate entro 30 giorni dalla partenza, è richiesto il pagamento completo al momento della prenotazione.` },
    { id: "3", title: "Politica di Cancellazione", content: `Le cancellazioni devono essere effettuate per iscritto via email a info@eleganttravel.ma.\n\nSi applicano le seguenti commissioni di cancellazione:\n• 60+ giorni prima della partenza: Solo il deposito viene perso\n• 30–59 giorni prima della partenza: 50% del costo totale della prenotazione\n• 15–29 giorni prima della partenza: 75% del costo totale della prenotazione\n• 14 giorni o meno: Nessun rimborso` },
    { id: "4", title: "Modifiche all'Itinerario", content: `Elegant Travel Service si riserva il diritto di apportare modifiche minori agli itinerari quando le circostanze lo richiedono. Vi informeremo sempre dei cambiamenti significativi il prima possibile.` },
    { id: "5", title: "Salute, Sicurezza e Responsabilità", content: `Sei responsabile di assicurarti di essere idoneo dal punto di vista medico e fisico per il tour scelto. Devi informarci di eventuali condizioni mediche, requisiti dietetici o limitazioni di mobilità al momento della prenotazione.` },
    { id: "6", title: "Passaporti, Visti e Documenti di Viaggio", content: `È tua responsabilità assicurarti di avere un passaporto valido e tutti i visti necessari per l'ingresso in Marocco. La maggior parte dei cittadini dell'UE, del Regno Unito, degli Stati Uniti e del Canada può entrare in Marocco senza visto per un massimo di 90 giorni.` },
    { id: "7", title: "Responsabilità", content: `Elegant Travel Service agisce come agente per hotel, fornitori di trasporti e operatori di attività. Sebbene selezioniamo attentamente i nostri partner, non siamo responsabili per atti od omissioni di fornitori di servizi terzi.` },
    { id: "8", title: "Privacy e Dati", content: `La tua privacy è importante per noi. Raccogliamo ed elaboriamo i tuoi dati personali in conformità con la nostra Informativa sulla Privacy.` },
    { id: "9", title: "Proprietà Intellettuale", content: `Tutti i contenuti di questo sito web sono di proprietà di Elegant Travel Service o dei suoi fornitori di contenuti e sono protetti dalle leggi sul diritto d'autore marocchine e internazionali.` },
    { id: "10", title: "Legge Applicabile", content: `I presenti Termini e Condizioni sono disciplinati e interpretati in conformità con le leggi del Regno del Marocco. Qualsiasi controversia che sorga ai sensi dei presenti Termini sarà soggetta alla giurisdizione esclusiva dei tribunali di Marrakech, Marocco.` },
  ];

  // English default
  return [
    { id: "1", title: "Acceptance of Terms", content: `By accessing or using the Elegant Travel Service website and booking platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Service.\n\nThese Terms apply to all visitors, users, and customers who access or use the Service. Elegant Travel Service reserves the right to update these Terms at any time.` },
    { id: "2", title: "Booking and Payment", content: `When you make a booking through our platform, you are entering into a contract with Elegant Travel Service. All bookings are subject to availability and confirmation.\n\nA non-refundable deposit of 20% is required to secure your booking. The remaining balance is due 30 days prior to your departure date. For bookings made within 30 days of departure, full payment is required at the time of booking.\n\nWe accept payment by major credit/debit cards and bank transfer. All prices are quoted in USD/EUR/MAD and include applicable taxes unless stated otherwise.` },
    { id: "3", title: "Cancellation Policy", content: `Cancellations must be made in writing by email to info@eleganttravel.ma.\n\nThe following cancellation fees apply:\n• 60+ days before departure: Deposit forfeited only\n• 30–59 days before departure: 50% of total booking cost\n• 15–29 days before departure: 75% of total booking cost\n• 14 days or fewer: No refund\n\nIn the event of a force majeure, we will work with you to reschedule or provide a credit note. We strongly recommend purchasing travel insurance.` },
    { id: "4", title: "Changes to Itinerary", content: `Elegant Travel Service reserves the right to make minor changes to itineraries where circumstances beyond our control make this necessary (weather, road conditions, local events). We will always inform you of significant changes as soon as reasonably practicable.\n\nIf a significant change is made prior to departure, you have the right to accept the change, receive a full refund, or transfer to an alternative tour of equal or lesser value.` },
    { id: "5", title: "Health, Safety and Your Responsibilities", content: `You are responsible for ensuring you are medically and physically fit for your chosen tour. You must inform us of any medical conditions, dietary requirements, or mobility restrictions at the time of booking.\n\nYou agree to follow the instructions of your guide at all times. Elegant Travel Service reserves the right to exclude any participant from a tour who poses a risk to themselves or others. No refund will be issued in such cases.\n\nAll participants must carry valid travel insurance that covers medical expenses, evacuation, and cancellation.` },
    { id: "6", title: "Passports, Visas and Travel Documents", content: `It is your responsibility to ensure you hold a valid passport and any necessary visas for entry to Morocco and any transit countries. Elegant Travel Service accepts no liability for any expenses incurred as a result of failure to obtain correct documentation.\n\nMost EU, UK, US, and Canadian passport holders can enter Morocco visa-free for up to 90 days.` },
    { id: "7", title: "Liability", content: `Elegant Travel Service acts as an agent for hotels, transport providers, and activity operators. While we carefully select our partners, we are not liable for any acts or omissions of third-party service providers.\n\nOur total liability to you in connection with any tour shall not exceed the amount you paid for that tour. We are not liable for indirect or consequential losses, loss of enjoyment, or losses not directly related to our core obligations.` },
    { id: "8", title: "Privacy and Data", content: `Your privacy matters to us. We collect and process your personal data in accordance with our Privacy Policy. By making a booking, you consent to the collection and use of your data as described in our Privacy Policy.` },
    { id: "9", title: "Intellectual Property", content: `All content on this website, including but not limited to text, images, graphics, logos, and video, is the property of Elegant Travel Service or its content suppliers and is protected by Moroccan and international copyright laws.` },
    { id: "10", title: "Governing Law", content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Kingdom of Morocco. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.` },
  ];
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const sections = getSections(locale);
  const isRTL = locale === "ar";

  const labels = {
    badge: isRTL ? "قانوني" : locale === "fr" ? "Juridique" : locale === "es" ? "Legal" : locale === "de" ? "Rechtlich" : locale === "it" ? "Legale" : "Legal",
    heading: isRTL ? "الشروط والأحكام" : locale === "fr" ? "Conditions Générales" : locale === "es" ? "Términos y Condiciones" : locale === "de" ? "AGB" : locale === "it" ? "Termini e Condizioni" : "Terms & Conditions",
    subtitle: isRTL ? "يرجى قراءة هذه الشروط بعناية قبل إجراء حجز مع Elegant Travel Service." : locale === "fr" ? "Veuillez lire ces conditions attentivement avant de réserver." : locale === "es" ? "Por favor lea estos términos cuidadosamente antes de realizar una reserva." : locale === "de" ? "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie eine Buchung vornehmen." : locale === "it" ? "Si prega di leggere questi termini attentamente prima di effettuare una prenotazione." : "Please read these terms carefully before making a booking with Elegant Travel Service.",
    updated: isRTL ? "آخر تحديث: يونيو 2025" : locale === "fr" ? "Dernière mise à jour : juin 2025" : locale === "es" ? "Última actualización: junio 2025" : locale === "de" ? "Zuletzt aktualisiert: Juni 2025" : locale === "it" ? "Ultimo aggiornamento: giugno 2025" : "Last updated: June 2025",
    notice: isRTL ? "إشعار مهم" : locale === "fr" ? "Avis important" : locale === "es" ? "Aviso importante" : locale === "de" ? "Wichtiger Hinweis" : locale === "it" ? "Avviso importante" : "Important Notice",
    noticeText: isRTL ? "تشكّل هذه الشروط والأحكام اتفاقية ملزمة قانونياً بينك وبين Elegant Travel Service. من خلال إتمام حجز، فإنك تؤكد أنك قرأت هذه الشروط وفهمتها ووافقت عليها." : locale === "fr" ? "Ces Conditions Générales constituent un accord juridiquement contraignant entre vous et Elegant Travel Service. En finalisant une réservation, vous confirmez avoir lu, compris et accepté ces Conditions." : locale === "es" ? "Estos Términos y Condiciones constituyen un acuerdo legalmente vinculante entre usted y Elegant Travel Service. Al completar una reserva, confirma que ha leído, entendido y aceptado estos Términos." : locale === "de" ? "Diese AGB stellen eine rechtsverbindliche Vereinbarung zwischen Ihnen und Elegant Travel Service dar. Mit dem Abschluss einer Buchung bestätigen Sie, diese Bedingungen gelesen, verstanden und akzeptiert zu haben." : locale === "it" ? "Questi Termini e Condizioni costituiscono un accordo legalmente vincolante tra te ed Elegant Travel Service. Completando una prenotazione, confermi di aver letto, compreso e accettato questi Termini." : "These Terms and Conditions constitute a legally binding agreement between you and Elegant Travel Service. By completing a booking you confirm you have read, understood, and agreed to these Terms.",
    contents: isRTL ? "المحتويات" : locale === "fr" ? "Sommaire" : locale === "es" ? "Contenido" : locale === "de" ? "Inhalt" : locale === "it" ? "Contenuto" : "Contents",
    questions: isRTL ? "أسئلة حول هذه الشروط؟" : locale === "fr" ? "Des questions sur ces Conditions ?" : locale === "es" ? "¿Preguntas sobre estos Términos?" : locale === "de" ? "Fragen zu diesen Bedingungen?" : locale === "it" ? "Domande su questi Termini?" : "Questions about these Terms?",
    contactUs: isRTL ? "اتصل بنا" : locale === "fr" ? "Contactez-nous" : locale === "es" ? "Contáctenos" : locale === "de" ? "Kontaktieren Sie uns" : locale === "it" ? "Contattaci" : "Contact us",
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
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 mb-10">
          <FaShieldAlt className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 text-sm mb-1">{labels.notice}</p>
            <p className="text-amber-700 text-sm leading-relaxed">{labels.noticeText}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
          <h2 className="font-bold text-slate-700 text-sm uppercase tracking-widest mb-3">{labels.contents}</h2>
          <ol className="space-y-1.5">
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#section-${s.id}`} className="text-sm text-amber-600 hover:text-amber-700 hover:underline">
                  {s.id}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-8">
          {sections.map(s => (
            <section key={s.id} id={`section-${s.id}`} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
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
          <Link href="/contact" className="text-amber-600 hover:underline">{labels.contactUs}</Link>
        </div>
      </div>
    </div>
  );
}
