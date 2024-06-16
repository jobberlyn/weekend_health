interface CharacterCountMap {
  [character: string]: number;
}

/**
 * Returns the words from the dictionary that can be formed from the letters of inputString
 *
 * @param inputString - A string of letters that can be rearranged
 * @param dictionary - An array of words
 * @returns An array of words from dictionary that can be formed from the letters of inputString
 */
function findWords(inputString: string, dictionary: string[]): string[] {
  const inputCharacterMap: CharacterCountMap = createCharacterCountMapFromString(inputString);

  const result: string[] = [];
  dictionary.forEach(word => {
    const wordCharacterMap: CharacterCountMap = createCharacterCountMapFromString(word);

    let isMissingCharacter = false;
    Object.keys(wordCharacterMap).every((character) => {
      if (character in inputCharacterMap && wordCharacterMap[character] <= inputCharacterMap[character]) {
        return true;
      } else {
        isMissingCharacter = true;
        return false;
      }
    });

    if (!isMissingCharacter) {
      result.push(word);
    }
  });

  return result
}

/**
 * Returns a hash map of the characters that exist in inputString to the frequency it occurs in inputString
 *
 * @param inputString - A string of letters to be counted
 * @returns A hash map of characters in inputString to the number of times it shows up in inputString
 */
function createCharacterCountMapFromString(inputString: string): CharacterCountMap {
  const inputCharacterMap: CharacterCountMap = {};

  for (let i = 0; i < inputString.length; i++) {
    const curCharacter = inputString[i];
    if (curCharacter in inputCharacterMap) {
      inputCharacterMap[curCharacter] += 1
    } else {
      inputCharacterMap[curCharacter] = 1
    }
  }

  return inputCharacterMap;
}


/**
 * Test suite
 */
function runAllTestCases(): void {
  givenTestCases();
  emptyTestCases();
  singleCharacterTestCases();
  duplicatedCharacterTestCases();
}

/**
 * Tests given in prompt
 */
function givenTestCases(): void {
  const firstExampleExpected = ["ate", "eat", "tea"];
  const firstExampleActual = findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]);

  if (firstExampleExpected.every((word, i) => word === firstExampleActual[i])) {
    console.log('First given example passed ✅');
  } else {
    console.log(`Expected ${firstExampleExpected} to equal ${firstExampleActual}`)
  }

  const secondExampleExpected = ["dog", "do", "god", "goo", "go", "good"];
  const secondExampleActual = findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]);

  if (secondExampleExpected.every((word, i) => word === secondExampleActual[i])) {
    console.log('Second given example passed ✅');
  } else {
    console.log(`Expected ${secondExampleExpected} to equal ${secondExampleActual}`)
  }
}

/**
 * Tests where inputString and dictionary are empty
 */
function emptyTestCases(): void {
  const emptyExampleExpected: [] = [];

  const firstExampleActual = findWords("", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]);

  if (emptyExampleExpected.every((word, i) => word === firstExampleActual[i])) {
    console.log('First empty example passed ✅');
  } else {
    console.log(`Expected ${emptyExampleExpected} to equal ${firstExampleActual}`)
  }

  const secondExampleActual = findWords("ate", []);
  if (emptyExampleExpected.every((word, i) => word === secondExampleActual[i])) {
    console.log('Second empty example passed ✅');
  } else {
    console.log(`Expected ${emptyExampleExpected} to equal ${secondExampleActual}`)
  }

  const thirdExampleActual = findWords("", []);
  if (emptyExampleExpected.every((word, i) => word === thirdExampleActual[i])) {
    console.log('Third empty example passed ✅');
  } else {
    console.log(`Expected ${emptyExampleExpected} to equal ${thirdExampleActual}`)
  }
}

/**
 * Tests where inputString is a single character
 */
function singleCharacterTestCases(): void {
  const firstExampleExpected = ["a"];
  const firstExampleActual = findWords("a", ["a", "aaa", "at", "ate", "amy", "anagram", "ban"]);

  if (firstExampleExpected.every((word, i) => word === firstExampleActual[i])) {
    console.log('First single character example passed ✅');
  } else {
    console.log(`Expected ${firstExampleExpected} to equal ${firstExampleActual}`)
  }

  const secondExampleExpected = ["a", "a"];
  const secondExampleActual = findWords("a", ["a", "aaa", "at", "ate", "amy", "anagram", "ban", "a"]);

  if (secondExampleExpected.every((word, i) => word === secondExampleActual[i])) {
    console.log('Second single character example passed ✅');
  } else {
    console.log(`Expected ${secondExampleExpected} to equal ${secondExampleActual}`)
  }
}

/**
 * Tests where inputString has duplicated characters
 */
function duplicatedCharacterTestCases(): void {
  const firstExampleExpected = ["a", "aaa", "ban", "banana"];
  const firstExampleActual = findWords("baaann", ["a", "aaa", "at", "ate", "amy", "anagram", "ban", "banana"]);

  if (firstExampleExpected.every((word, i) => word === firstExampleActual[i])) {
    console.log('First duplicated character example passed ✅');
  } else {
    console.log(`Expected ${firstExampleExpected} to equal ${firstExampleActual}`)
  }

  const secondExampleExpected = ["a", "aaa", "ban"];
  const secondExampleActual = findWords("baann", ["a", "aaa", "at", "ate", "amy", "anagram", "ban", "banana"]);

  if (secondExampleExpected.every((word, i) => word === secondExampleActual[i])) {
    console.log('Second duplicated character example passed ✅');
  } else {
    console.log(`Expected ${secondExampleExpected} to equal ${secondExampleActual}`)
  }
}

runAllTestCases();
