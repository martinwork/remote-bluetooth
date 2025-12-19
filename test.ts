bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
remote.onLine(function (line) {
    remote.sendString("echo " + line)
})
remote.useSerial()
remote.useBluetooth()
basic.showIcon(IconNames.Heart)
