
var myContent = document.querySelectorAll('.tab-container div');
var newInput = "<input type='text' value=''>"
var selectAppt = "<select>" +
                    "<option value='APPT 1'>APPT 1</option>" + "<option value='APPT 2'>APPT 2</option>" + "<option value='APPT 3'>APPT 3</option>" + "<option value='APPT 4'>APPT 4</option>" + "<option value='APPT 5'>APPT 5</option>" +
                    "<option value='APPT 6'>APPT 6</option>" + "<option value='APPT 7'>APPT 7</option>" + "<option value='APPT 8'>APPT 8</option>" + "<option value='APPT 9'>APPT 9</option>" + "<option value='APPT 10'>APPT 10</option>" +
                    "<option value='APPT 11'>APPT 11</option>" + "<option value='APPT 12'>APPT 12</option>" + "<option value='APPT 13'>APPT 13</option>" + "<option value='APPT 14'>APPT 14</option>" + "<option value='APPT 15'>APPT 15</option>" +                   
                    "<option value='APPT 16'>APPT 16</option>" + "<option value='APPT 17'>APPT 17</option>" + "<option value='APPT 18'>APPT 18</option>" + "<option value='APPT 19'>APPT 19</option>" + "<option value='APPT 20'>APPT 20</option>" +                   
                    "<option value='APPT 21'>APPT 21</option>" + "<option value='APPT 22'>APPT 22</option>" + "<option value='APPT 23'>APPT 23</option>" + "<option value='APPT 24'>APPT 24</option>" + "<option value='M 1'>M 1</option>" +                    
                    "<option value='M 2'>M 2</option>" + "<option value='M 3'>M 3</option>" + "<option value='M 4'>M 4</option>" + 
                "</select>";
var selectEtage = "<select class='etage'>" +
                    "<option>1</option>" + "<option>2</option>" + "<option>3</option>" + "<option>4</option>" + "<option>RDC</option>" +
                "</select>";
var selectSource = "<select class='source'>" +
                        "<option>Appelle</option>" + "<option>Réseaux sociaux</option>" + "<option>Facebook</option>" + "<option>Avito</option>" + "<option>Affichage</option>" +
                        "<option>Recommandation</option>" + "<option>Visite Spontané</option>" +
                   "</select>";
var selectProf = "<select class='profession'>" +
                        "<option>Salarié Privé</option>" + "<option>Fonctionnaire</option>" + "<option>Commerçant</option>" + "<option>Sans Emploi</option>" +
                 "</select>";
var selectTranche = "<select class='tranche'>" +
                     "<option>25 - 35</option>" + "<option>35 - 45</option>" + "<option>45 - 60</option>" + "<option>+60</option>" +
                 "</select>";

var selectBudget = "<select class='budget'>" +
                        "<option>Moins de 600 KHD</option>" + "<option>De 600 à 700 KHD</option>" + "<option>De 700 à 800 KHD</option>" + "<option>De 800 à 900 KHD</option>" +
                        "<option>+ 900 KHD</option>" +
                   "</select>";
var selectTypolo = "<select class='typologie'>" +
                        "<option>F2: 2 chambres</option>" + "<option>F3: 3 chambres</option>" + "<option>LC: local commercial</option>" +
                    "</select>";
var selectFinance = "<select class='financement'>" +
                        "<option>A Crédit</option>" + "<option>Cash</option>" +
                    "</select>";
var selectLivraison = "<select class='livraison'>" +
                        "<option>A Crédit</option>" + "<option>Cash</option>" +
                    "</select>";
var allSelect = document.getElementsByTagName('select');

MainLoop:

for (j = 0; j < myContent.length; j++) {

    if (j > 4 && j < 14) {

        continue MainLoop;
    
    }
    
    myContent[j].innerHTML = localStorage.getItem("getInput");

    var allInputs = myContent[j].querySelectorAll('input');
    
    for (i = 0; i < allInputs.length; i++) {
    
        allInputs[i].value = localStorage.getItem("getValues");
    }   
}

myContent[5].innerHTML = localStorage.getItem("getAppt");
myContent[6].innerHTML = localStorage.getItem("getEtage");
myContent[7].innerHTML = localStorage.getItem("getSource");
myContent[8].innerHTML = localStorage.getItem("getProf");
myContent[9].innerHTML = localStorage.getItem("getTranche");
myContent[10].innerHTML = localStorage.getItem("getBudget");
myContent[11].innerHTML = localStorage.getItem("getTypolo");
myContent[12].innerHTML = localStorage.getItem("getFinance");
myContent[13].innerHTML = localStorage.getItem("getLivraison");


Mainloop:

for (var k = 0; k < allSelect.length; k++) {

    if (k != k) {
    
        continue Mainloop;
    }

    allSelect[k].value = this.localStorage.getItem("changeSelect");
}


