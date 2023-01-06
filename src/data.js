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
    name: "Квартира на Голосіївській",
    title: "golosiivska-street-flat",
    client: "Яна Зужко",
    date: "Червень 2020",
    location: "Голосіївський район",
    size: "180m²",
    images: [
      "/images/golosiivskiy_project_001.jpg",
      "/images/golosiivskiy_project_002.jpg",
      "/images/golosiivskiy_project_003.jpg",
      "/images/golosiivskiy_project_004.jpg",
      "/images/golosiivskiy_project_005.jpg",
      "/images/golosiivskiy_project_006.jpg",
      "/images/golosiivskiy_project_007.jpg",
      "/images/golosiivskiy_project_008.jpg",
      "/images/golosiivskiy_project_009.jpg",
      "/images/golosiivskiy_project_010.jpg",
    ],
  },
  {
    id: 2,
    name: "Квартира на Печерській",
    title: "pecherska-street-flat",
    client: "Богдан Сірий",
    date: "Жовтень 2021",
    location: "Печерський район",
    size: "154m²",
    images: [
      "/images/pecherskiy_project_001.jpg",
      "/images/pecherskiy_project_002.jpg",
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
