# Copilot Response Quality — Measuring With ACRUE

**Published:** Apr 8, 2025  
**Author:** Hugh North — Principal UX Research Manager

## Overview
This document explains ACRUE, a human-centered approach for measuring user perceptions of Copilot response quality. ACRUE evaluates whether a Copilot response (or conversation) is Accurate, Complete, Relevant, Useful, and Exceptional (better than alternatives). Measuring these elements helps us understand user experience, value, retention, and adoption.

## Why this matters
Multiple data sources indicate Copilot struggles to deliver consistent value and retain users:

- Cohort analysis shows >70% user loss within the first five weeks for some cohorts.
- First-time user research shows negative perceptions form within the first week.
- Admin feedback reports “copilot scarring” that harms purchase and deployment decisions.
- User- and third-party evaluations report poor-quality responses 25–50% of the time.

These signals suggest a gap between Microsoft’s internal metrics and real user perceptions. ACRUE aims to close that gap by capturing in-context user judgments.

> "It's not completely wrong, but it's irrelevantly right." — Admin, Chevron

## What ACRUE measures
ACRUE has five dimensions. The first four (ACRU) measure productivity value; the fifth (E) measures preference relative to alternatives.

- A — Accurate: The user believes the response is factually correct.
- C — Complete: The response did not omit important information.
- R — Relevant: The response addresses the user’s intent and context.
- U — Useful: The response helps the user achieve their real-world goal.
- E — Exceptional: The response is better than the alternatives the user could use.

ACRU elements are essential for trust and habitual use. Poor quality in these dimensions can quickly undermine retention — often within the first few responses.

## Two ways to implement ACRUE
1. **Scale ACRUE (preferred)**
   - Ask users to rate agreement with 5 statements (one per ACRUE element) on a 1–5 Likert scale.
   - Produces detailed, comparable scores; best for surveys and research.

2. **Frequency ACRUE (alternate)**
   - Record whether each ACRUE element applies to a response (counts rather than agreement scores).
   - Useful when scale questions are infeasible or when inferring ACRUE from other signals (e.g., classifier on free-text feedback).

Wherever possible, prefer Scale ACRUE for richer insights.

## Practical guidance
- **Use statements, not labels:** Don’t show users the A/C/R/U/E labels. Instead ask plain statements (e.g., “The response was factually correct”). Labels are for analysts.
- **Ask in-context:** Collect ACRUE while users are performing real work with their data—context dramatically affects judgments, especially for completeness and relevance.
- **Avoid using ACRUE to evaluate UI, latency, or reliability directly.** ACRUE measures perceived response quality in-context; other diagnostics can complement it.

## Measuring multi-turn conversations
- When possible have users rate each turn and the overall conversation.
- If per-turn rating is infeasible in product contexts, detect conversation end and ask for an overall ACRUE rating as a proxy for conversation quality.
- Expect variation: some turns may be low-quality while the overall conversation still succeeds (or vice versa). Latency and user expectation shape tolerance.

## Competitive benchmarking
ACRUE can compare any AI experience if the job and measurement approach are consistent:

- Use the same measurement approach (Scale recommended) across experiences.
- Keep prompts and context constant.
- Where possible, test in the same real-world context for each experience.

## Interpreting results (high-level)
- **Low Accuracy** often drags down other elements (C, R, U). Factual errors severely damage trust.
- **Low Completeness** is common when grounding or search fails (tenant data, web search) or when token/engineering limits truncate necessary context.
- **Low Relevance** occurs when intent is misunderstood or grounding is wrong — the response can be correct but still useless.
- **Low Usefulness** means the user cannot easily apply the response to achieve their goals (formatting, tone, legal/official authority, brand standards, etc.).
- **Exceptional** captures preference: a response might be imperfect but still better than the alternatives users can achieve on their own.

## Examples & anecdotes (summary)
- Users testing Copilot often ask questions they know the answer to, exposing completeness failures (e.g., missing known meetings).
- Drafts that ignore corporate tone or brand require significant rework, reducing usefulness despite being accurate and complete.
- Responses grounded in the wrong subsidiary or non-official sources can be dangerous despite appearing high-quality.

## Considerations and cautions
- ACRUE is user-focused: external judges (experts, LLMs, or engineers) may mis-evaluate responses because they lack the user’s context and goals.
- Don’t conflate ACRUE with diagnostic signals like citation count, latency, or perceived intelligence — those may explain ACRUE changes but are not substitutes for user perception.

## Further reading and references
Key internal and external resources include cohort analyses, telemetry reports, and several X3 Research studies. Selected references:

1. AIX00 Sprint 25 Report
2. Sprint 5 Learnings — Users Living with Copilot in M365
3. Commercial Device Telemetry: Monthly AI Usage Update (Dec, Feb)
4. "Streaming versus Revealing: AI answer delivery UX shapes perceived quality" — Max Meijer, Feb 5, 2025
5. "AI Search Has A Citation Problem" — C. Jaźwińska & A. Chandrasekar, Mar 2025
6. Expert evaluations and comparative analyses (ChatGPT vs. M365 Copilot)

---

Microsoft Confidential · Privacy Statement

Want to view more X3 Research Headlights? See the X3 Research Headlights page and subscribe to updates.