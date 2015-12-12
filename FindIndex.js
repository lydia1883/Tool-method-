function findall(a,x){

 		var results=[],
 		len=a.length, 
 		pos=0;//初始化查找
 		while(pos<len){

 			pos=a.indexOf(x,pos);
 			if(pos===-1){
 				break;
 			}
 			results.push(pos);
 			pos+=1;
 		}
 		return results;
 	}
