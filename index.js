const fs = require('fs');
let r = [];

fs.readFile('alumnos.csv','utf8', (err, data) => {
    if (err) throw err;
    temp="";
    for(i=0;i<=data.length;i++){
        if(i==data.length){
            r.push(temp);
            break;
        }
        if(data.charAt(i)==','||data.charAt(i)=='\n'){
            r.push(temp);
            temp="";
            continue;
        }
        temp+=data.charAt(i);
    }
    e=4;
    for(i=0;i<r.length;i++){
        if(e==4){
            cad="No. :";
        }
        if(e==3){
            cad="No. Control: ";
        }
        if(e==2){
            cad="Nombre: ";
        }
        if(e==1){
            cad="Calificacion: ";
        }
        
        console.log(cad+r[i]);
        if(e==1){
            e=4;
            console.log("\n");
        }else{
            e--;
        }
        cad="";
    }
  });