const products = [
  {
    one: "banana-pudding-1.png",
    two: "banana-pudding-2.png",
    three: "banana-pudding-3.png",
    four: "banana-pudding-4.png",
    five: "banana-pudding-5.png",
    six: "banana-pudding-6.png",
    desc: "Banana ice cream with marshmallow swirls and vanilla wafer cookies.",
    dir: "icecream-flavors/banana-pudding",
    name: "Banana Pudding",
    id: "0",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "better-brownie-batter-1.png",
    two: "better-brownie-batter-2.png",
    three: "better-brownie-batter-3.png",
    four: "better-brownie-batter-4.png",
    five: "better-brownie-batter-5.png",
    six: "better-brownie-batter-6.png",
    desc:
      "Luxurious brownie batter ice cream with rich fudge swirls, and loaded with bits of real brownies.",
    dir: "icecream-flavors/better-brownie-batter",
    name: "Better Brownie Batter",
    id: "1",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "birthday-cake-1.png",
    two: "birthday-cake-2.png",
    three: "birthday-cake-3.png",
    four: "birthday-cake-4.png",
    five: "birthday-cake-5.png",
    six: "birthday-cake-6.png",
    desc:
      "Cake flavored ice cream with a bright blue frosting swirl and confetti colored cake pieces.",
    dir: "icecream-flavors/birthday-cake",
    name: "Birthday Cake",
    id: "2",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "butter-pecan-1.png",
    two: "butter-pecan-2.png",
    three: "butter-pecan-3.png",
    four: "butter-pecan-4.png",
    five: "butter-pecan-5.png",
    six: "butter-pecan-6.png",
    desc: "Buttery ice cream with fresh roasted pecans.",
    dir: "icecream-flavors/butter-pecan",
    name: "Butter Pecan",
    id: "3",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "cappuccino-crunch-1.png",
    two: "cappuccino-crunch-2.png",
    three: "cappuccino-crunch-3.png",
    four: "cappuccino-crunch-4.png",
    five: "cappuccino-crunch-5.png",
    six: "cappuccino-crunch-6.png",
    desc:
      "Coffee ice cream with a dark chocolate spiral and almond toffee pieces.",
    dir: "icecream-flavors/cappuccino-crunch",
    name: "Cappuccino Crunch",
    id: "4",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "caramel-cheesecake-cookie-monster-1.png",
    two: "caramel-cheesecake-cookie-monster-2.png",
    three: "caramel-cheesecake-cookie-monster-3.png",
    four: "caramel-cheesecake-cookie-monster-4.png",
    five: "caramel-cheesecake-cookie-monster-5.png",
    six: "caramel-cheesecake-cookie-monster-6.png",
    desc:
      "Cheesecake ice cream loaded with delicious cheesecake pieces, chocolate cookie pieces, chocolate drops and a caramel fudge swirl.",
    dir: "icecream-flavors/caramel-cheesecake-cookie-monster",
    name: "Caramel Cheesecake",
    id: "5",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "chocolate-1.png",
    two: "chocolate-2.png",
    three: "chocolate-3.png",
    four: "chocolate-4.png",
    five: "chocolate-5.png",
    six: "chocolate-6.png",
    desc:
      "Rich chocolate ice cream loaded with lots of great chocolate flavor in every bite.",
    dir: "icecream-flavors/chocolate",
    name: "Chocolate",
    id: "6",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "chocolate-moose-tracks-1.png",
    two: "chocolate-moose-tracks-2.png",
    three: "chocolate-moose-tracks-3.png",
    four: "chocolate-moose-tracks-4.png",
    five: "chocolate-moose-tracks-5.png",
    six: "chocolate-moose-tracks-6.png",
    desc:
      "Famous Moose Tracks® fudge and peanut butter cups swirled through chocolate ice cream.",
    dir: "icecream-flavors/chocolate-moose-tracks",
    name: "Chocolate Moose Tracks",
    id: "7",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "coconut-1.png",
    two: "coconut-2.png",
    three: "coconut-3.png",
    four: "coconut-4.png",
    five: "coconut-5.png",
    six: "coconut-6.png",
    desc:
      "Coconut ice cream with shredded coconut mixed throughout every delicious scoop.",
    dir: "icecream-flavors/coconut",
    name: "Coconut",
    id: "8",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "coffeehouse-cookies-and-cream-1.png",
    two: "coffeehouse-cookies-and-cream-2.png",
    three: "coffeehouse-cookies-and-cream-3.png",
    four: "coffeehouse-cookies-and-cream-4.png",
    five: "coffeehouse-cookies-and-cream-5.png",
    six: "coffeehouse-cookies-and-cream-6.png",
    desc:
      "Our delicious coffee ice cream loaded with cream filled chocolate cookie pieces!",
    dir: "icecream-flavors/coffeehouse-cookies-and-cream",
    name: "Coffee Cookies & Cream",
    id: "9",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "cookies-and-cream-1.png",
    two: "cookies-and-cream-2.png",
    three: "cookies-and-cream-3.png",
    four: "cookies-and-cream-4.png",
    five: "cookies-and-cream-5.png",
    six: "cookies-and-cream-6.png",
    desc: "Vanilla ice cream with delicious cream filled cookie chunks.",
    dir: "icecream-flavors/cookies-and-cream",
    name: "Cookies & Cream",
    id: "10",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "french-vanilla-1.png",
    two: "french-vanilla-2.png",
    three: "french-vanilla-3.png",
    four: "french-vanilla-4.png",
    five: "french-vanilla-5.png",
    six: "french-vanilla-6.png",
    desc: "Custardy vanilla ice cream. It’s a rich flavor experience!",
    dir: "icecream-flavors/french-vanilla",
    name: "French Vanilla",
    id: "11",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "green-mint-chip-1.png",
    two: "green-mint-chip-2.png",
    three: "green-mint-chip-3.png",
    four: "green-mint-chip-4.png",
    five: "green-mint-chip-5.png",
    six: "green-mint-chip-6.png",
    desc: "Cool green mint ice cream with tasty chocolate chips throughout.",
    dir: "icecream-flavors/green-mint-chip",
    name: "Green Mint Chip",
    id: "12",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "key-lime-pie-1.png",
    two: "key-lime-pie-2.png",
    three: "key-lime-pie-3.png",
    four: "key-lime-pie-4.png",
    five: "key-lime-pie-5.png",
    six: "key-lime-pie-6.png",
    desc:
      "A rich lime mousse ice cream swirled with lime and whipped cream ribbons and graham cracker chunks.",
    dir: "icecream-flavors/key-lime-pie",
    name: "Key Lime Pie",
    id: "13",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "maple-walnut-1.png",
    two: "maple-walnut-2.png",
    three: "maple-walnut-3.png",
    four: "maple-walnut-4.png",
    five: "maple-walnut-5.png",
    six: "maple-walnut-6.png",
    desc: "Maple ice cream loaded with delicious English walnuts.",
    dir: "icecream-flavors/maple-walnut",
    name: "Maple Walnut",
    id: "14",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "midnight-caramel-river-1.png",
    two: "midnight-caramel-river-2.png",
    three: "midnight-caramel-river-3.png",
    four: "midnight-caramel-river-4.png",
    five: "midnight-caramel-river-5.png",
    six: "midnight-caramel-river-6.png",
    desc:
      "Creamy golden vanilla and dark chocolate ice cream flooded with a thick and rich caramel swirl.",
    dir: "icecream-flavors/midnight-caramel-river",
    name: "Midnight Caramel River",
    id: "15",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "moose-tracks-1.png",
    two: "moose-tracks-2.png",
    three: "moose-tracks-3.png",
    four: "moose-tracks-4.png",
    five: "moose-tracks-5.png",
    six: "moose-tracks-6.png",
    desc:
      "Famous Moose Tracks® fudge and peanut butter cups swirled through vanilla ice cream.",
    dir: "icecream-flavors/moose-tracks",
    name: "Moose Tracks",
    id: "16",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "orange-sherbet-1.png",
    two: "orange-sherbet-2.png",
    three: "orange-sherbet-3.png",
    four: "orange-sherbet-4.png",
    five: "orange-sherbet-5.png",
    six: "orange-sherbet-6.png",
    desc: "Cool and tasty orange sherbet.",
    dir: "icecream-flavors/orange-sherbet",
    name: "Orange Sherbet",
    id: "17",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "peach-1.png",
    two: "peach-2.png",
    three: "peach-3.png",
    four: "peach-4.png",
    five: "peach-5.png",
    six: "peach-6.png",
    desc: "Creamy peach ice cream with peach slices.",
    dir: "icecream-flavors/peach",
    name: "Peach",
    id: "18",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "pistachio-1.png",
    two: "pistachio-2.png",
    three: "pistachio-3.png",
    four: "pistachio-4.png",
    five: "pistachio-5.png",
    six: "pistachio-6.png",
    desc: "Pistachio ice cream with taste tempting roasted pistachios.",
    dir: "icecream-flavors/pistachio",
    name: "Pistachio",
    id: "19",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "playdough-1.png",
    two: "playdough-2.png",
    three: "playdough-3.png",
    four: "playdough-4.png",
    five: "playdough-5.png",
    six: "playdough-6.png",
    desc:
      "Bright yellow vanilla ice cream with hot pink and blue sugar cookie gems. Children love it!",
    dir: "icecream-flavors/playdough",
    name: "Playdough",
    id: "20",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "praline-pecan-1.png",
    two: "praline-pecan-2.png",
    three: "praline-pecan-3.png",
    four: "praline-pecan-4.png",
    five: "praline-pecan-5.png",
    six: "praline-pecan-6.png",
    desc:
      "Butter ice cream swirled with caramel and praline pecans. A true taste of the South!",
    dir: "icecream-flavors/praline-pecan",
    name: "Praline Pecan",
    id: "21",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "rainbow-sherbet-1.png",
    two: "rainbow-sherbet-2.png",
    three: "rainbow-sherbet-3.png",
    four: "rainbow-sherbet-4.png",
    five: "rainbow-sherbet-5.png",
    six: "rainbow-sherbet-6.png",
    desc: "Citrus inspired, refreshing rainbow sherbet",
    dir: "icecream-flavors/rainbow-sherbet",
    name: "Rainbow Sherbet",
    id: "22",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "strawberry-1.png",
    two: "strawberry-2.png",
    three: "strawberry-3.png",
    four: "strawberry-4.png",
    five: "strawberry-5.png",
    six: "strawberry-6.png",
    desc: "Strawberry ice cream with chunks of real strawberries.",
    dir: "icecream-flavors/strawberry",
    name: "Strawberry",
    id: "23",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "strawberry-cheesecake-1.png",
    two: "strawberry-cheesecake-2.png",
    three: "strawberry-cheesecake-3.png",
    four: "strawberry-cheesecake-4.png",
    five: "strawberry-cheesecake-5.png",
    six: "strawberry-cheesecake-6.png",
    desc:
      "Cheesecake ice cream swirled with strawberry sauce and cheesecake pieces.",
    dir: "icecream-flavors/strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    id: "24",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "superman-1.png",
    two: "superman-2.png",
    three: "superman-3.png",
    four: "superman-4.png",
    five: "superman-5.png",
    six: "superman-6.png",
    desc:
      "A playful twist of strawberry, banana, and Blue Moon ice cream. Another great kid favorite!",
    dir: "icecream-flavors/superman",
    name: "Superman",
    id: "25",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "vanilla-1.png",
    two: "vanilla-2.png",
    three: "vanilla-3.png",
    four: "vanilla-4.png",
    five: "vanilla-5.png",
    six: "vanilla-6.png",
    desc:
      "Creamy vanilla ice cream that tastes just like Hershey's recipe from when they started in 1894.",
    dir: "icecream-flavors/vanilla",
    name: "Vanilla",
    id: "26",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "whitehouse-cherry-1.png",
    two: "whitehouse-cherry-2.png",
    three: "whitehouse-cherry-3.png",
    four: "whitehouse-cherry-4.png",
    five: "whitehouse-cherry-5.png",
    six: "whitehouse-cherry-6.png",
    desc: "Vanilla ice cream with Maraschino cherries.",
    dir: "icecream-flavors/whitehouse-cherry",
    name: "Whitehouse Cherry",
    id: "27",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "cookie-dough-chip-1.png",
    two: "cookie-dough-chip-2.png",
    three: "cookie-dough-chip-3.png",
    four: "cookie-dough-chip-4.png",
    five: "cookie-dough-chip-5.png",
    six: "cookie-dough-chip-6.png",
    desc:
      "Cookie dough with chocolate chips throughout a cookie dough flavored oat based non-dairy dessert.",
    dir: "icecream-flavors/cookie-dough-chip",
    name: "Cookie Dough Chip",
    id: "28",
    price1: "$5.99",
    price2: "$7.59",
    price3: "$8.99",
    price4: "$3.29",
    price5: "$5.99",
    price6: "$6.99",
    type: "1"
  },
  {
    one: "classic-cookie-1.png",
    two: "classic-cookie-2.png",
    three: "classic-cookie-3.png",
    four: "classic-cookie-4.png",
    five: "classic-cookie-5.png",
    six: "classic-cookie-6.png",
    desc:
      "Cream filled cookie chunks in a small-batch, Oatmilk based, non-dairy frozen dessert.",
    dir: "icecream-flavors/classic-cookie",
    name: "Classic Cookie",
    id: "29",
    price1: "$5.99",
    price2: "$7.59",
    price3: "$8.99",
    price4: "$3.29",
    price5: "$5.99",
    price6: "$6.99",
    type: "1"
  },
  {
    one: "lemon-sorbet-1.png",
    two: "lemon-sorbet-2.png",
    three: "lemon-sorbet-3.png",
    four: "lemon-sorbet-4.png",
    five: "lemon-sorbet-5.png",
    six: "lemon-sorbet-6.png",
    desc: "Refreshing and fruity lemon flavored sorbet.",
    dir: "icecream-flavors/lemon-sorbet",
    name: "Lemon Sorbet",
    id: "30",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "raspberry-sorbet-1.png",
    two: "raspberry-sorbet-2.png",
    three: "raspberry-sorbet-3.png",
    four: "raspberry-sorbet-4.png",
    five: "raspberry-sorbet-5.png",
    six: "raspberry-sorbet-6.png",
    desc: "Smooth and fruity raspberry flavored sorbet.",
    dir: "icecream-flavors/raspberry-sorbet",
    name: "Raspberry Sorbet",
    id: "31",
    price1: "$4.49",
    price2: "$6.49",
    price3: "$7.99",
    price4: "$3.29",
    price5: "$4.49",
    price6: "$5.49",
    type: "1"
  },
  {
    one: "super-berry-acai-1.png",
    two: "super-berry-acai-2.png",
    three: "super-berry-acai-3.png",
    four: "super-berry-acai-4.png",
    five: "super-berry-acai-5.png",
    six: "super-berry-acai-6.png",
    desc:
      "A sweet and tart oat based non-dairy dessert with a blueberry swirl and cinnamon oatmeal clusters.",
    dir: "icecream-flavors/super-berry-acai",
    name: "Super Berry Acai",
    id: "32",
    price1: "$5.99",
    price2: "$7.59",
    price3: "$8.99",
    price4: "$3.29",
    price5: "$5.99",
    price6: "$6.99",
    type: "1"
  },
  {
    one: "bahama-mama-1.png",
    two: "bahama-mama-2.png",
    desc:
      "The tastes of coconut and cherry mixed into one mouth-watering flavor.",
    dir: "shaved-ice-flavors/bahama-mama",
    name: "Bahama Mama",
    id: "33",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "banana-1.png",
    two: "banana-2.png",
    desc:
      "A sweet and fruity taste, with the rich and creamy distinct taste of bananas. ",
    dir: "shaved-ice-flavors/banana",
    name: "Banana",
    id: "34",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "black-cherry-1.png",
    two: "black-cherry-2.png",
    desc:
      "A sweet and fruity taste that is derived from the flavor of black cherries.",
    dir: "shaved-ice-flavors/black-cherry",
    name: "Black Cherry",
    id: "35",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "blue-raspberry-1.png",
    two: "blue-raspberry-2.png",
    desc:
      "A fruity and slightly tart flavor, reminiscent of raspberry but with a blue color.",
    dir: "shaved-ice-flavors/blue-raspberry",
    name: "Blue Raspberry",
    id: "36",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "cherry-1.png",
    two: "cherry-2.png",
    desc:
      "A sweet and fruity taste that is derived from the flavor of fresh cherries.",
    dir: "shaved-ice-flavors/cherry",
    name: "Cherry",
    id: "37",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "coconut-1.png",
    two: "coconut-2.png",
    desc:
      "The coconut flavor is rich and creamy, with a hint of sweetness that's not too overpowering.",
    dir: "shaved-ice-flavors/coconut",
    name: "Coconut",
    id: "38",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "cola-1.png",
    two: "cola-2.png",
    desc: "A sweet and tangy taste that is reminiscent of cola soda.",
    dir: "shaved-ice-flavors/cola",
    name: "Cola",
    id: "39",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "grape-1.png",
    two: "grape-2.png",
    desc: "A rich and juicy sweetness, with a distinct grape flavor.",
    dir: "shaved-ice-flavors/grape",
    name: "Grape",
    id: "40",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "green-apple-1.png",
    two: "green-apple-2.png",
    desc: "A flavoring with a crispy sweet and tart taste. ",
    dir: "shaved-ice-flavors/green-apple",
    name: "Green Apple",
    id: "41",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "guava-1.png",
    two: "guava-2.png",
    desc:
      "A sweet and tropical, fragrant taste that is derived from the guava fruit.",
    dir: "shaved-ice-flavors/guava",
    name: "Guava",
    id: "42",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "gummy-bear-1.png",
    two: "gummy-bear-2.png",
    desc: "A sweet and juicy taste, with a blend of different fruity flavors. ",
    dir: "shaved-ice-flavors/gummy-bear",
    name: "Gummy Bear",
    id: "43",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "hawaiian-punch-1.png",
    two: "hawaiian-punch-2.png",
    desc: "A tropical blend with a refreshingly tangy taste.",
    dir: "shaved-ice-flavors/hawaiian-punch",
    name: "Hawaiian Punch",
    id: "44",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "kiwi-1.png",
    two: "kiwi-2.png",
    desc: "The fresh and vibrant taste of kiwi fruit, with hint of tart. ",
    dir: "shaved-ice-flavors/kiwi",
    name: "Kiwi",
    id: "45",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "lemon-1.png",
    two: "lemon-2.png",
    desc:
      "A sour and acidic taste, with the distinct citrus flavor of fresh lemon juice. ",
    dir: "shaved-ice-flavors/lemon",
    name: "Lemon",
    id: "46",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "lime-1.png",
    two: "lime-2.png",
    desc: "A sweet and tart taste, reminiscent of fresh lime juice. ",
    dir: "shaved-ice-flavors/lime",
    name: "Lime",
    id: "47",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "mango-1.png",
    two: "mango-2.png",
    desc: "A sweet and juicy taste, with a slightly tart note. ",
    dir: "shaved-ice-flavors/mango",
    name: "Mango",
    id: "48",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "orange-1.png",
    two: "orange-2.png",
    desc:
      "A sweet and tangy taste that is derived from the citrusy flavor of oranges.",
    dir: "shaved-ice-flavors/orange",
    name: "Orange",
    id: "49",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "passion-fruit-1.png",
    two: "passion-fruit-2.png",
    desc:
      "An indescribably sweet and tangy taste that is derived from the flavor of passion fruit.",
    dir: "shaved-ice-flavors/passion-fruit",
    name: "Passion Fruit",
    id: "50",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "peach-1.png",
    two: "peach-2.png",
    desc: "A sweet and juicy taste, with a delicate note of tart.",
    dir: "shaved-ice-flavors/peach",
    name: "Peach",
    id: "51",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "pineapple-1.png",
    two: "pineapple-2.png",
    desc:
      "The tropical and refreshing taste of pineapples, with a hint of tang.",
    dir: "shaved-ice-flavors/pineapple",
    name: "Pineapple",
    id: "52",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "pink-lemonade-1.png",
    two: "pink-lemonade-2.png",
    desc: "A sweet and slightly tart taste, with a fruity and citrusy note.",
    dir: "shaved-ice-flavors/pink-lemonade",
    name: "Pink Lemonade",
    id: "53",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "red-raspberry-1.png",
    two: "red-raspberry-2.png",
    desc:
      "A fruity and slightly tart flavor, reminiscent of the blue raspberry flavor.",
    dir: "shaved-ice-flavors/red-raspberry",
    name: "Red Raspberry",
    id: "54",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "root-beer-1.png",
    two: "root-beer-2.png",
    desc:
      "A sweet and creamy taste, with a hint of spice and a slight bitterness.",
    dir: "shaved-ice-flavors/root-beer",
    name: "Root Beer",
    id: "55",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "spearmint-1.png",
    two: "spearmint-2.png",
    desc:
      "A refreshing and minty taste that is derived from the spearmint plant.",
    dir: "shaved-ice-flavors/spearmint",
    name: "Spearmint",
    id: "56",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "strawberry-1.png",
    two: "strawberry-2.png",
    desc:
      " A sweet and tarty berry-like taste, reminiscent of fresh strawberries. ",
    dir: "shaved-ice-flavors/strawberry",
    name: "Strawberry",
    id: "57",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "tigers-blood-1.png",
    two: "tigers-blood-2.png",
    desc:
      "The tastes of strawberry, coconut, and watermelon mixed into one mouth-watering flavor.",
    dir: "shaved-ice-flavors/tigers-blood",
    name: "Tigers Blood",
    id: "58",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
  {
    one: "watermelon-1.png",
    two: "watermelon-2.png",
    desc: "A sweet and juicy taste, with a slightly tart and refreshing note. ",
    dir: "shaved-ice-flavors/watermelon",
    name: "Watermelon",
    id: "59",
    price1: "$4.99",
    price2: "$6.59",
    type: "2"
  },
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
    desc:
      "A creamy and sweet taste, with the distinct flavor of bananas being the feature.",
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
    desc:
      "A sweet and fruity taste, with the tropical flavor of ripe mangoes being the star of the show.",
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
    desc:
      "A sweet and tangy taste, with the tropical flavor of delicious pineapples. ",
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
    desc:
      "A sweet and refreshing taste, with the tangy and juicy flavor of fresh strawberries.",
    dir: "drink-flavors/strawberry",
    name: "Strawberry Smoothie",
    id: "67",
    price1: "$?",
    price2: "$?",
    type: "3"
  }
];

