const palindromeHelper = (str, i, isEvenStr) => {
  let front = i;
  let back = i + isEvenStr;
  while (front >= 0 && back <= str.length){
    if (str[front--] !== str[back++]){
      front+=2;
      back-= 2;
      break;
    }
  }
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
  return longest;
};
