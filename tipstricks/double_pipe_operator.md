assigning default value if arguments not sent to parameter

    function showMessage(text) {
      text = text || 'empty';   // if arugmnent(text) is undefined, default string 'empty' is set.
      ...
    }
    
example : 

        >> let man = "super";
        >> let d = undefined || man;
        >> d
        >> "super"

works for null too 

        >> let man = "super";
        >> let d = null || man;
        >> d
        >> "super"
