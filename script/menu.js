// ICE CREAM PRODUCTS //

const icecream_container = document.getElementById("ice-cream-flavors");

const icecream_list = [
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
    one: "birthday-cake-1.png",
    two: "birthday-cake-2.png",
    three: "birthday-cake-3.png",
    desc:
      "Cake flavored ice cream with a bright blue frosting swirl and confetti colored cake pieces.",
    dir: "birthday-cake",
    name: "Birthday Cake",
    id: "2"
  },
  {
    one: "butter-pecan-1.png",
    two: "butter-pecan-2.png",
    three: "butter-pecan-3.png",
    desc: "Buttery ice cream with fresh roasted pecans.",
    dir: "butter-pecan",
    name: "Butter Pecan",
    id: "3"
  },
  {
    one: "cappuccino-crunch-1.png",
    two: "cappuccino-crunch-2.png",
    three: "cappuccino-crunch-3.png",
    desc:
      "Coffee ice cream with a dark chocolate spiral and almond toffee pieces.",
    dir: "cappuccino-crunch",
    name: "Cappuccino Crunch",
    id: "4"
  },
  {
    one: "caramel-cheesecake-cookie-monster-1.png",
    two: "caramel-cheesecake-cookie-monster-2.png",
    three: "caramel-cheesecake-cookie-monster-3.png",
    desc:
      "Cheesecake ice cream loaded with delicious cheesecake pieces, chocolate cookie pieces, chocolate drops and a caramel fudge swirl.",
    dir: "caramel-cheesecake-cookie-monster",
    name: "Caramel Cheesecake",
    id: "5"
  },
  {
    one: "chocolate-1.png",
    two: "chocolate-2.png",
    three: "chocolate-3.png",
    desc:
      "Rich chocolate ice cream loaded with lots of great chocolate flavor in every bite.",
    dir: "chocolate",
    name: "Chocolate",
    id: "6"
  },
  {
    one: "chocolate-moose-tracks-1.png",
    two: "chocolate-moose-tracks-2.png",
    three: "chocolate-moose-tracks-3.png",
    desc:
      "Famous Moose Tracks® fudge and peanut butter cups swirled through chocolate ice cream.",
    dir: "chocolate-moose-tracks",
    name: "Chocolate Moose Tracks",
    id: "7"
  },
  {
    one: "coconut-1.png",
    two: "coconut-2.png",
    three: "coconut-3.png",
    desc:
      "Coconut ice cream with shredded coconut mixed throughout every delicious scoop.",
    dir: "coconut",
    name: "Coconut",
    id: "8"
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
    one: "french-vanilla-1.png",
    two: "french-vanilla-2.png",
    three: "french-vanilla-3.png",
    desc: "Custardy vanilla ice cream. It’s a rich flavor experience!",
    dir: "french-vanilla",
    name: "French Vanilla",
    id: "11"
  },
  {
    one: "green-mint-chip-1.png",
    two: "green-mint-chip-2.png",
    three: "green-mint-chip-3.png",
    desc: "Cool green mint ice cream with tasty chocolate chips throughout.",
    dir: "green-mint-chip",
    name: "Green Mint Chip",
    id: "12"
  },
  {
    one: "key-lime-pie-1.png",
    two: "key-lime-pie-2.png",
    three: "key-lime-pie-3.png",
    desc:
      "A rich lime mousse ice cream swirled with lime and whipped cream ribbons and graham cracker chunks.",
    dir: "key-lime-pie",
    name: "Key Lime Pie",
    id: "13"
  },
  {
    one: "maple-walnut-1.png",
    two: "maple-walnut-2.png",
    three: "maple-walnut-3.png",
    desc: "Maple ice cream loaded with delicious English walnuts.",
    dir: "maple-walnut",
    name: "Maple Walnut",
    id: "14"
  },
  {
    one: "midnight-caramel-river-1.png",
    two: "midnight-caramel-river-2.png",
    three: "midnight-caramel-river-3.png",
    desc:
      "Creamy golden vanilla and dark chocolate ice cream flooded with a thick and rich caramel swirl.",
    dir: "midnight-caramel-river",
    name: "Midnight Caramel River",
    id: "15"
  },
  {
    one: "moose-tracks-1.png",
    two: "moose-tracks-2.png",
    three: "moose-tracks-3.png",
    desc:
      "Famous Moose Tracks® fudge and peanut butter cups swirled through vanilla ice cream.",
    dir: "moose-tracks",
    name: "Moose Tracks",
    id: "16"
  },
  {
    one: "orange-sherbet-1.png",
    two: "orange-sherbet-2.png",
    three: "orange-sherbet-3.png",
    desc: "Cool and tasty orange sherbet.",
    dir: "orange-sherbet",
    name: "Orange Sherbet",
    id: "17"
  },
  {
    one: "peach-1.png",
    two: "peach-2.png",
    three: "peach-3.png",
    desc: "Creamy peach ice cream with peach slices.",
    dir: "peach",
    name: "Peach",
    id: "18"
  },
  {
    one: "pistachio-1.png",
    two: "pistachio-2.png",
    three: "pistachio-3.png",
    desc: "Pistachio ice cream with taste tempting roasted pistachios.",
    dir: "pistachio",
    name: "Pistachio",
    id: "19"
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
    one: "rainbow-sherbet-1.png",
    two: "rainbow-sherbet-2.png",
    three: "rainbow-sherbet-3.png",
    desc: "Citrus inspired, refreshing rainbow sherbet",
    dir: "rainbow-sherbet",
    name: "Rainbow Sherbet",
    id: "22"
  },
  {
    one: "strawberry-1.png",
    two: "strawberry-2.png",
    three: "strawberry-3.png",
    desc: "Strawberry ice cream with chunks of real strawberries.",
    dir: "strawberry",
    name: "Strawberry",
    id: "23"
  },
  {
    one: "strawberry-cheesecake-1.png",
    two: "strawberry-cheesecake-2.png",
    three: "strawberry-cheesecake-3.png",
    desc:
      "Cheesecake ice cream swirled with strawberry sauce and cheesecake pieces.",
    dir: "strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    id: "24"
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
  },
  {
    one: "vanilla-1.png",
    two: "vanilla-2.png",
    three: "vanilla-3.png",
    desc:
      "Creamy vanilla ice cream that tastes just like our recipe from when we started in 1894.",
    dir: "vanilla",
    name: "Vanilla",
    id: "26"
  },
  {
    one: "whitehouse-cherry-1.png",
    two: "whitehouse-cherry-2.png",
    three: "whitehouse-cherry-3.png",
    desc: "Vanilla ice cream with Maraschino cherries.",
    dir: "whitehouse-cherry",
    name: "Whitehouse Cherry",
    id: "27"
  }
];

