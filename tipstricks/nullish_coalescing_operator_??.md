similar to ||, if ?? is used between two variables, if first variable is null/undefined ,value from second variable will be considered.


        null ?? 'world'
        "world"

        undefined ?? 100
        100

        undefined ?? null ?? 'hello'
        "hello"

        undefined ?? null ?? 'hello' ?? 100
        "hello"
