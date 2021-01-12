if a number is in string format, using + as prefix will convert to type number

#### without prefix, type will be string

        typeof "1"
        "string"

#### with prefix +, type will be number

        typeof +"1"
        "number"
        
        Note: make sure you have number inside quotes, else you will get value as NaN though type will be number
