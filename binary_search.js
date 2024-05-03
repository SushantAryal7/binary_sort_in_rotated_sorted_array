console.log('jai bhole nath ki jai ho');

function binary_search(arr, target){
    let high = arr.length;
    let low = 0 ;
    while(high>=low){
        let mid = Math.floor((high + low)/2)

        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid] > arr[low]){
            if(arr[mid] > target && target>= arr[low]){
                high = mid-1 ;
            }else{
                low = mid+1 ;
            }
        }
        else{
            if(arr[mid]< target && target <=arr[high]){
                low = mid+1 ;
            }
            else{
                high = mid -1 ;
            }

        }
    }
}
let arr = [4, 5, 6, 7, 0, 2];
let target = 0;
console.log(binary_search(arr, target));