export default abstract class Building {
    protected _sqft: number;
  
    constructor(sqft: number) {
      this._sqft = sqft;
  
      // Check if subclass overrides evacuationWarningMessage method
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Abstract method to be implemented by subclasses
    abstract evacuationWarningMessage(): string;

    get sqft(): number {
      return this._sqft;
    }
}
