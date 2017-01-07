(function (win) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var JSBridge = win.JSBridge || (win.JSBridge = {}) ;


    var zhuceString='bridge'; //注册名（和原生保持一致）

    var JSBRIDGE_PROTOCOL = 'JSBridge';
    var Inner = {
        callbacks: {},

        onFinish: function (port, jsonObj){

            var callback = this.callbacks[port];
            callback && callback(jsonObj);
            delete this.callbacks[port];
        },
        call: function (method, params, callback) {
                    var port = Util.getPort();
                    this.callbacks[port] = callback;
                    var uri=Util.getUri(method,params,port);
                    console.log(uri);
                    window.prompt(uri, "");
        }
    };
    var Util = {
        getPort: function () {
            return Math.floor(Math.random() * (1 << 30));
        },
        getUri:function(method, params, port){
            params = this.getParam(params);
            var uri = JSBRIDGE_PROTOCOL + '://' + zhuceString + ':' + port + '/' + method + '?' + params;
            return uri;
        },
        getParam:function(obj){
            if (obj && typeof obj === 'object') {
                return JSON.stringify(obj);
            } else {
                return obj || '';
            }
        }
    };
    for (var key in Inner) {
        if (!hasOwnProperty.call(JSBridge, key)) {
            JSBridge[key] = Inner[key];

        }
    }
})(window);