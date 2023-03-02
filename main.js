var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "H.jpg", "P.png" ,"M.jpg"];
var names = ["Fmaily Book","Hermano", "Papa", "Mama"];
var i = 1
function update(){
console.log("Hola");
  if (i == 4){
    i = 0;
  }
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++
}

