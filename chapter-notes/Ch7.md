 Power of 2 | Exact Value | Approximate Value | X Bytes into MB, GB, etc.
 ---------- | ----------- | ----------------- | ----------
 7 | 128 |  |
 8 | 256 |  |
 10 | 1024 | 1 thousand | 1 KB
 16 | 65,536 |  | 64 KB
 20 | 1,048,576 | 1 million | 1 MB
 30 | 1,073,741,824 | 1 billion | 1 GB
 32 | 4,294,967,296 |  | 4 GB
 40 | 1,099,511,627,776 | 1 trillion | 1 TB

### 1 Bit = 8 Bytes

## Walking Through a Problem

### What to Expect

Interviews are supposed to be difficult. Listen for guidance from interviewer. They may or may not help as much, depending upon their preference, your performance, and difficulty of question.

## Flowchart

1. Listen - Make sure you look at every single detail in the description of the problem. Everything is useful to solve it.

2. Example - Most examples don't encompass every constraint that the problem could have. Find special cases, and make it bigger if needed. Make an example that's not a special case, you want to leave enough time to at least get a base case solution. Once you have the base case dealt with, you can solve for the special cases. 

3. Brute Force - Get a brute force solution up and running ASAP, but don't code it yet. You'll optimize it later.

4. Optimize - 
    1. Look for any unused info.
    2. Come up with fresh examples. Sometimes you'll see a pattern a different way. 
    3. Solve it incorrectly. It might get you closer to where you need to be. 
    4. Make time vs space tradeoff. Storing extra state might give you better runtime.
    5. Compute info ahead of time in the algorithm.
    6. HASH TABLE
    7. Find best conceivable runtime.
    
    Optimize your brute force method with BUD.
    - Bottlenecks
    - Unnecessary Work
    - Duplicated Work

5. Walk Through - Walk through your approach in detail, and speak out loud. Understand your algorithm thoroughly before coding. Understanding is important to make sure you code it properly.

6. Implement - Write beautiful code. Modularize from the beginning and refactor to clean any ugly stuff up. KEEP TALKING. Use good, descriptive variable names. 

7. Test - Testing Order
    - Conceptual test. Walk through your code like a detailed code review
    - Unusual or non-standard code
    - Hot spots, like arithmetic and null nodes
    - Small test cases. It's much faster than a big test case and just as effective
    - Special cases and edge cases
