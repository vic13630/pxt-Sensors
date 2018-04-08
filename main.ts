/**
* RGB三色LED共陽極/共陰極函數
*/
//% weight=0 color=#3CB371 icon="\uf2db" block="Sensors"
namespace Sensors
{
    //% blockId=RGBLight block="common cathode RGB set red pin %RedPin|green pin %GreenPin|blue pin %BluePin|value of red(0~255) %RedValue|value of green(0~255) %GreenValue|value of blue(0~255) %BlueValue" blockExternalInputs=false
    //% RedValue.min=0 RedValue.max=255 GreenValue.min=0 GreenValue.max=255 BlueValue.min=0 BlueValue.max=255
    //% RedPin.fieldEditor="gridpicker" RedPin.fieldOptions.columns=4
    //% RedPin.fieldOptions.tooltips="false" RedPin.fieldOptions.width="300"
    //% GreenPin.fieldEditor="gridpicker" GreenPin.fieldOptions.columns=4
    //% GreenPin.fieldOptions.tooltips="false" GreenPin.fieldOptions.width="300"
    //% BluePin.fieldEditor="gridpicker" BluePin.fieldOptions.columns=4
    //% BluePin.fieldOptions.tooltips="false" BluePin.fieldOptions.width="300"
    export function RGBLight(RedPin: AnalogPin,GreenPin: AnalogPin, BluePin: AnalogPin, RedValue: number,GreenValue: number,BlueValue: number): void
	{
        pins.analogWritePin(RedPin, pins.map(RedValue, 0, 255, 0, 1023));
        pins.analogWritePin(GreenPin, pins.map(GreenValue, 0, 255, 0, 1023));
        pins.analogWritePin(BluePin, pins.map(BlueValue, 0, 255, 0, 1023));
    }
}
