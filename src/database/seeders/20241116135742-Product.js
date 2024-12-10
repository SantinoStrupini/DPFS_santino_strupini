'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      
        {
          id: 1,
          name: "Gibson Les Paul",
          price: 1000000,
          description: "One of the most iconic electric guitars, known for its warm sound and versatility.",
          img: "/img/gibson-les-paul.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Fender Stratocaster",
          price: 1000000,
          description: "Famous for his elegant design and bright tone, perfect for rock and blues.",
          img: "/img/fender-stratocaster.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Fender Telecaster",
          price: 1000000,
          description: "A favorite of country and classic rock guitarists, known for his clarity and attack.",
          img: "/img/fender-telecaster.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Gibson SG",
          price: 1000000,
          description: "With his unique shape and light weight, it is ideal for heavy and fast styles of music.",
          img: "/img/gibson-sg.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "Gibson ES335",
          price: 1000000,
          description: "A semi-hollow guitar with a rounded and balanced sound, perfect for jazz and blues.",
          img: "/img/gibson-335.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: "Fender Jaguar",
          price: 1000000,
          description: "A retro-designed guitar with a distinctive sound and unique modulation options.",
          img: "/img/fender-jaguar.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: "PRS",
          price: 1000000,
          description: "A high-end guitar known for its impeccable craftsmanship and tonal versatility.",
          img: "/img/prs.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: "Fender Mustang",
          price: 1000000,
          description: "Compact and easy to play, this guitar is perfect for indie and alternative musicians.",
          img: "/img/fender-mustang.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          name: "Fender Jazz Bass",
          price: 1000000,
          description: "The bass preferred by many jazz and funk musicians for its smooth and defined sound.",
          img: "/img/fender-jazz-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          name: "Fender Precision Bass Standard",
          price: 1000000,
          description: "The standard of electric basses, known for its punchy tone and durability.",
          img: "/img/fender-standard-precision-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          name: "Fender Performer Precision Bass",
          price: 1000000,
          description: "A versatile bass, perfect for any musical genre with a deep tone.",
          img: "/img/fender-performer-precision-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          name: "Ibanez GSR200",
          price: 1000000,
          description: "An affordable bass with great performance, ideal for beginners and intermediate musicians.",
          img: "/img/bajo-ibanez-gsr200.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          name: "Hofner HCT500/5",
          price: 1000000,
          description: "A retro-designed bass with a deep tone, perfect for recreating classic sounds.",
          img: "/img/bajo-hofner-hct-500-5.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          name: "Hofner",
          price: 1000000,
          description: "A lightweight and comfortable bass, known for its distinctive sound and classic shape.",
          img: "/img/bajo-hofner.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          name: "Fender Telecaster Bass",
          price: 1000000,
          description: "A classic Fender bass, renowned for its robust tone and timeless design.",
          img: "/img/fender-telecaster-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          name: "Gibson EB500",
          price: 1000000,
          description: "An electric bass with a fat and powerful tone, ideal for rock and metal.",
          img: "/img/gibson-eb-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          name: "Yamaha",
          price: 1000000,
          description: "A reliable and durable drum kit, perfect for all types of music genres.",
          img: "/img/bateria-yamaha.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          name: "Sonor",
          price: 1000000,
          description: "A professional drum kit known for its deep and resonant sound.",
          img: "/img/bateria-sonor.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          name: "DW",
          price: 1000000,
          description: "A high-end drum kit with great sound projection and durability.",
          img: "/img/bateria-dw.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          name: "Tama",
          price: 1000000,
          description: "A versatile drum kit that offers excellent performance on stage.",
          img: "/img/bateria-tama.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          name: "Pearl",
          price: 1000000,
          description: "One of the most recognized drum kits in the world, famous for its quality and sound.",
          img: "/img/bateria-pearl.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          name: "Gretsch",
          price: 1000000,
          description: "A drum kit with a warm, vintage sound, preferred by jazz and blues musicians.",
          img: "/img/bateria-gretsch.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          name: "Mapex",
          price: 1000000,
          description: "A sturdy and durable drum kit, perfect for musicians seeking reliability.",
          img: "/img/bateria-mapex.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          name: "Ludwig",
          price: 1000000,
          description: "A classic drum kit used by legendary rock musicians.",
          img: "/img/bateria-ludwig.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      
      
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