function addInput() {

    MainLoop:

    for (i = 0; i < myContent.length; i++) {
        
        if (i > 4 && i < 14) {

            continue MainLoop;
        }

        localStorage.setItem("getInput", myContent[i].innerHTML += newInput);
    }

    localStorage.setItem("getAppt", myContent[5].innerHTML += selectAppt);
    localStorage.setItem("getEtage", myContent[6].innerHTML += selectEtage);
    localStorage.setItem("getSource", myContent[7].innerHTML += selectSource);   
    localStorage.setItem("getProf", myContent[8].innerHTML += selectProf);   
    localStorage.setItem("getTranche", myContent[9].innerHTML += selectTranche);   
    localStorage.setItem("getBudget", myContent[10].innerHTML += selectBudget);   
    localStorage.setItem("getTypolo", myContent[11].innerHTML += selectTypolo);   
    localStorage.setItem("getFinance", myContent[12].innerHTML += selectFinance);   
    localStorage.setItem("getLivraison", myContent[13].innerHTML += selectLivraison);   
}

function removeInput() {

    MainLoop: 

    for (k = 0; k < myContent.length; k++) {
        
        if (k > 4 && k < 14) {

            continue MainLoop;
        }
        
       localStorage.setItem("getInput", myContent[k].removeChild(myContent[k].lastChild));
       localStorage.setItem("getInput", myContent[k].removeChild(myContent[k].lastChild));
       localStorage.setItem("getInput", myContent[k].innerHTML += newInput);
    }

    localStorage.setItem("getAppt", myContent[5].removeChild(myContent[5].lastChild));
    localStorage.setItem("getAppt", myContent[5].removeChild(myContent[5].lastChild));
    localStorage.setItem("getAppt", myContent[5].innerHTML += selectAppt);

    localStorage.setItem("getEtage", myContent[6].removeChild(myContent[6].lastChild));
    localStorage.setItem("getEtage", myContent[6].removeChild(myContent[6].lastChild));
    localStorage.setItem("getEtage", myContent[6].innerHTML += selectEtage);

    localStorage.setItem("getSource", myContent[7].removeChild(myContent[7].lastChild));
    localStorage.setItem("getSource", myContent[7].removeChild(myContent[7].lastChild));
    localStorage.setItem("getSource", myContent[7].innerHTML += selectSource);

    localStorage.setItem("getProf", myContent[8].removeChild(myContent[8].lastChild));
    localStorage.setItem("getProf", myContent[8].removeChild(myContent[8].lastChild));
    localStorage.setItem("getProf", myContent[8].innerHTML += selectProf);

    localStorage.setItem("getTranche", myContent[9].removeChild(myContent[9].lastChild));
    localStorage.setItem("getTranche", myContent[9].removeChild(myContent[9].lastChild));
    localStorage.setItem("getTranche", myContent[9].innerHTML += selectTranche);

    localStorage.setItem("getBudget", myContent[10].removeChild(myContent[10].lastChild));
    localStorage.setItem("getBudget", myContent[10].removeChild(myContent[10].lastChild));
    localStorage.setItem("getBudget", myContent[10].innerHTML += selectBudget);

    localStorage.setItem("getTypolo", myContent[11].removeChild(myContent[11].lastChild));
    localStorage.setItem("getTypolo", myContent[11].removeChild(myContent[11].lastChild));
    localStorage.setItem("getTypolo", myContent[11].innerHTML += selectTypolo);

    localStorage.setItem("getFinance", myContent[12].removeChild(myContent[12].lastChild));
    localStorage.setItem("getFinance", myContent[12].removeChild(myContent[12].lastChild));
    localStorage.setItem("getFinance", myContent[12].innerHTML += selectFinance);

    localStorage.setItem("getLivraison", myContent[13].removeChild(myContent[13].lastChild));
    localStorage.setItem("getLivraison", myContent[13].removeChild(myContent[13].lastChild));
    localStorage.setItem("getLivraison", myContent[13].innerHTML += selectLivraison);
}

function delAll() {

    localStorage.removeItem("getInput");
    localStorage.removeItem("getAppt");
    localStorage.removeItem("getEtage");
    localStorage.removeItem("getSource");    
    localStorage.removeItem("getProf");    
    localStorage.removeItem("getTranche");    
    localStorage.removeItem("getBudget");
    localStorage.removeItem("getTypolo");    
    localStorage.removeItem("getFinance");    
    localStorage.removeItem("getLivraison");    
    window.location.reload(true);
}

/*function mySave() {

    for (var x = 0; x < myContent.length; x++) {

        var allInputs = myContent[x].querySelectorAll('input');

        for (i = 0; i < allInputs.length; i++) {
    
            localStorage.setItem("getValues", allInputs[i].value);       
        }
    }
}
*/
/*function myChange() { 

    for (var i = 0; i < myContent.length; i++) {

        var allSelect = myContent[i].querySelectorAll('select');

        console.log(myContent[i])

        for (var j = 0; j < allSelect.length; j++) {
            
            console.log(allSelect[j].value);
      
            //console.log('is changed');
                
            //localStorage.setItem("getChanges", firstAppt.value)

            //console.log(localStorage.getItem("getChanges")).
                    
                localStorage.setItem("getChanges", allSelect[j].value)
        
                console.log(localStorage.getItem("getChanges"))
        }
    }

    console.log('is changed');
}*/
/*
for (var k = 0; k < changeAppt.length; k++) {
        
    changeAppt[k].value = localStorage.getItem("changeAppt");
}
*/
for (var i = 0; i < allSelect.length; i++) {

    allSelect[i].onchange = function() {   
        
        localStorage.setItem("changeSelect", this.value);

        console.log(localStorage.getItem("changeSelect"));  
    }
}

