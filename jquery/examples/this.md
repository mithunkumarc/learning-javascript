### this keyword points to current element
#### eg: button disappear on click

        <!DOCTYPE html>
        <html>
        <head>
          <title>jquery hello world</title>
           <script src="jquery-3.3.1.min.js"></script>
        </head>
        <body>
        <p id = 'demo_text'>hello</p>
        <br>
        <button id='demo_button'>button</button>
        <script type="text/javascript">
            $(function (){
              var demo_text = $('#demo_text');
              var demo_button = $('#demo_button');
              demo_button.click(function(event) {
                $(this).hide();
              });
            });

        </script>
        </body>
        </html>
