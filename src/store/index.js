import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faqs: [],
    questions: [],
    answer: '',
    currentView: 'Home',
    viewDepth: 1
  },
  mutations: {
    SET_FAQS(state, faqs) {
      state.faqs = faqs
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions
    },
    SET_ANSWER(state, answer) {
      state.answer = answer
    },
    SET_CURRENT_VIEW(state, currentView) {
      state.currentView = currentView
    },
    INCREASE_DEPTH(state) {
      state.viewDepth++
    },
    DECREASE_DEPTH(state) {
      state.viewDepth--
    }
  },
  actions: {
    getFaqs(context) {
      context.commit('SET_FAQS', faqCategories)
    },
    setQuestions(context, payload) {
      context.commit('SET_QUESTIONS', payload)
    },
    setAnswer(context, payload) {
      context.commit('SET_ANSWER', payload)
    },
    setCurrentView(context, view = this.state.currentView) {
      context.commit('SET_CURRENT_VIEW', view)
    },
    increaseDepth(context) {
      context.commit('INCREASE_DEPTH')
    },
    decreaseDepth(context) {
      context.commit('DECREASE_DEPTH')
    }
  },
  getters: {
    $getFaqs(state) {
      return state.faqs
    },
    $getCurrentView(state) {
      return state.currentView
    },
    $getQuestions(state) {
      return state.questions
    },
    $getAnswer(state) {
      return state.answer
    },
    $currentDepth(state) {
      return state.viewDepth
    }
  }
})
