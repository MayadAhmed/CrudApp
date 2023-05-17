var productNameInput=document.getElementById("productName")
var productPriceInput=document.getElementById("productPrice")
var productCatogeryInput=document.getElementById("productCatogery")
var productDescInput=document.getElementById("productDesc")
var addBtn=document.getElementById("addBtn")

var productContainer=[]
if(localStorage.getItem('product') !=null){
   productContainer=JSON.parse(localStorage.getItem('product'))
   displayProduct(productContainer)
}
function addProduct(){
   if(validatProductName()==true){
      var product={
      name:productNameInput.value,
      price:productPriceInput.value,
      catogery:productCatogeryInput.value,
      description:productDescInput.value
   }
   productContainer.push(product)
   localStorage.setItem('product',JSON.stringify(productContainer))

 displayProduct(productContainer);
 clearForm()
   }else{
      alert("the product name not vlidate")
   }
  
}
function displayProduct(arr){
   count=``
   for (var i = 0; i < arr.length; i++) {
      count+=`
      <tr>
      <td>${arr[i].name}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].catogery}</td>
      <td>${arr[i].description}</td>
      <td><button onclick="deletProduct(${i})" class="btn btn-outline-danger btn-sm">delet</button></td>
  </tr>
      
      `
      
   }
   document.getElementById("tableBody").innerHTML=count
}
function clearForm(){
   productNameInput.value="";
   productPriceInput.value="";
   productCatogeryInput.value="";
   productDescInput.value=""

}
function deletProduct(productIndex){
  productContainer.splice(productIndex,1)
  localStorage.setItem('product',JSON.stringify(productContainer))
  displayProduct(productContainer)
}
function searchProduct(term){
   var matchProduct=[]
   for(var i=0;i<productContainer.length;i++){
      if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
         matchProduct.push(productContainer[i])
      }
   }
   displayProduct(matchProduct)

}


function validatProductName(){
   var regx=/^[A-Z][a-z]{3,8}$/
   if(regx.test(productNameInput.value)==true){
      return true;
   }
}
/*function updateProduct(newProduct){
   productContainer.push(newProduct)
   console.log(productContainer);
   displayProduct(productContainer)
}*/