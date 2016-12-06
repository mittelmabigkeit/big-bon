//$(function () {
//
//    var object = {};
//
//    _.extend(object, Backbone.Events);
//
//    object.on("alert", function(msg) {
//        alert("No Birth?" + msg);
//    });
//    object.on("alert", function(msg) {
//        console.log ("No Birth?" + msg);
//    });
//
//    object.trigger("alert", "No Death?");
//
//    $('#btn').on('click', function() {
//        object.trigger("alert", "No Death?");
//    });
//});

//var app = app || {};
//
//$(function () {
//
//    app.MyObject = Backbone.Model.extend({
//        defaults: {
//            name: "name",
//            description: "-",
//            size:100
//        },
//
//        initialize: function () {
//            console.log('obj created');
//
//            this.on('change', function () {
//    console.log('obj changed');
//    var json = app.myObject.changedAttributes();
//    console.log(json);
//});
//},
//
//validate: function(attrs) {
//    if (attrs.size>1000) {
//        console.log('Incorrect size');
//        return 'Incorrect size';
//    }
//},
//
//increaseSize: function () {
//    app.myObject.set({
//        size: this.get('size')+100
//    },{
//        validate: true
//    });
//}
//});
//
//app.myObject = new app.MyObject({
//    name: "Lucifer",
//    description: "Our father"
//});
//
//app.myObject.set({
//    size: 250,
//    type: 'active'
//});
//
//$('#btn').on('click', function() {
//    app.myObject.increaseSize();
//});
//
//});