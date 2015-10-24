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

/**
 * An abstract base class for implementors of the basic history api.
 */
export class History {
  /**
   * Activates the history object.
   *
   * @param options The set of options to activate history with.
   */
  activate(options: Object): boolean {
    throw new Error('History must implement activate().');
  }

  /**
   * Deactivates the history object.
   */
  deactivate(): void {
    throw new Error('History must implement deactivate().');
  }

  /**
   * Causes a history navigation to occur.
   *
   * @param fragment The history fragment to navigate to.
   * @param options The set of options that specify how the navigation should occur.
   * @return True if navigation occurred/false otherwise.
   */
  navigate(fragment: string, options?: NavigationOptions): boolean {
    throw new Error('History must implement navigate().');
  }

  /**
   * Causes the history state to navigate back.
   */
  navigateBack(): void {
    throw new Error('History must implement navigateBack().');
  }

  /**
   * Updates the title associated with the current location.
   */
  setTitle(title: string): void {
    throw new Error('History must implement setTitle().');
  }
}
