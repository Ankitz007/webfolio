---
title: 'Binary Search'
description: 'Binary search templates and edge-case patterns (lower_bound, upper_bound).'
date: 2025-06-24
tags: ['algorithms', 'search']
---

Binary search is versatile: classic exact-match, lower_bound (first >= target), upper_bound (first > target).

Template (lower_bound):

```cpp
int lower_bound(vector<int>& a, int target){
  int l=0, r=a.size();
  while(l<r){
    int m = l + (r-l)/2;
    if(a[m] < target) l = m+1; else r = m;
  }
  return l; // index of first >= target
}
```

Edge cases: empty array, all elements < target, duplicates — choose variant carefully.
