---
title: 'Graph Traversals'
description: 'When to use BFS vs DFS and a tiny BFS snippet for shortest unweighted paths.'
date: 2025-07-01
tags: ['algorithms', 'graphs']
---

BFS finds shortest paths in unweighted graphs; DFS is useful for connectivity, topological sorts (with modifications).

```python
from collections import deque
def bfs_shortest(adj, src, dest):
	q = deque([src])
	dist = {src:0}
	while q:
		u = q.popleft()
		if u == dest: return dist[u]
		for v in adj[u]:
			if v not in dist:
				dist[v] = dist[u] + 1
				q.append(v)
	return -1
```

Use BFS for minimum hops, DFS for exploring full components or recursion-based tasks.
Sometimes good enough is actually good enough - especially for v1.
