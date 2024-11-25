export default class TodoItem {
    id: string;

    constructor(public text: string) {
        this.id = "td-" + Date.now();
    }
}