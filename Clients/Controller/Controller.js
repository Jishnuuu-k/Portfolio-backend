const { sendClientMessage } = require("../Usecause/Usecause");

const clientmessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const result = await sendClientMessage(name, email, message);
        res.status(result.success ? 200 : 500).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { clientmessage };
