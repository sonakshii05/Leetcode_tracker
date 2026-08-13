const problems = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
    starterCode: {
      python: "def two_sum(nums, target):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["two sum", "two_sum", "twoSum"],
    tests: [
      { input: "[2,7,11,15], target=9", expected: "[0,1]" },
      { input: "[3,2,4], target=6", expected: "[1,2]" },
      { input: "[3,3], target=6", expected: "[0,1]" }
    ],
    hints: [
      "Think about storing values as you iterate so you can find the complement quickly.",
      "A hash-based lookup can help you detect the matching pair in one pass.",
      "Return the two indices once you identify a number and its complement."
    ]
  },
  {
    id: 2,
    name: "Contains Duplicate",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Given an integer array nums, return true if any value appears at least twice in the array.",
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def contains_duplicate(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n}\n"
    },
    solutionKeywords: ["contains duplicate", "containsDuplicate", "unique"],
    tests: [
      { input: "[1,2,3,1]", expected: "true" },
      { input: "[1,2,3,4]", expected: "false" },
      { input: "[2,2,2,2]", expected: "true" }
    ],
    hints: [
      "A set or hash table can help you detect duplicates efficiently.",
      "Check whether a number is already present before adding it.",
      "If you find the same element twice, return true immediately."
    ]
  },
  {
    id: 3,
    name: "Valid Anagram",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["String", "Hash Table"],
    description: "Given two strings s and t, return true if t is an anagram of s.",
    examples: [
      { input: "s = \"anagram\", t = \"nagaram\"", output: "true" },
      { input: "s = \"rat\", t = \"car\"", output: "false" }
    ],
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase letters."],
    starterCode: {
      python: "def is_anagram(s, t):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n}\n"
    },
    solutionKeywords: ["anagram", "sort", "frequency"],
    tests: [
      { input: "s=\"anagram\", t=\"nagaram\"", expected: "true" },
      { input: "s=\"rat\", t=\"car\"", expected: "false" },
      { input: "s=\"listen\", t=\"silent\"", expected: "true" }
    ],
    hints: [
      "Compare character counts instead of checking every ordering.",
      "Use a frequency map or sort both strings to validate an anagram.",
      "If both strings have the same character counts, the answer is true."
    ]
  },
  {
    id: 4,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Dynamic Programming"],
    description: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit from one transaction.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "5" },
      { input: "[7,6,4,3,1]", output: "0" }
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    starterCode: {
      python: "def max_profit(prices):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["max profit", "min price", "profit"],
    tests: [
      { input: "[7,1,5,3,6,4]", expected: "5" },
      { input: "[7,6,4,3,1]", expected: "0" },
      { input: "[2,4,1]", expected: "2" }
    ],
    hints: [
      "Track the lowest buying price and compare it with each future selling price.",
      "The best profit is the maximum difference after the minimum price so far.",
      "Update profit when you find a higher price after a lower buy price."
    ]
  },
  {
    id: 5,
    name: "Valid Palindrome",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["String", "Two Pointers"],
    description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    examples: [
      { input: "\"A man, a plan, a canal: Panama\"", output: "true" },
      { input: "\"race a car\"", output: "false" }
    ],
    constraints: ["1 <= s.length <= 2 * 10^5", "s consists only of printable ASCII characters."],
    starterCode: {
      python: "def is_palindrome(s):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your solution here\n        return false;\n    }\n}\n"
    },
    solutionKeywords: ["palindrome", "alphanumeric", "two pointers"],
    tests: [
      { input: "\"A man, a plan, a canal: Panama\"", expected: "true" },
      { input: "\"race a car\"", expected: "false" },
      { input: "\"\"", expected: "true" }
    ],
    hints: [
      "Ignore non-alphanumeric characters and compare characters from both ends.",
      "A two-pointer approach helps you validate the string in one pass.",
      "Move the pointers inward while skipping invalid characters."
    ]
  },
  {
    id: 6,
    name: "Majority Element",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Given an array of size n, return the majority element that appears more than n/2 times.",
    examples: [
      { input: "[3,2,3]", output: "3" },
      { input: "[2,2,1,1,1,2,2]", output: "2" }
    ],
    constraints: ["1 <= nums.length <= 5 * 10^4", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def majority_element(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["majority", "count", "moore"],
    tests: [
      { input: "[3,2,3]", expected: "3" },
      { input: "[2,2,1,1,1,2,2]", expected: "2" },
      { input: "[1]", expected: "1" }
    ],
    hints: [
      "Find the number that appears more than half of the time.",
      "Tracking counts or using the Boyer-Moore voting algorithm works here.",
      "Once you have the majority candidate, return it."
    ]
  },
  {
    id: 7,
    name: "Remove Duplicates from Sorted Array",
    difficulty: "easy",
    language: "java",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given a sorted array nums, remove duplicates in-place such that each element appears only once. Return the new length.",
    examples: [
      { input: "[1,1,2]", output: "2" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", output: "5" }
    ],
    constraints: ["0 <= nums.length <= 3 * 10^4", "-100 <= nums[i] <= 100", "nums is sorted in non-decreasing order."],
    starterCode: {
      python: "def remove_duplicates(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["remove duplicates", "two pointers", "unique"],
    tests: [
      { input: "[1,1,2]", expected: "2" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", expected: "5" },
      { input: "[]", expected: "0" }
    ],
    hints: [
      "Use two pointers to overwrite duplicates in the sorted array.",
      "Slow pointer tracks the unique position, fast pointer scans for new values.",
      "Return the count of unique elements in the array after deduplication."
    ]
  },
  {
    id: 8,
    name: "Remove Element",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given an array nums and a value val, remove all instances of val in-place and return the new length.",
    examples: [
      { input: "nums = [3,2,2,3], val = 3", output: "2" },
      { input: "nums = [0,1,2,2,3,0,4,2], val = 2", output: "5" }
    ],
    constraints: ["0 <= nums.length <= 100", "0 <= nums[i] <= 50", "0 <= val <= 100"],
    starterCode: {
      python: "def remove_element(nums, val):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["remove element", "val", "two pointers"],
    tests: [
      { input: "nums=[3,2,2,3], val=3", expected: "2" },
      { input: "nums=[0,1,2,2,3,0,4,2], val=2", expected: "5" },
      { input: "nums=[], val=0", expected: "0" }
    ],
    hints: [
      "Use two pointers to shift non-target values forward.",
      "One pointer scans elements, while the other tracks placement for kept values.",
      "Count how many values remain after removing the given target."
    ]
  },
  {
    id: 9,
    name: "Plus One",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array"],
    description: "Given a non-empty array of digits representing a non-negative integer, increment the integer by one.",
    examples: [
      { input: "[1,2,3]", output: "[1,2,4]" },
      { input: "[9]", output: "[1,0]" }
    ],
    constraints: ["1 <= digits.length <= 100", "0 <= digits[i] <= 9", "The integer does not contain leading zeros."],
    starterCode: {
      python: "def plus_one(digits):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your solution here\n        return digits;\n    }\n}\n"
    },
    solutionKeywords: ["plus one", "carry", "digits"],
    tests: [
      { input: "[1,2,3]", expected: "[1,2,4]" },
      { input: "[9]", expected: "[1,0]" },
      { input: "[9,9]", expected: "[1,0,0]" }
    ],
    hints: [
      "Add one to the last digit and propagate carries to the left.",
      "If a digit becomes 10, carry the one and set the digit to zero.",
      "If all digits carry over, prepend a new 1 at the front."
    ]
  },
  {
    id: 10,
    name: "Merge Sorted Array",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Merge two sorted integer arrays nums1 and nums2 into nums1 as one sorted array.",
    examples: [
      { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }
    ],
    constraints: ["nums1.length == m + n", "nums2.length == n", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def merge(nums1, m, nums2, n):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["merge sorted array", "two pointers", "reverse"],
    tests: [
      { input: "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3", expected: "[1,2,2,3,5,6]" },
      { input: "nums1=[1], m=1, nums2=[], n=0", expected: "[1]" }
    ],
    hints: [
      "Fill the merged array from the end to avoid overwriting values.",
      "Use pointers starting at the end of nums1 and nums2.",
      "Copy remaining elements from nums2 if needed."
    ]
  },
  {
    id: 11,
    name: "Move Zeroes",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given an array nums, move all 0's to the end while maintaining the relative order of non-zero elements.",
    examples: [
      { input: "[0,1,0,3,12]", output: "[1,3,12,0,0]" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    starterCode: {
      python: "def move_zeroes(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["move zeroes", "non zero", "two pointers"],
    tests: [
      { input: "[0,1,0,3,12]", expected: "[1,3,12,0,0]" },
      { input: "[0]", expected: "[0]" }
    ],
    hints: [
      "Keep a slow pointer for placement of non-zero values.",
      "Swap or overwrite zeros with the next non-zero value.",
      "After moving all numbers, fill the remaining positions with zeros."
    ]
  },
  {
    id: 12,
    name: "Find Pivot Index",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Prefix Sum"],
    description: "Find the pivot index where the sum of the numbers to the left equals the sum of the numbers to the right.",
    examples: [
      { input: "[1,7,3,6,5,6]", output: "3" },
      { input: "[1,2,3]", output: "-1" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "-1000 <= nums[i] <= 1000"],
    starterCode: {
      python: "def pivot_index(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int pivotIndex(int[] nums) {\n        // Write your solution here\n        return -1;\n    }\n}\n"
    },
    solutionKeywords: ["pivot index", "prefix sum", "total sum"],
    tests: [
      { input: "[1,7,3,6,5,6]", expected: "3" },
      { input: "[1,2,3]", expected: "-1" }
    ],
    hints: [
      "Compute the total sum and use a running left sum.",
      "The pivot index satisfies left sum = total sum - left sum - current value.",
      "Check each index while updating the left-side sum."
    ]
  },
  {
    id: 13,
    name: "Missing Number",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Math"],
    description: "Given an array containing n distinct numbers in the range [0, n], return the missing number.",
    examples: [
      { input: "[3,0,1]", output: "2" },
      { input: "[0,1]", output: "2" }
    ],
    constraints: ["n == nums.length", "1 <= n <= 10^4", "0 <= nums[i] <= n"],
    starterCode: {
      python: "def missing_number(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["missing number", "xor", "sum formula"],
    tests: [
      { input: "[3,0,1]", expected: "2" },
      { input: "[0,1]", expected: "2" }
    ],
    hints: [
      "Use arithmetic or XOR to find the missing value without extra space.",
      "The sum of 0..n minus the array sum gives the missing number.",
      "XOR all indices and values to isolate the missing element."
    ]
  },
  {
    id: 14,
    name: "Intersection of Two Arrays",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Return the intersection of two arrays. Each element in the result must be unique.",
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
      { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" }
    ],
    constraints: ["1 <= nums1.length, nums2.length <= 1000", "0 <= nums[i] <= 1000"],
    starterCode: {
      python: "def intersection(nums1, nums2):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["intersection", "set", "hash"],
    tests: [
      { input: "nums1=[1,2,2,1], nums2=[2,2]", expected: "[2]" },
      { input: "nums1=[4,9,5], nums2=[9,4,9,8,4]", expected: "[4,9]" }
    ],
    hints: [
      "Use sets to identify values present in both arrays.",
      "Duplicate values should appear only once in the result.",
      "Compute the intersection by filtering values found in both sets."
    ]
  },
  {
    id: 15,
    name: "Intersection of Two Arrays II",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Return the intersection of two arrays, including duplicate elements.",
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2,2]" },
      { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" }
    ],
    constraints: ["1 <= nums1.length, nums2.length <= 1000", "0 <= nums[i] <= 1000"],
    starterCode: {
      python: "def intersect(nums1, nums2):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["intersection ii", "hash map", "frequency"],
    tests: [
      { input: "nums1=[1,2,2,1], nums2=[2,2]", expected: "[2,2]" },
      { input: "nums1=[4,9,5], nums2=[9,4,9,8,4]", expected: "[4,9]" }
    ],
    hints: [
      "Use a frequency map for one array and collect matches from the other.",
      "Count duplicates and add matched values until one side is exhausted.",
      "The result should include repeated common numbers."
    ]
  },
  {
    id: 16,
    name: "Single Number",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Bit Manipulation"],
    description: "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
    examples: [
      { input: "[2,2,1]", output: "1" },
      { input: "[4,1,2,1,2]", output: "4" }
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4"],
    starterCode: {
      python: "def single_number(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["single number", "xor", "bit"],
    tests: [
      { input: "[2,2,1]", expected: "1" },
      { input: "[4,1,2,1,2]", expected: "4" }
    ],
    hints: [
      "XOR every number gives the single unique value.",
      "Pairs cancel each other out when XOR is used.",
      "Use a single accumulator to compute the answer."
    ]
  },
  {
    id: 17,
    name: "Maximum Subarray",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Dynamic Programming"],
    description: "Find the contiguous subarray with the largest sum and return its sum.",
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "[1]", output: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      python: "def max_subarray(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["maximum subarray", "kadane", "current sum"],
    tests: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
      { input: "[1]", expected: "1" }
    ],
    hints: [
      "Use Kadane's algorithm to track current and best sums.",
      "Reset the running sum when it drops below zero.",
      "Compare the running subarray sum with the global maximum."
    ]
  },
  {
    id: 18,
    name: "Merge Strings Alternately",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["String"],
    description: "Given two strings word1 and word2, merge them alternately and return the merged string.",
    examples: [
      { input: "word1 = \"abc\", word2 = \"pqr\"", output: "apbqcr" },
      { input: "word1 = \"ab\", word2 = \"pqrs\"", output: "apbqrs" }
    ],
    constraints: ["1 <= word1.length, word2.length <= 100", "word1 and word2 consist of lowercase English letters."],
    starterCode: {
      python: "def merge_alternately(word1, word2):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public String mergeAlternately(String word1, String word2) {\n        // Write your solution here\n        return \"\";\n    }\n}\n"
    },
    solutionKeywords: ["merge alternately", "string builder", "append"],
    tests: [
      { input: "word1=\"abc\", word2=\"pqr\"", expected: "apbqcr" },
      { input: "word1=\"ab\", word2=\"pqrs\"", expected: "apbqrs" }
    ],
    hints: [
      "Alternate letters from each string until one string finishes.",
      "Append the remaining letters from the longer string.",
      "Use a builder or list to construct the result."
    ]
  },
  {
    id: 19,
    name: "Find the Difference of Two Arrays",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Return a list of elements that are in one array but not the other.",
    examples: [
      { input: "nums1=[1,2,3], nums2=[2,4]", output: "[[1,3],[4]]" }
    ],
    constraints: ["1 <= nums1.length, nums2.length <= 1000", "-1000 <= nums[i] <= 1000"],
    starterCode: {
      python: "def find_difference(nums1, nums2):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["find difference", "set", "unique"],
    tests: [
      { input: "nums1=[1,2,3], nums2=[2,4]", expected: "[[1,3],[4]]" }
    ],
    hints: [
      "Use sets to compute values present in one list and absent in the other.",
      "Build two lists of unique differences for each array.",
      "Return the two difference lists together."
    ]
  },
  {
    id: 20,
    name: "Find Common Characters",
    difficulty: "easy",
    language: "python",
    languages: ["python", "java"],
    topics: ["String", "Hash Table"],
    description: "Given an array of strings, return a list of all characters that show up in every string including duplicates.",
    examples: [
      { input: "[\"bella\",\"label\",\"roller\"]", output: "[\"e\",\"l\",\"l\"]" }
    ],
    constraints: ["1 <= words.length <= 100", "1 <= words[i].length <= 100"],
    starterCode: {
      python: "def common_chars(words):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<String> commonChars(String[] words) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["common chars", "frequency", "intersection"],
    tests: [
      { input: "[\"bella\",\"label\",\"roller\"]", expected: "[\"e\",\"l\",\"l\"]" }
    ],
    hints: [
      "Count characters in each word and keep the minimum frequency.",
      "Common characters appear in all strings the smallest number of times.",
      "Collect the shared characters into a result list."
    ]
  },
  {
    id: 21,
    name: "3Sum",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that they add up to zero.",
    examples: [
      { input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
    ],
    constraints: ["0 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    starterCode: {
      python: "def three_sum(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["3sum", "three sum", "two pointers"],
    tests: [
      { input: "[-1,0,1,2,-1,-4]", expected: "[[-1,-1,2],[-1,0,1]]" }
    ],
    hints: [
      "Sort the array and use two pointers to search for the third element.",
      "Skip duplicates to avoid repeated triplets.",
      "Fix one number and find pairs that sum to its negative."
    ]
  },
  {
    id: 22,
    name: "Container With Most Water",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given n non-negative integers representing heights, find two lines that together with the x-axis form a container holding the most water.",
    examples: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" }
    ],
    constraints: ["2 <= height.length <= 10^5", "0 <= height[i] <= 10^4"],
    starterCode: {
      python: "def max_area(height):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["container with most water", "two pointers", "max area"],
    tests: [
      { input: "[1,8,6,2,5,4,8,3,7]", expected: "49" }
    ],
    hints: [
      "Use two pointers at both ends and move the shorter line inward.",
      "Keep track of the maximum area seen so far.",
      "The width decreases while the height may increase on pointer movement."
    ]
  },
  {
    id: 23,
    name: "Product of Array Except Self",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Prefix Sum"],
    description: "Given an integer array nums, return an array output where output[i] is the product of all elements except nums[i].",
    examples: [
      { input: "[1,2,3,4]", output: "[24,12,8,6]" },
      { input: "[-1,1,0,-3,3]", output: "[0,0,9,0,0]" }
    ],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    starterCode: {
      python: "def product_except_self(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["product except self", "prefix", "suffix"],
    tests: [
      { input: "[1,2,3,4]", expected: "[24,12,8,6]" },
      { input: "[-1,1,0,-3,3]", expected: "[0,0,9,0,0]" }
    ],
    hints: [
      "Build prefix and suffix products to avoid division.",
      "Use left and right running products for each index.",
      "Multiply prefix and suffix products to compute the final output."
    ]
  },
  {
    id: 24,
    name: "Maximum Product Subarray",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Dynamic Programming"],
    description: "Find the contiguous subarray within an array which has the largest product.",
    examples: [
      { input: "[2,3,-2,4]", output: "6" },
      { input: "[-2,0,-1]", output: "0" }
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4", "-10 <= nums[i] <= 10"],
    starterCode: {
      python: "def max_product(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int maxProduct(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["maximum product subarray", "min max", "dynamic programming"],
    tests: [
      { input: "[2,3,-2,4]", expected: "6" },
      { input: "[-2,0,-1]", expected: "0" }
    ],
    hints: [
      "Track both maximum and minimum products because negative values can flip sign.",
      "Update running min and max at each step.",
      "The answer is the highest value encountered during iteration."
    ]
  },
  {
    id: 25,
    name: "Subarray Sum Equals K",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Return the number of continuous subarrays whose sum equals k.",
    examples: [
      { input: "nums = [1,1,1], k = 2", output: "2" }
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4", "-1000 <= nums[i] <= 1000"],
    starterCode: {
      python: "def subarray_sum(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["subarray sum equals k", "prefix sum", "hash map"],
    tests: [
      { input: "nums=[1,1,1], k=2", expected: "2" },
      { input: "nums=[1,2,3], k=3", expected: "2" }
    ],
    hints: [
      "Use prefix sums to compute range sums efficiently.",
      "Track how many times each prefix sum has appeared.",
      "For each current sum, look for currentSum - k in the map."
    ]
  },
  {
    id: 26,
    name: "Longest Consecutive Sequence",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Hash Table"],
    description: "Return the length of the longest consecutive elements sequence in an unsorted array.",
    examples: [
      { input: "[100,4,200,1,3,2]", output: "4" }
    ],
    constraints: ["0 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def longest_consecutive(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["longest consecutive sequence", "hash set", "sequence length"],
    tests: [
      { input: "[100,4,200,1,3,2]", expected: "4" },
      { input: "[]", expected: "0" }
    ],
    hints: [
      "Store numbers in a set and start sequences from values with no predecessor.",
      "Count consecutive values while avoiding repeated work.",
      "Track the longest sequence length found."
    ]
  },
  {
    id: 27,
    name: "Group Anagrams",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Hash Table", "String"],
    description: "Group an array of strings into groups of anagrams.",
    examples: [
      { input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", output: "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]" }
    ],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    starterCode: {
      python: "def group_anagrams(strs):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["group anagrams", "sort string", "signature"],
    tests: [
      { input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", expected: "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]" }
    ],
    hints: [
      "Use a canonical form for each word to group anagrams together.",
      "Sort each string or count letters as the grouping key.",
      "Collect words into lists based on the computed key."
    ]
  },
  {
    id: 28,
    name: "Top K Frequent Elements",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Hash Table", "Heap"],
    description: "Return the k most frequent elements from the array nums.",
    examples: [
      { input: "nums=[1,1,1,2,2,3], k=2", output: "[1,2]" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "k is in the range [1, number of unique elements]"],
    starterCode: {
      python: "def top_k_frequent(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["top k frequent", "heap", "frequency"],
    tests: [
      { input: "nums=[1,1,1,2,2,3], k=2", expected: "[1,2]" }
    ],
    hints: [
      "Count frequencies first, then choose the top k elements.",
      "A max heap or bucket sort can help find the most frequent items.",
      "Return the k elements with the highest counts."
    ]
  },
  {
    id: 29,
    name: "Sort Colors",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Sort an array containing red, white, and blue colors represented by 0,1,2 in-place.",
    examples: [
      { input: "[2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }
    ],
    constraints: ["1 <= nums.length <= 300", "nums[i] is 0, 1 or 2."],
    starterCode: {
      python: "def sort_colors(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void sortColors(int[] nums) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["sort colors", "dutch national flag", "pivot"],
    tests: [
      { input: "[2,0,2,1,1,0]", expected: "[0,0,1,1,2,2]" },
      { input: "[2,0,1]", expected: "[0,1,2]" }
    ],
    hints: [
      "Use three pointers to partition 0, 1, and 2 in one pass.",
      "Move low and high pointers while scanning with the current pointer.",
      "Avoid counting by rearranging values in-place."
    ]
  },
  {
    id: 30,
    name: "Rotate Array",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array"],
    description: "Rotate the array to the right by k steps, where k is non-negative.",
    examples: [
      { input: "[1,2,3,4,5,6,7], k=3", output: "[5,6,7,1,2,3,4]" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1"],
    starterCode: {
      python: "def rotate(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void rotate(int[] nums, int k) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["rotate array", "reverse", "k steps"],
    tests: [
      { input: "[1,2,3,4,5,6,7], k=3", expected: "[5,6,7,1,2,3,4]" },
      { input: "[-1,-100,3,99], k=2", expected: "[3,99,-1,-100]" }
    ],
    hints: [
      "A three-step reverse solves this problem in-place.",
      "Reverse the whole array, then reverse the first k and remaining elements.",
      "Use modulo to handle k larger than the array length."
    ]
  },
  {
    id: 31,
    name: "Find the Duplicate Number",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Binary Search"],
    description: "Given an array nums containing n + 1 integers in the range [1, n], find the duplicate number.",
    examples: [
      { input: "[1,3,4,2,2]", output: "2" },
      { input: "[3,1,3,4,2]", output: "3" }
    ],
    constraints: ["1 <= n <= 10^5", "nums.length == n + 1"],
    starterCode: {
      python: "def find_duplicate(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int findDuplicate(int[] nums) {\n        // Write your solution here\n        return -1;\n    }\n}\n"
    },
    solutionKeywords: ["find duplicate", "binary search", "tortoise hare"],
    tests: [
      { input: "[1,3,4,2,2]", expected: "2" },
      { input: "[3,1,3,4,2]", expected: "3" }
    ],
    hints: [
      "Binary search on values or cycle detection can find the duplicate.",
      "Treat indices and values as a linked structure with a cycle.",
      "The duplicate corresponds to the cycle entry point."
    ]
  },
  {
    id: 32,
    name: "Spiral Matrix",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Matrix"],
    description: "Return all elements of the matrix in spiral order.",
    examples: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10"],
    starterCode: {
      python: "def spiral_order(matrix):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["spiral matrix", "layer", "direction"],
    tests: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "[1,2,3,6,9,8,7,4,5]" }
    ],
    hints: [
      "Track the boundaries for top, bottom, left, and right as you traverse.",
      "Move in four directions and shrink the boundaries after each pass.",
      "Stop when all elements have been added."
    ]
  },
  {
    id: 33,
    name: "Set Matrix Zeroes",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Matrix"],
    description: "If an element in a matrix is 0, set its entire row and column to 0 in-place.",
    examples: [
      { input: "[[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,1,1],[1,0,1],[1,1,1]]" }
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 200"],
    starterCode: {
      python: "def set_zeroes(matrix):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void setZeroes(int[][] matrix) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["set matrix zeroes", "in-place", "row column"],
    tests: [
      { input: "[[1,1,1],[1,0,1],[1,1,1]]", expected: "[[1,1,1],[1,0,1],[1,1,1]]" }
    ],
    hints: [
      "Use row and column markers to track zero positions.",
      "Do not modify the matrix while you are still scanning it.",
      "Use the first row and first column as markers to avoid extra space."
    ]
  },
  {
    id: 34,
    name: "Rotate Image",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Matrix"],
    description: "Rotate an n x n 2D matrix by 90 degrees clockwise in-place.",
    examples: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }
    ],
    constraints: ["n == matrix.length", "n == matrix[i].length", "1 <= n <= 20"],
    starterCode: {
      python: "def rotate(matrix):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void rotate(int[][] matrix) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["rotate image", "transpose", "reverse rows"],
    tests: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "[[7,4,1],[8,5,2],[9,6,3]]" }
    ],
    hints: [
      "Transpose the matrix, then reverse each row.",
      "Perform the transformation in-place with no extra matrix.",
      "Handle the rotation by swapping elements across the diagonal."
    ]
  },
  {
    id: 35,
    name: "Search in Rotated Sorted Array",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Binary Search"],
    description: "Given a rotated sorted array, return the index of the target if found; otherwise return -1.",
    examples: [
      { input: "nums=[4,5,6,7,0,1,2], target=0", output: "4" }
    ],
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i], target <= 10^4"],
    starterCode: {
      python: "def search(nums, target):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        return -1;\n    }\n}\n"
    },
    solutionKeywords: ["search", "rotated sorted", "binary search"],
    tests: [
      { input: "nums=[4,5,6,7,0,1,2], target=0", expected: "4" },
      { input: "nums=[4,5,6,7,0,1,2], target=3", expected: "-1" }
    ],
    hints: [
      "Use binary search with a check for which side is properly sorted.",
      "Decide whether to search left or right by comparing values with the target.",
      "The rotated array still has one sorted half at each step."
    ]
  },
  {
    id: 36,
    name: "Find First and Last Position of Element in Sorted Array",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Binary Search"],
    description: "Given a sorted array and a target, find the starting and ending positions of the target value.",
    examples: [
      { input: "nums=[5,7,7,8,8,10], target=8", output: "[3,4]" }
    ],
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def search_range(nums, target):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        // Write your solution here\n        return new int[]{-1,-1};\n    }\n}\n"
    },
    solutionKeywords: ["find first and last position", "binary search", "lower bound"],
    tests: [
      { input: "nums=[5,7,7,8,8,10], target=8", expected: "[3,4]" },
      { input: "nums=[5,7,7,8,8,10], target=6", expected: "[-1,-1]" }
    ],
    hints: [
      "Use binary search to find the leftmost and rightmost occurrences.",
      "Perform two separate searches for the first and last position.",
      "Return [-1,-1] if the target is not present."
    ]
  },
  {
    id: 37,
    name: "Combination Sum",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Backtracking"],
    description: "Return a list of all unique combinations of candidates where the chosen numbers sum to target.",
    examples: [
      { input: "candidates=[2,3,6,7], target=7", output: "[[2,2,3],[7]]" }
    ],
    constraints: ["1 <= candidates.length <= 30", "1 <= target <= 500"],
    starterCode: {
      python: "def combination_sum(candidates, target):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["combination sum", "backtracking", "dfs"],
    tests: [
      { input: "candidates=[2,3,6,7], target=7", expected: "[[2,2,3],[7]]" }
    ],
    hints: [
      "Use backtracking to explore possible combinations recursively.",
      "Keep track of the remaining target and current combination.",
      "Skip duplicates by maintaining a consistent ordering in recursion."
    ]
  },
  {
    id: 38,
    name: "Subsets",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Backtracking", "Bit Manipulation"],
    description: "Return all possible subsets of a set of numbers.",
    examples: [
      { input: "[1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
    ],
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10"],
    starterCode: {
      python: "def subsets(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["subsets", "backtracking", "powerset"],
    tests: [
      { input: "[1,2,3]", expected: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
    ],
    hints: [
      "Generate subsets by exploring include/exclude decisions.",
      "Use recursion or bitwise enumeration to build each subset.",
      "Collect results whenever you reach the end of the list."
    ]
  },
  {
    id: 39,
    name: "Permutations",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Backtracking"],
    description: "Return all possible permutations of an array of distinct integers.",
    examples: [
      { input: "[1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    constraints: ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10"],
    starterCode: {
      python: "def permutations(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["permutations", "backtracking", "swap"],
    tests: [
      { input: "[1,2,3]", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    hints: [
      "Build permutations by swapping elements or tracking used values.",
      "Recursively generate each arrangement.",
      "Backtrack after exploring each option."
    ]
  },
  {
    id: 40,
    name: "Jump Game",
    difficulty: "medium",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Greedy"],
    description: "Given an array of non-negative integers, determine if you can reach the last index starting from the first index.",
    examples: [
      { input: "[2,3,1,1,4]", output: "true" },
      { input: "[3,2,1,0,4]", output: "false" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    starterCode: {
      python: "def can_jump(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n}\n"
    },
    solutionKeywords: ["jump game", "greedy", "farthest"],
    tests: [
      { input: "[2,3,1,1,4]", expected: "true" },
      { input: "[3,2,1,0,4]", expected: "false" }
    ],
    hints: [
      "Track the farthest reachable index as you iterate.",
      "If you cannot reach the current index, return false.",
      "A greedy sweep can determine reachability in one pass."
    ]
  },
  {
    id: 41,
    name: "Trapping Rain Water",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Two Pointers"],
    description: "Given n non-negative integers representing elevation map heights, compute how much water it can trap after raining.",
    examples: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    starterCode: {
      python: "def trap(height):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["trapping rain water", "two pointers", "left right"],
    tests: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" }
    ],
    hints: [
      "Use two pointers and track the maximum left and right boundaries.",
      "Water at each position depends on the smaller boundary height.",
      "Move the pointer with the smaller boundary inward."
    ]
  },
  {
    id: 42,
    name: "First Missing Positive",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array"],
    description: "Given an unsorted integer array, find the smallest missing positive integer.",
    examples: [
      { input: "[1,2,0]", output: "3" },
      { input: "[3,4,-1,1]", output: "2" }
    ],
    constraints: ["1 <= nums.length <= 5 * 10^5", "-2^31 <= nums[i] <= 2^31 - 1"],
    starterCode: {
      python: "def first_missing_positive(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int firstMissingPositive(int[] nums) {\n        // Write your solution here\n        return 1;\n    }\n}\n"
    },
    solutionKeywords: ["first missing positive", "index placement", "swap"],
    tests: [
      { input: "[1,2,0]", expected: "3" },
      { input: "[3,4,-1,1]", expected: "2" }
    ],
    hints: [
      "Place each number in its corresponding index if possible.",
      "Ignore negatives and values larger than the array length.",
      "Scan the final array to find the first missing positive."
    ]
  },
  {
    id: 43,
    name: "Median of Two Sorted Arrays",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Array", "Binary Search"],
    description: "Find the median of two sorted arrays with total run time complexity O(log (m+n)).",
    examples: [
      { input: "nums1=[1,3], nums2=[2]", output: "2.0" },
      { input: "nums1=[1,2], nums2=[3,4]", output: "2.5" }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m + n <= 10^6"],
    starterCode: {
      python: "def find_median_sorted_arrays(nums1, nums2):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return 0.0;\n    }\n}\n"
    },
    solutionKeywords: ["median of two sorted arrays", "binary search", "partition"],
    tests: [
      { input: "nums1=[1,3], nums2=[2]", expected: "2.0" },
      { input: "nums1=[1,2], nums2=[3,4]", expected: "2.5" }
    ],
    hints: [
      "Partition the arrays so left and right halves are balanced.",
      "Use binary search on the smaller array to find the correct cut.",
      "The median depends on the max left and min right values."
    ]
  },
  {
    id: 44,
    name: "Merge k Sorted Lists",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Linked List", "Heap"],
    description: "Merge k sorted linked lists and return it as one sorted list.",
    examples: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }
    ],
    constraints: ["k == lists.length", "0 <= k <= 10^4"],
    starterCode: {
      python: "def merge_k_lists(lists):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your solution here\n        return null;\n    }\n}\n"
    },
    solutionKeywords: ["merge k sorted lists", "heap", "priority queue"],
    tests: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", expected: "[1,1,2,3,4,4,5,6]" }
    ],
    hints: [
      "Use a priority queue to choose the smallest node among the list heads.",
      "Continue taking the smallest node and advance its source list.",
      "Merge until all lists are exhausted."
    ]
  },
  {
    id: 45,
    name: "Largest Rectangle in Histogram",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Stack"],
    description: "Given heights of a histogram, find the largest rectangle area in the histogram.",
    examples: [
      { input: "[2,1,5,6,2,3]", output: "10" }
    ],
    constraints: ["1 <= heights.length <= 10^5", "0 <= heights[i] <= 10^4"],
    starterCode: {
      python: "def largest_rectangle_area(heights):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["largest rectangle", "stack", "histogram"],
    tests: [
      { input: "[2,1,5,6,2,3]", expected: "10" }
    ],
    hints: [
      "Use a monotonic stack to track increasing heights.",
      "When a bar is lower than the stack top, compute rectangle area.",
      "The stack helps compute width efficiently for each bar."
    ]
  },
  {
    id: 46,
    name: "Sliding Window Maximum",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Deque", "Sliding Window"],
    description: "Given an array nums and a sliding window size k, return the maximum value in each window.",
    examples: [
      { input: "nums=[1,3,-1,-3,5,3,6,7], k=3", output: "[3,3,5,5,6,7]" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      python: "def max_sliding_window(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["sliding window maximum", "deque", "monotonic queue"],
    tests: [
      { input: "nums=[1,3,-1,-3,5,3,6,7], k=3", expected: "[3,3,5,5,6,7]" }
    ],
    hints: [
      "Use a deque to store indexes of potential maximums.",
      "Remove indexes that are outside the current window.",
      "Keep the deque in decreasing order of values."
    ]
  },
  {
    id: 47,
    name: "Minimum Window Substring",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["String", "Sliding Window"],
    description: "Given strings s and t, find the minimum window in s that contains all characters of t.",
    examples: [
      { input: "s=\"ADOBECODEBANC\", t=\"ABC\"", output: "BANC" }
    ],
    constraints: ["1 <= s.length, t.length <= 10^5", "s and t consist of English letters."],
    starterCode: {
      python: "def min_window(s, t):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your solution here\n        return \"\";\n    }\n}\n"
    },
    solutionKeywords: ["minimum window substring", "sliding window", "frequency"],
    tests: [
      { input: "s=\"ADOBECODEBANC\", t=\"ABC\"", expected: "BANC" }
    ],
    hints: [
      "Use two pointers and a character count to maintain a valid window.",
      "Expand until the window contains all required characters, then shrink.",
      "Track the smallest valid window seen so far."
    ]
  },
  {
    id: 48,
    name: "Maximum Sum of 3 Non-Overlapping Subarrays",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Dynamic Programming"],
    description: "Find three non-overlapping subarrays of length k that maximize the total sum.",
    examples: [
      { input: "nums=[1,2,1,2,6,7,5,1], k=2", output: "[0,3,5]" }
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4", "1 <= k <= nums.length / 3"],
    starterCode: {
      python: "def max_sum_of_three_subarrays(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] maxSumOfThreeSubarrays(int[] nums, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["maximum sum of 3 non overlapping subarrays", "dp", "sliding window"],
    tests: [
      { input: "nums=[1,2,1,2,6,7,5,1], k=2", expected: "[0,3,5]" }
    ],
    hints: [
      "Compute window sums and use dynamic programming to track best left and right choices.",
      "Precompute the best starting positions for the left and right subarrays.",
      "Combine the three windows to maximize the total sum."
    ]
  },
  {
    id: 49,
    name: "Candy",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Greedy"],
    description: "Distribute candies to children based on ratings so that higher-rated children get more candies than their neighbors.",
    examples: [
      { input: "[1,0,2]", output: "5" },
      { input: "[1,2,2]", output: "4" }
    ],
    constraints: ["1 <= ratings.length <= 2 * 10^4", "0 <= ratings[i] <= 10^5"],
    starterCode: {
      python: "def candy(ratings):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int candy(int[] ratings) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["candy", "left right", "greedy"],
    tests: [
      { input: "[1,0,2]", expected: "5" },
      { input: "[1,2,2]", expected: "4" }
    ],
    hints: [
      "Scan from left to right, then right to left, to satisfy both neighbor constraints.",
      "Keep track of the minimum candies needed for each direction.",
      "The final count is the maximum of both directional arrays."
    ]
  },
  {
    id: 50,
    name: "N-Queens",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Backtracking"],
    description: "Place n queens on an n x n chessboard so that no two queens attack each other.",
    examples: [
      { input: "4", output: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]" }
    ],
    constraints: ["1 <= n <= 9"],
    starterCode: {
      python: "def solve_n_queens(n):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["n queens", "backtracking", "diagonal"],
    tests: [
      { input: "4", expected: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]" }
    ],
    hints: [
      "Place queens row by row and backtrack when a conflict occurs.",
      "Track occupied columns and diagonals to avoid attacks.",
      "Build the board layout only after placing all queens successfully."
    ]
  },
  {
    id: 51,
    name: "Sudoku Solver",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Backtracking"],
    description: "Fill a 9x9 Sudoku board so that each row, column, and 3x3 subgrid contains digits 1-9 exactly once.",
    examples: [
      { input: "board = [...]", output: "solved board" }
    ],
    constraints: ["board.length == 9", "board[i].length == 9"],
    starterCode: {
      python: "def solve_sudoku(board):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public void solveSudoku(char[][] board) {\n        // Write your solution here\n    }\n}\n"
    },
    solutionKeywords: ["sudoku", "backtracking", "valid"],
    tests: [
      { input: "board=example", expected: "solved" }
    ],
    hints: [
      "Try each digit and backtrack when the board becomes invalid.",
      "Check row, column, and 3x3 block constraints for each placement.",
      "Recursively fill empty cells until the board is complete."
    ]
  },
  {
    id: 52,
    name: "Substring with Concatenation of All Words",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["String", "Sliding Window"],
    description: "Find starting indices of substring(s) in s that are concatenations of each word in words exactly once without any intervening characters.",
    examples: [
      { input: "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]", output: "[0,9]" }
    ],
    constraints: ["1 <= s.length <= 10^4", "1 <= words.length <= 500"],
    starterCode: {
      python: "def find_substring(s, words):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<Integer> findSubstring(String s, String[] words) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["substring with concatenation", "sliding window", "hash map"],
    tests: [
      { input: "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]", expected: "[0,9]" }
    ],
    hints: [
      "Use a fixed window size equal to the total length of the words.",
      "Count expected word frequencies and compare them inside each window.",
      "Slide the window and update word counts efficiently."
    ]
  },
  {
    id: 53,
    name: "Count of Smaller Numbers After Self",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Binary Search", "Fenwick Tree"],
    description: "Return the number of smaller elements to the right of each element in the array.",
    examples: [
      { input: "[5,2,6,1]", output: "[2,1,1,0]" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      python: "def count_smaller(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public List<Integer> countSmaller(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    solutionKeywords: ["count of smaller numbers", "binary search", "fenwick tree"],
    tests: [
      { input: "[5,2,6,1]", expected: "[2,1,1,0]" }
    ],
    hints: [
      "Process numbers from right to left and count smaller elements seen so far.",
      "Use a balanced tree, binary search, or Fenwick tree for efficient counts.",
      "Maintain a running structure keyed by values encountered."
    ]
  },
  {
    id: 54,
    name: "Reverse Pairs",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Divide and Conquer", "Merge Sort"],
    description: "Count the number of important reverse pairs in the array where nums[i] > 2*nums[j] and i < j.",
    examples: [
      { input: "[1,3,2,3,1]", output: "2" }
    ],
    constraints: ["1 <= nums.length <= 5 * 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    starterCode: {
      python: "def reverse_pairs(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int reversePairs(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["reverse pairs", "merge sort", "divide and conquer"],
    tests: [
      { input: "[1,3,2,3,1]", expected: "2" }
    ],
    hints: [
      "Count reverse pairs while merging sorted halves.",
      "Use a modified merge sort to count cross-boundary pairs efficiently.",
      "Avoid brute force to keep the solution fast enough."
    ]
  },
  {
    id: 55,
    name: "Shortest Subarray with Sum at Least K",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Deque", "Prefix Sum"],
    description: "Find the length of the shortest subarray with sum at least k.",
    examples: [
      { input: "[1], k=1", output: "1" },
      { input: "[1,2], k=4", output: "-1" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^5 <= nums[i] <= 10^5"],
    starterCode: {
      python: "def shortest_subarray(nums, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int shortestSubarray(int[] nums, int k) {\n        // Write your solution here\n        return -1;\n    }\n}\n"
    },
    solutionKeywords: ["shortest subarray", "deque", "prefix sum"],
    tests: [
      { input: "[1], k=1", expected: "1" },
      { input: "[1,2], k=4", expected: "-1" }
    ],
    hints: [
      "Maintain a deque of candidate prefix sums in increasing order.",
      "Use the deque to find the shortest valid subarray quickly.",
      "Update the answer when a valid window sum is found."
    ]
  },
  {
    id: 56,
    name: "Maximum Gap",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Sorting", "Bucket Sort"],
    description: "Find the maximum difference between successive elements in sorted order.",
    examples: [
      { input: "[3,6,9,1]", output: "3" }
    ],
    constraints: ["2 <= nums.length <= 10^5", "0 <= nums[i] <= 10^9"],
    starterCode: {
      python: "def maximum_gap(nums):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int maximumGap(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["maximum gap", "bucket sort", "radix"],
    tests: [
      { input: "[3,6,9,1]", expected: "3" }
    ],
    hints: [
      "Use bucket sort or radix sort to achieve linear time for large inputs.",
      "The maximum gap is between buckets, not within one bucket.",
      "Track the minimum and maximum values in each bucket."
    ]
  },
  {
    id: 57,
    name: "Split Array Largest Sum",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Binary Search", "Dynamic Programming"],
    description: "Split the array into m non-empty subarrays to minimize the largest sum among them.",
    examples: [
      { input: "nums=[7,2,5,10,8], m=2", output: "18" }
    ],
    constraints: ["1 <= nums.length <= 1000", "1 <= m <= nums.length"],
    starterCode: {
      python: "def split_array(nums, m):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int splitArray(int[] nums, int m) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["split array largest sum", "binary search", "min largest"],
    tests: [
      { input: "nums=[7,2,5,10,8], m=2", expected: "18" }
    ],
    hints: [
      "Binary search the answer and verify whether the array can be split with that maximum sum.",
      "The lower bound is the largest element, the upper bound is the total sum.",
      "Use greedy slicing to test each candidate largest sum."
    ]
  },
  {
    id: 58,
    name: "Patching Array",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Greedy"],
    description: "Given a sorted array and a target, add the minimum number of patches to the array so that every number in [1, target] can be formed.",
    examples: [
      { input: "nums=[1,3], n=6", output: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "1 <= n <= 10^9"],
    starterCode: {
      python: "def min_patches(nums, n):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int minPatches(int[] nums, int n) {\n        // Write your solution here\n        return 0;\n    }\n}\n"
    },
    solutionKeywords: ["patching array", "greedy", "reachable"],
    tests: [
      { input: "nums=[1,3], n=6", expected: "1" },
      { input: "nums=[1,5,10], n=20", expected: "2" }
    ],
    hints: [
      "Track the next unreachable value and patch it greedily.",
      "Use the current coverage range to decide whether a patch is needed.",
      "Each patch extends the reachable interval."
    ]
  },
  {
    id: 59,
    name: "Create Maximum Number",
    difficulty: "hard",
    language: "python",
    languages: ["python", "java"],
    topics: ["Greedy", "Stack"],
    description: "Create the maximum possible number of length k by selecting digits from two arrays while preserving order.",
    examples: [
      { input: "nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5", output: "[9,8,6,5,3]" }
    ],
    constraints: ["1 <= k <= nums1.length + nums2.length", "0 <= nums[i] <= 9"],
    starterCode: {
      python: "def max_number(nums1, nums2, k):\n    # Write your solution here\n    pass\n",
      java: "class Solution {\n    public int[] maxNumber(int[] nums1, int[] nums2, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}\n"
    },
    solutionKeywords: ["create maximum number", "greedy", "stack"],
    tests: [
      { input: "nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5", expected: "[9,8,6,5,3]" }
    ],
    hints: [
      "Build the maximum possible sequence by choosing the best digits and merging carefully.",
      "Use a greedy selection strategy for each array and then combine the results.",
      "Preserve relative order while maximizing the final number."
    ]
  }
];