for (let icecream of icecream_list) {
  icecream_container.innerHTML +=
    `<div class="product-card" onclick="load(${icecream.id})"><div class="product-img"><img class="img-product" src="/img/icecream-flavors/` +
    icecream.dir +
    "/" +
    icecream.one +
    '"></div><div class="product-name">' +
    icecream.name +
    "</div></div>";
}

const icecreamCone = document.querySelector(".toggle-icecream");
const icecreamTog = document.querySelector(".icecream-toggle");
const icecreamDesc = document.querySelector(".ice-cream-desc");
let iceCreamToggle = 0;

function toggleIceCream() {
  if (iceCreamToggle === 0) {
    icecream_container.style.display = "flex";
    icecreamDesc.style.display = "block";
    icecreamTog.style.display = "block";
    icecreamCone.style.transform = "rotate(90deg)";
    iceCreamToggle = 1;
  } else {
    icecream_container.style.display = "none";
    icecreamDesc.style.display = "none";
    icecreamTog.style.display = "none";
    icecreamCone.style.transform = "rotate(0deg)";
    iceCreamToggle = 0;
  }
}

// VEGAN ICE CREAM PRODUCTS //

const vegan_container = document.getElementById("vegan-ice-cream-flavors");
const vegan_list = [
  {
    one: "cookie-dough-chip-1.png",
    two: "cookie-dough-chip-2.png",
    three: "cookie-dough-chip-3.png",
    desc: "",
    dir: "cookie-dough-chip",
    name: "Cookie Dough Chip",
    id: "28"
  },
  {
    one: "classic-cookie-1.png",
    two: "classic-cookie-2.png",
    three: "classic-cookie-3.png",
    desc: "",
    dir: "classic-cookie",
    name: "Classic Cookie",
    id: "29"
  },
  {
    one: "lemon-sorbet-1.png",
    two: "lemon-sorbet-2.png",
    three: "lemon-sorbet-3.png",
    desc: "",
    dir: "lemon-sorbet",
    name: "Lemon Sorbet",
    id: "30"
  },
  {
    one: "raspberry-sorbet-1.png",
    two: "raspberry-sorbet-2.png",
    three: "raspberry-sorbet-3.png",
    desc: "",
    dir: "raspberry-sorbet",
    name: "Raspberry Sorbet",
    id: "31"
  },
  {
    one: "super-berry-acai-1.png",
    two: "super-berry-acai-2.png",
    three: "super-berry-acai-3.png",
    desc: "",
    dir: "super-berry-acai",
    name: "Super Berry Acai",
    id: "32"
  }
];

