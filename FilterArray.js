function filter(arr){

  var box={},
  len=arr.length,
  result=[];

  for(var i=0;i<len;i++){
  	if(!box[arr[i]]){
  		box[arr[i]]=true;
  		result.push(arr[i]);
  	}
  }

  return result;
}
