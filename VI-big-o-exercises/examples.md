## 1

Two for loops. First one loops through array and adds every element to sum. Second loops through array again and multiplies product by each element.

O(n) because it iterates through array twice which is 0(2n) but we drop the constants, so O(n).

## 2

A nested for loop printing each pair of elements.

O(n^2) because for every element, it loops through array again and prints the pair.

## 3

[1,2,3,4]

1,2
1,3
1,4
2,3
2,4
3,4

The total work is n^2 * 1/2, but we drop constants so O(n^2).

## 4

This one loops through arrayA, and for each element in arrayA, it will loop through arrayB and print "[i], [j]".

O(ab) because we have to account for both arrays. O(n2) wouldn't be the runtime because it's not the same array that is being looped through.