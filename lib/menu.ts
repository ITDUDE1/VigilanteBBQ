export type MenuItem = {
  name: string;
  description: string;
  /** Placeholder pricing — none of this is final. */
  price: string;
  /** How the price is measured, e.g. "per lb". */
  unit: string;
};

export const MENU: MenuItem[] = [
  {
    name: "Brisket",
    description:
      "Salt, pepper, post oak, fourteen hours. The one everything else gets judged against.",
    price: "$32",
    unit: "per lb",
  },
  {
    name: "Burnt Ends",
    description:
      "The point end, cubed and put back on the smoker until the edges give up.",
    price: "$34",
    unit: "per lb",
  },
  {
    name: "Pork Ribs",
    description:
      "St. Louis cut, pulled the moment they bend but before they fall off the bone.",
    price: "$18",
    unit: "half rack",
  },
  {
    name: "Tri Tip",
    description:
      "Santa Maria's idea, cooked over Texas oak and sliced thin against the grain.",
    price: "$30",
    unit: "per lb",
  },
  {
    name: "Pork Belly",
    description: "Cubed and glazed. Order one, regret it, order another.",
    price: "$26",
    unit: "per lb",
  },
  {
    name: "Smoked Wings",
    description: "Smoked low, then finished hot so the skin actually snaps.",
    price: "$14",
    unit: "half dozen",
  },
  {
    name: "Oxtail",
    description:
      "Smoked, then braised until it comes apart on its own. Only when there's any.",
    price: "$38",
    unit: "per lb",
  },
  {
    name: "Chicken",
    description: "Half a bird, brined overnight, skin worth eating on its own.",
    price: "$16",
    unit: "per half",
  },
  {
    name: "Turkey",
    description:
      "The one nobody orders, and then regrets not ordering. Bring a cooler.",
    price: "$28",
    unit: "per lb",
  },
];
