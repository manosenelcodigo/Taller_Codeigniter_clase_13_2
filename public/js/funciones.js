function manzana()
{
var req = false;
try
  {
    req = new XMLHttpRequest(); /* p.e. Firefox */
  }
catch(err1)
  {
  try
    {
     req = new ActiveXObject("Msxml2.XMLHTTP");
  /* algunas versiones IE */
    }
  catch(err2)
    {
    try
      {
       req = new ActiveXObject("Microsoft.XMLHTTP");
  /* algunas versiones IE */
      }
      catch(err3)
        {
         req = false;
        }
    }
  }
return req;
}
var miPeticion = manzana();

function from(id,ide,url)
{
	    var mi_aleatorio=parseInt(Math.random()*99999999);//para que no guarde la página en el caché...
		var vinculo=url+"?id="+id+"&rand="+mi_aleatorio;
        //url.php?id=7&rand=3423
        //url.php?id=7&rand=qweqwq
        //url.php?id=7&rand=21312312
        //alert(vinculo);
		miPeticion.open("GET",vinculo,true);//ponemos true para que la petición sea asincrónica
		miPeticion.onreadystatechange=miPeticion.onreadystatechange=function(){
               if (miPeticion.readyState==4)
               {
				   //alert(miPeticion.readyState);
                       if (miPeticion.status==200)
                       {
						   	var http=miPeticion.responseText;
							document.getElementById(ide).innerHTML= http;
		               }
                }else
                {
                    //código para el preloder
                }
       }
       miPeticion.send(null);
		
}
function carga_ajax(ruta,valor1,div) 
        {   
        $.post(ruta,{valor1:valor1},function(resp)
           {
                $("#"+div+"").html(resp);
           });
           return false;
           
        }
function carga_ajax2(ruta,valor1,div,valor2) 
        {   
        $.post(ruta,{valor1:valor1,id:valor2},function(resp)
           {
                $("#"+div+"").html(resp);
           });
           return false;
           
        }
