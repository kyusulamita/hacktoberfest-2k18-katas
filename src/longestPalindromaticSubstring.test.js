import { longestPalindromaticSubstring } from './longestPalindromaticSubstring';
 describe.only('longestPalindromaticSubstring', () => {
  it('returns longest palindromatic substring for given string', () => {
    // previously this test stated : expect(longestPalindromaticSubstring('0')).toEqual('0');
    // which in the next test is shown to be incorrect as one character palindromes are not permitted
    expect(longestPalindromaticSubstring('00')).toEqual('00');
    expect(longestPalindromaticSubstring('av  cd')).toEqual('  ');
    expect(longestPalindromaticSubstring('abba')).toEqual('abba');
    expect(longestPalindromaticSubstring('abBA')).toEqual('abBA');
    expect(longestPalindromaticSubstring('cecabBA')).toEqual('abBA');
    expect(longestPalindromaticSubstring('cec01abBA1099')).toEqual('01abBA10');
    expect(longestPalindromaticSubstring('11cec01abBA10')).toEqual('01abBA10');
    expect(longestPalindromaticSubstring('11cec%01abBA10%')).toEqual('%01abBA10%');
  });
   it('returns empty string if no palindromatic substring', () => {
    expect(longestPalindromaticSubstring('throw')).toEqual('');
    expect(longestPalindromaticSubstring('&1')).toEqual('');
  });
   it('throws if invalid string', () => {
    expect(() => longestPalindromaticSubstring('')).toThrow();
    expect(() => longestPalindromaticSubstring(undefined)).toThrow();
    expect(() => longestPalindromaticSubstring()).toThrow();
    expect(() => longestPalindromaticSubstring(NaN)).toThrow();
  });
});