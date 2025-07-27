import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { apiBaseURL, apiHeaders } from './config';
import { StoresResponse } from '@/src/shared/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoresResponse | { error: any }>
) {
  const pageSize = 50;
  let page = 1;
  let allData: any[] = [];
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const url = `${apiBaseURL}/giveaways?filters[country][$eq]=sk&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
      const response = await fetch(url, { headers: apiHeaders });

      if (!response.ok) {
        const errorText = await response.text();
        res.status(response.status).json({ error: errorText });
        return;
      }

      const json = await response.json();

      // Append this page's data
      allData = [...allData, ...json.data];

      // Set total pages from metadata
      const pagination = json.meta?.pagination;
      totalPages = pagination?.pageCount || 1;
      page++;
    }

    // Return all combined data
    res.status(200).json({ data: allData } as StoresResponse);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
