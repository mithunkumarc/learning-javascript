<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>
<h1>The flex-wrap Property</h1>

<p>The "flex-wrap: wrap;" specifies that the flex items will wrap if necessary:</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  <div>9</div>  
  <div>10</div>
  <div>11</div>
  <div>12</div>  
  <div>9</div>  
  <div>10</div>
  <div>11</div>
  <div>12</div>  
</div>

<p>Try resizing the browser window.</p>
<button onclick="hello()">click</button>
<script>
    function hello(){
        var node = document.createElement("div");                 // Create a <li> node
        var textnode = document.createTextNode("Water");         // Create a text node
        node.appendChild(textnode);  
        
        document.getElementsByClassName("flex-container")[0].appendChild(node);
        
    }
</script>
</body>
</html>
