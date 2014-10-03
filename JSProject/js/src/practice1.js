var doOperations= function(){	
	max=0;
	min = arguments[arguments.length-1];
	sum = 0;
	var numbers= arguments;//arguments is a keyword oj javascript, numbers is an array	
	var getMax =  function(nums, index){
		var currentNumber =  nums[index];
		if (currentNumber>max)
			max= currentNumber;
		
		if (index == 0)
			return max;
		return getMax(nums,index-1);
	};
	var getMin =  function(nums,index){
		var currentNumberArgument= nums[index];
		if(currentNumberArgument<min)
			min=nums[index];
		if(index==0)
			return min;			
		return getMin(nums,index-1)
	};
	var getSum =  function(nums,index){		
		var currentNumberSum = nums[index];		
		sum = sum + currentNumberSum;
		if(index == 0)
			return sum;
		
		return getSum(nums,index-1);
	};
	var average =parseInt(getSum(numbers, numbers.length-1)/numbers.length);
	console.log('Max is ', getMax(numbers, numbers.length-1));	
	console.log('Min is ', getMin(numbers, numbers.length-2));	
	console.log('Average is ', average);
	console.log('Sum is ', sum);
};


