---
title: 'Trie (Prefix Tree)'
description: 'Compact cheat-sheet for tries: insertion, search, and common uses (autocomplete).'
date: 2025-07-08
tags: ['data-structures', 'strings']
---

Tries store strings by shared prefixes; great for autocomplete and prefix counting.

```python
class Node:
  def __init__(self):
    self.next = {}
    self.end = False

class Trie:
  def __init__(self):
    self.root = Node()
  def insert(self, s):
    n = self.root
    for c in s:
      n = n.next.setdefault(c, Node())
    n.end = True

# usage: insert many words, then traverse by prefix for suggestions
```
