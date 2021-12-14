export default {
  computed: {
    getCountOfPage() {
      let count = this.cars.count;
      let notesOnPage = this.notesOnPage;
      return Math.ceil(count / notesOnPage);
    },
  },
};
