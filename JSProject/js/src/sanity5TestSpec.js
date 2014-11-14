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

var JSONValues ={
	"Email":String,
	"FullName":String,
	"Id":Number
}
frisby.create('Create project- verify its  content and number of items have proper value')
	.post('https://todo.ly/api/projects.json',{
		"Content":"New Project sanity test 4",
		"Icon":4
	})
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes({
			"Content":String,
			"ItemsCount":Number
		})
		.afterJSON( function (JSonData){
			var projectID= JSonData.Id
			frisby.create('Delete project')
				.delete('https://todo.ly/api/projects/'+projectID+'.json')
					.expectStatus(200)
			.toss()
		}
		)
.toss()