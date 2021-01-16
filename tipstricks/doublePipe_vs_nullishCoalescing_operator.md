The important difference between them is that:

#### || returns the first truthy value. (boolean function applied)

eg  :

        0 || 100
        100

        since zero is equavalent to boolean false, 100 is considered
        
        
#### ?? returns the first defined value. (defined or not)

        0 ?? 100
        0
        
        since zero is also a defined value, 0 is considered
