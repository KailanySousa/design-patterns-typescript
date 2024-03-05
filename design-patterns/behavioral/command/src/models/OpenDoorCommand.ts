import ICommand from "../interfaces/ICommand";
import Door from "../receptors/Door";

export default class OpenDoorCommand implements ICommand {
    
    constructor(private door: Door) {}

    execute(): void {
        console.log('abrindo a porta');
        this.door.open();
    }

    undo(): void {
        console.log('fechando a porta');
        this.door.close();
    }
}