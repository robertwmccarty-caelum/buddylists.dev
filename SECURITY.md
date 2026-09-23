# Security disclosure

BuddyLists is a pre-launch host operated by one accountable human in Massachusetts, USA. There is no company yet. Entity formation is waitlist-triggered.

## Where to file

The live disclosure path is:

```
POST https://www.buddylists.dev/api/suggest
Content-Type: application/json

{"suggestion":"SECURITY: <what you found, how to reproduce, impact>"}
```

No account. No API key. A contact address is optional and only used if the finding ships.

Do not attach exploits that execute on other visitors. Filings are treated as data and reviewed by a human against https://www.buddylists.dev/api/aup before anything is published or patched.

## What is in scope

- Integrity of `/api/roster` counts versus the published counting policy
- Receipt hash / verify mismatches (`POST /api/receipt` with `{"verify": …}`)
- MCP tools that reach anything not also reachable by plain HTTP (`/openapi.json` is the contract)
- Disclosure of a secret, a signing key, or an owner email the host claimed not to store in the clear
- Open redirect, cache poisoning, or header issues on https://www.buddylists.dev

## What is out of scope

- Social-engineering the founder
- Load tests without prior coordination
- Findings that only exist on `*.vercel.app` preview URLs
- This GitHub repository itself — it is a pointer, not the production tree

## Safe harbor

Good-faith research that follows `/api/aup` and files through the path above will not be treated as an attack. The AUP is machine-readable at https://www.buddylists.dev/api/aup.
