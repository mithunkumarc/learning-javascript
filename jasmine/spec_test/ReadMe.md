spec : short form for specification , uses it()  

it : include it(short form may be)  

any number of it() written inside describe(suite)  


        describe("description", () => {
          //spec : test1
          it("description", () => {
            // do your method call take result and compare
            expect(true).toBe(true);
          })
        })
