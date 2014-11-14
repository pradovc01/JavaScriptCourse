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
	"Content":""	
	
}


frisby.create('Verify an error is displayed trying to create an item with invalid id of proyect')
	.post('https://todo.ly/api/items.json', item_Values )		
		.expectStatus(200)
		.expectJSON(
			{
			ErrorMessage: 'Too Short Item Name',
			ErrorCode:308
			}
			)
		.expectJSONTypes({
			ErrorMessage:String,
			ErrorCode:Number
		})		
.toss()