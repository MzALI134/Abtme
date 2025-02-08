import { updateServerData } from '../../lib/database';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    
    const { key, data } = req.body;
    await updateServerData(key, data);
    
    res.status(200).json({ success: true });
}
