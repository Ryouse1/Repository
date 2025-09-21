import express from "express";
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/check-comment", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await openai.moderations.create({
      model: "omni-moderation-latest",
      input: text
    });

    const flagged = response.results[0].flagged;
    res.json({ allowed: !flagged });
  } catch (e) {
    console.error(e);
    res.status(500).json({ allowed: false });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
