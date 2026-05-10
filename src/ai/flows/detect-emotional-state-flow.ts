'use server';
/**
 * @fileOverview This file defines a Genkit flow for detecting emotional states from user text input.
 *
 * - detectEmotionalState - A function that handles the emotional state detection process.
 * - DetectEmotionalStateInput - The input type for the detectEmotionalState function.
 * - DetectEmotionalStateOutput - The return type for the detectEmotionalState function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmotionalStates = z.enum([
  'stress',
  'anxiety',
  'sadness',
  'frustration',
  'happiness',
  'loneliness',
  'neutral'
]);

const DetectEmotionalStateInputSchema = z.object({
  text: z.string().describe('The user\'s message to analyze for emotional state.'),
});
export type DetectEmotionalStateInput = z.infer<typeof DetectEmotionalStateInputSchema>;

const DetectEmotionalStateOutputSchema = z.object({
  emotion: EmotionalStates.describe(
    'The detected primary emotional state from the user\'s message. '
  ),
});
export type DetectEmotionalStateOutput = z.infer<typeof DetectEmotionalStateOutputSchema>;

export async function detectEmotionalState(
  input: DetectEmotionalStateInput
): Promise<DetectEmotionalStateOutput> {
  return detectEmotionalStateFlow(input);
}

const detectEmotionalStatePrompt = ai.definePrompt({
  name: 'detectEmotionalStatePrompt',
  input: {schema: DetectEmotionalStateInputSchema},
  output: {schema: DetectEmotionalStateOutputSchema},
  prompt: `Analyze the following user message and categorize the primary emotional state expressed.
Choose one from the following options:
- stress
- anxiety
- sadness
- frustration
- happiness
- loneliness
- neutral

Only provide the chosen emotion as a single word in lowercase, matching one of the options.

User Message: {{{text}}}`,
});

const detectEmotionalStateFlow = ai.defineFlow(
  {
    name: 'detectEmotionalStateFlow',
    inputSchema: DetectEmotionalStateInputSchema,
    outputSchema: DetectEmotionalStateOutputSchema,
  },
  async (input) => {
    const {output} = await detectEmotionalStatePrompt(input);
    return output!;
  }
);
