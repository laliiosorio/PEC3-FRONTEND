/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor(
    { text, complete }: { text: string; complete?: boolean } = {
      text: '',
      complete: false,
    }
  ) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete ?? false;
  }

  private uuidv4(): string {
    const num = 1e7 + -1e3 + -4e3 + -8e3 + -1e11;
    const strNum = num.toString();
    const replacedStr = strNum.replace(/[018]/g, (c) =>
      (
        parseInt(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (parseInt(c) / 4)))
      ).toString(16)
    );
    return replacedStr;
  }
}
