### adding attribute
#### eg:  placeholder 

        <!DOCTYPE html>
        <html>
        <head>
          <title>attr function</title>
           <script src="jquery-3.3.1.min.js"></script>
        </head>
        <body>
        <input type="text" name="username" id='demo_name'>
        <br>
        <button id='demo_button'>button</button>
        <script type="text/javascript">
            $(function (){
              var demo_name = $('#demo_name');
              var demo_button = $('#demo_button');
              demo_name.hover(function() {
                $(this).attr('placeholder', 'minimum length must be 5 characters');
              }, function() {
                $(this).attr('placeholder', 'enter your name');
              });
            });

        </script>
        </body>
        </html>
