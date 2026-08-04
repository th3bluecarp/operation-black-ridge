# operation black ridge: Executive Report Rubric

## Scenario-specific required conclusions

Correlate the delivered helpdesk lure/mail trace with endpoint run-key/authorized-key changes and Kubernetes/Grafana secret access. Quarantined mail and routine gateway filtering are not compromise. A secret file or authorized key is evidence of potential access; prove use with auth, process, or network logs and distinguish the Windows, Linux, and cluster principals.

## Scoring

- 30% accurate, normalized timeline with artifact citations
- 25% complete entry, pivot, persistence, privilege, and impact analysis
- 20% correct clustering of related, unrelated, benign, and false-signal activity
- 15% disciplined confidence labels and treatment of telemetry gaps
- 10% executive-quality remediation, ownership, and sequencing

## Automatic deductions

- Unsupported attribution or invented observables
- Collapsing every suspicious event into a single incident
- Treating attempted access as successful access
- Treating access as exfiltration without transfer or receipt evidence
- Treating missing logs as proof that activity did not occur
- Omitting material contradictory or benign evidence

Every high-impact conclusion should cite two independent artifacts where available and preserve exact identities, hosts, IP addresses, object names, and timestamps.
