
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
	"Content":"New Project workflow Test 5",
	"Icon":4
}

frisby.create('Verify name to specific Project can be updated')
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
			frisby.create('Update Name Project')
				.post('https://todo.ly/api/projects/'+ projectID+'.json',{
				"Content": "Update Projects name Workflow Test5"
				})
				.expectStatus(200)
				.afterJSON( function (data){
					expect(data.Content).toEqual('Update Projects name Workflow Test5')
				}
				)
			.toss()
			frisby.create('Delete project')
				.delete('https://todo.ly/api/projects/'+projectID+'.json')
					.expectStatus(200)
			.toss()
		}
		)
.toss()