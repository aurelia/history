/**
 * The options that can be specified as part of a history navigation request.
 */
interface NavigationOptions {
  /**
   * Replace the existing route.
   */
  replace?: boolean;

  /**
   * Trigger the router.
   */
  trigger?: boolean;
}

function mi(name) {
  throw new Error(`History must implement ${name}().`);
}

/**
 * An abstract base class for implementors of the basic history api.
 */
export class History {
  /**
   * Activates the history object.
   *
   * @param options The set of options to activate history with.
   * @returns Whether or not activation occurred.
   */
  activate(options: Object): boolean {
    mi('activate');
  }

  /**
   * Deactivates the history object.
   */
  deactivate(): void {
    mi('deactivate');
  }

  /**
   * Returns the fully-qualified root of the current history object.
   * @returns The absolute root of the application.
   */
  getAbsoluteRoot(): string {
    mi('getAbsoluteRoot');
  }

  /**
   * Causes a history navigation to occur.
   *
   * @param fragment The history fragment to navigate to.
   * @param options The set of options that specify how the navigation should occur.
   * @returns True if navigation occurred/false otherwise.
   */
  navigate(fragment: string, options?: NavigationOptions): boolean {
    mi('navigate');
  }

  /**
   * Causes the history state to navigate back.
   */
  navigateBack(): void {
    mi('navigateBack');
  }

  /**
   * Updates the title associated with the current location.
   */
  setTitle(title: string): void {
    mi('setTitle');
  }

  /**
   * Sets a key in the history page state.
   * @param key The key for the value.
   * @param value The value to set.
   */
  setState(key: string, value: any): void {
    mi('setState');
  }

  /**
   * Gets a key in the history page state.
   * @param key The key for the value.
   * @returns The value for the key.
   */
  getState(key: string): any {
    mi('getState');
  }

  /**
   * Returns the current index in the navigation history.
   * @returns The current index.
   */
  getHistoryIndex(): number {
    mi('getHistoryIndex');
  }

  /**
   * Move to a specific position in the navigation history.
   * @param movement The amount of steps, positive or negative, to move.
   */
  go(movement: number): void {
    mi('go');
  }
}
