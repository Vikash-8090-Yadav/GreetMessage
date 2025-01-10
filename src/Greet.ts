import { Field, CircuitString,Hash, SmartContract, state, State, method} from "o1js"

export class Greet extends SmartContract {
  @state(CircuitString) Greet = State<CircuitString>();

  init() {
    super.init();
    this.Greet.set(CircuitString.fromString('abc..xyz'));
  }

  @method async update(_Greet: CircuitString) {
    // const currentState = this.Greet.get();
    this.Greet.set(_Greet); // Removed .hash() since we want to store the CircuitString directly
  }
}



