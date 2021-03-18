<template>
  <div class="answer">
    <div class="heading">
      <div class="icon" @click="back()">
        <img src="@/assets/images/arrow-left.svg" />
      </div>
      <div class="text">
        <h2>{{ $getAnswer.title }}</h2>
      </div>
    </div>
    <div class="question-text">
      <span v-html="$getAnswer.content"></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $getAnswer() {
      return this.$store.getters.$getAnswer
    }
  },
  methods: {
    back() {
      this.$store.dispatch('decreaseDepth')
      this.$store.dispatch('setCurrentView', 'Question')
    }
  }
}
</script>

<style scoped lang="scss">
.heading {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 1.25rem 1rem 1.25rem;

  img {
    width: 1.5rem;
  }

  .text {
    h2 {
      font-size: 1rem;
      font-weight: 400;
    }
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
}

.question-text {
  padding: 0 1.25rem 1.875rem 1.25rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
}
</style>
