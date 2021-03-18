<template>
  <div class="categories">
    <div class="heading">
      <div class="heading-image">
        <img src="@/assets/images/astronaut.svg" />
      </div>
      <div class="heading-text">
        <h2>Perguntas Frequentes</h2>
        <small>Escolha a categoria desejada</small>
      </div>
    </div>
    <ul class="categories">
      <li
        class="categories__items"
        v-for="faq in $getFaqs"
        :key="faq.id"
        @click="$setQuestions(faq)"
      >
        <img :src="getImage(faq)" />
        {{ faq.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.heading-image {
  display: grid;
  justify-content: center;
}

.heading-image img {
  width: 242px;
}

.heading-text {
  padding: 1.1rem 1.875rem 2.125rem;
}

.heading-text h2 {
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
}

.categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories__items {
  padding: 1rem 1.8rem;
  color: #f5f5f5;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2.125rem;
  background: transparent;
  transition: background-color 0.2s ease-in-out;
  font-size: 1rem;
}

.categories__items:hover {
  background: #3f4452;
  cursor: pointer;
}

.categories__items img {
  width: 1.5rem;
}
</style>

<script>
export default {
  created() {
    this.$store.dispatch('getFaqs')
  },
  computed: {
    $getFaqs() {
      return this.$store.getters.$getFaqs
    }
  },
  methods: {
    $setQuestions(id) {
      this.$store.dispatch('increaseDepth')
      this.$store.dispatch('setQuestions', id)
      this.$store.dispatch('setCurrentView', 'Question')
    },
    getImage(faq) {
      return require(`@/assets/images/${faq.icon}`)
    }
  }
}
</script>
