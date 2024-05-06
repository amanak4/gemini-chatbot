export const links = [
  {
    name: "Diagnosis",
    submenu: true,
    sublinks: [
      {
        Head: "Image-Analysis",
        sublink: [
          { name: "X-Ray", link: "/x-ray" },
          { name: "Retinal-Vision", link: "/retinal-vision" },
          { name: "MRI", link: "/MRI" },
          { name: "CT-Scan", link: "/CT-Scan" },
        ],
      },
      {
        Head: "Manual-Analysis",
        sublink: [
          { name: "Diabetes", link: "/" },
          { name: "Blood Pressure", link: "/" },
          { name: "Sugar", link: "/" },
          { name: "Kidney Disease", link: "/" },
          { name: "Lung Disease", link: "/" },
        ],
      },
    ],
  },
];
