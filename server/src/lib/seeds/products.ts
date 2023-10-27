import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  console.log("PRODUCTS SEED RUN");
  const products = [
    {
      id: 1,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694095159/Shoes_rmw43z.png",
      price: 1398,
      rating: 400,
      subtext: "1258 bids, 359 watchers $5.95 for shipping",
      text: "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
      discount: 0
    },
    {
      id: 2,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694095711/plastic_ee0oqv.png",
      price: 1248,
      rating: 500,
      subtext: "Wordwide shitting available Buyers protection possible!",
      text: "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
      discount: 0
    },
    {
      id: 3,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/7_jspycv.png",
      price: 1395,
      rating: 456,
      subtext: "Showcasing onHovered state",
      text: "John Von Ebalkin SPRING ",
      discount: 50
    },
    {
      id: 4,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/6_bsnh5z.png",
      price: 12899,
      rating: 200,
      subtext: "Showcasing onHovered state",
      text: "Prototyping items to create a lot if useless things...",
      discount: 0
    },
    {
      id: 5,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/11_dqja4j.png",
      price: 125,
      rating: 400,
      subtext: "Eligible for Shipping To Mars or somewhere else",
      text: "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
      discount: 15
    },
    {
      id: 6,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694095159/Shoes_rmw43z.png",
      price: 2325,
      rating: 500,
      subtext: "1258 bids, 359 watchers $5.95 for shipping",
      text: "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
      discount: 0
    },
    {
      id: 7,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/5_fhsd8t.png",
      price: 1248,
      rating: 499,
      subtext: "Wordwide shifting available Buyers protection possible!",
      text: "Creativity stimulating lotion. Drink every morning to generate better ideas!",
      discount: 0
    },
    {
      id: 8,
      imgSrc:
        "https://res.cloudinary.com/dgwnongyj/image/upload/v1694093835/Image_x5mbcf.png",
      price: 4950,
      rating: 369,
      subtext: "Eligible for Shipping To Mars or somewhere else",
      text: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      discount: 0
    }
  ];

  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  for (const product of products) {
    await knex("products").insert([{ ...product }]);
  }
}
