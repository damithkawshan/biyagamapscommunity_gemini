export interface Ward {
  id: string;
  number: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
  gnDivisions: GNDivision[];
}

export interface GNDivision {
  id: string;
  code: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
}

export const wards: Ward[] = [
  {
    id: 'ward-1',
    number: '01',
    name: {
      en: 'Ward 01 - Biyagama Central',
      si: 'වාට්ටුව 01 - බියගම මධ්‍යම',
      tm: 'வார்டு 01 - பியகம மத்திய'
    },
    gnDivisions: [
      {
        id: 'gn-01-01',
        code: '471A',
        name: {
          en: 'Biyagama Town',
          si: 'බියගම නගරය',
          tm: 'பியகம நகரம்'
        }
      },
      {
        id: 'gn-01-02',
        code: '471B',
        name: {
          en: 'Biyagama South',
          si: 'බියගම දකුණ',
          tm: 'பியகம தெற்கு'
        }
      }
    ]
  },
  {
    id: 'ward-2',
    number: '02',
    name: {
      en: 'Ward 02 - Kochchikade',
      si: 'වාට්ටුව 02 - කොච්චිකඩේ',
      tm: 'வார்டு 02 - கொச்சிகடே'
    },
    gnDivisions: [
      {
        id: 'gn-02-01',
        code: '472A',
        name: {
          en: 'Kochchikade North',
          si: 'කොච්චිකඩේ උතුර',
          tm: 'கொச்சிகடே வடக்கு'
        }
      },
      {
        id: 'gn-02-02',
        code: '472B',
        name: {
          en: 'Kochchikade South',
          si: 'කොච්චිකඩේ දකුණ',
          tm: 'கொச்சிகடே தெற்கு'
        }
      }
    ]
  },
  {
    id: 'ward-3',
    number: '03',
    name: {
      en: 'Ward 03 - Walgama',
      si: 'වාට්ටුව 03 - වල්ගම',
      tm: 'வார்டு 03 - வல்கம'
    },
    gnDivisions: [
      {
        id: 'gn-03-01',
        code: '473A',
        name: {
          en: 'Walgama East',
          si: 'වල්ගම නැගෙනහිර',
          tm: 'வல்கம கிழக்கு'
        }
      },
      {
        id: 'gn-03-02',
        code: '473B',
        name: {
          en: 'Walgama West',
          si: 'වල්ගම බටහිර',
          tm: 'வல்கம மேற்கு'
        }
      }
    ]
  },
  {
    id: 'ward-4',
    number: '04',
    name: {
      en: 'Ward 04 - Hunupitiya',
      si: 'වාට්ටුව 04 - හුණුපිටිය',
      tm: 'வார்டு 04 - ஹுனுபிட்டிய'
    },
    gnDivisions: [
      {
        id: 'gn-04-01',
        code: '474A',
        name: {
          en: 'Hunupitiya North',
          si: 'හුණුපිටිය උතුර',
          tm: 'ஹுனுபிட்டிய வடக்கு'
        }
      },
      {
        id: 'gn-04-02',
        code: '474B',
        name: {
          en: 'Hunupitiya South',
          si: 'හුණුපිටිය දකුණ',
          tm: 'ஹுனுபிட்டிய தெற்கு'
        }
      }
    ]
  },
  {
    id: 'ward-5',
    number: '05',
    name: {
      en: 'Ward 05 - Udugampola',
      si: 'වාට්ටුව 05 - උඩුගම්පොල',
      tm: 'வார்டு 05 - உடுகம்போல'
    },
    gnDivisions: [
      {
        id: 'gn-05-01',
        code: '475A',
        name: {
          en: 'Udugampola Central',
          si: 'උඩුගම්පොල මධ්‍යම',
          tm: 'உடுகம்போல மத்திய'
        }
      },
      {
        id: 'gn-05-02',
        code: '475B',
        name: {
          en: 'Udugampola East',
          si: 'උඩුගම්පොල නැගෙනහිර',
          tm: 'உடுகம்போல கிழக்கு'
        }
      }
    ]
  },
  {
    id: 'ward-6',
    number: '06',
    name: {
      en: 'Ward 06 - Malwana',
      si: 'වාට්ටුව 06 - මල්වාන',
      tm: 'வார்டு 06 - மல்வான'
    },
    gnDivisions: [
      {
        id: 'gn-06-01',
        code: '476A',
        name: {
          en: 'Malwana Town',
          si: 'මල්වාන නගරය',
          tm: 'மல்வான நகரம்'
        }
      },
      {
        id: 'gn-06-02',
        code: '476B',
        name: {
          en: 'Malwana North',
          si: 'මල්වාන උතුර',
          tm: 'மல்வான வடக்கு'
        }
      }
    ]
  },
  {
    id: 'ward-7',
    number: '07',
    name: {
      en: 'Ward 07 - Kirindiwela',
      si: 'වාට්ටුව 07 - කිරිඳිවෙල',
      tm: 'வார்டு 07 - கிரிந்திவெல'
    },
    gnDivisions: [
      {
        id: 'gn-07-01',
        code: '477A',
        name: {
          en: 'Kirindiwela Central',
          si: 'කිරිඳිවෙල මධ්‍යම',
          tm: 'கிரிந்திவெல மத்திய'
        }
      },
      {
        id: 'gn-07-02',
        code: '477B',
        name: {
          en: 'Kirindiwela South',
          si: 'කිරිඳිවෙල දකුණ',
          tm: 'கிரிந்திவெல தெற்கு'
        }
      }
    ]
  },
  {
    id: 'ward-8',
    number: '08',
    name: {
      en: 'Ward 08 - Gonawala',
      si: 'වාට්ටුව 08 - ගෝනාවල',
      tm: 'வார்டு 08 - கோனாவல'
    },
    gnDivisions: [
      {
        id: 'gn-08-01',
        code: '478A',
        name: {
          en: 'Gonawala East',
          si: 'ගෝනාවල නැගෙනහිර',
          tm: 'கோனாவல கிழக்கு'
        }
      },
      {
        id: 'gn-08-02',
        code: '478B',
        name: {
          en: 'Gonawala West',
          si: 'ගෝනාවල බටහිර',
          tm: 'கோனாவல மேற்கு'
        }
      }
    ]
  }
];
