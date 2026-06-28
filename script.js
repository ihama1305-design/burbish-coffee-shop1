const sectionSelect = document.querySelector("#sectionSelect");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll(".section[id]"));
const dialog = document.querySelector("#menuDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#menuDialogTitle");
const dialogClose = document.querySelector(".dialog-close");
const drawer = document.querySelector("#brandDrawer");
const drawerTrigger = document.querySelector(".drawer-trigger");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const serviceButtons = Array.from(document.querySelectorAll("[data-service-mode]"));
const orderForm = document.querySelector("#orderForm");
const orderSummary = document.querySelector("#orderSummary");
const whatsappOrder = document.querySelector("#whatsappOrder");
const cartBadge = document.querySelector(".cart-button span");

let selectedPayment = "Visa through secure checkout";

const translations = {
  en: {
    "skip": "Skip to content",
    "utility.call": "Call Us",
    "utility.message": "Message Us",
    "utility.hours": "Open daily 8am - 2am",
    "nav.story": "Story",
    "nav.atmosphere": "Atmosphere",
    "nav.signature": "Best Picks",
    "nav.menu": "Menu",
    "nav.order": "Order",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.reviews": "Reviews",
    "nav.goto": "Go to",
    "select.home": "Home",
    "select.story": "Story",
    "select.atmosphere": "Atmosphere",
    "select.signature": "Best Picks",
    "select.menu": "Menu",
    "select.order": "Order",
    "select.pages": "Pages",
    "select.location": "Location",
    "select.contact": "Contact",
    "select.reviews": "Reviews",
    "service.delivery": "Delivery",
    "service.pickup": "Self-Pickup",
    "service.dinein": "Dine-In",
    "service.drive": "Drive-Thru",
    "service.location": "Select location",
    "service.locationSub": "Al Dhafrah, Abu Dhabi",
    "service.login": "Login",
    "drawer.subtitle": "Coffee shop pages",
    "drawer.party": "Party Order",
    "drawer.new": "NEW",
    "drawer.stores": "Store Locations",
    "drawer.track": "Track Order",
    "drawer.history": "Order History",
    "drawer.offers": "Offers",
    "drawer.menu": "Explore Menu",
    "drawer.feedback": "Feedback",
    "drawer.faq": "FAQ",
    "drawer.terms": "Terms & Conditions",
    "drawer.privacy": "Privacy Policy",
    "drawer.cookies": "Cookie Policy",
    "hero.eyebrow": "Al Dhafrah, Abu Dhabi",
    "hero.title": "Burbish Coffee Shop <span>بربيش كوفي شوب</span>",
    "hero.copy": "A calm Salam Street cafe shaped for easy mornings, relaxed conversations, fresh drinks, and simple comfort food.",
    "hero.viewMenu": "View menu",
    "hero.order": "Order delivery",
    "hero.call": "Call the shop",
    "facts.open": "Open",
    "facts.hours": "8am - 2am",
    "facts.area": "Area",
    "facts.areaValue": "Al Dhafrah",
    "facts.phone": "Phone",
    "order.eyebrow": "Order & Pay",
    "order.title": "Delivery, pickup, and secure payments.",
    "order.copy": "Choose how you want your Burbish order, share the delivery details, and use a secure hosted payment link for cards and wallets.",
    "order.whatsapp": "Order on WhatsApp",
    "order.formTitle": "Build a quick order",
    "order.formCopy": "This prepares the order request. Live card payment should be completed through a PCI-compliant gateway page.",
    "order.modeDelivery": "Delivery",
    "order.modePickup": "Self-Pickup",
    "order.modeDine": "Dine-In",
    "order.modeDrive": "Drive-Thru",
    "order.name": "Name",
    "order.phone": "Phone",
    "order.address": "Delivery address",
    "order.items": "Order items",
    "order.cash": "Cash",
    "order.prepare": "Prepare order",
    "order.sendWhatsApp": "Send via WhatsApp",
    "payment.eyebrow": "Payments",
    "payment.title": "Accept major cards and wallets.",
    "payment.copy": "Customers can pay with Visa, Mastercard, Apple Pay, Google Pay, or cash after a secure checkout provider is connected.",
    "payment.summaryTitle": "Order summary",
    "payment.summaryEmpty": "Select a service mode and prepare an order to see the summary here.",
    "payment.checkout": "Request secure checkout link",
    "pages.eyebrow": "Brand Pages",
    "pages.title": "Explore every part of Burbish.",
    "pages.copy": "Use the sidebar or the buttons below to move through offers, party orders, tracking, policies, and customer support pages.",
    "offers.eyebrow": "Special Offers",
    "offers.title": "Bright cafe deals for dine-in and delivery.",
    "offers.badge1": "Morning",
    "offers.card1": "Coffee + breakfast plate",
    "offers.card1Copy": "A simple weekday combo built for quick starts.",
    "offers.badge2": "Evening",
    "offers.card2": "Fresh drink bundle",
    "offers.card2Copy": "Mix cocktails, juices, and milkshakes for groups.",
    "offers.badge3": "Dessert",
    "offers.card3": "Waffle share plate",
    "offers.card3Copy": "A sweet plate designed for relaxed visits.",
    "party.eyebrow": "Party Order",
    "party.title": "Plan drinks and cafe trays for groups.",
    "party.copy": "Send the date, guest count, and preferred menu items. The shop can confirm availability and prepare a custom quote.",
    "party.cta": "Start party request",
    "stores.eyebrow": "Store Locations",
    "stores.title": "Al Dhafrah, Abu Dhabi.",
    "stores.copy": "Near Telecommunication Regulatory Authority, Salam Street. Open daily from 8am to 2am.",
    "stores.cta": "Open map",
    "track.eyebrow": "Track Order",
    "track.title": "Check your latest order status.",
    "track.label": "Order or phone number",
    "track.cta": "Track order",
    "track.note": "Orders placed through WhatsApp are confirmed by the shop directly.",
    "history.eyebrow": "Order History",
    "history.title": "Your browser order history.",
    "history.copy": "Prepared orders from this browser will appear here once connected to a real ordering backend.",
    "feedback.eyebrow": "Feedback",
    "feedback.title": "Tell the shop about your visit.",
    "feedback.label": "Your message",
    "feedback.cta": "Prepare feedback",
    "faq.eyebrow": "FAQ",
    "faq.title": "Quick answers before ordering.",
    "faq.q1": "Do you deliver?",
    "faq.a1": "Use WhatsApp or a connected delivery partner once live ordering is configured.",
    "faq.q2": "Can I pay by card?",
    "faq.a2": "Yes. Visa, Mastercard, Apple Pay, and Google Pay can be enabled through a secure hosted checkout provider.",
    "terms.eyebrow": "Terms",
    "terms.title": "Ordering terms.",
    "terms.copy": "Prices, availability, delivery areas, and preparation times should be confirmed by Burbish Coffee Shop before payment.",
    "privacy.eyebrow": "Privacy",
    "privacy.title": "Customer information.",
    "privacy.copy": "Customer details entered here are not sent to a server unless connected to a real backend or shared through WhatsApp.",
    "cookies.eyebrow": "Cookies",
    "cookies.title": "Cookie policy.",
    "cookies.copy": "This static site does not require tracking cookies. A future ordering system may use secure session cookies."
  },
  ar: {
    "skip": "تجاوز إلى المحتوى",
    "utility.call": "اتصل بنا",
    "utility.message": "راسلنا",
    "utility.hours": "مفتوح يوميا من 8 صباحا إلى 2 صباحا",
    "nav.story": "القصة",
    "nav.atmosphere": "الأجواء",
    "nav.signature": "الأفضل",
    "nav.menu": "القائمة",
    "nav.order": "الطلب",
    "nav.location": "الموقع",
    "nav.contact": "التواصل",
    "nav.reviews": "التقييمات",
    "nav.goto": "انتقل إلى",
    "select.home": "الرئيسية",
    "select.story": "القصة",
    "select.atmosphere": "الأجواء",
    "select.signature": "الأفضل",
    "select.menu": "القائمة",
    "select.order": "الطلب",
    "select.pages": "الصفحات",
    "select.location": "الموقع",
    "select.contact": "التواصل",
    "select.reviews": "التقييمات",
    "service.delivery": "توصيل",
    "service.pickup": "استلام",
    "service.dinein": "داخل المحل",
    "service.drive": "استلام سريع",
    "service.location": "اختر الموقع",
    "service.locationSub": "الظفرة، أبوظبي",
    "service.login": "دخول",
    "drawer.subtitle": "صفحات المقهى",
    "drawer.party": "طلب للمناسبات",
    "drawer.new": "جديد",
    "drawer.stores": "مواقع الفروع",
    "drawer.track": "تتبع الطلب",
    "drawer.history": "سجل الطلبات",
    "drawer.offers": "العروض",
    "drawer.menu": "استكشف القائمة",
    "drawer.feedback": "الملاحظات",
    "drawer.faq": "الأسئلة الشائعة",
    "drawer.terms": "الشروط والأحكام",
    "drawer.privacy": "سياسة الخصوصية",
    "drawer.cookies": "سياسة الكوكيز",
    "hero.eyebrow": "الظفرة، أبوظبي",
    "hero.title": "بربيش كوفي شوب <span>Burbish Coffee Shop</span>",
    "hero.copy": "مقهى هادئ في شارع السلام مناسب للصباحات الخفيفة، الجلسات الهادئة، المشروبات الطازجة، والأكلات البسيطة.",
    "hero.viewMenu": "عرض القائمة",
    "hero.order": "طلب توصيل",
    "hero.call": "اتصل بالمحل",
    "facts.open": "مفتوح",
    "facts.hours": "8 صباحا - 2 صباحا",
    "facts.area": "المنطقة",
    "facts.areaValue": "الظفرة",
    "facts.phone": "الهاتف",
    "order.eyebrow": "اطلب وادفع",
    "order.title": "توصيل، استلام، ومدفوعات آمنة.",
    "order.copy": "اختر طريقة الطلب، أضف تفاصيل التوصيل، واستخدم رابط دفع آمن للبطاقات والمحافظ الرقمية.",
    "order.whatsapp": "اطلب عبر واتساب",
    "order.formTitle": "جهز طلبك بسرعة",
    "order.formCopy": "هذا النموذج يجهز رسالة الطلب. الدفع بالبطاقة يجب أن يتم عبر صفحة دفع آمنة ومتوافقة.",
    "order.modeDelivery": "توصيل",
    "order.modePickup": "استلام",
    "order.modeDine": "داخل المحل",
    "order.modeDrive": "استلام سريع",
    "order.name": "الاسم",
    "order.phone": "الهاتف",
    "order.address": "عنوان التوصيل",
    "order.items": "الطلبات",
    "order.cash": "كاش",
    "order.prepare": "تجهيز الطلب",
    "order.sendWhatsApp": "إرسال عبر واتساب",
    "payment.eyebrow": "الدفع",
    "payment.title": "قبول البطاقات والمحافظ الرقمية.",
    "payment.copy": "يمكن للعملاء الدفع بفيزا، ماستركارد، Apple Pay، Google Pay، أو نقدا بعد ربط مزود دفع آمن.",
    "payment.summaryTitle": "ملخص الطلب",
    "payment.summaryEmpty": "اختر طريقة الخدمة وجهز الطلب لعرض الملخص هنا.",
    "payment.checkout": "طلب رابط دفع آمن",
    "pages.eyebrow": "صفحات العلامة",
    "pages.title": "استكشف كل جزء من بربيش.",
    "pages.copy": "استخدم القائمة الجانبية أو الأزرار للتنقل بين العروض، طلبات المناسبات، التتبع، السياسات، وخدمة العملاء.",
    "offers.eyebrow": "عروض خاصة",
    "offers.title": "عروض مقهى للتوصيل والجلسات.",
    "offers.badge1": "صباحا",
    "offers.card1": "قهوة + طبق إفطار",
    "offers.card1Copy": "عرض بسيط لبداية يوم سريعة.",
    "offers.badge2": "مساء",
    "offers.card2": "باقة مشروبات طازجة",
    "offers.card2Copy": "اخلط الكوكتيلات والعصائر والميلك شيك للمجموعات.",
    "offers.badge3": "حلى",
    "offers.card3": "طبق وافل للمشاركة",
    "offers.card3Copy": "اختيار حلو للجلسات الهادئة.",
    "party.eyebrow": "طلب للمناسبات",
    "party.title": "رتب المشروبات وصواني المقهى للمجموعات.",
    "party.copy": "أرسل التاريخ وعدد الضيوف والعناصر المطلوبة، وسيؤكد المحل التوفر والسعر.",
    "party.cta": "ابدأ طلب مناسبة",
    "stores.eyebrow": "مواقع الفروع",
    "stores.title": "الظفرة، أبوظبي.",
    "stores.copy": "بالقرب من هيئة تنظيم الاتصالات، شارع السلام. مفتوح يوميا من 8 صباحا إلى 2 صباحا.",
    "stores.cta": "فتح الخريطة",
    "track.eyebrow": "تتبع الطلب",
    "track.title": "تحقق من حالة آخر طلب.",
    "track.label": "رقم الطلب أو الهاتف",
    "track.cta": "تتبع الطلب",
    "track.note": "الطلبات عبر واتساب يتم تأكيدها مباشرة من المحل.",
    "history.eyebrow": "سجل الطلبات",
    "history.title": "سجل طلبات هذا المتصفح.",
    "history.copy": "ستظهر الطلبات المحضرة هنا بعد ربط نظام طلبات حقيقي.",
    "feedback.eyebrow": "الملاحظات",
    "feedback.title": "شاركنا رأيك عن الزيارة.",
    "feedback.label": "رسالتك",
    "feedback.cta": "تجهيز الملاحظة",
    "faq.eyebrow": "الأسئلة الشائعة",
    "faq.title": "إجابات سريعة قبل الطلب.",
    "faq.q1": "هل يوجد توصيل؟",
    "faq.a1": "يمكن استخدام واتساب أو ربط شريك توصيل عند تشغيل الطلبات المباشرة.",
    "faq.q2": "هل يمكن الدفع بالبطاقة؟",
    "faq.a2": "نعم. يمكن تفعيل فيزا وماستركارد وApple Pay وGoogle Pay عبر مزود دفع آمن.",
    "terms.eyebrow": "الشروط",
    "terms.title": "شروط الطلب.",
    "terms.copy": "يجب تأكيد الأسعار والتوفر ومناطق التوصيل ووقت التجهيز من بربيش قبل الدفع.",
    "privacy.eyebrow": "الخصوصية",
    "privacy.title": "معلومات العملاء.",
    "privacy.copy": "البيانات المدخلة هنا لا ترسل إلى خادم إلا بعد ربط نظام حقيقي أو مشاركتها عبر واتساب.",
    "cookies.eyebrow": "الكوكيز",
    "cookies.title": "سياسة الكوكيز.",
    "cookies.copy": "هذا الموقع الثابت لا يحتاج إلى ملفات تتبع. قد يستخدم نظام الطلبات مستقبلا ملفات جلسة آمنة."
  }
};

