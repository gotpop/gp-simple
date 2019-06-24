// Test

class Talk {
  constructor() {
    this.init();
  }
  
  init() {
    say()
  }
}

const say = () =>  console.log('test', this);

const goTalk = new Talk();
