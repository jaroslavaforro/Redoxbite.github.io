(function () {
  const translations = {
    sk: {
      pageTitle: "Redox Bite | by ZEOZOE",
      metaDesc:
        "REDOX BITE by ZEOZOE — Funkčná redoxná tyčinka so záporným ORP pre prirodzenú bunkovú energiu a podporu trávenia. Berry Digest. Vyrobené na Slovensku.",
      navAbout: "O nás",
      navShop: "Obchod",
      navBenefits: "Benefity",
      navIngredients: "Zloženie",
      navContact: "Kontakt",
      navToggle: "Otvoriť menu",
      langAria: "Prepnúť do angličtiny",
      heroSub:
        'Úplne nový prístup k funkčným potravinám. Vďaka merateľnému zápornému oxidačno-redukčnému potenciálu <span class="orp-badge">[ORP -30mV]</span> podporuje prirodzenú energiu buniek a efektívne trávenie na hĺbkovej úrovni.',
      btnShop: "Nakupovať",
      btnZeozoeShop: "Obchod ZEOZOE",
      statOrp: "Záporné ORP",
      statSugar: "Pridaný cukor",
      statVegan: "Vegánske",
      gallerySingleAlt: "REDOX BITE Berry Digest — jedna tyčinka",
      galleryPackAlt: "REDOX BITE Berry Digest — výhodné balenie 30 tyčiniek",
      gallerySingleCap: "Berry Digest — 1 tyčinka (40 g)",
      galleryPackCap: "Výhodné balenie — 30 tyčiniek",
      aboutLabel: "O produkte",
      aboutTitle: 'Funkčná redoxná tyčinka pre <span class="highlight">reštart trávenia</span>',
      aboutP1:
        "REDOX BITE Berry Digest predstavuje úplne novú generáciu funkčných potravín. Spája záporný oxidačno-redukčný potenciál (–30 mV), silu polyfenolov a resveratrolu s múdrosťou Tradičnej čínskej medicíny (TČM) — a vytvára tak revolučný produkt.",
      aboutP2:
        "Nie je to len tyčinka. Je to kombinácia západnej biochémie a tisícročnej filozofie TČM, ktorá vníma trávenie ako stred tela a zdroj životnej energie Qi.",
      aboutP3:
        "Tento unikátny produkt spája silu polyfenolov, resveratrolu, prebiotickej vlákniny a kvalitného hrachového proteínu s múdrosťou TČM, čím pomáha vytvárať ideálne podmienky pre zdravšie, ľahšie a vitálnejšie trávenie.",
      aboutCardTitle: "Čo je Redox technológia?",
      aboutCardP1:
        "ORP (oxidačno-redukčný potenciál) vyjadruje schopnosť látky odovzdávať elektróny — teda energiu. Čím je hodnota nižšia (záporná), tým viac energie môže látka odovzdať.",
      aboutCardP2:
        "Vďaka špeciálnej fotónovej a frekvenčnej úprave majú zložky upravenú štruktúru, ktorú telo dokáže okamžite absorbovať a premeniť na čistú vitalitu a energiu.",
      aboutCredit: 'Registrovaná značka <strong>ZEOZOE®</strong> &middot; Vyrobené na Slovensku',
      productsLabel: "Produkty",
      productsTitle: 'Redox Bite by <span class="highlight">ZEOZOE</span>',
      productsIntro: "Berry Digest — funkčná tyčinka pre energiu a trávenie. Dostupné opäť od 14. 7.",
      badgeNew: "Novinka",
      productSingleDesc:
        "Funkčná redoxná tyčinka — 1 × 40 g. Podporuje bunkovú energiu a rovnováhu trávenia vďaka zápornému ORP –30 mV.",
      tagEnergy: "Energia",
      tagDigest: "Trávenie",
      tagNatural: "Prírodné",
      btnBuyZeozoe: "Kúpiť na ZEOZOE",
      productPackAlt: "REDOX BITE Berry Digest výhodné balenie 30 tyčiniek",
      productPackTitle: "REDOX BITE Berry Digest — výhodné balenie",
      productPackDesc:
        "30 funkčných tyčiniek (30 × 40 g) so záporným ORP –30 mV. Ideálne na kompletnú 14-dňovú kúru reštartu trávenia.",
      tagBars: "30 tyčiniek",
      tagPack: "Výhodné balenie",
      tagCure: "14-dňová kúra",
      benefitsLabel: "Benefity",
      benefitsTitle: 'Prečo REDOX BITE <span class="highlight">Berry Digest</span>?',
      feat1Title: "Záporné ORP",
      feat1Text: "–30 mV pôsobí ako aktívny bunkový dobíjač a znižuje oxidačný stres v tráviacom trakte.",
      feat2Title: "Polyfenoly a resveratrol",
      feat2Text: "Chránia mikroflóru a podporujú zdravie črevnej sliznice.",
      feat3Title: "Prebiotická vláknina",
      feat3Text: "Oligofruktóza a prírodná vláknina vyživujú priaznivé črevné baktérie.",
      feat4Title: "17 % hrachového proteínu",
      feat4Text: "Kvalitné rastlinné stavebné kamene bez zaťaženia žalúdka.",
      feat5Title: "Bez pridaného cukru",
      feat5Text:
        "Prirodzenú sladkosť tvorí datľová pasta a lyofilizované maliny. Bez umelých farbív a syntetických aróm.",
      feat6Title: "Vegánske zloženie",
      feat6Text: "Vhodné pre rastlinný životný štýl. Vyrobené na Slovensku s inovatívnou redox technológiou.",
      benefitsMainTitle: "Hlavné benefity",
      ben1: "Podporuje efektívne trávenie a vstrebávanie živín",
      ben2: "Zmierňuje pocit nafukovania a ťažoby",
      ben3: "Prebúdza metabolizmus a vnútornú vitalitu",
      ben4: "Chráni črevnú mikroflóru vďaka polyfenolovému štítu",
      ben5: "Dodáva stabilnú energiu bez výkyvov hladiny cukru",
      ben6: "Svieža chuť malín — zdravé potešenie bez výčitiek",
      ben7: "Pomáha obnoviť rovnováhu trávenia a premeniť jedlo na energiu Qi, nie na únavu",
      ingLabel: "Zloženie a použitie",
      ingTitle: 'Čo je vo vnútri a <span class="highlight">ako používať</span>',
      ingHeading: "Zloženie",
      ingText:
        "Datľová pasta 30 %, oligofruktóza (vláknina), hrachový proteín 17 %, pražená kešu pasta 13 %, kúsky kešu 5,5 %, polyfenolový extrakt, resveratrol, kúsky lyofilizovaných malín 3,3 %, slnečnicové semienka, tekvicové semienka, kakaové maslo, prírodná malinová aróma, antioxidant: extrakt bohatý na tokoferoly.",
      ingAllergens:
        "<strong>Alergény:</strong> Môže obsahovať mlieko, sóju, arašidy a iné orechy. Môže obsahovať malé kúsky kôstok a škrupín.",
      ingDisclaimer:
        "Doplnok stravy nie je náhradou vyváženej a pestrej stravy ani zdravého životného štýlu. Neprekračujte odporúčanú dennú dávku. Uchovávajte mimo dosahu detí. Ak užívate lieky alebo trpíte zdravotnými ťažkosťami, pred použitím sa poraďte s lekárom. Informácie vychádzajú z tradičného používania prírodných zložiek a zásad TČM — nejde o lekárske tvrdenia.",
      usageTitle: "14-dňová kúra reštartu trávenia",
      usage1: "<strong>Dávka:</strong> 1 až 2 tyčinky denne",
      usage2: "<strong>Kedy:</strong> Ideálne ako dopoludňajšia desiata alebo olovrant medzi jedlami",
      usage3:
        "<strong>Tip:</strong> Tyčinku zapíjajte vlažnou vodou alebo teplým čajom — podporíte oheň trávenia podľa zásad TČM",
      usage4: "<strong>Prvých 14 dní:</strong> Obmedzte studené a surové nápoje pre maximálnu podporu trávenia",
      usageFooter: "Odovzdávanie elektrónov. Prirodzená vitalita.",
      trustTitle: 'Značka, ktorej môžete <span class="highlight">dôverovať</span>',
      prom1: "Certifikovaný výrobca",
      prom2: "Vyrobené na Slovensku",
      prom3: "Doprava zadarmo od 80 €",
      prom4: "Prírodné zloženie",
      prom5: "Nový pocit",
      prom6: "Netestované na zvieratách",
      ctaTitle: 'Pripravení na <span class="highlight">reštart trávenia</span>?',
      ctaText: "Objednajte si REDOX BITE Berry Digest výhradne v oficiálnom obchode ZEOZOE.",
      ctaBtn: "Nakupovať Redox Bite",
      contactLabel: "Kontakt",
      contactTitle: 'Kontaktujte <span class="highlight">ZEOZOE</span>',
      phName: "Vaše meno",
      phEmail: "E-mailová adresa",
      phMessage: "Vaša správa...",
      btnSend: "Odoslať správu",
      formNote: "Ďakujeme! Váš e-mailový klient by sa mal otvoriť so správou.",
      phoneLabel: "Telefón",
      phoneHours: "Pracovné dni 09:00–16:00",
      emailLabel: "E-mail",
      shopLabel: "Obchod",
      footerCredit: "by ZEOZOE® &middot; Vyrobené na Slovensku &middot; &copy; 2026",
      mailSubjectPrefix: "Redox Bite — Správa od "
    },
    en: {
      pageTitle: "Redox Bite | by ZEOZOE",
      metaDesc:
        "REDOX BITE by ZEOZOE — Functional redox bar with negative ORP for natural cellular energy and digestion support. Berry Digest. Made in Slovakia.",
      navAbout: "About",
      navShop: "Shop",
      navBenefits: "Benefits",
      navIngredients: "Ingredients",
      navContact: "Contact",
      navToggle: "Open menu",
      langAria: "Switch to Slovak",
      heroSub:
        'A completely new approach to functional foods. Thanks to a measurable negative oxidation-reduction potential <span class="orp-badge">[ORP -30mV]</span>, it supports natural cellular energy and effective digestion at a deeper level.',
      btnShop: "Shop now",
      btnZeozoeShop: "ZEOZOE store",
      statOrp: "Negative ORP",
      statSugar: "Added sugar",
      statVegan: "Vegan",
      gallerySingleAlt: "REDOX BITE Berry Digest — single bar",
      galleryPackAlt: "REDOX BITE Berry Digest — value pack of 30 bars",
      gallerySingleCap: "Berry Digest — 1 bar (40 g)",
      galleryPackCap: "Value pack — 30 bars",
      aboutLabel: "About the product",
      aboutTitle: 'A functional redox bar for a <span class="highlight">digestion reset</span>',
      aboutP1:
        "REDOX BITE Berry Digest represents a completely new generation of functional foods. It combines negative oxidation-reduction potential (–30 mV), the power of polyphenols and resveratrol with the wisdom of Traditional Chinese Medicine (TCM) — creating a revolutionary product.",
      aboutP2:
        "It is not just a bar. It is a combination of Western biochemistry and the thousand-year philosophy of TCM, which sees digestion as the center of the body and the source of vital Qi energy.",
      aboutP3:
        "This unique product combines the power of polyphenols, resveratrol, prebiotic fiber and high-quality pea protein with TCM wisdom, helping create ideal conditions for healthier, lighter and more vital digestion.",
      aboutCardTitle: "What is Redox technology?",
      aboutCardP1:
        "ORP (oxidation-reduction potential) expresses a substance’s ability to donate electrons — that is, energy. The lower (more negative) the value, the more energy the substance can give.",
      aboutCardP2:
        "Thanks to special photonic and frequency processing, the ingredients have a refined structure that the body can absorb immediately and convert into pure vitality and energy.",
      aboutCredit: 'Registered brand <strong>ZEOZOE®</strong> &middot; Made in Slovakia',
      productsLabel: "Products",
      productsTitle: 'Redox Bite by <span class="highlight">ZEOZOE</span>',
      productsIntro: "Berry Digest — a functional bar for energy and digestion. Available again from July 14.",
      badgeNew: "New",
      productSingleDesc:
        "Functional redox bar — 1 × 40 g. Supports cellular energy and digestive balance thanks to negative ORP –30 mV.",
      tagEnergy: "Energy",
      tagDigest: "Digestion",
      tagNatural: "Natural",
      btnBuyZeozoe: "Buy on ZEOZOE",
      productPackAlt: "REDOX BITE Berry Digest value pack of 30 bars",
      productPackTitle: "REDOX BITE Berry Digest — value pack",
      productPackDesc:
        "30 functional bars (30 × 40 g) with negative ORP –30 mV. Ideal for a complete 14-day digestion reset.",
      tagBars: "30 bars",
      tagPack: "Value pack",
      tagCure: "14-day reset",
      benefitsLabel: "Benefits",
      benefitsTitle: 'Why REDOX BITE <span class="highlight">Berry Digest</span>?',
      feat1Title: "Negative ORP",
      feat1Text: "–30 mV acts as an active cellular charger and reduces oxidative stress in the digestive tract.",
      feat2Title: "Polyphenols and resveratrol",
      feat2Text: "They protect the microbiota and support intestinal mucosal health.",
      feat3Title: "Prebiotic fiber",
      feat3Text: "Oligofructose and natural fiber nourish beneficial gut bacteria.",
      feat4Title: "17% pea protein",
      feat4Text: "High-quality plant building blocks without burdening the stomach.",
      feat5Title: "No added sugar",
      feat5Text:
        "Natural sweetness comes from date paste and freeze-dried raspberries. No artificial colors or synthetic flavors.",
      feat6Title: "Vegan formula",
      feat6Text: "Suitable for a plant-based lifestyle. Made in Slovakia with innovative redox technology.",
      benefitsMainTitle: "Key benefits",
      ben1: "Supports effective digestion and nutrient absorption",
      ben2: "Helps ease bloating and heaviness",
      ben3: "Awakens metabolism and inner vitality",
      ben4: "Protects gut microbiota with a polyphenol shield",
      ben5: "Provides stable energy without blood sugar spikes",
      ben6: "Fresh raspberry taste — healthy pleasure without guilt",
      ben7: "Helps restore digestive balance and turn food into Qi energy, not fatigue",
      ingLabel: "Ingredients & use",
      ingTitle: 'What’s inside and <span class="highlight">how to use it</span>',
      ingHeading: "Ingredients",
      ingText:
        "Date paste 30%, oligofructose (fiber), pea protein 17%, roasted cashew paste 13%, cashew pieces 5.5%, polyphenol extract, resveratrol, freeze-dried raspberry pieces 3.3%, sunflower seeds, pumpkin seeds, cocoa butter, natural raspberry flavor, antioxidant: tocopherol-rich extract.",
      ingAllergens:
        "<strong>Allergens:</strong> May contain milk, soy, peanuts and other nuts. May contain small pieces of pits and shells.",
      ingDisclaimer:
        "A dietary supplement is not a substitute for a balanced and varied diet or a healthy lifestyle. Do not exceed the recommended daily dose. Keep out of reach of children. If you take medication or have health concerns, consult a doctor before use. Information is based on traditional use of natural ingredients and TCM principles — these are not medical claims.",
      usageTitle: "14-day digestion reset",
      usage1: "<strong>Dose:</strong> 1 to 2 bars per day",
      usage2: "<strong>When:</strong> Ideally as a mid-morning snack or afternoon bite between meals",
      usage3:
        "<strong>Tip:</strong> Enjoy the bar with lukewarm water or warm tea — this supports digestive fire according to TCM principles",
      usage4: "<strong>First 14 days:</strong> Limit cold and raw drinks for maximum digestive support",
      usageFooter: "Electron donation. Natural vitality.",
      trustTitle: 'A brand you can <span class="highlight">trust</span>',
      prom1: "Certified manufacturer",
      prom2: "Made in Slovakia",
      prom3: "Free shipping from €80",
      prom4: "Natural formula",
      prom5: "A new feeling",
      prom6: "Not tested on animals",
      ctaTitle: 'Ready for a <span class="highlight">digestion reset</span>?',
      ctaText: "Order REDOX BITE Berry Digest exclusively in the official ZEOZOE store.",
      ctaBtn: "Shop Redox Bite",
      contactLabel: "Contact",
      contactTitle: 'Contact <span class="highlight">ZEOZOE</span>',
      phName: "Your name",
      phEmail: "Email address",
      phMessage: "Your message...",
      btnSend: "Send message",
      formNote: "Thank you! Your email client should open with the message.",
      phoneLabel: "Phone",
      phoneHours: "Weekdays 09:00–16:00",
      emailLabel: "Email",
      shopLabel: "Store",
      footerCredit: "by ZEOZOE® &middot; Made in Slovakia &middot; &copy; 2026",
      mailSubjectPrefix: "Redox Bite — Message from "
    }
  };

  const STORAGE_KEY = "redoxbite-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "sk";

  function getDict(lang) {
    return translations[lang] || translations.sk;
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "sk";
    localStorage.setItem(STORAGE_KEY, currentLang);
    document.documentElement.lang = currentLang;

    const dict = getDict(currentLang);
    const nextLabel = currentLang === "sk" ? "EN" : "SK";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-content");
      if (dict[key] != null) el.setAttribute("content", dict[key]);
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl && dict.pageTitle) titleEl.textContent = dict.pageTitle;

    const codeEl = document.getElementById("langCode");
    const toggleEl = document.getElementById("langToggle");
    if (codeEl) codeEl.textContent = nextLabel;
    if (toggleEl) toggleEl.setAttribute("aria-label", dict.langAria);
  }

  function toggleLanguage() {
    applyLanguage(currentLang === "sk" ? "en" : "sk");
  }

  window.RedoxI18n = {
    applyLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    getLang: function () {
      return currentLang;
    },
    t: function (key) {
      return getDict(currentLang)[key] || key;
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLang);
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", toggleLanguage);
  });
})();
