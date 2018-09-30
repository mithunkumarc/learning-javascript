### Syntax : 

    Basic syntax is: $(selector).action()
    
    A $ sign to define/access jQuery
    A (selector) to "query (or find)" HTML elements
    A jQuery action() to be performed on the element(s)


    Example :
    $(this).hide() - hides the current element.
    $("p").hide() - hides all <p> elements.
    $(".test").hide() - hides all elements with class="test".
    $("#test").hide() - hides the element with id="test".
    
### The Document Ready Event

    You might have noticed that all jQuery methods in our examples, are inside a document ready event:
    $(document).ready(function(){
        // jQuery methods go here...
    });
    
    Tip: The jQuery team has also created an even shorter method for the document ready event:
    $(function(){
        // jQuery methods go here...
    });

