const  menis= document.querySelector("#menis")
const counter= document.querySelector("#counter")
const plus= document.querySelector("#plus")
const mount =document.querySelector("#mount")


let startvalue = 0;
const price =600.75;

plus.addEventListener("click", () => {
startvalue ++
counter.innerHTML = startvalue
mount.innerHTML = "$" + startvalue * price
})


menis.addEventListener("click", () => {
    if (startvalue  >=1){
startvalue --
counter.innerHTML = startvalue
mount.innerHTML = "$" + startvalue * price
    }

})
