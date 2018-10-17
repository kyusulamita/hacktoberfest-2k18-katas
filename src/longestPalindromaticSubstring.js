const palindromeHelper = (str, i, evenPal) => {
  let front = i + evenPal;
  let back = i;
  while (front && back < str.length - 1){
    if (str[front - 1].toLowerCase() !== str[back + 1].toLowerCase()){
      break;
    }
    front--;
    back++;
  }
  return str.slice(front, back + 1);
}

const longestStr = (str1, str2) => str1.length > str2.length ? str1 : str2;

export const longestPalindromaticSubstring = (str) => {
  if (!str){
    throw new TypeError('Illegal salmon!');
  }
  let longestPal = '';

  for(let i = 0; i < str.length; i++){
    const longestEvenAtI = palindromeHelper(str, i, true);
    const longestOddAtI = palindromeHelper(str, i, false);
    
    const longestAtI = longestStr(longestEvenAtI, longestOddAtI);

    longestPal = longestStr(longestAtI, longestPal);
  }

  return longestPal.length > 1 ? longestPal : "";
};
