---
title: 'Designing a Cache Layer'
description: 'Short HLD notes for a cache layer: eviction, TTL, and cache coherency trade-offs.'
date: 2025-05-20
tags: ['system-design', 'cache']
---

A cache in front of a datastore improves read throughput and latency. Key considerations:

- Eviction policy: LRU is common; LFU for frequency-based workloads.
- TTL vs explicit invalidation: TTL is simple; explicit invalidation required for strong consistency.
- Write patterns: write-through vs write-back.

Trade-offs:

- Higher hit ratio reduces DB load but increases stale data risk.
- Sharding and distributed caches (Redis cluster) add operational complexity.

Mini checklist:

1. Choose eviction policy (LRU default).
2. Decide TTL vs invalidation strategy.
3. Measure hit ratio and tail latency.

Code (pseudo):

```python
# naive in-memory LRU using OrderedDict
from collections import OrderedDict

class LRUCache:
  def __init__(self, capacity):
    self.cap = capacity
    self.d = OrderedDict()

  def get(self, k):
    if k not in self.d: return None
    self.d.move_to_end(k)
    return self.d[k]

  def put(self, k, v):
    self.d[k] = v
    self.d.move_to_end(k)
    if len(self.d) > self.cap:
      self.d.popitem(last=False)
```
