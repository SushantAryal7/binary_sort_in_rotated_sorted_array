console.log('jai shree ram');


function minimum_Value(arr){
    let high = arr.length ;
    let low  = 0;
    let low_value = 0;

    while( high>=low){
        let mid = Math.floor(((high + low)/2));
        
        if(arr[mid] > arr[low]){
            console.log('if parts');
            low_value = Math.min(arr[low], low_value);
            low = mid + 1 ;
        }
        else{
            
            low_value = Math.min(arr[mid], low_value);

            high = mid - 1 ;
        }
    }
    return low_value;
}

arr = [7,1,2,3,4,5,6];

console.log(minimum_Value(arr));