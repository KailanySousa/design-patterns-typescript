import ICommand from "../interfaces/ICommand";
import Light from "../receptors/Light";

export default class TurnOnLightCommand implements ICommand {

    constructor(private light: Light) {}

    execute(): void {
        console.log('ligando luz');
        this.light.on();
    }

    undo(): void {
        console.log('desligando luz');
        this.light.off();
    }
}