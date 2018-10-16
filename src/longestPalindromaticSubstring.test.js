import { longestPalindromaticSubstring } from './longestPalindromaticSubstring';
 describe('longestPalindromaticSubstring', () => {
  it('returns longest palindromatic substring for given string', () => {
    expect(() => longestPalindromaticSubstring('0')).toEqual('0');
    expect(() => longestPalindromaticSubstring('av  cd')).toEqual('  ');
    expect(() => longestPalindromaticSubstring('abba')).toEqual('abba');
    expect(() => longestPalindromaticSubstring('abBA')).toEqual('abBA');
    expect(() => longestPalindromaticSubstring('cecabBA')).toEqual('abBA');
    expect(() => longestPalindromaticSubstring('cec01abBA1099')).toEqual('01abBA10');
    expect(() => longestPalindromaticSubstring('11cec01abBA10')).toEqual('01abBA10');
    expect(() => longestPalindromaticSubstring('11cec%01abBA10%')).toEqual('%01abBA10%');
  });
   it('returns empty string if no palindromatic substring', () => {
    expect(() => longestPalindromaticSubstring('throw')).toEqual('');
    expect(() => longestPalindromaticSubstring('&1')).toEqual('');
  });
   it('throws if invalid string', () => {
    expect(() => longestPalindromaticSubstring('')).toThrow();
    expect(() => longestPalindromaticSubstring(undefined)).toThrow();
    expect(() => longestPalindromaticSubstring()).toThrow();
    expect(() => longestPalindromaticSubstring(NaN)).toThrow();
  });
});