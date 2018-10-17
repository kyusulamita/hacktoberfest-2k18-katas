const palindromeHelper = (str, i, isEvenStr) => {
  let front = i;
  let back = i + isEvenStr;
  console.log('HELLO, hi', front, back);

  while (front > 0 && back < str.length -1){
    if (str[front - 1] !== str[back + 1]){
      break;
    }
    front--;
    back++;
  }
  console.log('HELLO, hi2', front, back, str.slice(front, back));
  return str.slice(front, back);
}

export const longestPalindromaticSubstring = (str) => {
  if (!str){
    throw new Error('Invalid Input')
  }
  let longest = '';

  for(let i = 0; i < str.length; i++){
    const longestEvenAtI = palindromeHelper(str, i, true);
    const longestOddAtI = palindromeHelper(str, i, false);
    
    const longestAtI = longestEvenAtI.length > longestOddAtI.length ? longestEvenAtI : longestOddAtI;

    longest = longest.length < longestAtI.length ? longestAtI : longest;
  }
  console.log(longest)
  return longest.length > 1 ? longest : "";
};
