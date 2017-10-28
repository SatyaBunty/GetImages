onAppStart();
function onAppStart()
{
   // x.appendChild(y);
};

function SubmitURL()
{
  var urls="";
  var x6 = document.forms["addURLForm"]["preDefinedURLs"].value;
  var imageType = document.forms["addURLForm"]["imageTypes"].value;
  var x1 = document.forms["addURLForm"]["url"].value;
  if(x6=="I have a URL")
  {
    urls=x1;
  }
  else
  {
    urls=x6;
  }
  var x2 = document.forms["addURLForm"]["startIndex"].value;
  var x3 = document.forms["addURLForm"]["endIndex"].value;
  var x4 = document.forms["addURLForm"]["HasZero"].value;
  var data="";
  if(x4 == "1")
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+"0"+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+"0"+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  else
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  var y=document.getElementById("listview");
  y.innerHTML = data;
}
