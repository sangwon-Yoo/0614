import { DDayInfo } from "@/components/spring/cards/CardDate";
import { NextResponse } from "next/server";

export async function GET() {
    
    const targetDate = '2025-06-14';
      // 현재 시간을 '서울(Asia/Seoul)' 타임존 기준으로 변환 (Date 객체로 변환)
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
    
      // 목표 날짜를 '서울' 기준 00:00으로 설정
      const target = new Date(new Date(targetDate + "T00:00:00").toLocaleString("en-US", { timeZone: "Asia/Seoul" })); // ISO 형식으로 변환
      if (isNaN(target.getTime())) {
        throw new Error("잘못된 날짜 형식입니다. YYYY-MM-DD 형식으로 입력해주세요.");
      }
    
      // 날짜 차이 계산
      const diffTime = target.getTime() - now.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    
      // 결과 객체 생성
      const dDayInfo: DDayInfo = {
        remains: `${diffDays}일 ${diffHours}시간 ${diffMinutes}분 남음`,
        dDay: diffDays >= 0 ? `${diffDays + 1}` : diffDays === -1 ? "day" : `${Math.abs(diffDays) - 1} 일 지남`,
      };

      return NextResponse.json(dDayInfo);
}