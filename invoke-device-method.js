'use strict';

module.exports = function(RED) {
    function InvokeDeviceMethod(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload;
            
            node.send(msg);
        });
    }

    RED.nodes.registerType("invoke-device-method",InvokeDeviceMethod);
}