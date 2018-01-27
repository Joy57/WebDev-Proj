//check off any list
$("ul").on("click","li",function(){
 $(this).toggleClass("completed");
});

//Click on X to delete todos

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which==13){
        //extracting new todo item from user input
        var todoText = $(this).val()
        //clear out the input box
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>")
        
    }
});

$(".fa-window-minimize").click(function(){
    $("input[type='text']").fadeToggle();
});