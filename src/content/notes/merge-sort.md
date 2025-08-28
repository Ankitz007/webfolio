---
title: 'Merge Sort'
description: 'Compact reference for merge sort: idea, complexity and a short implementation.'
date: 2025-05-06
tags: ['algorithms', 'sorting']
---

Merge sort splits the array, sorts halves, and merges them — classic divide & conquer.

Complexity: O(n log n) time, O(n) extra space.

```javascript
// Merge sort (in-place interface, uses extra array internally)
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(a, b) {
  const res = []
  let i = 0,
    j = 0
  while (i < a.length && j < b.length) {
    res.push(a[i] < b[j] ? a[i++] : b[j++])
  }
  return res.concat(a.slice(i)).concat(b.slice(j))
}

// Usage:
// mergeSort([5,2,4,1,3]) -> [1,2,3,4,5]
```

Tip: use merge sort for stable sorting and for data that doesn't fit fast in-place heuristics.
