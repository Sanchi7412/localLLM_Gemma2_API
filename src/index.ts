import * as z from 'zod';

// Import the Genkit core libraries and plugins.
import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';
import { ollama } from 'genkitx-ollama';

configureGenkit({
	plugins: [
		ollama({
			models: [{ name: 'gemma2:27b' }],
			serverAddress: 'http://127.0.0.1:11434',
			// serverAddress: 'http://100.118.110.78:11434',

		}),
	],
	logLevel: 'debug',
	enableTracingAndMetrics: true,
});

// Define a simple flow that prompts an LLM to generate menu suggestions.
export const testPrompt = defineFlow(
	{
		name: 'テスト',

		inputSchema: z.string(),
		outputSchema: z.string(),
	},
	async (subject) => {
		const llmResponse = await generate({
			prompt: `${subject}`,

			model: 'ollama/gemma2:27b',
			config: {
				temperature: 1,
			},
		});

		return llmResponse.text();
	}
);

export const boy_prompt = defineFlow(
	{
		name: '陽気な子供',
		inputSchema: z.string(),
		outputSchema: z.string(),
	},
	async (subject) => {
		const llmResponse = await generate({
			prompt: `${subject}`,
			model: 'ollama/gemma2:27b',
			config: {
				temperature: 1,
			},
		});

		return llmResponse.text();
	}
);

startFlowsServer();
