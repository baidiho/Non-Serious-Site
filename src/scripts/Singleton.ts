class Singleton {
  private static instance: Singleton;
  private constructor() {}
  private options: Object;
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
let sda = Singleton.getInstance();
sdas.option = { message: "hy", message2: "bye" };
console.log(sdas);
console.log(sda);
sdas.option;
