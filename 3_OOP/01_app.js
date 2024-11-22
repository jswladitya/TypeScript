//we are trying to create a device & we just defined its properties
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 1244;
        this.category = "digital";
    }
    return Device;
}());
//to create that device actually, we need to create its object
var d1 = new Device();
var d2 = new Device();
