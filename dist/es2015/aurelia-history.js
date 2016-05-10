

function mi(name) {
  throw new Error(`History must implement ${ name }().`);
}

export let History = class History {
  activate(options) {
    mi('activate');
  }

  deactivate() {
    mi('deactivate');
  }

  getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  }

  navigate(fragment, options) {
    mi('navigate');
  }

  navigateBack() {
    mi('navigateBack');
  }

  setTitle(title) {
    mi('setTitle');
  }
};