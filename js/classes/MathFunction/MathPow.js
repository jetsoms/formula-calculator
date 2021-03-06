var MathPow = (function () {
    var parent = null;
    var param = [];
    var result = [];
    var paramCounter = 0;


    this.getParent = function () {
        return parent;
    }

    this.setParent = function (newParent) {
        parent = newParent;
    }

    this.getParam = function () {
        return param[paramCounter];
    }

    this.setParam = function (newParam) {
        param[paramCounter] = (newParam);
    }

    this.getParamCounter = function () {
        return paramCounter;
    }

    this.setParamCounter = function () {
        paramCounter++;
        if (paramCounter > 1) {
            throw "function pow only takes two parameter!";
        }
    }

    this.calculate = function () {

        if (param.length<2){
            throw "function pow needs two parameter!";
        }

        for (var x = 0; x < param.length; x++) {
            if (param[x] == null) {
                throw "the first parameter is empty!"
            }
            result[x] = param[x].calculate();

        }

        return Math.pow.apply(null, result);
    }

});
