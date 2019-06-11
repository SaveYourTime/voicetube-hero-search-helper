class VoiceTubeHEROSearchHelper {
  constructor() {
    this.input = document.querySelector('#search-word-input');
    this.button = document.querySelector('#open-search-word');
    this.searchButton = document.querySelector('#search-word-icon');

    this.init();
  }

  handleSearchingVocabulary(e) {
    if (e.keyCode !== 13) { return; }
    window.localStorage.setItem('vocabulary', this.value);
  }

  handleSearchingVocabularyClick = (e) => {
    const vocabulary = window.localStorage.getItem('vocabulary');
    if (!vocabulary) { return; }
    const { target } = e;
    if (target.id === 'search-word-block' || target.closest('#search-word-block')) { return; }

    setTimeout(() => {
      this.input.value = vocabulary;
      this.searchButton.click();
    }, 1);
  }

  removeEvents() {
    this.input.removeEventListener('keyup', this.handleSearchingVocabulary);
    this.button.removeEventListener('click', this.handleSearchingVocabularyClick);
  }

  bindEvents() {
    this.input.addEventListener('keyup', this.handleSearchingVocabulary);
    this.button.addEventListener('click', this.handleSearchingVocabularyClick);
  }

  addButtonEffect() {
    this.button.setAttribute('style', 'padding: 0 8px; border-radius: 10px; background-color: rgba(198, 221, 198, .4);');
  }

  init() {
    try {
      this.removeEvents();
      this.bindEvents();
      this.addButtonEffect();
    } catch (e) {
      console.log(e);
    }
  }
}
const elementPresencedInterval = window.setInterval(() => {
  if (document.querySelector('#search-word-input')) {
    new VoiceTubeHEROSearchHelper();
    window.clearInterval(elementPresencedInterval);
  }
}, 500);