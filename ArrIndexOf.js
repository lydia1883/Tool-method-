function arrIndexOf(arr,v){  //传入一个数组和值

     	for(var i=0;i<arr.length;i++){
     	
     		if(arr[i]==v){  //如果数组中有相等则返回

     			return i;
     		}
     	 }
     	return -1;
     }
