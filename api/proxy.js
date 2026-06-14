export default async function handler(req, res) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  res.status(200).json({
    status: "template",
    configured: Boolean(GEMINI_API_KEY)
  });
}
