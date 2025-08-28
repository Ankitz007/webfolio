---
title: 'Dynamic Programming — Memoization'
description: 'Short memoization template and when to convert recursion → DP.'
date: 2025-07-22
tags: ['algorithms', 'dp']
---

Memoization turns exponential recursion into polynomial time by caching results.

```python
from functools import lru_cache

@lru_cache(None)
def ways(n):
    if n <= 1: return 1
    return ways(n-1) + ways(n-2)

# Convert to iterative DP when n is large to avoid recursion limits and stack cost.
```
