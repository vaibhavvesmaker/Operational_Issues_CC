# **Solving Operational Issues Within CoreCentrica**

A project focused on streamlining calendar integrations, automating repetitive tasks, and improving internal workflows at **CoreCentrica**. This README documents the **story**, the **methodology**, and the **final deliverables** that arose from our efforts to address these operational bottlenecks.

---

## **Table of Contents**
1. [Background & Story](#background--story)
2. [Project Goals](#project-goals)
3. [Methodology](#methodology)
4. [Solution Overview](#solution-overview)
5. [File Structure](#file-structure)
6. [Setup & Usage](#setup--usage)
7. [Results & Impact](#results--impact)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Background & Story**

CoreCentrica was experiencing **operational inefficiencies**—particularly around **calendar management**:

- Multiple calendars (personal, work, client schedules) caused confusion.  
- Overlapping deadlines led to scheduling conflicts.  
- Difficulty in hiding private events from shared calendars.  

This project began as an internal **“Calendar Fiasco”** remedy. The key objective: **streamline how events are viewed and managed**, without sacrificing **user privacy** or **data integrity**.

### **The Journey**
1. **Discovery Phase**  
   We identified that employees frequently toggled between personal and work calendars, risking scheduling conflicts and leaking private event details.

2. **Defining the Scope**  
   We decided to **build an automated script** that merges events from multiple calendars into a single “master” calendar, displaying events as **“Busy”** to protect privacy.

3. **Implementation & Testing**  
   Using **Google Apps Script** and **time-driven triggers**, we tested syncing processes with select users—**validating** that private data remained hidden.

4. **Deployment & Adoption**  
   After refining the scripts, we deployed the final solution for the entire organization, along with documentation and training.

---

## **Project Goals**
1. **Consolidate Calendars:** Provide a single, unified view for team leads to understand availability.  
2. **Maintain Privacy:** Ensure personal events remain hidden, only displayed as “Busy.”  
3. **Automate Workflows:** Eliminate manual copying of events between personal and work calendars.  
4. **Improve Collaboration:** Reduce scheduling conflicts and operational chaos.

---

## **Methodology**

1. **Requirements Gathering:**  
   - Interviews with stakeholders (managers, employees).  
   - Identification of data sensitivities (e.g., personal events).  

2. **Technical Research:**  
   - Evaluation of Google Calendar APIs & Apps Script capabilities.  
   - Assessment of organizational permissions (Rutgers accounts, personal Gmail, etc.).  

3. **Script Development:**  
   - Creation of a **Google Apps Script** that merges events, sets them to "Busy," and skips all-day events.  
   - Error handling for missing permissions or nonexistent calendar IDs.

4. **Testing & Validation:**  
   - Internal pilot with a few employees.  
   - Adjustments for edge cases (e.g., overlapping events, all-day events, permission errors).  

5. **Rollout & Support:**  
   - Documentation provided to the team (see `docs/` folder).  
   - Slack channel support for Q&A and troubleshooting.  

---

## **Solution Overview**

**CoreCentrica Calendar Integration**:
- **Apps Script** runs hourly (or any set interval) to sync events from user-specified “source calendars” (Gmail, Rutgers, etc.) into a single **CoreCentrica** calendar.  
- All events appear as **“Busy”** to protect private details.  
- Automatically skips all-day events or already-synced time slots.  
- Logs warnings if a calendar cannot be found or if permissions are insufficient.

---

## **File Structure**

```
.
├── docs
│   └── Calendar_Sync_Guide.md  <-- Detailed instructions & screenshots
├── scripts
│   ├── syncCalendars.js        <-- The main Google Apps Script code
│   └── sampleTestScript.js     <-- A sample test script for debugging
├── .gitignore
├── LICENSE
└── README.md                   <-- You're reading it now!
```

- **docs/**: Contains end-user documentation, setup guides, and troubleshooting steps.  
- **scripts/**:  
  - **syncCalendars.js**: The core script that merges calendars and masks private details.  
  - **sampleTestScript.js**: Example script to test or debug permissions.  
- **LICENSE**: Project license. (Placeholder or open-source license of your choice.)  
- **README.md**: This file, detailing the project overview and methodology.

---

## **Setup & Usage**

1. **Clone or Download** this repository.  
2. **Review** `docs/Calendar_Sync_Guide.md` for step-by-step installation instructions.  
3. **Deploy** the script to [script.google.com](https://script.google.com/) under your **CoreCentrica account**.  
4. **Authorize** the script to manage events in your calendars.  
5. **Test** by adding a personal event and verifying it appears as “Busy” in CoreCentrica.  
6. **Set a Trigger** (time-driven) for automatic updates (e.g., hourly).

---

## **Results & Impact**
- **Reduced Operational Overhead:** Eliminated manual steps of copying/pasting events, saving staff hours.  
- **Privacy Preserved:** Staff no longer worry about disclosing personal event details.  
- **Fewer Scheduling Conflicts:** Team leads can see true availability at a glance.  
- **Scalable:** Additional calendars can be added to `sourceCalendars` as the organization grows.

---

## **Contributing**
We welcome contributions that enhance the script’s reliability or add new features (e.g., handling time zones, advanced filtering).  

1. **Fork this repository**.  
2. **Create a new branch** for your feature or fix.  
3. **Submit a Pull Request** with a detailed description.  
4. The team will review and merge changes if they align with project goals.

---

## **License**
This project is provided under the [MIT License](LICENSE) (or whichever license you prefer). Feel free to adapt to your organization’s requirements.

---

**Thank you for exploring our solution to streamline calendar operations at CoreCentrica!**  

If you have any questions or need further assistance, please consult the [docs/Calendar_Sync_Guide.md](docs/Calendar_Sync_Guide.md) or reach out to the project maintainers.

> “**Great calendars make for great collaboration!**”

---

*End of README*
