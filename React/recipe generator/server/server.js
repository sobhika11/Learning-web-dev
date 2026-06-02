import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Groq from "groq-sdk";
import process from "process";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
            role: "system",
            content: `
        You are a professional chef and food writer.
        Your job is to create visually clean, well-structured recipes.

        Formatting rules:
        - Use clear section headings
        - Use line breaks generously
        - Avoid emojis
        - Keep instructions concise and numbered
        - Output plain text only (no markdown symbols)
        `
        },
        {
            role: "user",
            content: `
        Create a recipe using these ingredients:
        ${ingredients.join(", ")}

        Output format exactly like this:

        RECIPE TITLE
        Short one-line description

        INGREDIENTS
        - item 1
        - item 2
        - item 3

        INSTRUCTIONS
        1. Step one
        2. Step two
        3. Step three
        `
        }
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    const recipe =
      completion.choices[0]?.message?.content ||
      "No recipe could be generated.";

    res.json({ recipe });
  } catch (error) {
    console.error("Groq API error:", error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);