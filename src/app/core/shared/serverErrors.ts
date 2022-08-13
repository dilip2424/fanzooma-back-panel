export default class ServerErrors {
  _errors = [];

  get errors() {
    return this._errors.slice();
  }

  get hasError() {
    return this._errors.length > 0;
  }

  set errors(errorObj) {
    for (let err of Object.keys(errorObj)) {
      this._errors.push(errorObj[err][0]);
    }
  }

  resetErrors() {
    this._errors = [];
  }
}
