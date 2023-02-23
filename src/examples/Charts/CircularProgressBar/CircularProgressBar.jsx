import { CenterFocusStrong } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({ active, total}) {
  const [count, setCount] = useState(0);
  const percentage = (active / total) * 100;
  useEffect(() => {
    setTimeout(() => {
      if (count < percentage) {
        setCount(count + 1);
      }
    }, 50);
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 100, alignContent: CenterFocusStrong }}>
        <CircularProgressbar value={count} text={`${active}/${total}`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;
