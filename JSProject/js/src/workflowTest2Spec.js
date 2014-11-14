
var frisby = require ('frisby')
frisby.globalSetup({
	request:{
		headers:{
					Authorization: 'Basic cHJhZG92YzAxQGdtYWlsLmNvbTpDb250cm9sMTIz'
				},
		json:true
			}
	}
)
var item_Values = {
	"Content":"New Item workflow Test 2",
	
}


frisby.create('Verify a new item can be created as expected')
	.post('https://todo.ly/api/items.json', item_Values )
		.inspectJSON()
		.expectStatus(200)
		.expectJSON(item_Values )
		.expectJSONTypes({
			"Content":String,			
		})
		.afterJSON( function (JSonData){
			var itemID= JSonData.Id
			frisby.create('Delete item')
				.delete('https://todo.ly/api/items/'+itemID+'.json')
					.expectStatus(200)
			.toss()
		}
		)
.toss()