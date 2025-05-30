export interface Project {
    slug: string;
    title: string;
    description: string;
    cover: string; // path to first / hero image
    images: string[]; // list of image paths
  }
  
  export const projects: Project[] = [
    {
      slug: "dining-set",
      title: "Dining Set",
      description:
        "A dining set for my house!",
      cover: "/images/projects/dining-set/dining1.png",
      images: [
        "/images/projects/dining-set/dining1.png",
        "/images/projects/dining-set/dining2.png",
        "/images/projects/dining-set/dining3.png",
      ],
    },
    {
      slug: "princess-chair",
      title: "Princess Chair",
      description:
        "Chair made for my neice that she calls her 'princess chair'.",
      cover: "/images/projects/princess-chair/princess1.png",
      images: [
        "/images/projects/princess-chair/princess1.png",
        "/images/projects/princess-chair/princess2.png",
        "/images/projects/princess-chair/princess3.png",
        "/images/projects/princess-chair/princess4.png",
      ],
    },
  ];
  