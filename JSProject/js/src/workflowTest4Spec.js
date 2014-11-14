
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
	"Content":"New Item workflow Test 4"
	
}


frisby.create('Verify a item can be checked')
	.post('https://todo.ly/api/items.json', item_Values )
		.inspectJSON()
		.expectStatus(200)				
		.afterJSON( function (JSonData){
			var itemID= JSonData.Id
			frisby.create('checked item')
				.post('https://todo.ly/api/items/'+ itemID+ '/json',{
					"Checked": true
				})
				.expectStatus(200)
				.afterJSON(function(data){
					expected(data.Checked).toBe(true)
				})
			frisby.create('Delete item')
				.delete('https://todo.ly/api/items/'+itemID+'.json')
					.expectStatus(200)
			.toss()
		}
		)
.toss()