for (let vegan of vegan_list) {
  vegan_container.innerHTML +=
    `<div class="product-card" onclick="load(${vegan.id})"><div class="product-img"><img class="img-product" src="/img/icecream-flavors/` +
    vegan.dir +
    "/" +
    vegan.one +
    '"></div><div class="product-name">' +
    vegan.name +
    "</div></div>";
}

const veganCone = document.querySelector(".toggle-vegan");
const veganTog = document.querySelector(".vegan-toggle");
const veganDesc = document.querySelector(".vegan-desc");
let veganToggle = 0;

function toggleVegan() {
  if (veganToggle === 0) {
    vegan_container.style.display = "flex";
    veganDesc.style.display = "block";
    veganTog.style.display = "block";
    veganCone.style.transform = "rotate(90deg)";
    veganToggle = 1;
  } else {
    vegan_container.style.display = "none";
    veganDesc.style.display = "none";
    veganTog.style.display = "none";
    veganCone.style.transform = "rotate(0deg)";
    veganToggle = 0;
  }
}

// SHAVED ICE PRODUCTS //

const shaved_container = document.getElementById("shaved-ice-flavors");
const shaved_list = [
  {
    one: "bahama-mama-1.png",
    two: "bahama-mama-2.png",
    desc: "",
    dir: "bahama-mama",
    name: "Bahama Mama",
    id: "33",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "banana-1.png",
    two: "banana-2.png",
    desc: "",
    dir: "banana",
    name: "Banana",
    id: "34",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "black-cherry-1.png",
    two: "black-cherry-2.png",
    desc: "",
    dir: "black-cherry",
    name: "Black Cherry",
    id: "35",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "blue-raspberry-1.png",
    two: "blue-raspberry-2.png",
    desc: "",
    dir: "blue-raspberry",
    name: "Blue Raspberry",
    id: "36",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "cherry-1.png",
    two: "cherry-2.png",
    desc: "",
    dir: "cherry",
    name: "Cherry",
    id: "37",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "coconut-1.png",
    two: "coconut-2.png",
    desc: "",
    dir: "coconut",
    name: "Coconut",
    id: "38",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "cola-1.png",
    two: "cola-2.png",
    desc: "",
    dir: "cola",
    name: "Cola",
    id: "39",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "grape-1.png",
    two: "grape-2.png",
    desc: "",
    dir: "grape",
    name: "Grape",
    id: "40",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "green-apple-1.png",
    two: "green-apple-2.png",
    desc: "",
    dir: "green-apple",
    name: "Green Apple",
    id: "41",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "guava-1.png",
    two: "guava-2.png",
    desc: "",
    dir: "guava",
    name: "Guava",
    id: "42",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "gummy-bear-1.png",
    two: "gummy-bear-2.png",
    desc: "",
    dir: "gummy-bear",
    name: "Gummy Bear",
    id: "43",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "hawaiian-punch-1.png",
    two: "hawaiian-punch-2.png",
    desc: "",
    dir: "hawaiian-punch",
    name: "Hawaiian Punch",
    id: "44",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "kiwi-1.png",
    two: "kiwi-2.png",
    desc: "",
    dir: "kiwi",
    name: "Kiwi",
    id: "45",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "lemon-1.png",
    two: "lemon-2.png",
    desc: "",
    dir: "lemon",
    name: "Lemon",
    id: "46",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "lime-1.png",
    two: "lime-2.png",
    desc: "",
    dir: "lime",
    name: "Lime",
    id: "47",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "mango-1.png",
    two: "mango-2.png",
    desc: "",
    dir: "mango",
    name: "Mango",
    id: "48",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "orange-1.png",
    two: "orange-2.png",
    desc: "",
    dir: "orange",
    name: "Orange",
    id: "49",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "passion-fruit-1.png",
    two: "passion-fruit-2.png",
    desc: "",
    dir: "passion-fruit",
    name: "Passion Fruit",
    id: "50",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "peach-1.png",
    two: "peach-2.png",
    desc: "",
    dir: "peach",
    name: "Peach",
    id: "51",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "pineapple-1.png",
    two: "pineapple-2.png",
    desc: "",
    dir: "pineapple",
    name: "Pineapple",
    id: "52",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "pink-lemonade-1.png",
    two: "pink-lemonade-2.png",
    desc: "",
    dir: "pink-lemonade",
    name: "Pink Lemonade",
    id: "53",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "red-raspberry-1.png",
    two: "red-raspberry-2.png",
    desc: "",
    dir: "red-raspberry",
    name: "Red Raspberry",
    id: "54",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "root-beer-1.png",
    two: "root-beer-2.png",
    desc: "",
    dir: "root-beer",
    name: "Root Beer",
    id: "55",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "spearmint-1.png",
    two: "spearmint-2.png",
    desc: "",
    dir: "spearmint",
    name: "Spearmint",
    id: "56",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "strawberry-1.png",
    two: "strawberry-2.png",
    desc: "",
    dir: "strawberry",
    name: "Strawberry",
    id: "57",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "tigers-blood-1.png",
    two: "tigers-blood-2.png",
    desc: "",
    dir: "tigers-blood",
    name: "Tigers Blood",
    id: "58",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "watermelon-1.png",
    two: "watermelon-2.png",
    desc: "",
    dir: "watermelon",
    name: "Watermelon",
    id: "59",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  }
];

