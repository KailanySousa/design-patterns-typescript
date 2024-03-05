import RemoteControl from "./models/RemoteControl";
import TurnOffLightCommand from "./models/TurnOffLightCommand";
import TurnOnLightCommand from "./models/TurnOnLightCommand";
import Light from "./receptors/Light";

const light = new Light();
const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOnCommand);
remote.pressButton();

remote.setCommand(turnOffCommand);
remote.pressButton();