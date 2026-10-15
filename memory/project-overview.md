# Project Overview — OKCL Centre Registration Portal

## Purpose
A website where new centres register with **OKCL**, and existing applicants can check the
status of their registration. OKCL admins can log in to review centres and manage settings.

## Users
1. **Centre applicant** — enters Email ID + Mobile number.
   - Already registered → sees their registration **status**.
   - New → sees a **registration form** to fill in.
2. **Admin** — logs in via the "Admin Login" button (bottom-right of the landing page),
   views centre statuses and manages settings (details to be discussed later).

## Data
- Database: **Google Sheets**.
- Connection: **Google Apps Script** web app acting as the API between the website and the sheet.

## Approach
Built **phase by phase**. Each phase gets a task file in `tasks/` before any code is written.
