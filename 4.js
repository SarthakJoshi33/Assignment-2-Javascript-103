var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostfrequent = 1;
var most = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 most++;
                if (mostfrequent<most)
                {
                  mostfrequent=most;
                  item = arr[i];
                }
        }
        most=0;
}
console.log(item+" ( " + mostfrequent +" times ) ") ;
