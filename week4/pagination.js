export default {
  template: '#pagination',
  props: ['pages'],
  methods: {
    changePage(page) {
      this.$emit('emitpage', page)
    }
  },
}