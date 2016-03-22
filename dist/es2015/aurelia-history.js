
export let History = class History {
  activate(options) {
    throw new Error('History must implement activate().');
  }

  deactivate() {
    throw new Error('History must implement deactivate().');
  }

  navigate(fragment, options) {
    throw new Error('History must implement navigate().');
  }

  navigateBack() {
    throw new Error('History must implement navigateBack().');
  }

  setTitle(title) {
    throw new Error('History must implement setTitle().');
  }
};