const selectorTranslations = {
  en: [
    [".brand-mark small", "Coffee Shop"],
    [".story-section .eyebrow", "The Place"],
    [".story-section h2", "A neighborhood stop with a relaxed rhythm."],
    [".story-section .section-copy p:nth-of-type(2)", "Burbish Coffee Shop sits near the Telecommunication Regulatory Authority on Salam Street in Al Dhafrah. The public listings describe it as a cafe, and the menu stretches from breakfast and sandwiches to pasta, juices, milkshakes, and hot beverages."],
    [".story-section .section-copy p:nth-of-type(3)", "Inside, the space balances clean seating, dark accent walls, soft pendant light, and a small lounge corner. It feels practical enough for a quick bite and calm enough to stay for a slower drink."],
    [".feature-photo figcaption", "Warm pendant light, dark wall panels, and a calm seating rhythm."],
    [".atmosphere-section .eyebrow", "Atmosphere"],
    [".atmosphere-section h2", "Bright, composed, and easy to settle into."],
    [".signature-section .eyebrow", "Best Picks"],
    [".signature-section h2", "Fresh drinks and easy favorites."],
    [".signature-section .section-intro p:not(.eyebrow)", "A focused selection built around the most appealing public photos: colorful drinks, a sweet plate, and a warm lunch option."],
    [".menu-section .eyebrow", "Menu"],
    [".menu-section h2", "From breakfast plates to fresh drinks."],
    [".menu-section .text-link", "Open live menu"],
    [".full-menu-copy h3", "Full Menu Pages"],
    [".full-menu-copy p", "Tap a menu page to open it in an orientation-aware viewer. Each page scales automatically and keeps the menu text uncropped."],
    [".location-section .eyebrow", "Location"],
    [".location-section h2", "Salam Street, Al Dhafrah."],
    [".contact-section .eyebrow", "Contact"],
    [".contact-section h2", "For menu questions, visits, or inquiries."],
    [".reviews-section .eyebrow", "Reviews"],
    [".reviews-section h2", "Guest impressions, kept live."],
    [".footer-contact-strip a:nth-child(1)", "Call Us"],
    [".footer-contact-strip a:nth-child(2)", "Message Us"],
    [".footer-contact-strip a:nth-child(3)", "Find Us"]
  ],
  ar: [
    [".brand-mark small", "كوفي شوب"],
    [".story-section .eyebrow", "المكان"],
    [".story-section h2", "محطة قريبة بإيقاع هادئ."],
    [".story-section .section-copy p:nth-of-type(2)", "يقع بربيش كوفي شوب بالقرب من هيئة تنظيم الاتصالات في شارع السلام، الظفرة. يقدم خيارات من الإفطار والسندويتشات إلى الباستا والعصائر والميلك شيك والمشروبات الساخنة."],
    [".story-section .section-copy p:nth-of-type(3)", "في الداخل، يجمع المكان بين الجلسات المرتبة، الجدران الداكنة، الإضاءة الدافئة، وركن جلوس هادئ مناسب للطلبات السريعة أو الجلسات الطويلة."],
    [".feature-photo figcaption", "إضاءة دافئة، جدران داكنة، وجلسات هادئة."],
    [".atmosphere-section .eyebrow", "الأجواء"],
    [".atmosphere-section h2", "مشرق، مرتب، وسهل الجلوس."],
    [".signature-section .eyebrow", "الأفضل"],
    [".signature-section h2", "مشروبات طازجة وخيارات سهلة."],
    [".signature-section .section-intro p:not(.eyebrow)", "اختيارات مبنية على أجمل الصور العامة: مشروبات ملونة، طبق حلى، وخيار غداء دافئ."],
    [".menu-section .eyebrow", "القائمة"],
    [".menu-section h2", "من أطباق الإفطار إلى المشروبات الطازجة."],
    [".menu-section .text-link", "فتح القائمة المباشرة"],
    [".full-menu-copy h3", "صفحات القائمة كاملة"],
    [".full-menu-copy p", "اضغط على أي صفحة قائمة لفتحها في عارض مناسب للاتجاه والحجم."],
    [".location-section .eyebrow", "الموقع"],
    [".location-section h2", "شارع السلام، الظفرة."],
    [".contact-section .eyebrow", "التواصل"],
    [".contact-section h2", "لأسئلة القائمة أو الزيارات أو الاستفسارات."],
    [".reviews-section .eyebrow", "التقييمات"],
    [".reviews-section h2", "انطباعات الضيوف، بروابط مباشرة."],
    [".footer-contact-strip a:nth-child(1)", "اتصل بنا"],
    [".footer-contact-strip a:nth-child(2)", "راسلنا"],
    [".footer-contact-strip a:nth-child(3)", "موقعنا"]
  ]
};

