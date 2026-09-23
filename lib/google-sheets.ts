import { google, type sheets_v4 } from "googleapis";

let sheetsClient: sheets_v4.Sheets | null = null;
let sheetsClientAttempted = false;

function getSheetsClient(): sheets_v4.Sheets | null {
  if (sheetsClient || sheetsClientAttempted) return sheetsClient;
  sheetsClientAttempted = true;

  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;

  try {
    const credentials = JSON.parse(raw);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    sheetsClient = google.sheets({ version: "v4", auth });
    return sheetsClient;
  } catch (err) {
    console.error("Google Sheets: failed to parse GOOGLE_SERVICE_ACCOUNT_JSON.", err);
    return null;
  }
}

/**
 * Appends one row [date, time, role, content] to the configured Google
 * Sheet. Intentionally fails silently (console.error only) — a logging
 * failure should never break the chat UI, matching the old app's design.
 */
export async function logChatMessage(role: "user" | "assistant", content: string): Promise<void> {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const sheets = getSheetsClient();
    if (!sheets || !sheetId) return;

    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[date, time, role, content]] },
    });
  } catch (err) {
    console.error("Google Sheets: failed to log chat message.", err);
  }
}
