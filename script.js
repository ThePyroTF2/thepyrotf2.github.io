var div = document.createElement("div");
div.innerHTML = "<h1>I'm really proud of this!</h1><br><h3>All of this is made using js and the appendChild() function</h3><br><p1>First, put something in the box below and see what happens</p1><br><input type='text' style='font-family: Comic Sans MS'/><br>";
document.body.appendChild(div);

var inout = document.createElement("p1");
div.appendChild(inout);

var prettycoolright = document.createElement("p1");
div.appendChild(prettycoolright);
div.querySelector("input").addEventListener("input", function(e)
{
    var value = e.target.value;
    if(value.length != 0)
    {
        inout.innerHTML = value + "<br>";
        prettycoolright.innerHTML = "Pretty cool, right?";
    }
    else
    {
        prettycoolright.innerHTML = "";
        inout.innerHTML = "";
    }
})

var userinputtextcolor = document.createElement("div");
userinputtextcolor.innerHTML = "<p1>Now put a hex code in here and see what happens</p1><br><input type='text' style='font-family: Comic Sans MS'/><br>";
var reallycoolright = document.createElement("p1");
userinputtextcolor.appendChild(reallycoolright);
div.appendChild(userinputtextcolor);
userinputtextcolor.querySelector("input").addEventListener("input", function(e)
{
    var value = e.target.value;
    if(value.match(/^#[0-9a-f]{6}$/i))
    {
        inout.style.color = value;
        reallycoolright.innerHTML = "Really cool, right?!";
        reallycoolright.style.color = value;
    }
    else
    {
        inout.style.color = "black";
        reallycoolright.innerHTML = "";
        reallycoolright.style.color = "black";
    }
})

var colorbox = document.createElement("div");
colorbox.innerHTML = "Now type some text into this box down here<br><input type='text' style='font-family: Comic Sans MS'/><br>";
var neathuh = document.createElement("p1");
colorbox.appendChild(neathuh);
div.appendChild(colorbox);
colorbox.querySelector("input").addEventListener("input", function(e)
{
    var value = e.target.value;
    if(value.match(/^#[0-9a-f]{6}$/i))
    {
        colorbox.style.backgroundColor = value;
        neathuh.innerHTML = "Neat, huh?"
    }
    else
    {
        colorbox.style.backgroundColor = "orange";
        neathuh.innerHTML = "";
    }
})