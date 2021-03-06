"use strict";
    /* AClass */

    function AClass() {}
    AClass.prototype.p1 = 1;
    AClass.prototype.f1 = function () {
        return 7;
    };
    var a = new AClass();

    /* BClass */

    function BClass() {}

    BClass.prototype = new AClass();
    BClass.prototype.p2 = "hello";
    BClass.prototype.f2 = function (x) {
        if (x) {
            return x * 2;
        }
        else console.log("Function needs 1 argument, <> 0");
    };
    var b = new BClass();

    /* CClass */

    function CClass() {
        this.p2 = "bye";
    }

    CClass.prototype = b;
    var c = new CClass();

    /* DClass */

    function DClass() {
        this.oldMethod = this.f2.bind(c);
        this.p4 = 7 * this.p1;
        this.f2 = function (x) {
            if (typeof x !== undefined) {
                return  this.oldMethod(x) * 5;
            }
            else console.log("Function needs 1 argument, <> 0");
        };
    }

    DClass.prototype = c;
    DClass.prototype.f4 = function (x) {
        var oldMethod = this.f2.bind(c);
        return this.f1() + this.oldMethod(x);
    };
    var d = new DClass();