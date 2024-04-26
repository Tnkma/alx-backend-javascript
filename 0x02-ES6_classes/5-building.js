export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Check if subclass overrides evacuationWarningMessage method
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Abstract method (cannot be implemented in the parent class)
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage() must be implemented by subclasses');
  }

  get sqft() {
    return this._sqft;
  }
}
