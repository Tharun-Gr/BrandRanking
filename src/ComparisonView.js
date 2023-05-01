import React, { useEffect, useState } from 'react';
import './ComparisonView.css';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function ComparisonView(props) {
    const [lineChartOneData, setLineChartOneData] = useState({
        labels: [],
        datasets: [],
      });
    const [pieChartOneData, setPieChartOneData] = useState({
        labels: [],
        datasets: [],
      });
    const [lineChartTwoData, setLineChartTwoData] = useState({
        labels: [],
        datasets: [],
        });
    const [pieChartTwoData, setPieChartTwoData] = useState({
        labels: [],
        datasets: [],
      });

    useEffect(() => {
        setLineChartOneData({
            labels: props.brandDetail.trend.sort((a, b) => a.year - b.year).map(item => item.year),
            datasets: [
            {
                label: 'Sentiment Score',
                data: props.brandDetail.trend.sort((a, b) => a.year - b.year).map(item => item.avg_sentiment_score),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
            ],
        });

        setPieChartOneData({
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [
            {
                label: 'Sentiment Score',
                data: [props.brandDetail.positive_percent, props.brandDetail.neutral_percent, props.brandDetail.negative_percent],
            },
            ],
        });

        setLineChartTwoData({
            labels: props.brandComparisonDetail.trend.sort((a, b) => a.year - b.year).map(item => item.year),
            datasets: [
            {
                label: 'Sentiment Score',
                data: props.brandComparisonDetail.trend.sort((a, b) => a.year - b.year).map(item => item.avg_sentiment_score),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
            ],
        });

        setPieChartTwoData({
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [
            {
                label: 'Sentiment Score',
                data: [props.brandComparisonDetail.positive_percent, props.brandComparisonDetail.neutral_percent, props.brandComparisonDetail.negative_percent],
            },
            ],
        });
    }, [props])

  return (
    <div className="comparison-container">
        <div className="brand-one">
            <div className="brand-trend" style={{ marginBottom: "1rem"}}>
                <Card style={{ padding: "0.5rem", backgroundColor: "cornsilk"}}>
                    <CardHeader
                    title={`Sentiment Scores: ${props.brandDetail.avg_sentiment_score.toFixed(3)}`}
                    />
                    <Chart type="line" data={lineChartOneData} />
                </Card>
            </div>
            <div className="">
                <Card style={{ padding: "0.5rem", backgroundColor: "cornsilk" }}>
                    <CardHeader
                    title="Reviews split"
                    />
                    <Chart type="pie" data={pieChartOneData}></Chart>
                </Card>
            </div>
        </div>
        <div className="brand-two">
            <div className="brand-trend" style={{ marginBottom: "1rem"}}>
                <Card style={{ padding: "0.5rem", backgroundColor: "cornsilk"}}>
                    <CardHeader
                    title={`Sentiment Scores: ${props.brandDetail.avg_sentiment_score.toFixed(3)}`}
                    />
                    <Chart type="line" data={lineChartTwoData} />
                </Card>
            </div>
            <div className="">
                <Card style={{ padding: "0.5rem", backgroundColor: "cornsilk" }}>
                    <CardHeader
                    title="Reviews split"
                    />
                    <Chart type="pie" data={pieChartTwoData}></Chart>
                </Card>
            </div>
        </div>
    </div>
  );
}

export default ComparisonView;