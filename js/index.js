var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function () {
        alert("Hello there!");
    };
    return HelloWorld;
}());
var hello = new HelloWorld();
hello.sayHello();
