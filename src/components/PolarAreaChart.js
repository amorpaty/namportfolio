import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto"; // Chart.js 기본 등록

const PolarAreaChart = () => {
    const chartRef = useRef(null); // canvas를 참조할 ref 생성

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        // 데이터와 옵션 설정
        const data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
            datasets: [
                {
                    label: "My Dataset",
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                tooltip: {
                    enabled: true,
                },
            },
        };

        // Chart.js 인스턴스 생성
        const polarAreaChart = new Chart(ctx, {
            type: "polarArea", // 차트 유형 설정
            data: data,
            options: options,
        });

        // 컴포넌트 언마운트 시 차트 인스턴스 정리
        return () => {
            polarAreaChart.destroy();
        };
    }, []);

    return (<canvas ref={chartRef}></canvas>);
};

export default PolarAreaChart;