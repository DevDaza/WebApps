import { Component } from "../component.abstract";

export class Articles extends Component {
    collection: Article[] = [];
    constructor() {
        super()
    }
    doSomething() {}
}

export class Article {}