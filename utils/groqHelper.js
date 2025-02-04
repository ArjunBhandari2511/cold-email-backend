const {Groq} = require("groq-sdk");

const groq = new Groq({apiKey : process.env.GROQ_API_KEY});

exports.generateColdEmail = async (prompt) => {
    try {
        const response = await groq.chat.completions.create({
            model : "llama3-8b-8192",
            messages : [{ role: "user", content: prompt }],
            temperature : 0.7,
        });

        return response.choices[0]?.message?.content;
    } catch (error) {
        console.error("Error generating email : ", error);
        return "Error Generating the mail. Please try again.";
    }
}