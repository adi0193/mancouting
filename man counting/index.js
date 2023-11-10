let countEl=document.getElementById("count-el")


let count=0

function increament(){
    count+=1
   countEl.textContent=count
    
} 

let  saveEl=document.getElementById("save-el")

function save(){
    
    let count1=count+" - " 
    saveEl.textContent+=count1
    countEl.textContent=0
    count=0
    
}




// let name="Aditya Kumar"

// let greeting="Hi,my name is "

// let mygreeting=  greeting+name

// console.log(mygreeting)