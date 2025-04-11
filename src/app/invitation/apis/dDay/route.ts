import { DDayInfo } from "@/components/spring/cards/CardDate";
import { DateTime } from 'luxon';
import { NextResponse } from "next/server";

export async function GET() {
    
  const now = DateTime.now().setZone('Asia/Seoul');
  const target = DateTime.fromISO('2025-06-14T00:00:00', { zone: 'Asia/Seoul' });

  const diff = target.diff(now, ['days', 'hours', 'minutes']).toObject();
  const totalMinutes = (diff.days ?? 0) * (60 * 24) + (diff.hours ?? 0) * (60) + (diff.minutes ?? 0);
  const daysExact = (totalMinutes ?? 0) / (60 * 24);
  const dDayCeil = Math.ceil(daysExact);
  //console.log(totalMinutes);
  //console.log(dDayCeil);
  
  const dDayInfo: DDayInfo = {
    remains: `${diff.days}일 ${diff.hours}시간 ${diff.minutes}분 남음`,
    dDay: (dDayCeil > 0) ? `${dDayCeil}` : (dDayCeil == 0) ? 'day' : `${Math.abs(dDayCeil)} 일 지남`
  };

  return NextResponse.json(dDayInfo);
}