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


### JQuery Selectors

    jQuery selectors allow you to select and manipulate HTML element(s).
    
    $("p") : You can select all <p> elements
    $("#test") :  To find an element with a specific id, write a hash character, followed by the id of the HTML element.
    $(".test")  : To find elements with a specific class.
    
    $("*") 	Selects all elements 	
    $(this) 	Selects the current HTML element 	
    $("p.intro") 	Selects all <p> elements with class="intro" 	
    $("p:first") 	Selects the first <p> element 	
    $("ul li:first") 	Selects the first <li> element of the first <ul> 	
    $("ul li:first-child") 	Selects the first <li> element of every <ul> 	
    $("[href]") 	Selects all elements with an href attribute 	
    $("a[target='_blank']") 	Selects all <a> elements with a target attribute value equal to "_blank" 	
    $("a[target!='_blank']") 	Selects all <a> elements with a target attribute value NOT equal to "_blank" 	
    $(":button") 	Selects all <button> elements and <input> elements of type="button" 	
    $("tr:even") 	Selects all even <tr> elements 	
    $("tr:odd") 	Selects all odd <tr> elements
    $('input[type="text"])  Selects all input type text tags
    

