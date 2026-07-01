export type DestFacets = {
  language: string;
  currency: string;
  airport: string;
  country: string;
};

type FacetMap = Record<string, Record<string, DestFacets>>;

export const destFacets: FacetMap = {
  "marrakech": {
    en: { language: "Arabic, Tamazight, French",      currency: "Moroccan Dirham (MAD)",       airport: "Marrakech Menara Airport (RAK)",              country: "Morocco"    },
    ar: { language: "العربية، تمازيغت، الفرنسية",     currency: "الدرهم المغربي (MAD)",         airport: "مطار مراكش المنارة (RAK)",                    country: "المغرب"     },
    fr: { language: "Arabe, Tamazight, Français",     currency: "Dirham marocain (MAD)",        airport: "Aéroport Marrakech-Menara (RAK)",              country: "Maroc"      },
    es: { language: "Árabe, Tamazight, Francés",      currency: "Dírham marroquí (MAD)",        airport: "Aeropuerto Marrakech-Menara (RAK)",            country: "Marruecos"  },
    de: { language: "Arabisch, Tamazight, Französisch",currency: "Marokkanischer Dirham (MAD)",  airport: "Flughafen Marrakesch-Menara (RAK)",            country: "Marokko"    },
    it: { language: "Arabo, Tamazight, Francese",     currency: "Dirham marocchino (MAD)",      airport: "Aeroporto di Marrakech-Menara (RAK)",          country: "Marocco"    },
  },
  "sahara-desert": {
    en: { language: "Arabic, Tamazight (Amazigh)",    currency: "Moroccan Dirham (MAD)",        airport: "Errachidia Airport (ERH) or Ouarzazate (OZZ)", country: "Morocco"    },
    ar: { language: "العربية، تمازيغت (الأمازيغية)",  currency: "الدرهم المغربي (MAD)",         airport: "مطار الراشيدية (ERH) أو ورزازات (OZZ)",       country: "المغرب"     },
    fr: { language: "Arabe, Tamazight (Amazigh)",     currency: "Dirham marocain (MAD)",        airport: "Aéroport d'Errachidia (ERH) ou Ouarzazate (OZZ)", country: "Maroc"    },
    es: { language: "Árabe, Tamazight (Amazigh)",     currency: "Dírham marroquí (MAD)",        airport: "Aeropuerto de Errachidia (ERH) u Ouarzazate (OZZ)", country: "Marruecos" },
    de: { language: "Arabisch, Tamazight (Amazigh)",  currency: "Marokkanischer Dirham (MAD)",  airport: "Flughafen Errachidia (ERH) oder Ouarzazate (OZZ)", country: "Marokko"  },
    it: { language: "Arabo, Tamazight (Amazigh)",     currency: "Dirham marocchino (MAD)",      airport: "Aeroporto di Errachidia (ERH) o Ouarzazate (OZZ)", country: "Marocco"  },
  },
  "chefchaouen": {
    en: { language: "Arabic, Tarifit, Spanish, French",         currency: "Moroccan Dirham (MAD)",      airport: "Tangier Ibn Battouta Airport (TNG)",              country: "Morocco"   },
    ar: { language: "العربية، تاريفيت، الإسبانية، الفرنسية",   currency: "الدرهم المغربي (MAD)",        airport: "مطار طنجة ابن بطوطة (TNG)",                      country: "المغرب"    },
    fr: { language: "Arabe, Tarifit, Espagnol, Français",       currency: "Dirham marocain (MAD)",      airport: "Aéroport Ibn Battouta de Tanger (TNG)",           country: "Maroc"     },
    es: { language: "Árabe, Tarifit, Español, Francés",         currency: "Dírham marroquí (MAD)",      airport: "Aeropuerto Ibn Battouta de Tánger (TNG)",         country: "Marruecos" },
    de: { language: "Arabisch, Tarifit, Spanisch, Französisch", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Tanger-Ibn Battouta (TNG)",             country: "Marokko"   },
    it: { language: "Arabo, Tarifit, Spagnolo, Francese",       currency: "Dirham marocchino (MAD)",    airport: "Aeroporto Ibn Battouta di Tangeri (TNG)",         country: "Marocco"   },
  },
  "atlas-mountains": {
    en: { language: "Tamazight (Amazigh), Arabic, French",     currency: "Moroccan Dirham (MAD)",       airport: "Marrakech Menara Airport (RAK)",              country: "Morocco"    },
    ar: { language: "تمازيغت (الأمازيغية)، العربية، الفرنسية",currency: "الدرهم المغربي (MAD)",         airport: "مطار مراكش المنارة (RAK)",                    country: "المغرب"     },
    fr: { language: "Tamazight (Amazigh), Arabe, Français",    currency: "Dirham marocain (MAD)",       airport: "Aéroport Marrakech-Menara (RAK)",              country: "Maroc"      },
    es: { language: "Tamazight (Amazigh), Árabe, Francés",     currency: "Dírham marroquí (MAD)",       airport: "Aeropuerto Marrakech-Menara (RAK)",            country: "Marruecos"  },
    de: { language: "Tamazight (Amazigh), Arabisch, Französisch", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Marrakesch-Menara (RAK)",           country: "Marokko"    },
    it: { language: "Tamazight (Amazigh), Arabo, Francese",    currency: "Dirham marocchino (MAD)",     airport: "Aeroporto di Marrakech-Menara (RAK)",          country: "Marocco"    },
  },
  "fes": {
    en: { language: "Arabic, French, Tamazight",    currency: "Moroccan Dirham (MAD)",       airport: "Fes-Saïss Airport (FEZ)",               country: "Morocco"    },
    ar: { language: "العربية، الفرنسية، تمازيغت",  currency: "الدرهم المغربي (MAD)",         airport: "مطار فاس سايس (FEZ)",                   country: "المغرب"     },
    fr: { language: "Arabe, Français, Tamazight",   currency: "Dirham marocain (MAD)",       airport: "Aéroport de Fès-Saïss (FEZ)",           country: "Maroc"      },
    es: { language: "Árabe, Francés, Tamazight",    currency: "Dírham marroquí (MAD)",       airport: "Aeropuerto de Fez-Saïss (FEZ)",          country: "Marruecos"  },
    de: { language: "Arabisch, Französisch, Tamazight", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Fès-Saïss (FEZ)",           country: "Marokko"    },
    it: { language: "Arabo, Francese, Tamazight",   currency: "Dirham marocchino (MAD)",     airport: "Aeroporto di Fes-Saïss (FEZ)",          country: "Marocco"    },
  },
  "essaouira": {
    en: { language: "Arabic, French, Tamazight",    currency: "Moroccan Dirham (MAD)",       airport: "Essaouira Mogador Airport (ESU)",        country: "Morocco"    },
    ar: { language: "العربية، الفرنسية، تمازيغت",  currency: "الدرهم المغربي (MAD)",         airport: "مطار الصويرة موكادور (ESU)",             country: "المغرب"     },
    fr: { language: "Arabe, Français, Tamazight",   currency: "Dirham marocain (MAD)",       airport: "Aéroport d'Essaouira-Mogador (ESU)",     country: "Maroc"      },
    es: { language: "Árabe, Francés, Tamazight",    currency: "Dírham marroquí (MAD)",       airport: "Aeropuerto de Essaouira-Mogador (ESU)",  country: "Marruecos"  },
    de: { language: "Arabisch, Französisch, Tamazight", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Essaouira-Mogador (ESU)",   country: "Marokko"    },
    it: { language: "Arabo, Francese, Tamazight",   currency: "Dirham marocchino (MAD)",     airport: "Aeroporto di Essaouira-Mogador (ESU)",   country: "Marocco"    },
  },
  "casablanca": {
    en: { language: "Arabic, French, Tamazight",    currency: "Moroccan Dirham (MAD)",       airport: "Mohammed V International Airport (CMN)", country: "Morocco"    },
    ar: { language: "العربية، الفرنسية، تمازيغت",  currency: "الدرهم المغربي (MAD)",         airport: "مطار محمد الخامس الدولي (CMN)",          country: "المغرب"     },
    fr: { language: "Arabe, Français, Tamazight",   currency: "Dirham marocain (MAD)",       airport: "Aéroport Mohammed V (CMN)",              country: "Maroc"      },
    es: { language: "Árabe, Francés, Tamazight",    currency: "Dírham marroquí (MAD)",       airport: "Aeropuerto Mohamed V (CMN)",             country: "Marruecos"  },
    de: { language: "Arabisch, Französisch, Tamazight", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Mohammed V (CMN)",          country: "Marokko"    },
    it: { language: "Arabo, Francese, Tamazight",   currency: "Dirham marocchino (MAD)",     airport: "Aeroporto Mohammed V (CMN)",             country: "Marocco"    },
  },
  "agadir": {
    en: { language: "Arabic, Tamazight (Souss), French",    currency: "Moroccan Dirham (MAD)",       airport: "Agadir Al Massira Airport (AGA)",        country: "Morocco"    },
    ar: { language: "العربية، تمازيغت (السوس)، الفرنسية",  currency: "الدرهم المغربي (MAD)",         airport: "مطار أكادير المسيرة (AGA)",              country: "المغرب"     },
    fr: { language: "Arabe, Tamazight (Souss), Français",   currency: "Dirham marocain (MAD)",       airport: "Aéroport Agadir Al Massira (AGA)",       country: "Maroc"      },
    es: { language: "Árabe, Tamazight (Souss), Francés",    currency: "Dírham marroquí (MAD)",       airport: "Aeropuerto Agadir Al Massira (AGA)",     country: "Marruecos"  },
    de: { language: "Arabisch, Tamazight (Souss), Französisch", currency: "Marokkanischer Dirham (MAD)", airport: "Flughafen Agadir-Al Massira (AGA)",   country: "Marokko"    },
    it: { language: "Arabo, Tamazight (Souss), Francese",   currency: "Dirham marocchino (MAD)",     airport: "Aeroporto Agadir Al Massira (AGA)",      country: "Marocco"    },
  },
};
