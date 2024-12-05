'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      
        {
          id: 1,
          name: "Gibson Les Paul",
          price: 1000000,
          description: "Una de las guitarras eléctricas más icónicas, conocida por su sonido cálido y su versatilidad.",
          img: "/img/gibson-les-paul.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Fender Stratocaster",
          price: 1000000,
          description: "Famosa por su diseño elegante y su tono brillante, perfecta para el rock y el blues.",
          img: "/img/fender-stratocaster.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Fender Telecaster",
          price: 1000000,
          description: "La favorita de los guitarristas de country y rock clásico, conocida por su claridad y ataque.",
          img: "/img/fender-telecaster.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Gibson SG",
          price: 1000000,
          description: "Con su forma única y su peso ligero, es ideal para estilos de música pesada y rápidos.",
          img: "/img/gibson-sg.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "Gibson ES335",
          price: 1000000,
          description: "Una guitarra semi-hueca con un sonido redondo y equilibrado, perfecta para jazz y blues.",
          img: "/img/gibson-335.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: "Fender Jaguar",
          price: 1000000,
          description: "Guitarra de diseño retro, con un sonido distintivo y opciones de modulación únicas.",
          img: "/img/fender-jaguar.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: "PRS",
          price: 1000000,
          description: "Guitarra de alta gama, conocida por su construcción impecable y su versatilidad tonal.",
          img: "/img/prs.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: "Fender Mustang",
          price: 1000000,
          description: "Compacta y fácil de tocar, esta guitarra es perfecta para músicos indie y alternativos.",
          img: "/img/fender-mustang.png",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          name: "Fender Jazz Bass",
          price: 1000000,
          description: "El bajo preferido por muchos músicos de jazz y funk por su sonido suave y definido.",
          img: "/img/fender-jazz-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          name: "Fender Precision Bass Standard",
          price: 1000000,
          description: "El estándar de los bajos eléctricos, conocido por su tono contundente y su durabilidad.",
          img: "/img/fender-standard-precision-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          name: "Fender Performer Precision Bass",
          price: 1000000,
          description: "Un bajo versátil, perfecto para cualquier género musical con un tono profundo.",
          img: "/img/fender-performer-precision-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          name: "Ibanez GSR200",
          price: 1000000,
          description: "Un bajo asequible con gran rendimiento, ideal para principiantes y músicos intermedios.",
          img: "/img/bajo-ibanez-gsr200.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          name: "Hofner HCT500/5",
          price: 1000000,
          description: "Bajo con diseño retro y un tono profundo, perfecto para recrear sonidos clásicos.",
          img: "/img/bajo-hofner-hct-500-5.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          name: "Hofner",
          price: 1000000,
          description: "Un bajo ligero y cómodo, conocido por su sonido distintivo y su forma clásica.",
          img: "/img/bajo-hofner.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          name: "Fender Telecaster Bass",
          price: 1000000,
          description: "Bajo clásico de Fender, famoso por su tono robusto y su diseño atemporal.",
          img: "/img/fender-telecaster-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          name: "Gibson EB500",
          price: 1000000,
          description: "Un bajo eléctrico con un tono gordo y potente, ideal para el rock y el metal.",
          img: "/img/gibson-eb-bass.png",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          name: "Yamaha",
          price: 1000000,
          description: "Batería confiable y duradera, perfecta para todo tipo de géneros musicales.",
          img: "/img/bateria-yamaha.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          name: "Sonor",
          price: 1000000,
          description: "Batería profesional conocida por su sonido profundo y resonante.",
          img: "/img/bateria-sonor.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          name: "DW",
          price: 1000000,
          description: "Batería de alta gama con una gran proyección sonora y durabilidad.",
          img: "/img/bateria-dw.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          name: "Tama",
          price: 1000000,
          description: "Batería versátil que ofrece un excelente rendimiento en el escenario.",
          img: "/img/bateria-tama.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          name: "Pearl",
          price: 1000000,
          description: "Una de las baterías más reconocidas del mundo, famosa por su calidad y sonido.",
          img: "/img/bateria-pearl.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          name: "Gretsch",
          price: 1000000,
          description: "Batería con un sonido cálido y vintage, preferida por músicos de jazz y blues.",
          img: "/img/bateria-gretsch.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          name: "Mapex",
          price: 1000000,
          description: "Batería robusta y duradera, perfecta para músicos que buscan confiabilidad.",
          img: "/img/bateria-mapex.png",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          name: "Ludwig",
          price: 1000000,
          description: "Batería clásica utilizada por legendarios músicos de rock.",
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