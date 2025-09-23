# Hands-on: ACRUE for Meeting Summarization

Fictional company: Northbridge Consulting
Use case: Summarizing client kickoff meetings into action items, decisions, and attendee notes.

Estimated time: 60–90 minutes (guided workbook)

Learning goals for this activity
- Practice writing clear, in-context Scale ACRUE statements for a meeting summarization task.
- Design a minimal feedback flow that collects ACRUE in-context with low friction.
- Create or synthesize a small mock dataset and perform a quick analysis (means, simple cross-tab).
- Produce a concise, actionable one-page summary with prioritized recommendations.

Materials provided (or to prepare)
- Curated ACRUE one-page summary (pre-work)
- Workbook prompts and examples (this file)
- Mock data template (CSV) and a few starter rows you can modify
- A simple spreadsheet or editor for analysis

Activity steps (detailed)

1) Context & Goals (5 min)
- Northbridge Consulting uses Copilot to summarize internal client kickoff meetings. Common user complaints: missing action items, incorrect assignment of owners, and summaries that include irrelevant background.
- The product goal: increase perceived usefulness (U) and completeness (C) of meeting summaries while preserving accuracy (A) and relevance (R). We also want to know if summaries are preferred over alternatives (E).

2) Draft Scale ACRUE statements (15 min)
- Write five user-facing statements, one per element. Keep them plain-language and in-context. Example phrasing:
  - Accurate: "The summary contains correct facts about what happened in the meeting."
  - Complete: "The summary included the important action items and decisions I needed."
  - Relevant: "The summary focused on the items I care about for follow-up."
  - Useful: "I can use this summary to do my next work task without re-reading the whole meeting."
  - Exceptional: "This summary is better than what I would create on my own or with other tools."

Checkpoint: share your statements with a peer or an instructor and iterate until statements are specific, non-leading, and usable in a single prompt.

3) Design a minimal feedback flow (10–15 min)
- Decide when to show the questions (e.g., immediately after the summary is generated, or behind a “Was this summary helpful?” link).
- Mockup microcopy and placement (textual description or a simple sketch). Example flow:
  - After summary: short toast + link "Rate this summary"
  - Modal with 5 statements, 1–5 Likert scale, optional free-text for details
  - Submit button and a thank-you microcopy

4) Create or use the mock dataset (20–30 min)
- Option A: Use the provided starter CSV and expand it to ~30 rows. Add diversity in prompts and summary quality.
- Option B: Synthesize responses quickly by imagining typical errors (missing action items, wrong owner) and assigning Likert ratings.

Starter rows (example) — you may edit or extend these in your spreadsheet:

| id | prompt | response_snippet | A | C | R | U | E |
|----|--------|------------------|---:|---:|---:|---:|---:|
| 1  | "Summarize meeting about Q3 roadmap" | "Decisions: prioritize X; Action: Alice to draft plan" | 4 | 5 | 5 | 4 | 3 |
| 2  | "Summarize 1:1 with manager" | "Notes focus on personal goals; missing action items" | 3 | 2 | 3 | 2 | 2 |
| 3  | "Summarize client kickoff—attendees & next steps" | "Includes attendees, next steps, and assigned owners" | 5 | 5 | 5 | 5 | 4 |

Analysis prompts (in-spreadsheet)
- Compute mean for each element: =AVERAGE(range)
- Compute distribution counts (e.g., % of responses ≤ 2): =COUNTIF(range,"<=2")/COUNTA(range)
- Cross-tab idea: compare Usefulness (U) mean for summaries that had low Completeness (C ≤ 2) vs high Completeness (C ≥ 4).

5) Interpretation & one-page summary (20–30 min)
- Summarize results in one page (or a single doc slide). Include:
  - Key statistics (means, % low-quality responses)
  - One or two quick visuals (histogram or small table)
  - Three prioritized recommendations with brief rationale and suggested next steps (e.g., extend grounding to calendar data to improve completeness; add an explicit action-item extractor; add an inline fix/edit button to increase usefulness).

Deliverables (for the hands-on activity)
- Finalized 5 ACRUE statements tailored to meeting summarization
- Minimal feedback flow description or mockup
- Mock dataset (30 rows recommended) and brief analysis (spreadsheet or screenshots)
- One-page summary with 3 prioritized recommendations

Instructor checklist for formative review
- Statements are clear and map to one ACRUE element each
- Feedback flow timing and microcopy are reasonable and low-friction
- Analysis shows correct basic calculations and a sensible interpretation
- Recommendations are specific and feasible for Northbridge Consulting

Notes
- This hands-on activity is formative: learners can iterate and get feedback before the summative assessment.
- Suggested use case for guided work: meeting summarization. The summative assessment will use a different company and a different job (email drafting).
