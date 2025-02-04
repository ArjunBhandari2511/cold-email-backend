const EmailTemplate = require("../models/EmailTemplate");
const {generateColdEmail} = require("../utils/groqHelper");

exports.generateEmail = async (req, res) => {
    try {
        const {industry, purpose, tone} = req.body;
        const prompt = `Write a cold email for ${industry} with a tone ${tone} tone for a ${purpose}.`;

        const emailContent = await generateColdEmail(prompt);
        const newEmail = await new EmailTemplate({userId : req.user.userId , subject : "Cold Email" , body : emailContent});
        await newEmail.save();

        res.json(newEmail);
    } catch (error) {
        res.status(500).json({message : "Error generating email"});
    }
};