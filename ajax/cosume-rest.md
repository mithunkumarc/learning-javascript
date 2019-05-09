#### hello.js 

        $(document).ready(function() {
            $.ajax({
                url: "http://rest-service.guides.spring.io/greeting"
            }).then(function(data) {
               $('.greeting-id').append(data.id);
               $('.greeting-content').append(data.content);
            });
        });


#### index.html : 


        <!DOCTYPE html>
        <html>
            <head>
                <title>Hello jQuery</title>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                <script src="hello.js"></script>
            </head>

            <body>
                <div>
                    <p class="greeting-id">The ID is </p>
                    <p class="greeting-content">The content is </p>
                </div>
            </body>
        </html>
        
        
#### output : 

          The ID is 672
          The content is Hello, World!
