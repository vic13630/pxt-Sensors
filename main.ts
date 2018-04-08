/**
* RGB三色LED共陽極/共陰極函數
*/
//% weight=0 color=#3CB371 icon="\uf2db" block="Sensors"
namespace Sensors
{
	//% blockId=RGB_LED1 block="Common Anode RGB LED set R_pin %RedPin|R_value(0~255) %RedValue|G_pin %GreenPin|G_value(0~255) %GreenValue|B_pin %BluePin|B_value(0~255) %BlueValue" blockExternalInputs=true
	//% RedValue.min=0 RedValue.max=255 GreenValue.min=0 GreenValue.max=255 BlueValue.min=0 BlueValue.max=255
	//% RedPin.fieldEditor="gridpicker" RedPin.fieldOptions.columns=4
	//% RedPin.fieldOptions.tooltips="false" RedPin.fieldOptions.width="300"
	//% GreenPin.fieldEditor="gridpicker" GreenPin.fieldOptions.columns=4
	//% GreenPin.fieldOptions.tooltips="false" GreenPin.fieldOptions.width="300"
	//% BluePin.fieldEditor="gridpicker" BluePin.fieldOptions.columns=4
	//% BluePin.fieldOptions.tooltips="false" BluePin.fieldOptions.width="300"
    export function RGB_LED1(RedPin: AnalogPin, RedValue: number, GreenPin: AnalogPin, GreenValue: number, BluePin: AnalogPin, BlueValue: number): void
	{
        pins.analogWritePin(RedPin, pins.map(RedValue, 0, 255, 0, 1023));
        pins.analogWritePin(GreenPin, pins.map(GreenValue, 0, 255, 0, 1023));
        pins.analogWritePin(BluePin, pins.map(BlueValue, 0, 255, 0, 1023));
    }

    //% blockId=RGB_LED2 block="Common Cathode RGB LED set Red pin %RedPin|Red value(0~255) %RedValue|Green pin %GreenPin|Green value(0~255) %GreenValue|Blue pin %BluePin|Blue value(0~255) %BlueValue" blockExternalInputs=false
	//% RedValue.min=0 RedValue.max=255 GreenValue.min=0 GreenValue.max=255 BlueValue.min=0 BlueValue.max=255
	//% RedPin.fieldEditor="gridpicker" RedPin.fieldOptions.columns=4
	//% RedPin.fieldOptions.tooltips="false" RedPin.fieldOptions.width="300"
	//% GreenPin.fieldEditor="gridpicker" GreenPin.fieldOptions.columns=4
	//% GreenPin.fieldOptions.tooltips="false" GreenPin.fieldOptions.width="300"
	//% BluePin.fieldEditor="gridpicker" BluePin.fieldOptions.columns=4
	//% BluePin.fieldOptions.tooltips="false" BluePin.fieldOptions.width="300"
    export function RGB_LED2(RedPin: AnalogPin, RedValue: number, GreenPin: AnalogPin, GreenValue: number, BluePin: AnalogPin, BlueValue: number): void
	{
        pins.analogWritePin(RedPin, pins.map(RedValue, 0, 255, 0, 1023));
        pins.analogWritePin(GreenPin, pins.map(GreenValue, 0, 255, 0, 1023));
        pins.analogWritePin(BluePin, pins.map(BlueValue, 0, 255, 0, 1023));
    }
}
