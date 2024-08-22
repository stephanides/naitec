import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { apiBaseURL, apiHeaders } from './config';
import { StoresResponse } from '@/src/shared/types';

const limit = 1000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoresResponse | { error: any }>
) {
  // The URL of the external API
  const url = `${apiBaseURL}/stores?populate[image]=*&sort[1]=publishedAt:desc&pagination[limit]=1000`;

  try {
    // Make the request to the external API
    const response = await fetch(url, { headers: apiHeaders });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      const errorText = await response.text();
      res.status(response.status).json({ error: errorText });
      return;
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the data back to the client
    res.status(200).json(data as StoresResponse);
  } catch (error: any) {
    // Handle any errors that occurred during the request
    res.status(500).json({ error: error.message });
  }
}
