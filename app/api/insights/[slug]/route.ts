import { NextResponse } from 'next/server';
import { insightsDb } from '@/lib/insights-db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const insight = insightsDb[slug];

  if (!insight) {
    return NextResponse.json({ error: 'Insight not found' }, { status: 404 });
  }

  return NextResponse.json(insight);
}

