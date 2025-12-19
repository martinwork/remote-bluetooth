/**
 * Remote blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace remote {
    class ConnectBluetooth implements Connection {
        sendString(data: string) {
            bluetooth.uartWriteString(data)
        }
        constructor() {
            remote.addConnection(this);
            bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
                remote.onDataReceived(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
            })
            bluetooth.startUartService()
        }
    }
    let _connectBluetooth: ConnectBluetooth = undefined

    /**
     * TODO: describe your function here
     */
    //% block
    export function useBluetooth(): void {
        if (_connectBluetooth == undefined) {
            _connectBluetooth = new ConnectBluetooth
        }
    }
}
