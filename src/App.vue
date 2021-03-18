<template>
  <div class="app">
    <div class="container">
      <transition :name="defaultTransition" mode="out-in">
        <component :is="$getCurrentView" />
      </transition>
    </div>
  </div>
</template>

<script>
import Home from '@/pages/Home'
import Answer from '@/pages/Answer'
import Question from '@/pages/Question'

export default {
  components: { Home, Answer, Question },
  data() {
    return {
      defaultTransition: 'slide-left'
    }
  },
  computed: {
    $getCurrentView() {
      return this.$store.getters.$getCurrentView
    },
    $currentDepth() {
      return this.$store.getters.$currentDepth
    }
  },
  watch: {
    $currentDepth(newValue, oldValue) {
      if (newValue > oldValue) {
        this.defaultTransition = 'slide-left'
      } else {
        this.defaultTransition = 'slide-right'
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 30rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #f5f6f8;
}

.container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background-image: linear-gradient(180deg, #3f4452, #26282c);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
  overflow: hidden;
  position: relative;
  color: white;
}
</style>

<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
.slide-right-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
.slide-left-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
