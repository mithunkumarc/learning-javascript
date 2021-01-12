#### prompt(title, default_input)

        takes input from user using popup

#### prompt() vs +prompt() 

#### prompt() : read input as string

      let x = prompt("test",2);
      console.log(typeof x);
      // string

#### +prompt() : read input as number. 

      let y = +prompt("test",2);
      console.log(typeof y);
      // number

      Note: if input is not of type number, value will be NaN with type number
