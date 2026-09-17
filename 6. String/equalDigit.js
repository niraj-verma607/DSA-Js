// LeetCode 2283 — Check if Number Has Equal Digit Count and Digit Value

// ## Intuition

// We need to check whether the number of times each digit appears
// is equal to the value at that digit's index.
//
// The idea is simple:
//
// - For every index `i`, look at the digit `num[i]`.
// - Count how many times the digit `i` appears in the entire string.
// - Compare that count with `num[i]`.
// - If any index does not match, return `false`.
// - If every index matches, return `true`.
//
// **Think of it as:** **Count → Compare → Validate**

// ---

// ## Approach

// ### Step 1: Traverse Every Index
// - Use a loop to visit every index `i` in the string.
// - The index itself represents the digit we need to count.
//
// For example:
//
// `"1210"`
//
// - index `0` → count digit `0`
// - index `1` → count digit `1`
// - index `2` → count digit `2`
// - index `3` → count digit `3`

// ### Step 2: Count the Digit
// - For each index `i`, traverse the string again.
// - Count how many times the digit `i` appears.
//
// For example:
//
// `num = "1210"`
//
// For `i = 0`:
//
// - digit `0` appears **1 time**.

// ### Step 3: Compare the Count
// - Compare the number of occurrences with `num[i]`.
//
// For `"1210"`:
//
// `i = 0` → digit `0` appears `1` time → `num[0] = 1` ✅
//
// `i = 1` → digit `1` appears `2` times → `num[1] = 2` ✅
//
// `i = 2` → digit `2` appears `1` time → `num[2] = 1` ✅
//
// `i = 3` → digit `3` appears `0` times → `num[3] = 0` ✅

// ### Step 4: Return False if Any Mismatch
// - If the count is different from `num[i]`, the condition fails.
// - Immediately return `false`.

// ### Step 5: Return True
// - If every index satisfies the condition, return `true`.

// ---

// ## Key Pattern

// **Traverse → Count → Compare → Return**

// The important thing to understand is that `i` represents
// **the digit we are counting**.
//
// For example:
//
// `i = 2` → count how many times digit `"2"` appears.
//
// Then compare that count with:
//
// `num[2]`


function equalDigit(num){
    // Check every index
    for (let i = 0; i < num.length; i++) {

        let count = 0;

        // Count how many times digit i appears
        for (let j = 0; j < num.length; j++) {

            if (num[j] === String(i)) {
                count++;
            }
        }

        // Compare count with num[i]
        if (count !== Number(num[i])) {
            return false;
        }
    }

    return true;
}