---
title: 'Hash Tables'
description: 'Quick notes on hash table basics, collision handling and use-cases.'
date: 2025-05-13
tags: ['data-structures', 'hashing']
---

Hash tables provide expected O(1) average-time lookup/insert using a hash function.

Collision strategies:

- Separate chaining (lists/buckets)
- Open addressing (linear/quadratic probing)

When to use:

- Fast key->value maps
- Frequency counts

Pitfall: poor hash functions or load factors can degrade performance to O(n).

```python
# Python dict uses a high-performance hash table under the hood
counts = {}
for x in items:
	counts[x] = counts.get(x, 0) + 1
```
