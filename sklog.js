var c = require("cli-color");
var loglevels = [
    "[ " + c.blue("INFO") + "]: "
   ,"[ " + c.yellow("WARN") + "]: "
   ,"[" + c.red.bold("ERROR") + "]: "
];

var shallow = function(o){var d="\n";for(var k in o){d+="\t"+c.green(k)+c.white("\t:\t")+c.black(m[k]+"").replace("\n","").substring(0,40)+"\n";}return d;};

function log(){
   var level = (isNaN(arguments[0]) || arguments[0] >= loglevels.length)?0:arguments[0];
   var msg;
   for(var i=1;i<arguments.length;i++){
      msg = "";
      try{
         if(typeof arguments[i] == "object"){
            msg = shallow(arguments[i]);
         }else{
            msg = c.black(arguments[i]);
         }
         console.log(loglevels[level] + msg);
      }catch(e){console.log(e);};
   }
};

module.exports = log;

