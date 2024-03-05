import ICommand from "../interfaces/ICommand";
import Door from "../receptors/Door";

export default class CloseDoorCommand implements ICommand {

    constructor(private door: Door) {}

    execute(): void {
        console.log('fechando a porta');
        this.door.close();
    }

    undo(): void {
        console.log('abrindo a porta');
        this.door.open();
    }
}