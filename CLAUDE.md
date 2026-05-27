<!-- generated-by: contextkit -->
<!-- version: 0.1.0 -->

# Project Overview
- This is **temp-app**, a TypeScript project.
- Built with: vite, react, tailwind.
- Package manager: npm.

# Repository Structure
- `src/`
- `src/components/`
- `src/lib/`
- `public/`

# Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`

# Workflow
- Keep changes scoped to the request.
- Prefer updating existing patterns over introducing parallel abstractions.
- Run the narrowest useful verification command after edits.
- Do not modify generated or vendored files.

# Verification
- Lint: `npm run lint`
- Test: `npm test`
- Run the narrowest verification relevant to each change.

# Memory Hygiene
- Keep this file short and specific (target <150 lines).
- Put folder-specific guidance in `.claude/rules/`.
- Use hooks for actions that must happen deterministically every time.
- Auto memory (`~/.claude/projects/`) is machine-local and Claude-managed — this file is the portable, team-shareable layer.

# TypeScript
- Use strict TypeScript — avoid `any` unless justified with a comment.
- Prefer `interface` for object shapes, `type` for unions and intersections.
- Use `as const` for literal types and `satisfies` for type-safe assignments.
- Prefer `unknown` over `any` for untyped boundaries.
