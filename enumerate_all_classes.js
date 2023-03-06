function main() {
    Java.perform(function (){
    console.log("\n[*] enumerating classes...");
    Java.enumerateLoadedClasses({
      onMatch: function(_className){
        if(_className.indexOf('') > 0){
            console.log("[*] found instance of '"+_className+"'");
        }

      },
      onComplete: function(){
        console.log("[*] class enuemration complete");
      }
    });
});
}

setImmediate(main)