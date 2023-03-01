const fulimgbox= document.getElementById("fulimgbox");
fulimg = document.getElementById("fulimg");


function openfulimg(reference){
    fulimgbox.style.display="flex"
    fulimg.src= reference

}
function closeimg(){
    fulimgbox.style.display ="none"
}