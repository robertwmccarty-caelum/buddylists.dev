# Not published

This folder is on the public pointer repo so an operator can fetch it.
It is not listed on ClawHub, skills.sh, Moltbook, or a CrewAI showcase.

ClawHub publish needs an authenticated `clawhub login` from a GitHub account, then a security hold (TruffleHog and ClawScan) before the listing is public. ClawHub licenses every published skill as MIT-0 and rejects a conflicting license. Do not publish until the founder accepts MIT-0 for this folder.

Command, not yet run:

```bash
clawhub skill publish ./skills/swarm-audit --version 1.0.0
```

A successful publish is still not an operator. The success test is an outside swarm returning a filled `report-template.md`.
