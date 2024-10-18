import * as z from 'zod';

// Import the Genkit core libraries and plugins.
import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';
import { googleAI } from '@genkit-ai/googleai';

// Import models from the Google AI plugin. The Google AI API provides access to
// several generative models. Here, we import Gemini 1.5 Flash.

configureGenkit({
	plugins: [
		ollama({
			models: [{ name: 'gemma2:27b' }],
<<<<<<< Updated upstream
			serverAddress: 'http://127.0.0.1:11434',
			// serverAddress: 'http://100.118.110.78:11434',
=======
			serverAddress: 'http://100.118.110.78:11434',
>>>>>>> Stashed changes
		}),
	],
	logLevel: 'debug',
	enableTracingAndMetrics: true,
});

<<<<<<< Updated upstream
// Define a simple flow that prompts an LLM to generate menu suggestions.
export const testPrompt = defineFlow(
	{
		name: 'テスト',
=======
export const menuSuggestionFlow = defineFlow(
	{
		name: 'menuSuggestionFlow',
>>>>>>> Stashed changes
		inputSchema: z.string(),
		outputSchema: z.string(),
	},
	async (subject) => {
		const llmResponse = await generate({
<<<<<<< Updated upstream
			prompt: `${subject}`,
=======
			prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
>>>>>>> Stashed changes
			model: 'ollama/gemma2:27b',
			config: {
				temperature: 1,
			},
		});
<<<<<<< Updated upstream

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

=======
>>>>>>> Stashed changes
		return llmResponse.text();
	}
);

startFlowsServer();
