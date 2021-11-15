import {item} from "./Item";
import '../App.css';

let ok = true;

let itemList = (time, task) =>{
    return new Promise((res,rej) => {
        if(ok) {
            setTimeout(() =>{
                res(task);
            },time);
        }else{
            rej("Error");
        }
    })
}


itemList(2000, console.log("Cargando lista de items..."))
    .then(()=> itemList(2000, console.log(item[0])))
    .then(()=> itemList(2000, console.log(item[1])))
    .then(()=> itemList(2000, console.log(item[2])))
    .then(()=> itemList(2000, console.log(item[3])))

    .catch((error)=> console.log(error))

    .finally(()=> console.log("Lista de items finalizada"))