const placeholders = {
  en: {
    customerName: "Your name",
    customerPhone: "+971",
    customerAddress: "Building, street, area",
    orderItems: "Example: 2 fresh cocktails, 1 waffle plate"
  },
  ar: {
    customerName: "اسمك",
    customerPhone: "+971",
    customerAddress: "المبنى، الشارع، المنطقة",
    orderItems: "مثال: 2 كوكتيل طازج، 1 وافل"
  }
};

function currentLanguage() {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

function translate(key) {
  const lang = currentLanguage();
  return translations[lang][key] || translations.en[key] || key;
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  selectorTranslations[lang].forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });

  Object.entries(placeholders[lang]).forEach(([name, value]) => {
    const field = document.querySelector(`[name="${name}"]`);
    if (field) field.placeholder = value;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("burbish-language", lang);
}

function setMenuOrientation() {
  if (!dialog || !dialogImage) return;

  const isLandscape = dialogImage.naturalWidth > dialogImage.naturalHeight;
  dialog.classList.toggle("is-landscape", isLandscape);
  dialogImage.classList.toggle("is-landscape", isLandscape);
  dialogImage.classList.toggle("is-portrait", !isLandscape);
}

function openDrawer() {
  if (!drawer || !drawerBackdrop || !drawerTrigger) return;
  drawerBackdrop.hidden = false;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerTrigger.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  if (!drawer || !drawerBackdrop || !drawerTrigger) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawerTrigger.setAttribute("aria-expanded", "false");
  drawerBackdrop.hidden = true;
}

function showBrandPage(page, scrollToSection = true) {
  document.querySelectorAll("[data-page]").forEach((panel) => {
    const isActive = panel.dataset.page === page;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  document.querySelectorAll("[data-page-target]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.pageTarget === page);
  });

  if (scrollToSection) {
    document.querySelector("#brand-pages")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setServiceMode(mode) {
  serviceButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.serviceMode === mode);
  });

  const radio = document.querySelector(`[name="orderMode"][value="${mode}"]`);
  if (radio) radio.checked = true;
}

function prepareOrder() {
  if (!orderForm || !orderSummary || !whatsappOrder) return;

  const formData = new FormData(orderForm);
  const mode = formData.get("orderMode") || "Delivery";
  const name = formData.get("customerName") || "Guest";
  const phone = formData.get("customerPhone") || "";
  const address = formData.get("customerAddress") || "";
  const items = formData.get("orderItems") || "";
  const payment = selectedPayment;
  const lang = currentLanguage();

  const summary = lang === "ar"
    ? `طريقة الطلب: ${mode}\nالدفع: ${payment}\nالاسم: ${name}\nالهاتف: ${phone || "غير مضاف"}\nالعنوان: ${address || "غير مضاف"}\nالطلبات: ${items || "غير مضافة"}`
    : `Order mode: ${mode}\nPayment: ${payment}\nName: ${name}\nPhone: ${phone || "Not added"}\nAddress: ${address || "Not added"}\nItems: ${items || "Not added"}`;

  orderSummary.textContent = summary;
  whatsappOrder.href = `https://wa.me/971501212460?text=${encodeURIComponent(`Hello Burbish, I would like to place an order.\n\n${summary}`)}`;
  if (cartBadge) cartBadge.textContent = "1";
}

if (sectionSelect) {
  sectionSelect.addEventListener("change", (event) => {
    const target = document.querySelector(event.target.value);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      const id = `#${active.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === id);
      });

      if (sectionSelect && sectionSelect.value !== id && sectionSelect.querySelector(`option[value="${id}"]`)) {
        sectionSelect.value = id;
      }
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    revealObserver.observe(section);
  });
} else {
  document.querySelectorAll(".reveal").forEach((section) => {
    section.classList.add("is-visible");
  });
}

document.querySelectorAll("[data-menu-image]").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.getAttribute("data-menu-image");
    const title = button.getAttribute("data-menu-title") || "Menu page";

    dialogImage.src = source;
    dialogImage.alt = title;
    dialogTitle.textContent = title;
    dialog.classList.remove("is-landscape");
    dialogImage.classList.remove("is-landscape", "is-portrait");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(source, "_blank", "noopener,noreferrer");
    }
  });
});

if (dialogImage) {
  dialogImage.addEventListener("load", setMenuOrientation);
}

document.querySelectorAll(".menu-page").forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const image = button.querySelector("img");
    if (!image) return;

    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    image.style.transformOrigin = `${x}% ${y}%`;
  });

  button.addEventListener("mouseleave", () => {
    const image = button.querySelector("img");
    if (image) {
      image.style.transformOrigin = "center top";
    }
  });
});

if (dialogClose) {
  dialogClose.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
    dialog.classList.remove("is-landscape");
    dialogImage.classList.remove("is-landscape", "is-portrait");
  });
}

drawerTrigger?.addEventListener("click", openDrawer);
document.querySelectorAll("[data-drawer-close]").forEach((control) => {
  control.addEventListener("click", closeDrawer);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

document.querySelectorAll("[data-page-target]").forEach((control) => {
  control.addEventListener("click", (event) => {
    const page = control.dataset.pageTarget;
    if (!page) return;
    event.preventDefault();
    closeDrawer();
    showBrandPage(page);
  });
});

document.querySelectorAll(".drawer-menu a:not([data-page-target])").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setServiceMode(button.dataset.serviceMode);
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[name='orderMode']").forEach((radio) => {
  radio.addEventListener("change", () => setServiceMode(radio.value));
});

document.querySelectorAll(".payment-option").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPayment = button.dataset.payment || button.textContent.trim();
    document.querySelectorAll(".payment-option").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});

document.querySelector("#prepareOrder")?.addEventListener("click", prepareOrder);

document.querySelector("#trackOrder")?.addEventListener("click", () => {
  const status = document.querySelector("#trackStatus");
  if (!status) return;
  status.textContent = currentLanguage() === "ar"
    ? "لم يتم ربط نظام تتبع مباشر بعد. تواصل مع المحل عبر واتساب لتأكيد الحالة."
    : "Live tracking is not connected yet. Message the shop on WhatsApp to confirm the status.";
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("burbish-language") || "en");
