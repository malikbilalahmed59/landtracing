"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function LinearProgressWithLabelDemo() {
    const [progress1, setProgress1] = React.useState(13);
    const [progress2, setProgress2] = React.useState(25);

    React.useEffect(() => {
        const timer1 = setTimeout(() => setProgress1(91), 500);
        const timer2 = setTimeout(() => setProgress2(87), 800);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="absolute bg-white rounded-[20px] w-[264px] px-[20px] py-[25px] bottom-0 left-[-107px] bottom-[56px]">
            <div className="w-full mb-[30px]">
                <div className="flex items-center justify-between mb-[10px]">
                    <span className="text-sm text-[var(--primary)]">Text Consultations</span>
                    <span className="text-sm text-[var(--primary)]">{progress1}%</span>
                </div>
                <Progress value={progress1} className="[&>div]:bg-[var(--cyan-blue)]" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between mb-[10px]">
                    <span className="text-sm text-[var(--primary)]">Budget management</span>
                    <span className="text-sm text-[var(--primary)]">{progress2}%</span>
                </div>
                <Progress value={progress2} className="[&>div]:bg-[var(--cyan-blue)]" />
            </div>
        </div>
    );
}
