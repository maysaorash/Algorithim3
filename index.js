// const test = (n) => {
// 	for (var i = 1; i < n; i++){
// 		console.log (i)
// 	}
// }

// const test = (n) => {
// 	const array = [];
// 	for(var i = 1; i < n; i++){ //O(1)
// 		array.push(i); // O(1)*n
// 	}
// return array;
// }
// //Time complexity => O(n)
// //Space complexity => O(n)
// console.log(test(6));

/* Given a number, print in an increasing order and then decreasing order using recursion 
 EX: Input => 5

 1
 12
 123
 1234
 12345
 12345
 1234
 123
 12
 1

 */
//// 3

const printInOrder = (n) => {
	helper('', 1, n);
}

const helper = (n, inc, stop) => {
if(inc > stop){ //12345
	return; //6<5
}
// If this n is 5 then the following is my space
n += inc; // 1  // O(2) + O(2) + O(2) + O(2) + O(2)
console.log(n, `Running for ${inc}`); // 1
helper(n, inc+1, stop); // 1
console.log(n, `Finished for ${inc}`); // 1
}
printInOrder(5)

/* Print from 1 to n given n using recursion */


// const printUptoOn = (n) => {
// helper('', 1, n);	
// }
// const helper = (n, inc, stop) => {
// if(inc > stop){ 
// 	return; 
// }
// n += inc; 
// console.log(n); 
// helper(n, inc+1, stop);
// }
// printUptoOn(5)

const printUptoON=(n)=>{
  for (i=1; i<=n; i++)
  console.log(i)
}
// printUptoON(5)

const printUptoN=(n)=>{
  if (n === 1){
  console.log(n)
	return;
}
printUptoN(n-1)
  console.log(n)
}
// printUptoN(5)

const c = () => {
	console.log('c');
}
const b = () => {
	console.log('b');
	c();
}
const a = () => {
	console.log('a');
	b();
	console.log('aaa');
}
// a();

/* Create an array of arrays that has increasing numbers in order using recursion.
EX: Input 3
Output:[
	[1],
	[1,2].
[	1,2,3]
] */
const ans = []
const buildPyramid = (n) => { // 4,3,2
		if(1===n){ // 1
			ans.push([1]) // 1
			return;
		}
		buildPyramid(n-1) // 1
		const temp = [];// 1
		for(var i=1; i<=n; i++){ // O(K)
			temp.push(i);// 1
		}
		ans.push(temp); // 1
  	return ans;
} // whole thing gets executed O(n)*O(K) => Upper bound O(n^2)
// For worst case, already O(n) * o(k) space => BUT THEN FOR EVERY FUNCTION CALL
// O(K) space
// 1+2+3+4...N=n(n+1)/2=>n^2/2
// 4+3+2+1...N=n+n+n...=n*n/2

//Time complexity => O(n^2)
//Space complexity => O(n^2)+O(n^2)=>2*O(n^2);

// console.log(buildPyramid(4))

const findWord = (arr, target) => {
	findWord.forEach(word => {
		if(word===target){
			return target;
		}
	})
}
// findWord(['a', 'b', 'c'], 'c')

/* Given an array of integers, and a target find indices of 2 numbers that add up to the target.


Ex: input = [1,11,2,3,4,8], target = 10
output: [4,5] 

Ex: input = [1,2,3], target = 6
output: [1,2] 
*/

const findTwoSum = (nums,target) => {
	// nums, target -> 2
	if(nums.length <= 2){
		return -1;
	}
	for(var i=0; i<nums.length; i++){ // O(n)
	for(var j=i+1; j<nums.length; j++){ // O(K)
   if(nums[i] + nums[j]===target){ // 2
		 return [i, j]; // 1
	 }
	}
	} // O(n^2/2) => O(n^2)
	return -1;
}
//Time complexity O(n^2)
//Space complexity O(1)
// console.log(findTwoSum([1,2,5,6], 6));

const reverseWords = (words) => {
	const wordsArr = words.split(' '); // O(n)
	let ans = ''; // 1
	wordsArr.forEach(word=>{ //O(K)
		ans = ans + ' ' + word.split('').reverse().join(''); // O(j)
	}); // O(n) time O(n) space
//  ans.trim();
 	return ans;
}
//Time complexity // O(n) + O(n) => 2*O(n)=> O(n)
//Space complexity // O(n) + O(n) => 2*O(n)=> O(n)
// console.log(reverseWords('ab ac ad'));