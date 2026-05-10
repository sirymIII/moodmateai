'use server';
/**
 * @fileOverview A Genkit flow for generating empathetic, supportive, and context-aware responses based on a user's emotional state.
 *
 * - generateEmpatheticResponse - A function that handles the empathetic response generation process.
 * - GenerateEmpatheticResponseInput - The input type for the generateEmpatheticResponse function.
 * - GenerateEmpatheticResponseOutput - The return type for the generateEmpatheticResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmpatheticResponseInputSchema = z.object({
  emotionalState: z
    .string()
    .describe(
      "The detected emotional state of the user (e.g., 'stress', 'anxiety', 'sadness', 'happiness')."
    ),
  userMessage: z.string().describe("The user's most recent message."),
});
export type GenerateEmpatheticResponseInput = z.infer<
  typeof GenerateEmpatheticResponseInputSchema
>;

const GenerateEmpatheticResponseOutputSchema = z.object({
  empatheticResponse: z.string().describe("The generated empathetic response."),
});
export type GenerateEmpatheticResponseOutput = z.infer<
  typeof GenerateEmpatheticResponseOutputSchema
>;

export async function generateEmpatheticResponse(
  input: GenerateEmpatheticResponseInput
): Promise<GenerateEmpatheticResponseOutput> {
  return generateEmpatheticResponseFlow(input);
}

const empatheticResponsePrompt = ai.definePrompt({
  name: 'empatheticResponsePrompt',
  input: {schema: GenerateEmpatheticResponseInputSchema},
  output: {schema: GenerateEmpatheticResponseOutputSchema},
  prompt: `You are MoodMate AI, an emotionally intelligent chatbot designed to provide supportive, empathetic, and context-aware responses for mental well-being. Your purpose is to make users feel heard, understood, and offer gentle encouragement.

A user is currently expressing feelings associated with: {{{emotionalState}}}. Their last message was: "{{{userMessage}}}".

Your task is to generate a response that:
1. Acknowledges and validates their feelings and the situation described in their message.
2. Offers encouragement or a gentle, supportive perspective.
3. Is personalized, empathetic, and contextually appropriate to their emotional state and message.
4. Avoids jargon, provides a safe, non-judgmental space, and does not offer professional medical advice.
5. Keep the response concise, aiming for 2-4 sentences.

Generate an empathetic response.`,
});

const generateEmpatheticResponseFlow = ai.defineFlow(
  {
    name: 'generateEmpatheticResponseFlow',
    inputSchema: GenerateEmpatheticResponseInputSchema,
    outputSchema: GenerateEmpatheticResponseOutputSchema,
  },
  async input => {
    const {output} = await empatheticResponsePrompt(input);
    if (!output) {
      throw new Error('Failed to generate empathetic response.');
    }
    return output;
  }
);
