
        const names = ['tom', 'jerry', 'tyke'];

display elements

        for(const name of names) {
          console.log(name);
        }
        
        
prints index    

        for(const name in names) {
          console.log(name);
        }

        output : 0 1 2

entries : returns iterator

        const it = names.entries()
        const data;
        while((data = it.next().value)){
          console.log(data)
        }
