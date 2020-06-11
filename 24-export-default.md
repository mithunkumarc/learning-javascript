#### export default : 

            use this if you want to export only one component(function, variable)
            this component can be import without using curly braces

            
#### Hello.js

            export default function Hello(props ) {
              return <h1>Hello!</h1>;
            }
            
            // or another way
            const Hello = (props ) => {
              return <h1>Hello!</h1>;
            }

#### index.js
     
            import Hello from './Hello';      // notice there is no curly braces around 'Hello'
            
#### * NOTE :

            only one export default will be considered, 
            if you export default two component, latest will be considered
            
            
            eg : 
            export default FirstVar; // ignored
            export default SeconVar; // this will be considered

---

#### named export :
  
            use this when you want to export more than one variable or function
            use curly braces to import named export


#### Hello.js

            export const Hello = (props) => <h1>Hello!</h1>;
            export const World = (props) => <h2>World!</h2>;

#### index.js

            import { Hello, World } from './Hello';    // notice curly braces
            
#### note : named export : import all named exports

            import * as mycomp from "./MyComponent";
