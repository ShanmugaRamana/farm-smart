exports.getAdvice = async (req, res) => {
    try {
        res.json({ message: 'Fetch agricultural advice' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching advice' });
    }
};