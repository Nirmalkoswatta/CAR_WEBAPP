const functions = require("firebase-functions");
const { getGenerativeModel } = require("@google-cloud/vertexai");

const vertexAI = new getGenerativeModel({
  model: "gemini-pro", // or other model
  location: "us-central1",
  project: "car-modification-1090a", // <-- Set to your Firebase project ID
});

exports.findCarParts = functions.https.onCall(async (data, context) => {
  const { make, model, year, goal } = data;

  const prompt = `
  You are an AI assistant helping car enthusiasts find modification parts.\nCar: ${make} ${model} ${year}.\nGoal: ${goal}.\nSuggest specific parts with category, description, price range, and compatibility.\nReturn JSON only.
  `;

  try {
    const response = await vertexAI.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError("internal", "AI request failed");
  }
});
