1. Named Exports
2. Default Exports


#### Named Exports

Named exports are distinguished by their names. 
There can be several named exports in a module. A module can export selected components using the syntax given below −

#### Syntax 1

        //using multiple export keyword
        export component1
        export component2
        ...
        ...
        export componentN

        ex : 
        export let name = "rajat";
        export function task(msg) {
            console.log(msg);
        }

#### Syntax 2

Alternatively, components in a module can also be exported using a single export keyword with {} binding syntax as shown below −

        //using single export keyword

        export { component1,component2,....,componentN }

        ex : 
        let name = "rajat";
        function task(msg) {
            console.log(msg);
        }

        export {name, task};

#### Default Exports

Modules that need to export only a single value can use default exports.  
There can be only one default export per module.  
curly braces not needed to import default export

#### Syntax

        export default component_name // only one default export per file

### However, a module can have a default export and multiple named exports at the same time

        only one default export allowed per js file
        
        // named_export.js
        const city = "johansberg";
        const country = "south africa"; 
        export default city;    // city replaced by country by default export
        export default country; // country gets exported

        // index.js
        import  country from './named_export';
        

#### Importing Named Exports

While importing named exports, the names of the corresponding components must match.

Syntax

      import {component1,component2..componentN} from module_name

However, while importing named exports, they can be renamed using the as keyword. Use the syntax given below −

      import {original_component_name as new_component_name } from module_name

        ex : 
        // named_exports.js
        export let name = "rajat";
        export function task(msg) {
            console.log(msg);
        }

        // index.js
        import  { name as myname , task as mytask} from './named_export';
        

All named exports can be imported onto an object by using the asterisk * operator.


      import * as variable_name from module_name

      ex : 
      import  * as myinfo from './named_export';

      console.log(myinfo.name);
      myinfo.task("hello");
      

#### Importing Default Exports

Unlike named exports, a default export can be imported with any name.

#### syntax ; 

        import any_variable_name from module_name

        example:
        //name_export.js

        function task(msg) {
            console.log(msg);
        }

        export default task;
        
        //index.js
        import  mytask from './named_export';

        mytask("hello");
        
        
#### combining default export and named export

        // named_exports.js
        // multiple named exports allowed 
        export const id = 123;
        export const city = "diu";
        function task(msg) {
            console.log(msg);
        }

        // only one allowed
        // if you have  two default export, last one will be exported
        export default task;

        //index.js
        import  task, {id, city} from './named_export';
