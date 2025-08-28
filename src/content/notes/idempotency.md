---
title: 'Idempotency in APIs'
description: 'Short notes on idempotent vs non-idempotent operations and retry semantics.'
date: 2025-07-15
tags: ['system-design', 'api']
---

Idempotent operations (e.g., GET, PUT with full resource) can be retried safely. Non-idempotent (POST creating resources) need dedup keys or client-generated ids.

Pattern: client sends idempotency-key header; server deduplicates requests using that key.

```http
POST /charge
Idempotency-Key: abc-123
{
  "amount": 100
}
```

Server stores the key → response mapping for short TTL and returns previous result on duplicate.
