function main(){
    var hook = Java.use('android.bluetooth.BluetoothDevice');
    var ownMethods = hook.class.getDeclaredMethods();
    hook.$dispose;
    ownMethods.forEach(function(m) {
        console.log(m);
    });
}

setImmediate(main);