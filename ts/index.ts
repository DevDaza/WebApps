import { UserModule } from "./components/user/user-module.class";

class HelloWorld {
    constructor() {}

    public sayHello() {
        alert("Hello there!");
    }
}

// init UserModule

const userModule = new UserModule();
userModule.init()

// say Hello

const hello = new HelloWorld();
hello.sayHello();
