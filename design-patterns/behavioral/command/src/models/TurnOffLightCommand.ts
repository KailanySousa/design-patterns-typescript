import ICommand from "../interfaces/ICommand";
import Light from "../receptors/Light";

export default class TurnOffLightCommand implements ICommand {

    constructor(private light: Light) {}

    execute(): void {
        console.log('desligando luz');
        this.light.off();
    }

    undo(): void {
        console.log('ligando luz');
        this.light.on();
    }
}