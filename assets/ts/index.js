class Foo {
  constructor() {
    this.publicField = this.init();
  }

  init() {
    this.#privateMethod()
  }

  #privateMethod() {
    return 42;
  }
}

class Cookie {

  
  #log(message) {
    console.log(message);
  }
  
  init() {
     theCookie.#log('sup');
  }
}

export default Cookie;


let theCookie = new Cookie();

theCookie.init();
