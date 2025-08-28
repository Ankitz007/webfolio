---
title: 'Load Balancer Patterns'
description: 'Notes on load balancing strategies and when to use sticky sessions.'
date: 2025-06-03
tags: ['system-design', 'networking']
---

Load balancers distribute traffic across app servers.

Common strategies:

- Round-robin: simple, good for equal-weight servers.
- Least-connections: better for uneven load per connection.
- IP-hash / sticky sessions: required if session state is stored locally (avoid when possible).

Prefer stateless services + centralized session store (Redis) and avoid sticky sessions.

Mini-checklist:

1. Start with round-robin or cloud-managed LB.
2. Centralize session/state if you need active-active scaling.
3. Monitor connection distribution and tail latency.

No code needed — configuration is on the infra side (NGINX, HAProxy, cloud LB).
