# Weekend Health: `findWords`

## High level overview
`findWords` accepts two parameters, `inputString`, which is a string, and `dictionary`, which is a list of strings. 

To find all the words in the `dictionary` that `inputString` can form, we will create hash maps for both `inputString` and all the words in `dictionary`. 

First, it will iterate through the letters of `inputString` and map the characters found in `inputString` to the number of times that character will occur in `inputString`.
For example, for the word "apple", it would create the corresponding hash map, 
```
{
  'a': 1,
  'p': 2,
  'l': 1,
  'e': 1,
}
```
This will allow us to know which characters are in `inputString` and the number of times it shows up in `inputString`. This is important because each letter in `inputString` can only be used once.

Then for each word in the `dictionary`, it will create a similar hash map to know the characters are in the word and the number of times it shows up in the word. 
It will iterate through the keys of the character map for the word and check that the character exists in the `inputString` map and that the character count for the word is less than or equal to the `inputString` character count. This will ensure the character exists in `inputString` and there are enough instances of the character in `inputString` for the word and we can add this word to results. 
Otherwise, if the character does not exist or the count is higher in the word character map compared to the `inputString` character map, we know there is a missing character and we do not need to continue to iterate through the remaining characters in the word character map. 

## Complexity
The space and time complexity is both O(n+ml), where n is the length of `inputString,` m is the length of `dictionary`, and l is the length of the longest word in the `dictionary`.

## Test Improvements
* I would like to test the efficiency of this function by adding in test cases with long `inputString`s and many long words in the `dictionary`.
* Depending on the problem requirements, I would also test duplicate words in `dictionary`
* I would test ensuring all anagrams of the `inputString` would be returned, an anagram with one an extra letter not get returned, and an anagram missing one letter would still get returned.
