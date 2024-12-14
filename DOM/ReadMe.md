1. event bubbling : event originates from target navigate back to root
2. event capture : event originates from root and navigate to target

#### event propagation

The eventual compromise was that event propagation should be able to handle both scenarios:

    html (capture phase)
    body (capture phase)
    <p> (capture phase)
    <p> (bubbling phase)
    body (bubbing phase)
    html (bubbling phase)

So this means that an event works its way down the tree and then back up again.

This was a long-winded way of explaining WHY the addEventListener() allows you to listen for events during both the capture phase and the bubbling phase. 
To do this, you have to use the third argument to the addEventListener() method, which is the useCapture parameter. 
In modern browsers, this defaults to false which prefers the bubbling phase.

