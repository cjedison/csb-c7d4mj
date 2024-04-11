const trending_icecream_container = document.getElementById(
  "trending-ice-cream"
);

const trending_icecream_list = [
  {
    one: "banana-pudding-1.png",
    two: "banana-pudding-2.png",
    three: "banana-pudding-3.png",
    desc: "Banana ice cream with marshmallow swirls and vanilla wafer cookies.",
    dir: "banana-pudding",
    name: "Banana Pudding",
    id: "0"
  },
  {
    one: "better-brownie-batter-1.png",
    two: "better-brownie-batter-2.png",
    three: "better-brownie-batter-3.png",
    desc:
      "Luxurious brownie batter ice cream with rich fudge swirls, and loaded with bits of real brownies.",
    dir: "better-brownie-batter",
    name: "Better Brownie Batter",
    id: "1"
  },
  {
    one: "coffeehouse-cookies-and-cream-1.png",
    two: "coffeehouse-cookies-and-cream-2.png",
    three: "coffeehouse-cookies-and-cream-3.png",
    desc:
      "Our delicious coffee ice cream loaded with cream filled chocolate cookie pieces!",
    dir: "coffeehouse-cookies-and-cream",
    name: "Coffee Cookies & Cream",
    id: "9"
  },
  {
    one: "cookies-and-cream-1.png",
    two: "cookies-and-cream-2.png",
    three: "cookies-and-cream-3.png",
    desc: "Vanilla ice cream with delicious cream filled cookie chunks.",
    dir: "cookies-and-cream",
    name: "Cookies & Cream",
    id: "10"
  },
  {
    one: "playdough-1.png",
    two: "playdough-2.png",
    three: "playdough-3.png",
    desc:
      "Bright yellow vanilla ice cream with hot pink and blue sugar cookie gems. Children love it!",
    dir: "playdough",
    name: "Playdough",
    id: "20"
  },
  {
    one: "praline-pecan-1.png",
    two: "praline-pecan-2.png",
    three: "praline-pecan-3.png",
    desc:
      "Butter ice cream swirled with caramel and praline pecans. A true taste of the South!",
    dir: "praline-pecan",
    name: "Praline Pecan",
    id: "21"
  },
  {
    one: "superman-1.png",
    two: "superman-2.png",
    three: "superman-3.png",
    desc:
      "A playful twist of strawberry, banana, and Blue Moon ice cream. Another great kid favorite!",
    dir: "superman",
    name: "Superman",
    id: "25"
  }
];

for (let icecream of trending_icecream_list) {
  trending_icecream_container.innerHTML +=
    `<div class="product-card" onclick="load(${icecream.id})"><div class="product-img"><img class="img-product" src="/img/icecream-flavors/` +
    icecream.dir +
    "/" +
    icecream.one +
    '"></div><div class="product-name">' +
    icecream.name +
    "</div></div>";
}
// TRENDING SHAVED ICE //

const trending_shaved_container = document.getElementById(
  "trending-shaved-ice"
);
const trending_shaved_list = [
  {
    one: "blue-raspberry-1.png",
    dir: "blue-raspberry",
    name: "Blue Raspberry",
    id: "36"
  },
  {
    one: "cherry-1.png",
    dir: "cherry",
    name: "Cherry",
    id: "37"
  },
  {
    one: "coconut-1.png",
    dir: "coconut",
    name: "Coconut",
    id: "38"
  },
  {
    one: "lemon-1.png",
    dir: "lemon",
    name: "Lemon",
    id: "46"
  },
  {
    one: "lime-1.png",
    dir: "lime",
    name: "Lime",
    id: "47"
  },
  {
    one: "pineapple-1.png",
    dir: "pineapple",
    name: "Pineapple",
    id: "52"
  },
  {
    one: "tigers-blood-1.png",
    dir: "tigers-blood",
    name: "Tigers Blood",
    id: "58"
  }
];

for (let shaved of trending_shaved_list) {
  trending_shaved_container.innerHTML +=
    `<div class="product-card" onclick="load2(${shaved.id})"><div class="product-img"><img class="img-product mh500px mt-60" src="/img/shaved-ice-flavors/` +
    shaved.dir +
    "/" +
    shaved.one +
    '"></div><div class="product-name">' +
    shaved.name +
    "</div></div>";
}
