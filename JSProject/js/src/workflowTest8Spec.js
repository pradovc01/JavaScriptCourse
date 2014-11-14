/*1.  Verify information (email& fullname) about user is getting correctly*/
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
	"Content":"New Item workflow Test 8",
	
}


frisby.create('Verify an item can be deleted')
	.post('https://todo.ly/api/items.json', item_Values )		
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
					.afterJSON(function(data){						
						expect(data.Deleted).toBe(true);
					}
					)
			.toss()
		}
		)
.toss()