import ICommand from "../interfaces/ICommand";

export default class RemoteControl {
    private command: ICommand;
    
    setCommand(command: ICommand): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}