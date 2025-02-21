exports.getCropPrices = async (req, res) => {
    try {
        res.json({ message: 'Fetch crop price data' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching crop prices' });
    }
};