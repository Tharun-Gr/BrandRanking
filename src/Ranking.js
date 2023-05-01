import React, { useEffect, useState } from 'react';
import './Ranking.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Ranking(props) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
      const filtered = props.jsonData.filter((item) => item.category === props.category);
      const sorted = filtered.sort((a, b) => b.avg_sentiment_score - a.avg_sentiment_score)
      const rowsWithIndex = sorted.map((row, index) => ({...row, index: index + 1}));
      setRows(rowsWithIndex);
    },[props])

  return (
    <div className="ranking">
      <Paper sx={{ width: '80%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" style={{backgroundColor:"cornsilk"}}>
            <TableHead>
              <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Sentiment score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.brand_lowercase}>
                      <TableCell>{row.index}</TableCell>
                      <TableCell>{row.brand.charAt(0).toUpperCase() + row.brand.slice(1)}</TableCell>
                      <TableCell>{row.avg_sentiment_score}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Ranking;