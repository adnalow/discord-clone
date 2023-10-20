import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";
import {db } from "@/lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo,
) {
    if (req.method !== "DELETE" && req.method !== "PATCH") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const profile = await currentProfilePages(req);
        const { messageId, serverId, channelId } = req.query;
        const { content } = req.body;
        
        if (!profile) {
            return res.status(401).json({error: "Unauthorized" });
        }

        if (!serverId) {
            return res.status(400).json({error: "Server ID missing" });
        }

        if (!channelId) {
            return res.status(400).json({error: "Channel ID missing" });
        }

        const server = await db.


    } catch (error) {
        console.log("[MESSAGE_ID]", error);
        return res.status(500).json({error: "Internal Error" });
    }
}