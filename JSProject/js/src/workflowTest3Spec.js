
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
	"Content":"New Project workflow Test 3",
	"Icon":4
}


frisby.create('Verify done items to sepecif project are displayed as expected')
	.post('https://todo.ly/api/projects.json', project_Values )
		.inspectJSON()
		.expectStatus(200)
		.expectJSON(project_Values )
		.expectJSONTypes({
			"Content":String,
			"Icon":Number
		})
		.afterJSON( function (JSonData){
			var projectID= JSonData.Id; 
			var doneItem= true;
			for(var pos =1;pos<4;pos++){
				var content ="item Project workFlow Test 3_Item"+pos
				if(pos%2 == 0)
					doneItem = false;
				else
					doneItem = true;
				frisby.create('Verify a new item can be created as expected')
				.post('https://todo.ly/api/items.json', {
					"Content":content,
					"ProjectId": projectID,
					"Checked": doneItem
				})
					.inspectJSON()
					.expectStatus(200)					
					.toss()

			}
			frisby.create('Display items done to specific project')
				.get('https://todo.ly/api/projects/' + projectID + '/doneitems.json')					
					.expectStatus(200)					
					.expectJSON('*',{
					"ProjectId": projectID,
					"Checked": true
					})
					.afterJSON(function(itemData){
						console.log (itemData.length)
						expect(itemData.length).toBeGreaterThan(0) 
						for(var item=0;item<itemData.length; item ++){
							expect(itemData[item].Content).toMatch('workFlow Test 3')
						}
					})					
					
				.toss()
			
			frisby.create('Delete item to project')
				.get('https://todo.ly/api/projects/'+ projectID +'/items.json')
					.expectStatus(200)
					.afterJSON(function(itemsProject){
						for(var item=0;item<itemsProject.length; item ++){
							var itemId = itemsProject[item].Id
							frisby.create('Delete item')
								.delete('https://todo.ly/api/items/'+ itemId+'.json')
								.expectStatus(200)
							.toss()
						}
					})
			.toss()
			frisby.create('Delete project')
				.delete('https://todo.ly/api/projects/'+projectID+'.json')
					.expectStatus(200)
				.toss()
		}
		)
.toss()