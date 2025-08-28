---
title: 'Monolith vs Microservices'
description: 'Short HLD trade-offs between monoliths and microservices.'
date: 2025-06-17
tags: ['system-design', 'architecture']
---

Monoliths are easy to develop and deploy initially. Microservices scale development and teams but add operational complexity.

When to split:

- If deployments slow teams down.
- If different parts require different scaling or tech stacks.

Drawbacks of microservices:

- Distributed tracing, service discovery, data consistency, increased deployment complexity.

Recommendation: start with a monolith, extract services when clear bounded contexts exist.
