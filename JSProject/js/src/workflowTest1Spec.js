
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
var project_Values = {
	"Content":"New Project workflow Test 1",
	"Icon":4
}

frisby.create('Verify a new Project can be created as expected')
	.post('https://todo.ly/api/projects.json', project_Values )
		.inspectJSON()
		.expectStatus(200)
		.expectJSON(project_Values )
		.expectJSONTypes({
			"Content":String,
			"Icon":Number
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