# operation black ridge: Executive Report Rubric

## Scenario-specific required conclusions

The initial-access chain is the delivered helpdesk-ticket lure, not the quarantined payroll message or routine gateway scanning. Browser, PowerShell 4104, Security 4688, and Sysmon records on `WIN-HELPDESK-12` show execution as `BLACKRIDGE\helpdesk.svc`, loading `C:\ProgramData\EdgeAuth\authui.dll` through `rundll32` and creating the `EdgeAutoUpdater` ONLOGON persistence task. Subsequent process evidence shows LSASS dumping with ProcDump and remote execution toward `WIN-FS01`.

The Windows-to-Linux pivot must be proven from authentication and network records: the recovered administrative authorized key on `LINUX-JUMP-01` is persistence/exposure, while successful use requires matching SSH/auth and source-address evidence. Cluster impact is established only where Kubernetes/API audit data shows use of the affected principal and access to Grafana or application secrets. The staged Phoenix merger ZIP, board PDF, and escrow workbook are real archives/documents and support collection/staging; transfer evidence is required before calling them exfiltrated.

Separate principals and scopes: `helpdesk.svc` on Windows, the Linux administrative account/key, and the Kubernetes service identity are not interchangeable. Scanner allowlists, normal WAF blocks, ARP/DHCP records, and quarantined mail are context or false signals unless correlated to execution.

Containment: disable and rotate `helpdesk.svc`, isolate `WIN-HELPDESK-12` and `WIN-FS01`, remove the task/DLL, invalidate the SSH key, rotate accessed Grafana/Kubernetes secrets, review SMB collection and outbound sessions, and preserve the staged objects for legal/M&A impact assessment.

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
