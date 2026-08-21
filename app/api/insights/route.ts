import { NextResponse } from 'next/server';
import { insightsDb } from '@/lib/insights-db';

export async function GET() {
  const insights = Object.values(insightsDb);
  
  // Sort by date manually if needed, or just return as is (they are mock data)
  return NextResponse.json(insights);
}
