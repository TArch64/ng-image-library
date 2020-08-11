export class DurationModel {
  public static create(): DurationModel {
    return new this();
  }

  private seconds: number = 0;

  public addSeconds(seconds: number): DurationModel {
    this.seconds += seconds;
    return this;
  }

  public build(): number {
    return this.seconds * 1000;
  }
}
