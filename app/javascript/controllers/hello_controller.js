import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output", "button" ]

  toggle(event) {
    var output = this.outputTarget;
    var button = this.buttonTarget;

    event.preventDefault();
    output.classList.toggle('d-none')
    if (output.classList.contains('d-none')) {
      button.textContent = this.data.get('open')
    } else {
      button.textContent = this.data.get('close')
    }
  }

  connect() {
    this.outputTarget.textContent = 'Hello, Stimulus, its cool!'
  }
}
