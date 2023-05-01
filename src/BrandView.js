import React, { useEffect, useState } from 'react';
import './BrandView.css';
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

function BrandView(props) {
    const [lineChartData, setLineChartData] = useState({
        labels: [],
        datasets: [],
      });
    const [pieChartData, setPieChartData] = useState({
        labels: [],
        datasets: [],
      });
    const [yearSelect, setYearSelect] = useState(2010)

    useEffect(() => {
          setLineChartData({
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

          setPieChartData({
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [
              {
                label: 'Sentiment Score',
                data: [props.brandDetail.positive_percent, props.brandDetail.neutral_percent, props.brandDetail.negative_percent],
              },
            ],
          });
    }, [props.brandDetail])

    return (
    <div className="brand-view">
        <div className="brand-trend">
          <Card style={{ padding: "1rem", backgroundColor: "cornsilk"}}>
            <CardHeader
              title={`Sentiment Scores: ${props.brandDetail.avg_sentiment_score.toFixed(3)}`}
            />
            <Chart type="line" data={lineChartData} />
          </Card>
        </div>

        <div className="popular-words">
          <Card style={{ padding: "1rem", backgroundColor: "cornsilk" }}>
            <CardHeader
              action={
                <FormControl variant="outlined">
                <InputLabel>Year</InputLabel>
                  <Select
                      value={yearSelect}
                      onChange={event => {
                        setYearSelect(event.target.value);
                      }}
                      label="Year"
                    >
                      {props.brandDetail.trend.sort((a, b) => a.year - b.year).map(item => (
                          <MenuItem key={item.year} value={item.year}>
                              {item.year}
                          </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              }
              title="Popular Words     ."
            />
            {props.brandDetail.trend.sort((a, b) => a.year - b.year).map(item =>
              item.year === yearSelect && item.popular_words.map(word => (
                <Chip label={word} style={{ marginRight: "0.5rem" }}/>
              ))
            )}
          </Card>
        </div>

        <div className="">
          <Card style={{ padding: "1rem", backgroundColor: "cornsilk" }}>
            <CardHeader
              title="Reviews split"
            />
            <Chart type="pie" data={pieChartData}></Chart>
          </Card>
        </div>
    </div>
    
    );
}

export default BrandView;