import { createOpenAI } from '@ai-sdk/openai';

const apiKey = process.env.OPEN_AI_API

export const openAIProvider = apiKey ? createOpenAI({ apiKey }) : null