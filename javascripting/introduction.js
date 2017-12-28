var Shape = function (name) {
    this.name = name
};
Shape.prototype.draw = function () {
    return "i am generic shape";
}
//circle
var Circle = function () {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
    return "i am a circle";
}
//triangle
var Triangle = function () {}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.draw = function () {
    return "this is triangle and my size is ";
}
//printing shapes
var shapes = [new Shape(), new Circle(), new Triangle(23)];
shapes.forEach(function (shapeList) {
    console.log(shapeList.draw());
});