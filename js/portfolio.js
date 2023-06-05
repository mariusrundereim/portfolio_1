const studyProjects = [
  {
    title: "Rainy Days",
    assignment: "Course Assignment",
    year: 2022,
    desc: "Lorem ipsum dolor",
    cover: "coverimage.png",
    src: [
      {
        image: "image-1.png",
        alt: "Image text description",
      },
      {
        image: "image-2.png",
        alt: "Image text description",
      },
      {
        image: "image-3.png",
        alt: "Image text description",
      },
      {
        image: "image-4.png",
        alt: "Image text description",
      },
    ],
    url: "www.netlify.com",
  },
];

//console.log(studyProjects[0].src[1].image);

studyProjects[0].src.forEach((item) => {
  console.log(item.image);
});
