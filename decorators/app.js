var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
function WithTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.querySelector(".app");
        console.log(hookEl);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
function Test(params) { }
// you can add several decorators to a class
// they execute bottom up - example WithTemplate will be first, Test second etc...
var PersonHTML = function () {
    var _classDecorators = [Test, WithTemplate("<h1>Hello</h1>", "app")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PersonHTML = _classThis = /** @class */ (function () {
        function PersonHTML_1() {
            this.name = "John";
            console.log("Constructor");
        }
        return PersonHTML_1;
    }());
    __setFunctionName(_classThis, "PersonHTML");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        PersonHTML = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonHTML = _classThis;
}();
// you can add decorators to properties, parameters, methods and accessors => setters/getters of a class
function Log(targe, propertyName) {
    console.log(targe);
}
function Log2(targe, name, descriptor) {
    console.log(targe);
    console.log(name);
    console.log(descriptor);
}
function Log3(targe, name, descriptor) {
    console.log(targe);
    console.log(name);
    console.log(descriptor);
}
function Log4(targe, name, position) { }
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _set_price_decorators;
    var _getPriceWithTax_decorators;
    return _a = /** @class */ (function () {
            function Product(title, price) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = title;
                this._price = price;
            }
            Object.defineProperty(Product.prototype, "price", {
                set: function (value) {
                    if (value > 0) {
                        this._price = value;
                    }
                },
                enumerable: false,
                configurable: true
            });
            Product.prototype.getPriceWithTax = function (tax) {
                return this._price * tax;
            };
            return Product;
        }()),
        (function () {
            _title_decorators = [Log];
            _set_price_decorators = [Log2];
            _getPriceWithTax_decorators = [Log3];
            __esDecorate(_a, null, _set_price_decorators, { kind: "setter", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, set: function (obj, value) { obj.price = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getPriceWithTax_decorators, { kind: "method", name: "getPriceWithTax", static: false, private: false, access: { has: function (obj) { return "getPriceWithTax" in obj; }, get: function (obj) { return obj.getPriceWithTax; } } }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
