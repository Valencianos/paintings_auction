const _paintings = [
  {
    id: 1,
    title: "«Рождение Венеры» Сандро Боттичелли",
    imgUrl: "boticcelli.png",
    oldPrice: 2000000,
    price: 1000000,
    isSold: false,
    qty: 1,
  },
  {
    id: 2,
    title: "«Тайная вечеря»  Леонардо да Винчи",
    imgUrl: "leonardo.png",
    oldPrice: 0,
    price: 3000000,
    isSold: false,
    qty: 1,
  },
  {
    id: 3,
    title: "«Сотворение Адама» Микеланджело",
    imgUrl: "mickelangelo.png",
    oldPrice: 6000000,
    price: 5000000,
    isSold: false,
    qty: 1,
  },
  {
    id: 4,
    title: "«Урок анатомии»  Рембрандт",
    imgUrl: "rembrandt.png",
    oldPrice: 4000000,
    price: 3000000,
    isSold: true,
    qty: 0,
  },
];

export default {
  getPaintings(cb) {
    setTimeout(() => cb(_paintings), 1000);
  },
  buyPaintings(paintings, cb, errorCb) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb;
    }, 100);
  },
};
