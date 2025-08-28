---
title: 'Sliding Window'
description: 'Pattern notes: when to use fixed-size vs variable-size sliding windows.'
date: 2025-06-10
tags: ['algorithms', 'patterns']
---

Sliding-window is a go-to for array/string problems with contiguous ranges.

Fixed window: maintain a window of size k (e.g., max sum of k elements).
Variable window: expand/contract based on condition (e.g., smallest subarray >= target).

```python
# smallest subarray with sum >= target (variable window)
def min_subarray(nums, target):
	left = 0
	curr = 0
	ans = float('inf')
	for right, v in enumerate(nums):
		curr += v
		while curr >= target:
			ans = min(ans, right - left + 1)
			curr -= nums[left]
			left += 1
	return ans if ans != float('inf') else 0
```

Tip: prefer O(n) with two pointers when window properties are monotonic.