for (let shaved of shaved_list) {
  shaved_container.innerHTML +=
    `<div class="product-card" onclick="load2(${shaved.id})"><div class="product-img"><img class="img-product mh500px mt-60" src="/img/shaved-ice-flavors/` +
    shaved.dir +
    "/" +
    shaved.one +
    '"></div><div class="product-name">' +
    shaved.name +
    "</div></div>";
}

const shavedIce = document.querySelector(".toggle-shaved");
const shavedTog = document.querySelector(".shaved-toggle");
const shavedDesc = document.querySelector(".shaved-desc");
let shavedToggle = 0;

function toggleShaved() {
  if (shavedToggle === 0) {
    shaved_container.style.display = "flex";
    shavedDesc.style.display = "block";
    shavedTog.style.display = "block";
    shavedIce.style.transform = "rotate(90deg)";
    shavedToggle = 1;
  } else {
    shaved_container.style.display = "none";
    shavedDesc.style.display = "none";
    shavedTog.style.display = "none";
    shavedIce.style.transform = "rotate(0deg)";
    shavedToggle = 0;
  }
}

// DRINK PRODUCTS//

const drink_container = document.getElementById("drink-flavors");

const drink_list = [
  {
    one: "vanilla-shake-1.png",
    two: "vanilla-shake-2.png",
    desc: "",
    dir: "drink-flavors/vanilla-shake",
    name: "Milkshakes",
    id: "60",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "root-beer-float-1.png",
    two: "root-beer-float-2.png",
    desc: "",
    dir: "drink-flavors/root-beer-float",
    name: "Floats",
    id: "61",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "mint-mocha-blenjava-1.png",
    two: "mint-mocha-blenjava-2.png",
    desc: "",
    dir: "drink-flavors/blenjava",
    name: "Blenjavas",
    id: "62",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "chocolate-malt-1.png",
    two: "chocolate-malt-2.png",
    desc: "",
    dir: "drink-flavors/chocolate-malt",
    name: "Malts",
    id: "63",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "banana-smoothie-1.png",
    two: "banana-smoothie-2.png",
    desc: "",
    dir: "drink-flavors/banana",
    name: "Banana Smoothie",
    id: "64",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "mango-smoothie-1.png",
    two: "mango-smoothie-2.png",
    desc: "",
    dir: "drink-flavors/mango",
    name: "Mango Smoothie",
    id: "65",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "pineapple-smoothie-1.png",
    two: "pineapple-smoothie-2.png",
    desc: "",
    dir: "drink-flavors/pineapple",
    name: "Pineapple Smoothie",
    id: "66",
    price1: "$?",
    price2: "$?",
    type: "3"
  },
  {
    one: "strawberry-smoothie-1.png",
    two: "strawberry-smoothie-2.png",
    desc: "",
    dir: "drink-flavors/strawberry",
    name: "Strawberry Smoothie",
    id: "67",
    price1: "$?",
    price2: "$?",
    type: "3"
  }
];

