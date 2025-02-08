export default async function handler(req, res) {
    const { key } = req.query;
    
    // Get server data from database
    const serverData = await getServerData(key);
    
    if (!serverData) {
        return res.status(404).json({
            error: "Invalid API key"
        });
    }
    
    res.status(200).json(serverData);
}
