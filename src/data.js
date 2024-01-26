export const ABOUT_DATA = {
  id: 1,
  text: "Привіт! Я Женя, дизайнер інтер'єрів з понад 15 роками досвіду. Обожнюю створювати атмосферні та елегантні простори.",
  // text: "Jane Kuznetsova is an interior designer and creative based out of Kyiv, Ukraine. Her design aesthetic can be described as eclectic, curated and intentional.",
  image: {
    src: "/images/profile/profile-light-blue.jpg",
    alt: "Portrait of Jane Kuznetsova, an interior designer.",
  },
};

export const CONTACTS_DATA = {
  details: [
    {
      id: 2,
      title: "Пошта",
      value: "jendesign@gmail.com",
      link: "mailto:jendesign@gmail.com",
    },
    {
      id: 3,
      title: "Телефон",
      value: "+38 093 555-44-33",
      link: "tel:+38 093 555-44-33",
    },
    {
      id: 4,
      title: "Інстаграм",
      value: "@eugenia_kuznetsova",
      link: "https://www.instagram.com/eugenia_kuznetsova/",
    },
    {
      id: 6,
      title: "Телеграм",
      value: "@EugeniaKuznetsova",
      link: "https://t.me/EugeniaKuznetsova",
    },
  ],
  id: 7,
  fullName: "Євгенія Кузнєцова",
  text: "Будь ласка, зателефонуйте мені, якщо у вас є які-небудь питання або ви бажаєте домовитись про консультацію.",
  country: "Україна",
  city: "Київ",
  image: {
    id: 777,
    src: "/images/contacts/contacts-feature-image.jpg",
    alt: "Інтер'єр вітальні",
  },
};

export const PROJECTS = [
  {
    id: 8,
    title: "Басейна",
    images: [
      {
        id: 9,
        imageUrl:
          "/images/projects/baseyna/project-feature/basseynaya_project_011.jpg",
        alt: "",
        gridSpan: 5,
        aspectRatio: 3 / 2,
      },
      {
        id: 10,
        imageUrl:
          "/images/projects/baseyna/project-feature/basseynaya_project_022.jpg",
        alt: "",
        gridSpan: 4,
        aspectRatio: 4 / 5,
        display: "none",
      },
      {
        id: 11,
        imageUrl:
          "/images/projects/baseyna/project-feature/basseynaya_project_058.jpg",
        alt: "",
        gridSpan: 3,
        aspectRatio: 3 / 2,
        display: "none",
      },
    ],
    route: "baseyna",
  },
  {
    id: 12,
    title: "Дельмар",
    images: [
      {
        id: 13,
        imageUrl:
          "/images/projects/delmar/project-feature/dragomirova_project_012.jpg",
        alt: "",
        gridSpan: 5,
        aspectRatio: 3 / 2,
      },
      {
        id: 14,
        imageUrl:
          "/images/projects/delmar/project-feature/dragomirova_project_013.jpg",
        alt: "",
        gridSpan: 3,
        aspectRatio: 3 / 2,
      },
      {
        id: 15,
        imageUrl:
          "/images/projects/delmar/project-feature/dragomirova_project_038.jpg",
        alt: "",
        gridSpan: 4,
        aspectRatio: 3 / 2,
        display: "none",
      },
    ],
    route: "delmar",
  },
  {
    id: 16,
    title: "Коновальця",
    images: [
      {
        id: 17,
        imageUrl:
          "/images/projects/konovalca/project-feature/konovalca_project_030.jpg",
        alt: "",
        gridSpan: 3,
        aspectRatio: 2 / 3,
      },
      {
        id: 18,
        imageUrl:
          "/images/projects/konovalca/project-feature/konovalca_project_001.jpg",
        alt: "",
        gridSpan: 4,
        aspectRatio: 3 / 2,
      },
      {
        id: 19,
        imageUrl:
          "/images/projects/konovalca/project-feature/konovalca_project_051.jpg",
        alt: "",
        gridSpan: 5,
        aspectRatio: 3 / 2,
        display: "none",
      },
    ],
    route: "konovalca",
  },
];

