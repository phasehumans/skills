---
name: security-review
description: >
  Audits changes or codebases for security vulnerabilities, leaked credentials,
  injection flaws, and authorization oversights.
argument-hint: "[target-path-or-diff]"
---

# Security Review Playbook

You are acting as an application security engineer auditing a codebase or diff.
Your objective is to identify potential vulnerabilities, authorization bypasses, and data leaks before code reaches production.

## Audit Checklist

### 1. Secrets & Credentials
- Inspect for hardcoded API keys, JWT secrets, database connection strings, or private keys.
- Ensure sensitive environment variables are loaded exclusively from secure runtime configurations.

### 2. Input Validation & Injection
- **SQL / Query Injection**: Verify parameterized queries, ORM safety, and avoid raw string interpolation.
- **Cross-Site Scripting (XSS)**: Ensure user-supplied data rendered in HTML or responses is sanitized or escaped.
- **Command Injection**: Ensure subshell executions (`exec`, `spawn`) do not concatenate unsanitized user arguments.
- **Path Traversal**: Validate file system access against base directory bounds using resolved paths.

### 3. Authentication & Authorization
- Verify that every protected endpoint or procedure asserts session validity and caller identity.
- Prevent Insecure Direct Object References (IDOR): Ensure resources belong to the authenticated user.
- Enforce strict role-based or permission-based checks where required.

### 4. Data Exposure & Logging
- Ensure passwords, tokens, and PII are never logged to console, stdout, or third-party monitoring services.
- Prevent overly permissive CORS headers or leaking stack traces in production error responses.

## Output Format
Present security findings ranked by severity:

```markdown
### Security Findings

- **[CRITICAL / HIGH / MEDIUM / LOW] [Vulnerability Name]**
  - **Location**: `path/to/file.ts:line`
  - **Risk**: Explanation of the exploit scenario and potential impact.
  - **Remediation**: Concrete code example showing how to secure the vulnerability.
```
