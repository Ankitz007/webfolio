---
title: 'Topological Sort'
description: "Kahn's algorithm (BFS) sketch for topological ordering of DAGs."
date: 2025-07-29
tags: ['algorithms', 'graphs']
---

Kahn's algorithm: repeatedly remove nodes with indegree 0 and append to order.

```python
from collections import deque

def topo(nodes, adj):
    indeg = {n:0 for n in nodes}
    for u in adj:
        for v in adj[u]: indeg[v]+=1
    q = deque([n for n in nodes if indeg[n]==0])
    order = []
    while q:
        u = q.popleft(); order.append(u)
        for v in adj.get(u,[]):
            indeg[v]-=1
            if indeg[v]==0: q.append(v)
    return order if len(order)==len(nodes) else None  # None => cycle
```

Use-case: build systems, dependency ordering.
