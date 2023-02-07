export const ABOUT_DATA = {
  id: "a",
  text: "Jane Kuznetsova is an interior designer and creative based out of Kyiv, Ukraine. Her design aesthetic can be described as eclectic, curated and intentional.",
  image: {
    src: "/images/jane-portrait.jpg",
    alt: "Portrait of Jane Kuznetsova, an interior designer.",
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: "Квартира на Голосіївській",
    images: [
      {
        id: "a",
        imageUrl: "/images/dragomanova_project_001.jpg",
        alt: "",
        gridSpan: 5,
        aspectRatio: 3 / 2,
      },
      {
        id: "b",
        imageUrl: "/images/dragomanova_project_002.jpg",
        alt: "",
        gridSpan: 4,
        aspectRatio: 4 / 5,
        display: "none",
      },
      {
        id: "c",
        imageUrl: "/images/dragomanova_project_003.jpg",
        alt: "",
        gridSpan: 3,
        aspectRatio: 3 / 2,
        display: "none",
      },
    ],
    route: "golosiivska-street-flat",
  },
  {
    id: 2,
    title: "Квартира на Печерській",
    images: [
      {
        id: "z",
        imageUrl: "/images/pecherskiy_project_001.jpg",
        alt: "",
        gridSpan: 5,
        aspectRatio: 3 / 2,
      },
      {
        id: "x",
        imageUrl: "/images/pecherskiy_project_002.jpg",
        alt: "",
        gridSpan: 3,
        aspectRatio: 3 / 2,
      },
      {
        id: "c",
        imageUrl: "/images/pecherskiy_project_003.jpg",
        alt: "",
        gridSpan: 4,
        aspectRatio: 3 / 2,
        display: "none",
      },
    ],
    route: "pecherska-street-flat",
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    name: `Квартира 
на Басейній`,
    title: "golosiivska-street-flat",
    client: "Яна Зужко",
    date: "Червень 2020",
    location: "Київ, Печерський район",
    size: "180m²",
    projectInfo: [
      {
        id: "h",
        category: "Місце",
        text: "Київ, Печерський район",
      },
      {
        id: "j",
        category: "Розмір",
        text: "180м2",
      },
      {
        id: "k",
        category: "Замовник",
        text: "Яна Зужко",
      },
    ],
    plans: [
      {
        id: "b",
        image: "/images/dragomanova_plans_001.jpeg",
        alt: "",
        caption: "Підвал",
      },
      {
        id: "n",
        image: "/images/dragomanova_plans_002.jpeg",
        alt: "",
        caption: "Перший поверх",
      },
      {
        id: "m",
        image: "/images/dragomanova_plans_003.jpeg",
        alt: "",
        caption: "Другий поверх",
      },
    ],
    previewImg: "/images/dragomanova_project_001.jpg",
    infoImg: "/images/dragomanova_project_002.jpg",
    images: [
      {
        id: "t",
        imgPath: "/images/dragomanova_project_003.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "default",
        span: `col-start / col-end`,
      },
      {
        id: "y",
        imgPath: "/images/dragomanova_project_004.jpg",
        alt: "",
        aspectRatio: 2 / 3,
        span: `col-start / span 5`,
      },
      {
        id: "u",
        imgPath: "/images/dragomanova_project_005.jpg",
        alt: "",
        aspectRatio: 2 / 3,
        span: `7 / col-end`,
      },
      {
        id: "i",
        imgPath: "/images/dragomanova_project_006.jpg",
        alt: "",
        aspectRatio: 4 / 3,
        layout: "full",
        span: `full-start / full-end`,
      },
    ],
  },
  {
    id: 2,
    name: "Квартира на Печерській",
    title: "pecherska-street-flat",
    client: "Богдан Сірий",
    date: "Жовтень 2021",
    location: "Київ, Печерський район",
    size: "154m²",
    projectInfo: [
      {
        id: "h",
        category: "Місце",
        text: "Київ, Печерський район",
      },
      {
        id: "j",
        category: "Розмір",
        text: "154m²",
      },
      {
        id: "k",
        category: "Замовник",
        text: "Богдан Сірий",
      },
    ],
    previewImg: "/images/pecherskiy_project_001.jpg",
    infoImg: "/images/pecherskiy_project_002.jpg",
    images: [
      "/images/pecherskiy_project_003.jpg",
      "/images/pecherskiy_project_004.jpg",
      "/images/pecherskiy_project_005.jpg",
      "/images/pecherskiy_project_006.jpg",
      "/images/pecherskiy_project_007.jpg",
      "/images/pecherskiy_project_008.jpg",
      "/images/pecherskiy_project_009.jpg",
      "/images/pecherskiy_project_010.jpg",
    ],
  },
];
