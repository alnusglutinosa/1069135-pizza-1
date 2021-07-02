const ingredientsSlug = {
  Грибы: "mushrooms",
  Чеддер: "cheddar",
  Салями: "salami",
  Ветчина: "ham",
  Ананас: "ananas",
  Бекон: "bacon",
  Лук: "onion",
  Чили: "chile",
  Халапеньо: "jalapeno",
  Маслины: "olives",
  Томаты: "tomatoes",
  Лосось: "salmon",
  Моцарелла: "mozzarella",
  Пармезан: "parmesan",
  "Блю чиз": "blue_cheese",
};

const doughSlug = {
  Тонкое: "light",
  Толстое: "large",
};

const doughSize = {
  "23 см": "small",
  "32 см": "normal",
  "45 см": "big",
};

export const normalizeIngredient = (ingredient) => {
  return {
    ...ingredient,
    slug: ingredientsSlug[ingredient.name],
  };
};

export const normalizeDough = (dough) => {
  return {
    ...dough,
    slug: doughSlug[dough.name],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    slug: doughSize[size.name],
  };
};
