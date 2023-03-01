class Singleton {
  private static instance: Singleton;
  private constructor() {}
  public options: any;
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      console.log("First create");
    }
    console.log("Not create");
    return Singleton.instance;
  }
  set option(key: {}) {
    this.options = key;
  }
  get option() {
    return this.options;
  }
}

let sdas = Singleton.getInstance();

sdas.option = { message: "hy", message2: "bye" };
console.log(sdas);
sdas.option;
class Some {
  private das;
  constructor(inst: Singleton) {
    this.das = inst;
  }
  sayHy() {
    console.log(this.das.options.message);
  }
}
const instance = new Some(sdas);
instance.sayHy();
