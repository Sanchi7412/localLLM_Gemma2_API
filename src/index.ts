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
      serverAddress: 'http://100.118.110.78:11434',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
})

export const menuSuggestionFlow = defineFlow(
    {
      name: 'menuSuggestionFlow',
      inputSchema: z.string(),
      outputSchema: z.string(),
    },
    async subject => {
      const llmResponse = await generate({
        prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
        model: 'ollama/gemma2:27b',
        config: {
          temperature: 1,
        },
      })
      return llmResponse.text()
    }
)

startFlowsServer()
