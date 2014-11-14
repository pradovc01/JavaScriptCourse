
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

var JSONValues ={
	"Email":String,
	"FullName":String,
	"Id":Number
}
frisby.create('get a project')
	.get('https://todo.ly/api/user.json')
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes(JSONValues)
		.afterJSON(function(data){
			var projectID = data[0].id
			var idItemA;
			var idItemB;
			var itemAValues = {
				"Content": "Name item ItemA",
				"ProjectId": projectId
			}
			var itemBValues = {
				"Content": "Name item Item B",
				"ProjectId": projectId
			}
			frisby.create('Create item ItemA')
				.post('https://todo.ly/api/items.json', itemAValues)
					.expectStatus(200)
					.afterJSON(function(data){
						idItemA=data.Id
					}
					)
			.toss();
			frisby.create('Create item ItemB')
				.post('https://todo.ly/api/items.json', itemBValues)
					.expectStatus(200)
					.afterJSON(function(data){
						idItemB = dataid;
					})
			.toss();
		}
			
		)
.toss()