// PRODUCT PAGE //

function productLoad() {
  let productID = localStorage.getItem("productID");

  const d_header = document.querySelector(".desktop-header");
  const m_header = document.querySelector(".mobile-header");
  const desc = document.querySelector(".product-description");

  d_header.innerHTML =
    '<span id="product-name">=== ' + products[productID].name + " ===</span>";

  m_header.innerHTML =
    '<span id="product-name">' + products[productID].name + "</span>";

  desc.innerHTML = products[productID].desc;

  const one_scoop = document.querySelector(".one-scoop");
  const two_scoop = document.querySelector(".two-scoop");
  const three_scoop = document.querySelector(".three-scoop");
  const cake_cone = document.querySelector(".cake-cone");
  const sugar_cone = document.querySelector(".sugar-cone");
  const waffle_cone = document.querySelector(".waffle-cone");

  one_scoop.innerHTML =
    '<img class="img-product" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].one +
    '"/>';

  two_scoop.innerHTML =
    '<img class="img-product" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].two +
    '"/>';

  three_scoop.innerHTML =
    '<img class="img-product" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].three +
    '"/>';

  cake_cone.innerHTML =
    '<img class="" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].four +
    '"/>';

  sugar_cone.innerHTML =
    '<img class="" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].five +
    '"/>';

  waffle_cone.innerHTML =
    '<img class="" src="/img/' +
    products[productID].dir +
    "/" +
    products[productID].six +
    '"/>';

  const price_1 = document.querySelector(".price-1");
  const price_2 = document.querySelector(".price-2");
  const price_3 = document.querySelector(".price-3");
  const price_4 = document.querySelector(".price-4");
  const price_5 = document.querySelector(".price-5");
  const price_6 = document.querySelector(".price-6");

  price_1.innerHTML = products[productID].price1;
  price_2.innerHTML = products[productID].price2;
  price_3.innerHTML = products[productID].price3;
  price_4.innerHTML = products[productID].price4;
  price_5.innerHTML = products[productID].price5;
  price_6.innerHTML = products[productID].price6;
}

function load(x) {
  localStorage.setItem("productID", x);
  let productID = localStorage.getItem("productID");
  console.log(productID);
  console.clear(productID);
  window.location.href = "ice-cream-products.html";
}

function load2(x) {
  localStorage.setItem("productID", x);
  let productID = localStorage.getItem("productID");
  console.log(productID);
  console.clear(productID);
  window.location.href = "shaved-ice-products.html";
}

function load3(x) {
  localStorage.setItem("productID", x);
  let productID = localStorage.getItem("productID");
  console.log(productID);
  console.clear(productID);
  window.location.href = "drink-products.html";
}
