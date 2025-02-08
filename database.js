import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('weblink');
const servers = db.collection('servers');

export async function getServerData(key) {
    return await servers.findOne({ key });
}

export async function updateServerData(key, data) {
    return await servers.updateOne(
        { key },
        { $set: { data, lastUpdate: new Date() } },
        { upsert: true }
    );
}
