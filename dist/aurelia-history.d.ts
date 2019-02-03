
/**
 * The options that can be specified as part of a history navigation request.
 */
export declare interface NavigationOptions {
  
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
export declare class History {
  
  /**
     * Activates the history object.
     *
     * @param options The set of options to activate history with.
     * @returns Whether or not activation occurred.
     */
  activate(options: Object): boolean;
  
  /**
     * Deactivates the history object.
     */
  deactivate(): void;
  
  /**
     * Returns the fully-qualified root of the current history object.
     * @returns The absolute root of the application.
     */
  getAbsoluteRoot(): string;
  
  /**
     * Causes a history navigation to occur.
     *
     * @param fragment The history fragment to navigate to.
     * @param options The set of options that specify how the navigation should occur.
     * @returns True if navigation occurred/false otherwise.
     */
  navigate(fragment: string, options?: NavigationOptions): boolean;
  
  /**
     * Causes the history state to navigate back.
     */
  navigateBack(): void;
  
  /**
     * Updates the title associated with the current location.
     */
  setTitle(title: string): void;
  
  /**
     * Sets a key in the history page state.
     * @param key The key for the value.
     * @param value The value to set.
     */
  setState(key: string, value: any): void;
  
  /**
     * Gets a key in the history page state.
     * @param key The key for the value.
     * @returns The value for the key.
     */
  getState(key: string): any;
  
  /**
     * Returns the current index in the navigation history.
     * @returns The current index.
     */
  getHistoryIndex(): number;
  
  /**
     * Move to a specific position in the navigation history.
     * @param movement The amount of steps, positive or negative, to move.
     */
  go(movement: number): void;
}