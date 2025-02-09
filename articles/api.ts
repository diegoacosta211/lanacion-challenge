import { SwitchLayoutGroupContext } from "framer-motion";

export type Article = {
  _id: string
  display_date: string
  headlines: {
    basic: string
  }
  promo_items?: {
    basic: {
      resized_urls?: Array<{
        option: {
          media: string
        }
        resizedUrl: string
      }>
      subtitle?: string
      type: string
      url?: string
    }
  }
  subtype: string
  taxonomy: {
    tags: Array<{
      slug: string
      text: string
    }>
  }
  website_url: string
};

export type Tag = {
  slug: string,
  text: string
}

const api = {
  list: async (): Promise<{ articles: Article[], tags: Tag[] }> => {
    const articles = [
      {
        _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
        display_date: "2019-12-06T17:50:17.735Z",
        headlines: { basic: "Arroz con Leche" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/238iFhDAmiNDgSegPUuF0J8Xqww=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/7hcljZtr0MVNDGKu7v0k-UfSl5s=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/c5D7LVmjBKyRNBTnG1odhYltR_8=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
              },
            ],
            subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "leche-condensada-tid47751", text: "Leche condensada" },
            { slug: "leche-de-coco-tid48865", text: "Leche de coco" },
            { slug: "canela-tid47164", text: "Canela" },
            { slug: "limon-tid47252", text: "Limón" },
            {
              slug: "esencia-de-vainilla-tid47214",
              text: "Esencia de vainilla",
            },
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "clavo-de-olor-tid47192", text: "Clavo de olor" },
          ],
        },
        website_url: "/recetas/postres/arroz-con-leche-nid29102019-6/",
      },
      {
        _id: "4B4JM2UP5REJTEE3FEUB34TXYY",
        display_date: "2019-12-06T12:27:46.485Z",
        headlines: { basic: "NOTICIAS NACION" },
        subtype: "1",
        taxonomy: { tags: [] },
        website_url:
          "/cocina/recetas/platos-principales/noticias-nacion-nid06122019/",
      },
      {
        _id: "ATLC5WVL4NH5HAHU2BWJXTSATY",
        display_date: "2019-12-03T16:04:38.007Z",
        headlines: { basic: "NOTA RECETA DE PRUEBA (DO NOT DELETE (Ú.Ú) )" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/yzkzOrfuICGCehZJX1H6IPXHB3s=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/bQeLJtUbaS-nOqWjlGUQ8gGj47s=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/dXsAGRUh17Fih93yWlimbRf2XBw=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
              },
            ],
            subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "obesidad", text: "obesidad" },
            { slug: "chancho", text: "chancho" },
            { slug: "comida", text: "comida" },
            { slug: "engordar", text: "engordar" },
            { slug: "explotar", text: "explotar" },
            { slug: "ballena", text: "ballena" },
          ],
        },
        website_url:
          "/recetas/nota-receta-de-prueba-do-not-delete-uu-nid03122019/",
      },
      {
        _id: "LB2L4LXCLRDENKYKFCYX4CLY3Q",
        display_date: "2019-12-03T15:14:40.626Z",
        headlines: {
          basic: "Nota Noticia PRUEBA PARA TRABAJAR CON NOTICIA :-)",
        },
        promo_items: { basic: { type: "video" } },
        subtype: "1",
        taxonomy: { tags: [] },
        website_url:
          "/recetas/platos-de-comida-principal/nota-noticia-nid03122019/",
      },
      {
        _id: "NVDUCEERNZHWFH66AFKFLJEHOE",
        display_date: "2019-10-29T16:42:00Z",
        headlines: { basic: "Risotto con alcauciles y frutos de mar" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/HjMXkcGmwqPfbcolAPAOyYBDz8M=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GZYHKNH7WFFZVAT4LEW2IMB25Q.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/HZbvmbMMQFjZu0eFoFN0lGQjsrQ=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GZYHKNH7WFFZVAT4LEW2IMB25Q.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/oL1AzQ5dc30xzjKMQ4b2MaeOWrE=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GZYHKNH7WFFZVAT4LEW2IMB25Q.jpg",
              },
            ],
            subtitle: "Gentileza: LAdesso",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GZYHKNH7WFFZVAT4LEW2IMB25Q.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "pescados-tid67216", text: "Pescados" },
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "ajo-tid47126", text: "Ajo" },
            { slug: "aceite-de-oliva-tid47117", text: "Aceite de oliva" },
            { slug: "vino-blanco-tid47349", text: "Vino blanco" },
            { slug: "alcaucil-tid47129", text: "Alcaucil" },
            { slug: "limon-tid47252", text: "Limón" },
            { slug: "perejil-tid47297", text: "Perejil" },
            { slug: "mejillon-tid47930", text: "Mejillón" },
            { slug: "langostinos-tid47750", text: "Langostinos" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/risotto-con-alcauciles-y-frutos-de-mar-nid29102019-6/",
      },
      {
        _id: "XVGYAV53LJGYNI7LPBWO42K55Y",
        display_date: "2019-10-29T16:35:00Z",
        headlines: { basic: "Yakimeshi de pollo" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/_WIENRYzXk_tzWryfWGBBCiGgpM=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/NZV375TG7VGW3NXQDOLR4G22Z4.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/6WQihgvMjiNhmKFn7fAe4x1pIeg=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/NZV375TG7VGW3NXQDOLR4G22Z4.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/9qVVcK5RwA2CyqopSw0Rz3nWijM=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/NZV375TG7VGW3NXQDOLR4G22Z4.jpg",
              },
            ],
            subtitle: "Gentileza: La Causa Nikkei",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/NZV375TG7VGW3NXQDOLR4G22Z4.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "morron-rojo-tid47270", text: "Morrón rojo" },
            { slug: "zanahoria-tid47352", text: "Zanahoria" },
            { slug: "choclo-tid47183", text: "Choclo" },
            { slug: "ajo-tid47126", text: "Ajo" },
            { slug: "jengibre-tid47239", text: "Jengibre" },
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "salsa-de-soja-tid47331", text: "Salsa de soja" },
            {
              slug: "semillas-de-sesamo-tid47338",
              text: "Semillas de sésamo",
            },
            { slug: "cebolla-de-verdeo-tid47175", text: "Cebolla de verdeo" },
            { slug: "pechuga-de-pollo-tid47294", text: "Pechuga de pollo" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/yakimeshi-de-pollo-nid29102019-6/",
      },
      {
        _id: "EZYG5OEVH5HSJJCUMJO5XAHTTA",
        display_date: "2019-10-29T16:30:00Z",
        headlines: { basic: "Arroz chaufa de mariscos" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/mE9F4QN85y6hnPNuRu8EUFuBCBk=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GDAKALQ7IZBETO6NO4MUEDYBCU.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/yEE-D8nvfKXDl9WpT_3YKWYq39A=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GDAKALQ7IZBETO6NO4MUEDYBCU.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/bXRHH0Ef0dd3fNbzG5Pz2OJZ6lk=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GDAKALQ7IZBETO6NO4MUEDYBCU.jpg",
              },
            ],
            subtitle: "Gentileza: La Causa Nikkei",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/GDAKALQ7IZBETO6NO4MUEDYBCU.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "pescados-tid67216", text: "Pescados" },
            { slug: "aceite-de-girasol-tid48354", text: "Aceite de girasol" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "marisco-tid48507", text: "Marisco" },
            { slug: "ajo-tid47126", text: "Ajo" },
            { slug: "jengibre-tid47239", text: "Jengibre" },
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "aceite-de-sesamo-tid48684", text: "Aceite de sésamo" },
            { slug: "salsa-de-soja-tid47331", text: "Salsa de soja" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/arroz-chaufa-de-mariscos-nid29102019-6/",
      },
      {
        _id: "UEB6L5PBTBB7BI4YIOKWC3SBOA",
        display_date: "2019-10-24T11:53:00Z",
        headlines: { basic: "Quiche de espinacas y cherries" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/IIg5h_uiRJSN_A5NDe9OKthZmbA=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6NENEJD3K5GRLL3QRPHMFKVM7I.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/gMwEOlBw1z31maT6kbQ5r3jljQs=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6NENEJD3K5GRLL3QRPHMFKVM7I.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/SoR9Rurrp3NKcYw6DG1YANLEGV4=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6NENEJD3K5GRLL3QRPHMFKVM7I.jpg",
              },
            ],
            subtitle: "Quiche de espinacas y cherries",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6NENEJD3K5GRLL3QRPHMFKVM7I.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "quesos-tid67219", text: "Quesos" },
            { slug: "vegetales-tid67215", text: "Vegetales" },
            { slug: "espinaca-tid47216", text: "Espinaca" },
            { slug: "tomates-cherry-tid47342", text: "Tomates cherry" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "queso-parmesano-tid47772", text: "Queso parmesano" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/quiche-de-espinacas-y-cherries-nid24102019-6/",
      },
      {
        _id: "SYS3A3JA4JCDPKECSOLEQAUBEQ",
        display_date: "2019-10-10T12:55:00Z",
        headlines: { basic: "Pan “crunchy” de manzanas y dulce de leche" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/VmO0yA7QbqJUN2-NNYaS90evufQ=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UFJVSLPS2NEOVBKGWV7IL4ZB64.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/C6xY4dwoYt-EtgvliCrJldhEKco=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UFJVSLPS2NEOVBKGWV7IL4ZB64.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/mR-S70Q8qo7lDikMrp_wAPwq25E=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UFJVSLPS2NEOVBKGWV7IL4ZB64.jpg",
              },
            ],
            subtitle: "Pan “crunchy” de manzanas y dulce de leche",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UFJVSLPS2NEOVBKGWV7IL4ZB64.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "frutas-tid67217", text: "Frutas" },
            { slug: "dulce-de-leche-tid47208", text: "Dulce de leche" },
            { slug: "manzana-tid47258", text: "Manzana" },
            { slug: "nueces-tid47275", text: "Nueces" },
            { slug: "harina-leudante-tid47231", text: "Harina leudante" },
            { slug: "bicarbonato-tid47149", text: "Bicarbonato" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "azucar-negra-tid47143", text: "Azúcar negra" },
          ],
        },
        website_url:
          "/recetas/dulces/pan-crunchy-de-manzanas-y-dulce-de-leche-nid10102019-6/",
      },
      {
        _id: "IUJ3IMKS65AO7NBQ7Z5UCI4N3A",
        display_date: "2019-07-10T12:18:00Z",
        headlines: { basic: "Solomillo de cerdo con coliflor" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/KnrUSH1tpPxTkQoKMc3q60vIT1A=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JCFL6RCFCNFXTOHTAQNAWCQ2RM.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/YPvd8fxGkCwYF55cvVyBxAxQ83U=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JCFL6RCFCNFXTOHTAQNAWCQ2RM.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/TctiDEMGZe1lsLHWtX-m3yhY2r0=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JCFL6RCFCNFXTOHTAQNAWCQ2RM.jpg",
              },
            ],
            subtitle: "Solomillo de cerdo con coliflor",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JCFL6RCFCNFXTOHTAQNAWCQ2RM.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "cerdo-tid47176", text: "Cerdo" },
            { slug: "coliflor-tid48542", text: "Coliflor" },
            { slug: "crema-de-leche-tid47204", text: "Crema de leche" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "mostaza-en-grano-tid48687", text: "Mostaza en grano" },
            { slug: "romero-tid47325", text: "Romero" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/solomillo-de-cerdo-con-coliflor-nid10072019-6/",
      },
      {
        _id: "5563D4RY5FEEDPUP735U5D7IWY",
        display_date: "2019-06-04T15:42:00Z",
        headlines: { basic: "Tarta de chocolate y avellana" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/uoD6H3_IRFaz2wO2RKbEOZ-mmfE=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6CHAFGI2SVFFZH7DTOY7VCH3AQ.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/rx2HKnzvaZcaz2SEXa5nsyTaiZU=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6CHAFGI2SVFFZH7DTOY7VCH3AQ.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/G3Xp3DbDkieLhmC_1IYzuPjwCu0=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6CHAFGI2SVFFZH7DTOY7VCH3AQ.jpg",
              },
            ],
            subtitle: "Gentileza: Hotel Club Francés",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6CHAFGI2SVFFZH7DTOY7VCH3AQ.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "azucar-impalpable-tid47142", text: "Azúcar impalpable" },
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "yema-tid47350", text: "Yema" },
            { slug: "chocolate-amargo-tid47185", text: "Chocolate amargo" },
            { slug: "avellana-tid49037", text: "Avellana" },
            { slug: "harina-0000-tid48184", text: "Harina 0000" },
            { slug: "cacao-tid47155", text: "Cacao" },
            { slug: "crema-de-leche-tid47204", text: "Crema de leche" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "glucosa-tid47227", text: "Glucosa" },
          ],
        },
        website_url:
          "/recetas/postres/tarta-de-chocolate-y-avellana-nid04062019-6/",
      },
      {
        _id: "CHJ3XADOMVDABCBKUY2DC4TXXA",
        display_date: "2019-06-04T15:41:00Z",
        headlines: { basic: "Baba au Rhum" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/vYp7hHBuYfnp1B35lpNyDSROH70=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/MDTA2PHMVZCM3O4UKAJQ462RZM.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/yMB_0EV5Egcc5KysHS0N80t4idM=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/MDTA2PHMVZCM3O4UKAJQ462RZM.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/RIaHgMDwq4eX-_ha5eRPisFh4No=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/MDTA2PHMVZCM3O4UKAJQ462RZM.jpg",
              },
            ],
            subtitle: "Gentileza: Fleur de Sel",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/MDTA2PHMVZCM3O4UKAJQ462RZM.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "harina-0000-tid48184", text: "Harina 0000" },
            { slug: "levadura-tid47249", text: "Levadura" },
            { slug: "rhum-tid47323", text: "Rhum" },
            {
              slug: "chaucha-de-vainilla-tid48445",
              text: "Chaucha de vainilla",
            },
            { slug: "crema-de-leche-tid47204", text: "Crema de leche" },
          ],
        },
        website_url: "/recetas/postres/baba-au-rhum-nid04062019-6/",
      },
      {
        _id: "QGURAE2PYBC7RAQ4ZCVCBHWAKU",
        display_date: "2019-06-04T15:41:00Z",
        headlines: { basic: "Canelé" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/yW9jSYC2n3UPSV9mA3R3AaizjlQ=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JEYZQPBNQJDLLNGXCKABEZIIDY.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/j9wLXeXBCjid913lJ_mT2MawXnY=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JEYZQPBNQJDLLNGXCKABEZIIDY.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/sgrclgxoddM4c6bX7nUEbm-4dCM=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JEYZQPBNQJDLLNGXCKABEZIIDY.jpg",
              },
            ],
            subtitle: "Gentileza: Laban Catering",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JEYZQPBNQJDLLNGXCKABEZIIDY.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "harina-0000-tid48184", text: "Harina 0000" },
            { slug: "huevo-tid47236", text: "Huevo" },
            {
              slug: "esencia-de-vainilla-tid47214",
              text: "Esencia de vainilla",
            },
            { slug: "rhum-tid47323", text: "Rhum" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "azucar-impalpable-tid47142", text: "Azúcar impalpable" },
          ],
        },
        website_url: "/recetas/dulces/canele-nid04062019-6/",
      },
      {
        _id: "4KBUSE6S7FF5LBK5R3A735ZD2Y",
        display_date: "2019-06-04T15:40:00Z",
        headlines: { basic: "Madeleines" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/CMEMhMlwvW1tRCSH6upIpCSH5NM=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/7N6PSLGX75FZXNLDMVRQUXN6QM.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/kut9ZScucqx58sESf1ZCXk8Re3E=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/7N6PSLGX75FZXNLDMVRQUXN6QM.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/F6gCHOzC8Smn3b7edXu1C6uEzL8=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/7N6PSLGX75FZXNLDMVRQUXN6QM.jpg",
              },
            ],
            subtitle: "Gentileza: Les Macarons de Paris",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/7N6PSLGX75FZXNLDMVRQUXN6QM.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "huevo-tid47236", text: "Huevo" },
            {
              slug: "ralladura-de-limon-tid49244",
              text: "Ralladura de limón",
            },
            { slug: "harina-0000-tid48184", text: "Harina 0000" },
            { slug: "polvo-de-hornear-tid47308", text: "Polvo de hornear" },
          ],
        },
        website_url: "/recetas/dulces/madeleines-nid04062019-6/",
      },
      {
        _id: "43LCKBHZH5FSRCFF2KL262NNSQ",
        display_date: "2019-05-31T16:46:00Z",
        headlines: { basic: '"Sauce hollandaise" o salsa holandesa' },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/XirXsZsWldbZA6ynjZzv85yvypk=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EKT7VYPW25DMVNX4YK3RJQ2NWA.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/szz-d_poJbrWQtBx9TrfcDV9N-U=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EKT7VYPW25DMVNX4YK3RJQ2NWA.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/aLaOdSzpuQnaOJLUKGdFYoN_NWM=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EKT7VYPW25DMVNX4YK3RJQ2NWA.jpg",
              },
            ],
            subtitle: "&quot;Sauce hollandaise&quot; o salsa holandesa",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EKT7VYPW25DMVNX4YK3RJQ2NWA.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "yema-tid47350", text: "Yema" },
            { slug: "manteca-tid47257", text: "Manteca" },
            { slug: "jugo-de-limon-tid49241", text: "Jugo de limón" },
          ],
        },
        website_url:
          "/recetas/guarniciones/sauce-hollandaise-o-salsa-holandesa-nid31052019-6/",
      },
      {
        _id: "2STR43XLZ5FBNGZWEMPSZN67JY",
        display_date: "2019-05-31T16:45:00Z",
        headlines: { basic: "Omelette" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/8pJ_JL0ZzJELXQk2QGJbLanU0U8=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JVKJASSLIVB4XLHF3XP25HYZIQ.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/xFkgLZSBXLXfICAXp_pPteWBh5g=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JVKJASSLIVB4XLHF3XP25HYZIQ.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/oxCVBKUCuzI9RbbLieVFxxxmLz4=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JVKJASSLIVB4XLHF3XP25HYZIQ.jpg",
              },
            ],
            subtitle: "Omelette",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/JVKJASSLIVB4XLHF3XP25HYZIQ.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "ciboulette-tid47189", text: "Ciboulette" },
            { slug: "estragon-tid47217", text: "Estragón" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/omelette-nid31052019-7/",
      },
      {
        _id: "YBKFMGVVDZGZJESVR32ETCIJNU",
        display_date: "2019-05-31T16:41:00Z",
        headlines: { basic: "“Pain perdu” o Pan perdido" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/kr1YLTRR6grQc2tRYRVIg6G9s0A=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/67PCEAERKBCQFI5GTEIENNCCPM.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/AYieasi198Tc0eSjrEDJyRpePTo=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/67PCEAERKBCQFI5GTEIENNCCPM.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/4sIc6NMmpwuTJrs87v_9GSb7ElA=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/67PCEAERKBCQFI5GTEIENNCCPM.jpg",
              },
            ],
            subtitle: "“Pain perdu” o Pan perdido",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/67PCEAERKBCQFI5GTEIENNCCPM.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "pan-tid47282", text: "Pan" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "leche-tid47244", text: "Leche" },
          ],
        },
        website_url: "/recetas/dulces/pain-perdu-o-pan-perdido-nid31052019-8/",
      },
      {
        _id: "MBDMLDWWJNA7ZJ3R5JK4TSXS2Y",
        display_date: "2019-05-06T14:09:00Z",
        headlines: { basic: 'Arroz con leche "Pili"' },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/dDYPjfKEU2jgquu3T4qa2YpN7CE=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/RZRGGXYNGNCTHMWIUH7NEW34FY.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/UbXFcb_Pu_WvIOn0qpa0eSxWfP0=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/RZRGGXYNGNCTHMWIUH7NEW34FY.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/-xmbmEPv-vEh5-yzWpNqYAt9vZE=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/RZRGGXYNGNCTHMWIUH7NEW34FY.jpg",
              },
            ],
            subtitle: "Arroz con leche &quot;Pili&quot;",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/RZRGGXYNGNCTHMWIUH7NEW34FY.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "canela-tid47164", text: "Canela" },
            { slug: "vainilla-tid47347", text: "Vainilla" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "naranja-tid47274", text: "Naranja" },
          ],
        },
        website_url: "/recetas/postres/arroz-con-leche-pili-nid06052019-6/",
      },
      {
        _id: "CAIOG3ZE4RDRTNRUPY54YOYURU",
        display_date: "2019-05-06T14:08:00Z",
        headlines: { basic: 'Ensalada "Poke" de salmón' },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/6O1K1WuHUKi1YQibTKbKbe_h5QI=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EWYMGPT22ZGAFIZ264ONL6V44A.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/2fIyecuAg3jZxA5Qv4l1ZJeSZ24=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EWYMGPT22ZGAFIZ264ONL6V44A.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/K2HGJH-bMptW9zVd1_7lE8I4iAc=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EWYMGPT22ZGAFIZ264ONL6V44A.jpg",
              },
            ],
            subtitle: "Gentileza: IZAKAYA – El bar de Sushipop",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/EWYMGPT22ZGAFIZ264ONL6V44A.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "pescados-tid67216", text: "Pescados" },
            { slug: "salmon-rosado-tid47975", text: "Salmón rosado" },
            { slug: "arroz-tid47136", text: "Arroz" },
            {
              slug: "semillas-de-sesamo-tid47338",
              text: "Semillas de sésamo",
            },
            { slug: "palta-tid47281", text: "Palta" },
            { slug: "cebolla-morada-tid47808", text: "Cebolla morada" },
            { slug: "queso-tid63996", text: "Queso" },
            { slug: "batata-tid47146", text: "Batata" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/ensalada-poke-de-salmon-nid06052019-6/",
      },
      {
        _id: "HDLCMV46PVC2ZLGWOU4WAZSLEM",
        display_date: "2019-05-06T14:07:00Z",
        headlines: { basic: 'Ensalada tipo "Poke" de salmón ahumado' },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/DZsP5kL9AMFlOKhkvxGMHoVSpZE=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/F6PTWFDX5JCZHJODOIZ6ER47NI.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/IC-n3S2qG3UqIPbqNb7JVYX_IBM=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/F6PTWFDX5JCZHJODOIZ6ER47NI.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/WfbCvJ45dsz2Gz_5ScSNvCCVpd8=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/F6PTWFDX5JCZHJODOIZ6ER47NI.jpg",
              },
            ],
            subtitle: "Gentileza: IZAKAYA – El bar de Sushipop",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/F6PTWFDX5JCZHJODOIZ6ER47NI.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "pescados-tid67216", text: "Pescados" },
            { slug: "arroz-tid47136", text: "Arroz" },
            { slug: "queso-tid63996", text: "Queso" },
            { slug: "palta-tid47281", text: "Palta" },
            {
              slug: "semillas-de-sesamo-tid47338",
              text: "Semillas de sésamo",
            },
            { slug: "cebolla-morada-tid47808", text: "Cebolla morada" },
            { slug: "maracuya-tid48762", text: "Maracuyá" },
            { slug: "mango-tid47905", text: "Mango" },
            { slug: "batata-tid47146", text: "Batata" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/ensalada-tipo-poke-de-salmon-ahumado-nid06052019-6/",
      },
      {
        _id: "XYJN3XQB2BDP3LIXKLPZZJ7VJI",
        display_date: "2019-05-06T14:04:00Z",
        headlines: { basic: "Piña colada como en Cuba (con y sin alcohol)" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/HT8LNKSFLlIQToyzFJnji5mfMqc=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UGP7ZCRPYFFP3MAX7E6GQ6UXCE.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/RDv3-0TGL3voP5oB0PX82rIfQnI=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UGP7ZCRPYFFP3MAX7E6GQ6UXCE.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/lEyotFRlHK865ZKhP2hfxktSPB4=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UGP7ZCRPYFFP3MAX7E6GQ6UXCE.jpg",
              },
            ],
            subtitle: "Piña colada con y sin alcohol",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/UGP7ZCRPYFFP3MAX7E6GQ6UXCE.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "frutas-tid67217", text: "Frutas" },
            { slug: "anana-tid47719", text: "Ananá" },
            { slug: "coco-tid47193", text: "Coco" },
            { slug: "canela-tid47164", text: "Canela" },
            { slug: "miel-tid47266", text: "Miel" },
            { slug: "rhum-tid47323", text: "Rhum" },
          ],
        },
        website_url:
          "/recetas/pina-colada-como-en-cuba-con-y-sin-alcohol-nid06052019-6/",
      },
      {
        _id: "TUE7SGPZ3FGEXLX6ZAFUU2DN4A",
        display_date: "2019-04-15T17:26:00Z",
        headlines: { basic: "Huevo de Pascuas tradicional" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/Ii1Ti48UcnS1rYvP9Rr4roFgBLA=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/TGXRFK75FRFB7FRAAPIUM7ZQTQ.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/zhUJ-gDPeew0-ZdyeubHy6n7iJM=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/TGXRFK75FRFB7FRAAPIUM7ZQTQ.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/4LIbMXn9NKYFAOlnye4lWOu6bKY=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/TGXRFK75FRFB7FRAAPIUM7ZQTQ.jpg",
              },
            ],
            subtitle: "Gentileza: Carat (Belcolade)",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/TGXRFK75FRFB7FRAAPIUM7ZQTQ.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "chocolate-blanco-tid47186", text: "Chocolate blanco" },
            { slug: "miel-tid47266", text: "Miel" },
            { slug: "glucosa-tid47227", text: "Glucosa" },
          ],
        },
        website_url:
          "/recetas/dulces/huevo-de-pascuas-tradicional-nid15042019-6/",
      },
      {
        _id: "ZWPAQKBRPBEVBKCMEKOV2NQNBU",
        display_date: "2019-04-15T17:25:00Z",
        headlines: { basic: "Huevo de Pascuas Innovador" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/lYSR7QgLzuGt6B6stf1vMdQk8LY=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/VQKTWVLGWNB73CISEGFZNHNAAE.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/OyjttqCvUacAz5OXUjcwLo8zriU=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/VQKTWVLGWNB73CISEGFZNHNAAE.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/pK--30ElReVn840Phi3G5SbjUGI=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/VQKTWVLGWNB73CISEGFZNHNAAE.jpg",
              },
            ],
            subtitle: "Gentileza: Carat (Belcolade)",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/VQKTWVLGWNB73CISEGFZNHNAAE.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            {
              slug: "chocolate-semiamargo-tid48653",
              text: "Chocolate semiamargo",
            },
          ],
        },
        website_url: "/recetas/dulces/huevo-de-pascuas-innovador-nid15042019-6/",
      },
      {
        _id: "YB3KCHDMLVDLTO7VXZAUI5SRAM",
        display_date: "2019-04-15T17:25:00Z",
        headlines: { basic: "Huevo de Pascuas infantil" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/tUFU2nPh-iTnP-sdFEyRbJNCiys=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IFDTTBOX4NEDLMUYL63C2672YY.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/pL_UnhYVsZnb-1PC4Sp_M6XIBLE=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IFDTTBOX4NEDLMUYL63C2672YY.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/MvuiPG46CxL05ooJItHz1OAwFiQ=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IFDTTBOX4NEDLMUYL63C2672YY.jpg",
              },
            ],
            subtitle: "Gentileza: Carat (Belcolade)",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IFDTTBOX4NEDLMUYL63C2672YY.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "chocolate-amargo-tid47185", text: "Chocolate amargo" },
            { slug: "chocolate-blanco-tid47186", text: "Chocolate blanco" },
          ],
        },
        website_url: "/recetas/dulces/huevo-de-pascuas-infantil-nid15042019-6/",
      },
      {
        _id: "AHRMMNYKCJAG5K6JITLF5YEIW4",
        display_date: "2019-02-26T16:03:00Z",
        headlines: { basic: "Oeufs au lait o huevos con leche" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/ajFwpfDq0gSVYhqk8BwL0-azQdE=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/BGO7VKEF4RBFHFUE7ZBDI4NNCE.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/zq7MUGDP5MVH_RIMXO7l2ZOpwrE=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/BGO7VKEF4RBFHFUE7ZBDI4NNCE.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/eKIY2vuW72fJBzxITm3ugeqjx3Y=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/BGO7VKEF4RBFHFUE7ZBDI4NNCE.jpg",
              },
            ],
            subtitle: "Oeufs au lait",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/BGO7VKEF4RBFHFUE7ZBDI4NNCE.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "leche-tid47244", text: "Leche" },
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "huevo-tid47236", text: "Huevo" },
          ],
        },
        website_url:
          "/recetas/postres/oeufs-au-lait-o-huevos-con-leche-nid26022019-6/",
      },
      {
        _id: "H7JOJD22YRAXRES6IH4A3EB64A",
        display_date: "2019-02-26T09:41:00Z",
        headlines: { basic: "Yogur natural casero" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/igoJbvPm2GKMRCeXwos9xet4mK0=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/FMLBUFZQMVFGHARB2B7LULPTQY.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/1WakyCkMLJ9TPy8AXLjPgNxUhYU=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/FMLBUFZQMVFGHARB2B7LULPTQY.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/ag_SAJHWY4EpVhy4ycjzgv0nBO0=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/FMLBUFZQMVFGHARB2B7LULPTQY.jpg",
              },
            ],
            subtitle: "",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/FMLBUFZQMVFGHARB2B7LULPTQY.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [{ slug: "recetas-tid60035", text: "Recetas" }],
        },
        website_url: "/recetas/yogur-natural-casero-nid26022019-6/",
      },
      {
        _id: "2R3ZAT3JI5FI7MYRBVSQ3ODV3E",
        display_date: "2019-02-26T09:40:00Z",
        headlines: { basic: "Helado de duraznos y mascarpone" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/woZhCs62nw_qv4ZHOwUaZd9ILY0=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IBDHXZ6WJ5HHTJ33TB4VURL2TQ.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/Q6btw18DFEWgRdG4mIIrb5tnByo=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IBDHXZ6WJ5HHTJ33TB4VURL2TQ.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/ZULirxud8EpinUNky9NmvNvpm6o=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IBDHXZ6WJ5HHTJ33TB4VURL2TQ.jpg",
              },
            ],
            subtitle: "Helado de duraznos y mascarpone",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/IBDHXZ6WJ5HHTJ33TB4VURL2TQ.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "frutas-tid67217", text: "Frutas" },
            { slug: "quesos-tid67219", text: "Quesos" },
            { slug: "durazno-tid47210", text: "Durazno" },
            { slug: "azucar-tid47141", text: "Azúcar" },
            { slug: "queso-mascarpone-tid48545", text: "Queso mascarpone" },
          ],
        },
        website_url:
          "/recetas/postres/helado-de-duraznos-y-mascarpone-nid26022019-6/",
      },
      {
        _id: "Z2ERT5VPEJCLNCZX7GRCZO5CJE",
        display_date: "2019-01-29T16:26:00Z",
        headlines: { basic: "Limonada de sandía" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/PlMjTS9TADJkGD-kvZ_3MmERoU8=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/5PC7BCMEUNERHBOPJXLHHJAJBM.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/sK5pXADK2wS8PXpW0piObQXMrKE=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/5PC7BCMEUNERHBOPJXLHHJAJBM.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/cMNNgxsZQGFfUT6_hX8oa81X2MM=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/5PC7BCMEUNERHBOPJXLHHJAJBM.jpg",
              },
            ],
            subtitle: "Limonada de sandía",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/5PC7BCMEUNERHBOPJXLHHJAJBM.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "frutas-tid67217", text: "Frutas" },
            { slug: "recetas-tid60035", text: "Recetas" },
          ],
        },
        website_url: "/recetas/limonada-de-sandia-nid29012019-6/",
      },
      {
        _id: "F2UOUSFDWFBD5IV7MGGJFEF6BE",
        display_date: "2019-01-29T16:24:00Z",
        headlines: { basic: "Ensalada fría de couscous de coliflor" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/GUl8QjARmoJeroarPjh1_rDgE4M=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6OJQG2JVEZDWDBLCZF5NHX76VY.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/6s4TepwixmU7XWZ3MELKBDTtP7A=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6OJQG2JVEZDWDBLCZF5NHX76VY.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/g2UPqczxTlDcHlEcRGNRy5FTXMk=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6OJQG2JVEZDWDBLCZF5NHX76VY.jpg",
              },
            ],
            subtitle: "Ensalada de couscous de coliflor",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/6OJQG2JVEZDWDBLCZF5NHX76VY.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "vegetales-tid67215", text: "Vegetales" },
            { slug: "coliflor-tid48542", text: "Coliflor" },
            { slug: "tomate-tid47341", text: "Tomate" },
            { slug: "pepino-tid47295", text: "Pepino" },
            { slug: "cebolla-morada-tid47808", text: "Cebolla morada" },
            { slug: "jugo-de-limon-tid49241", text: "Jugo de limón" },
            { slug: "aceite-de-oliva-tid47117", text: "Aceite de oliva" },
            { slug: "perejil-tid47297", text: "Perejil" },
          ],
        },
        website_url:
          "/recetas/ensaladas/ensalada-fria-de-couscous-de-coliflor-nid29012019-7/",
      },
      {
        _id: "M7EKLRTZEJEXHJCSH4U5XX6LXQ",
        display_date: "2019-01-18T09:55:00Z",
        headlines: { basic: "Hamburguesa de berenjenas" },
        promo_items: {
          basic: {
            resized_urls: [
              {
                option: { media: "(min-width: 64em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/iU016tktRHEmr9rIEkTgcqiWlVo=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2MUDWD7RKRFRDO5IS7VNZCD4C4.jpg",
              },
              {
                option: { media: "(min-width: 48em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/JynadIknDHAWJEEzRWMJA4gDkwg=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2MUDWD7RKRFRDO5IS7VNZCD4C4.jpg",
              },
              {
                option: { media: "(min-width: 20em)" },
                resizedUrl:
                  "http://demo-prod.origin.arcpublishing.com/resizer/yL4zDMxbM0BBhQHymYX7d2U47Ls=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2MUDWD7RKRFRDO5IS7VNZCD4C4.jpg",
              },
            ],
            subtitle: "Berenjenas",
            type: "image",
            url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2MUDWD7RKRFRDO5IS7VNZCD4C4.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [
            { slug: "berenjena-tid47147", text: "Berenjena" },
            { slug: "vegetales-tid67215", text: "Vegetales" },
            { slug: "harina-0000-tid48184", text: "Harina 0000" },
            { slug: "cebolla-tid47174", text: "Cebolla" },
            { slug: "morron-rojo-tid47270", text: "Morrón rojo" },
            { slug: "ajo-tid47126", text: "Ajo" },
            { slug: "huevo-tid47236", text: "Huevo" },
            { slug: "perejil-tid47297", text: "Perejil" },
          ],
        },
        website_url:
          "/recetas/platos-de-comida-principal/hamburguesa-de-berenjenas-nid18012019-6/",
      },
    ];

    const tags = articles.reduce<
      Record<string, { count: number; text: string; slug: string }>
    >((map, article) => {
      for (let tag of article.taxonomy.tags) {
        if (!map[tag.slug]) {
          map[tag.slug] = {
            ...tag,
            count: 1,
          };
        } else {
          map[tag.slug].count++;
        }
      }
      return map;
    }, {});

    const sortedTags = Object.values(tags).sort((a, b) => b.count - a.count).slice(0, 10);

    return {
      articles: articles
        .filter((article) => article.subtype == "7")
        .slice(0, 30)
        .map((article) => ({
          ...article,
          display_date: new Date(article.display_date).toLocaleDateString(
            "es-UY",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          ),
        })),
      tags: sortedTags,
    };
  },
};

export default api;
