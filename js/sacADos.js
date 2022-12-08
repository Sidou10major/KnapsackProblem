function recup_p()
{
  var w = document.getElementById("poidsTotal").value;
  sessionStorage.w = w;
  document.location.href="slide3.html";
}


 function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

 function sacADos(tableID) {

    if (sessionStorage.w == 0) {
    alert("Erreur Veillez saisir le poids"); 
    document.location.href="slide2.html";

  }
  else
  {
  
    // Récupérer le poids du sac:
    var w = parseInt(sessionStorage.w);
    //alert("w="+w);
    //var w=11;

      var table = document.getElementById(tableID);


      var nombre_objets = table.rows.length-1;

      var tab_poids = [];
      var tab_valeurs = [];
      var tab_objets = [];

      for (var i = 1; i <= nombre_objets; i++) {
        
        tab_poids[i] = document.getElementById("poids"+i).value;
      };
    
      for (var i = 1; i <= nombre_objets; i++) {
        
        tab_valeurs[i] = document.getElementById("prix"+i).value;
      };
    
    for (var i = 1; i <= nombre_objets; i++) {
        
      };
   

      // Creer la matrice solution
      var solution = Create2DArray(nombre_objets+1);
    
      // Creer la matrice (2D) des valeurs
       var tab = Create2DArray(nombre_objets+1);
  
        // Initialiser la première ligne à 0
            for (var lig = 0; lig <= nombre_objets; lig++)
            {
                tab[lig][0] = 0;
            }

  
            // Initialiser la première colonne à 0

            for (var col = 0; col <= w; col++)
            {
                tab[0][col] = 0;
            }

            var m1 = 0 ;
            var m2 = 0;

        for (var i = 1; i <= nombre_objets; i++)
            {
                for (var j = 1; j <= w; j++)
                {
                    // Si le poinds de l'objet courant est inférieur ou égale au poids à considérer
                   
                    if (tab_poids[i] <= j)
                    {

    
                        m1 = parseInt(tab_valeurs[i]) + parseInt(tab[i - 1][j - tab_poids[i]]);
                      
                        m2 = parseInt(tab[i - 1][j]);
                        tab[i][j] = Math.max(m1, m2);
                        if (m1 > m2)
                            solution[i][j] = 1;
                        else solution[i][j] = 0;

                    }
                    else   //Sinon (wi>j)
                    {
                        // le poids de l'objet courant est supérieur au poids à considérer
                        tab[i][j] = parseInt(tab[i - 1][j]);
                        solution[i][j] = 0;
                    }
                }

            }


      // Trouver la séquence d'objets pris

          
            var pris = [nombre_objets+1];
            var jj=w;
            for (var i = nombre_objets; i > 0; i--)
            {
                if (solution[i][jj] == 1)
                {
                    pris[i] = 1;
                    jj = jj - parseInt(tab_poids[i]);
                   
                }
                else 
                { 
                   pris[i] = 0;
                }
            }


            //------------------
            //Valeur MAX :
            var valeurMax = tab[nombre_objets][w];

            /* OU bien :

            for (var i = 1; i <= nombre_objets; i++) {
              if (parseInt(pris[i])==1)   
              {
                valeurMax = parseInt(valeurMax) + parseInt(tab_valeurs[i]);
              }
            };
        */
           //alert(valeurMax);
            //document.getElementById("vMax").style.visibility = "visible";
 //document.getElementById("vMax").className = '';
 document.getElementById("vMax").style.color = "white";
 document.getElementById("vMaxValeur").style.color = "white";
 document.getElementById("vMaxValeur").textContent = valeurMax;

    // Colorier les objets pris :

      //  var rows = table.getElementsByTagName("tr");   


    for(var i = 1; i <= nombre_objets; i++)
    {           
      var r = parseInt(pris[i]);
      if(r==1)
      { 
      

        //rows[i].className = "even"; 
       // rows.style.backgroundColor = 'red' ;
        document.getElementById('tr'+i).style.backgroundColor='#b6d137';
      


      }
    }

 sessionStorage.w=0;

} 

}



























/*function essai(a,b,c)   //sacADos
{

//________

  a[0] = 700;
  b[2] = 800;
  c[3] = 900;

}


function recup_var()
{


//var y = sessionStorage.tab_p;
/*var x=0;

var x = essai();

alert(x);*//*
var p1 = [];
p1[0] = 0;
var p2 = [];
p2[0] = 0;
var p3 = [];
p3[0] = 0;
essai(p1,p2,p3);
alert(p1[0]);
alert(p2[2]);
alert(p3[3]);
}


*//*
  var a = [];
  var b = [];
  var c = [];
function essai()   //sacADos
{

//________
  

  a[0] = 700;
  b[2] = 800;
  c[3] = 900;

// document.location.href="slide3.html"
}


function recup_var()
{


alert(a[0]);
alert(b[2]);
alert(c[3]);
}
*/