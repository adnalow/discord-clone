"use client";

import * as z from "zod";

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" | "channel";
}

const formSchema = z.object({
    content: z.string().nonempty(),
});

export const ChatInput = ({
    apiUrl,
    query,
    name,
    type,
}: ChatInputProps) => {
    return (
        <div>
            Chat Input!
        </div>
    )
}