export const PROJECTS_DATA = [
  {
    id: 20,
    // name: `Квартира на Басейній`,
    name: "Басейна",
    route: "baseyna",
    projectInfo: [
      {
        id: 21,
        category: "Місто",
        text: "Київ, Печерський район",
      },
      {
        id: 22,
        category: "Площа",
        text: "93м²",
      },
      {
        id: 23,
        category: "Рік реалізації",
        text: "2022",
      },
    ],
    planImg: {
      src: "/images/projects/baseyna/plans/baseyna_plans_001.jpg",
      alt: "План-схема квартири на Басейній",
      caption: "Загальна площа дизайну  93м²",
    },

    heroImg: "/images/projects/baseyna/project-hero/basseynaya_project_020.jpg",
    infoImg:
      "/images/projects/baseyna/project-info-image/basseynaya_project_022.jpg",
    prevNextImg: {
      src: "/images/projects/baseyna/project-nav-image/basseynaya_project_024.jpg",
      alt: "...to be filled",
      aspectRatio: 2 / 3,
    },
    images: [
      {
        id: 27,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_001.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 28,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_004.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
        orientation: "vertical",
      },
      {
        id: 29,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_012.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
        orientation: "vertical",
      },
      {
        id: 30,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_007.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 31,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_014.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 32,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_053.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 33,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_026.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
        orientation: "vertical",
      },
      {
        id: 34,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_025.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
        orientation: "vertical",
      },
      {
        id: 35,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_038.jpg",
        alt: "",
        aspectRatio: 16 / 9,
        layout: "full",
        span: `full-start / full-end`,
      },
      {
        id: 36,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_046.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 37,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_044.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 38,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_033.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / col-end`,
        layout: "default",
      },
      {
        id: 39,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_029.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
        orientation: "vertical",
      },
      {
        id: 40,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_035.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
        orientation: "vertical",
      },
      {
        id: 41,
        imgPath:
          "/images/projects/baseyna/project-images/basseynaya_project_028.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / col-end`,
        layout: "default",
      },
    ],
  },
  {
    id: 42,
    name: "Дельмар",
    route: "delmar",
    projectInfo: [
      {
        id: 43,
        category: "Місто",
        text: "Київ, Печерський район",
      },
      {
        id: 44,
        category: "Площа",
        text: "90м²",
      },
      {
        id: 45,
        category: "Рік реалізації",
        text: "2021",
      },
    ],
    heroImg: "/images/projects/delmar/project-hero/dragomirova_project_014.jpg",
    infoImg:
      "/images/projects/delmar/project-info-image/dragomirova_project_015.jpg",
    prevNextImg: {
      src: "/images/projects/delmar/project-nav-image/dragomirova_project_014.jpg",
      alt: "...to be filled",
      aspectRatio: 3 / 2,
    },
    planImg: {
      src: "/images/projects/delmar/plans/delmar_plans_001.jpg",
      alt: "План-схема квартири Дельмар",
      caption: "Загальна площа дизайну  90м²",
    },

    images: [
      {
        id: 49,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_004.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 50,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_011.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 51,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_014.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 52,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_048.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 53,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_019.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
      },
      {
        id: 54,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_049.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
      },
      {
        id: 55,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_038.jpg",
        alt: "",
        aspectRatio: 16 / 9,
        layout: "full",
        span: `full-start / full-end`,
      },
      {
        id: 56,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_044.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 57,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_036.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 58,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_029.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 59,
        imgPath:
          "/images/projects/delmar/project-images/dragomirova_project_031.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
    ],
  },
  {
    id: 60,
    name: "Коновальця",
    route: "konovalca",
    projectInfo: [
      {
        id: 61,
        category: "Місце",
        text: "Київ, Печерський район",
      },
      {
        id: 62,
        category: "Розмір",
        text: "154м²",
      },
      {
        id: 63,
        category: "Рік реалізації",
        text: "2021",
      },
    ],
    heroImg:
      "/images/projects/konovalca/project-hero/konovalca_project_003.jpg",
    infoImg:
      "/images/projects/konovalca/project-info-image/konovalca_project_001v.jpg",
    prevNextImg: {
      src: "/images/projects/konovalca/project-nav-image/konovalca_project_003.jpg",
      alt: "...to be filled",
      aspectRatio: 3 / 2,
    },
    planImg: {
      src: "/images/projects/konovalca/plans/konovalca_plans_001.jpg",
      alt: "План-схема квартири Коновальця",
      caption: "Загальна площа дизайну  154м²",
    },

    images: [
      {
        id: 67,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_002.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 68,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_004.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 69,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_005.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 70,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_006.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 71,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_032.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 72,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_026.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
      },
      {
        id: 73,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_033.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
      },
      {
        id: 74,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_029.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 75,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_049.jpg",
        alt: "",
        aspectRatio: 16 / 9,
        layout: "full",
        span: `full-start / full-end`,
      },
      {
        id: 76,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_050.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 77,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_053.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 78,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_021.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 79,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_024.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 80,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_008.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
      },
      {
        id: 81,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_010.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
      },
      {
        id: 82,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_011.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: 83,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_048.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
      },
      {
        id: 84,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_018.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `col-start / span 5`,
      },
      {
        id: 85,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_020.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        span: `7 / col-end`,
      },
      {
        id: 86,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_036.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 87,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_040.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `4 / 10`,
        orientation: "vertical",
      },
      {
        id: 88,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_041.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `col-start / span 5`,
      },
      {
        id: 89,
        imgPath:
          "/images/projects/konovalca/project-images/konovalca_project_042.jpg",
        alt: "",
        aspectRatio: 3 / 4,
        span: `7 / col-end`,
      },
    ],
  },
];
