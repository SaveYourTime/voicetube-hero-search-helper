const toggle = document.querySelector('#toggle');
const status = window.localStorage.getItem('toggle');
if (status) {
  toggle.checked = true;
}
toggle.addEventListener('change', function (e) {
  if (!this.checked) {
    return window.localStorage.clear('toggle');
  }
  window.localStorage.setItem('toggle', this.checked);
});