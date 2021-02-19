Constructor Functions (also called class)

            - invoked using the 'new' keyword
                * this -> assigned a new object
                * this -> returned by default


        function Employee(id, name, salary){
            //this -> new object
            this.id = id;
            this.name = name;
            this.salary = salary;

            this.display = function(){
                console.log(this.id, this.name, this.salary);
            }
            //this -> returned by default
        }
