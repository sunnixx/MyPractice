
var controller = function(){
    var view = new view();
    var model = new model();
}
controller.prototype.show = function(arg){
   view.show(this.arg);
}
$('#submit').click(function(){
    var input = $('#input').val();
    model.data.push(input);
    model.data.getData();
    controller.show(input);
});