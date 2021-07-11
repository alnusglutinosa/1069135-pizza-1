const ingredientsSlug = [
  {
    name: "Грибы",
    value: "mushrooms",
  },
  {
    name: "Чеддер",
    value: "cheddar",
  },
  {
    name: "Салями",
    value: "salami",
  },
  {
    name: "Ветчина",
    value: "ham",
  },
  {
    name: "Ананас",
    value: "ananas",
  },
  {
    name: "Бекон",
    value: "bacon",
  },
  {
    name: "Лук",
    value: "onion",
  },
  {
    name: "Чили",
    value: "chile",
  },
  {
    name: "Халапеньо",
    value: "jalapeno",
  },
  {
    name: "Маслины",
    value: "olives",
  },
  {
    name: "Томаты",
    value: "tomatoes",
  },
  {
    name: "Лосось",
    value: "salmon",
  },
  {
    name: "Моцарелла",
    value: "mozzarella",
  },
  {
    name: "Пармезан",
    value: "parmesan",
  },
  {
    name: "Блю чиз",
    value: "blue_cheese",
  },
];

const doughSlug = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

const doughSize = [
  {
    name: "23 см",
    value: "small",
  },
  {
    name: "32 см",
    value: "normal",
  },
  {
    name: "45 см",
    value: "big",
  },
];

export const normalizeIngredient = (ingredient) => {
  return {
    ...ingredient,
    slug: ingredientsSlug.find((el) => el.name === ingredient.name).value,
  };
};

export const normalizeDough = (dough) => {
  return {
    ...dough,
    slug: doughSlug.find((el) => el.name === dough.name).value,
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    slug: doughSize.find((el) => el.name === size.name).value,
  };
};
