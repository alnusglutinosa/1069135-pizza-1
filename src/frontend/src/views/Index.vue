<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="(dough, index) in typeDough"
                :key="dough.slug"
                class="dough__input"
                :class="`dough__input--${dough.slug}`"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="dough.slug"
                  class="visually-hidden"
                  :checked="index === 0"
                />
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="(size, index) in sizes"
                :key="size.slug"
                class="diameter__input"
                :class="`dough__input--${size.slug}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="size.slug"
                  class="visually-hidden"
                  :checked="index === 1"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingridients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингридиенты
            </h2>

            <div class="sheet__content ingridients">
              <div class="ingridients__sauce">
                <p>Основной соус:</p>

                <label class="radio ingridients__input">
                  <input type="radio" name="sauce" value="tomato" checked />
                  <span>Томатный</span>
                </label>
                <label class="radio ingridients__input">
                  <input type="radio" name="sauce" value="creamy" />
                  <span>Сливочный</span>
                </label>
              </div>

              <div class="ingridients__filling">
                <p>Начинка:</p>

                <ul class="ingridients__list">
                  <li
                    v-for="ingredient in ingredients"
                    :key="ingredient.slug"
                    class="ingridients__item"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.slug}`"
                    >
                      {{ ingredient.name }}
                    </span>

                    <div class="counter counter--orange ingridients__counter">
                      <button
                        type="button"
                        class="
                          counter__button
                          counter__button--disabled
                          counter__button--minus
                        "
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>
<script>
import pizza from "@/static/pizza.json";
import {
  normalizeIngredient,
  normalizeDough,
  normalizeSize,
} from "@/common/helpers";

export default {
  name: "IndexHome",
  computed: {
    ingredients() {
      return pizza.ingredients.map((ingredient) =>
        normalizeIngredient(ingredient)
      );
    },
    typeDough() {
      return pizza.dough.map((dough) => normalizeDough(dough));
    },
    sizes() {
      return pizza.sizes.map((size) => normalizeSize(size));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/app.scss";
</style>
