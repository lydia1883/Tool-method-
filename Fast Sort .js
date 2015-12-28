function FnSort(arr){

  	if(arr.length<=1){
  		return arr;
  	}
  	
  	var middle=Math.floor(arr.length/2);
  	var num=arr.splice(middle,1);

  	var left=[];
  	var right=[]; 

  	for(var i=0;i<arr.length;i++){

  		if(arr[i]<num){
  			left.push(arr[i]);
  		}
  		else{
  			right.push(arr[i]);
  		}
  	}
  	 return  FnSort(left).concat([num],FnSort(right));
  }
