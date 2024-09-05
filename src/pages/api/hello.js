// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(
      "req.body=============>",
      req.body,
      process.env.GOOGLE_CLIENT_EMAIL
    );
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });
      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "A1:D1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[req.body.fullName, req.body.email, req.body.phoneNumber]],
        },
      });

      return res.status(200).json({ data: response.data });
    } catch (error) {
      console.log("error in backend request.", error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
