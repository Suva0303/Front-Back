exports.getItems = async function(request, response){
   response.render("item.hbs")
}

exports.addItem = function(request, response){
    response.render("add.hbs")
}

exports.getItems = async function(request, response){
  const allItems = await item.find({}); 
  response.render("items.hbs", {items: allItems});
}

exports.postItem= async function(request, response){
   if(request.body) return response.sendStatus(400);

   const itemName = request.body.name;
   const itemCost = request.body.cost;

   const item = new item({name: itemName, cost: itemCost});
   
   await item.save();
   response.redirect("/items");
}