for (let drink of drink_list) {
  drink_container.innerHTML +=
    `<div class="product-card" onclick="load3(${drink.id})"><div class="product-img"><img class="img-product" src="/img/` +
    drink.dir +
    "/" +
    drink.one +
    '"></div><div class="product-name">' +
    drink.name +
    "</div></div>";
}

const drinkCup = document.querySelector(".toggle-drink");
const drinkTog = document.querySelector(".drink-toggle");
const drinkDesc = document.querySelector(".drink-desc");
let drinkToggle = 0;

function toggleDrinks() {
  if (drinkToggle === 0) {
    drink_container.style.display = "flex";
    drinkDesc.style.display = "block";
    drinkTog.style.display = "block";
    drinkCup.style.transform = "rotate(90deg)";
    drinkToggle = 1;
  } else {
    drink_container.style.display = "none";
    drinkDesc.style.display = "none";
    drinkTog.style.display = "none";
    drinkCup.style.transform = "rotate(0deg)";
    drinkToggle = 0;
  }
}

// PACKAGED ICE CREAM PRODUCTS //

const packaged_container = document.getElementById(
  "packaged-ice-cream-flavors"
);
const packaged_list = [
  {
    img:
      "https://www.hersheyicecream.com/wp-content/uploads/2022/01/banana-pudding-1.png",
    name: "Banana Pudding Pint"
  },
  {
    img:
      "https://www.hersheyicecream.com/wp-content/uploads/2022/01/peanut-butter-cup-2.png",
    name: "Peanut Butter Cup Pint"
  },
  {
    img:
      "https://www.hersheyicecream.com/wp-content/uploads/2022/02/round-cake-info.png",
    name: "Round Cake"
  },
  {
    img:
      "https://www.hersheyicecream.com/wp-content/uploads/2022/02/sheet-cake-info-1024x520.png",
    name: "Large Sheet Cake"
  }
];

for (let packaged of packaged_list) {
  packaged_container.innerHTML +=
    '<div class="product-card"><div class="product-img"><img class="img-product" src="' +
    packaged.img +
    '"></div><div class="product-name">' +
    packaged.name +
    "</div></div>";
}

const packagedBox = document.querySelector(".toggle-packaged");
const packagedTog = document.querySelector(".packaged-toggle");
const packagedDesc = document.querySelector(".packaged-desc");
let packagedToggle = 0;

function togglePackaged() {
  if (packagedToggle === 0) {
    packaged_container.style.display = "flex";
    packagedDesc.style.display = "block";
    packagedTog.style.display = "block";
    packagedBox.style.transform = "rotate(90deg)";
    packagedToggle = 1;
  } else {
    packaged_container.style.display = "none";
    packagedDesc.style.display = "none";
    packagedTog.style.display = "none";
    packagedBox.style.transform = "rotate(0deg)";
    packagedToggle = 0;
  }
}
