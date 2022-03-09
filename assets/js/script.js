//Url

fetch(requestUrl)
.then(function(respone){

return respone.json();

})

.then(function(data){

console.log(data)
});

var docAray= data.response.docs;
for( var i=0; i<docAray.length; i++){
    listItem.textContent =docAray["li"].description;
    listEl.appendChild(listItem);
    
}