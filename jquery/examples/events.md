### click , double click , hover and unhover

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
                demo_text.html('single click');
              });			
              demo_button.dblclick(function(event) {
                demo_text.html('double click');
              });		
              demo_button.hover(function() {
                demo_text.html('hover on button');
              }, function() {
                demo_text.html('unhover on button');
              });
            });

        </script>
        </body>
        </html>
