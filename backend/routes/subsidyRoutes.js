exports.getSubsidies = async (req, res) => {
    try {
        res.json({ message: 'Fetch subsidies data' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subsidies' });
    }
};