(function (win) {


    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var Test;

   // var Test = win.Test || win.parent.Test || (win.Test = {}) ;

    var JSBRIDGE_PROTOCOL = 'Test';
    var Inner = {
        callbacks: {},

        onFinish: function (port, jsonObj){


        },
        call: function (obj) {
                    console.log(obj);

        }
    };

    for (var key in Inner) {
        if (!hasOwnProperty.call(Test, key)) {
            Test[key] = Inner[key];

            console.log(Test[key]);

        }
    }



})(window);