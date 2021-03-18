<template>
  <div class="questions">
    <div class="heading">
      <div class="icon" @click="back()">
        <img src="@/assets/images/arrow-left.svg" />
      </div>
      <div class="text">
        <h2>{{ $getQuestions.title }}</h2>
        <small>Selecione uma pergunta</small>
      </div>
      <img src="@/assets/images/rocket.svg" />
    </div>
    <ul class="question-list">
      <li
        v-for="question in $getQuestions.questions"
        :key="question.id"
        @click="$setAnswer(question)"
        class="question-item"
      >
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    $getQuestions() {
      return this.$store.getters.$getQuestions
    }
  },
  methods: {
    $setAnswer(id) {
      this.$store.dispatch('increaseDepth')
      this.$store.dispatch('setAnswer', id)
      this.$store.dispatch('setCurrentView', 'Answer')
    },
    back() {
      this.$store.dispatch('decreaseDepth')
      this.$store.dispatch('setCurrentView', 'Home')
    }
  }
}
</script>

<style scoped lang="scss">
.heading {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  padding: 0 1.25rem 1.875rem 1.25rem;
  border-bottom: 1px solid rgb(65, 64, 64);
  grid-gap: 1rem;
  align-items: center;

  img {
    width: 1.5rem;
  }

  .icon {
    padding: 0.65rem 0.75rem;
    transition: backgroud-color 0.2s ease-in-out;

    &:hover {
      background: #26282c;
      cursor: pointer;
      border-radius: 8px;
    }
  }

  .text {
    h2 {
      font-size: 1.25rem;
    }
  }
}

.question-list {
  list-style: none;
  padding-top: 0.875rem;

  .question-item {
    font-size: 1rem;
    padding: 1rem 1.25rem;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
  }
}
</style>
