import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";

function InfoBox({ title, cases, total }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          {/* Title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/* Number of cases */}
          <h2 className="infoBox__cases">{cases}</h2>

          {/* Total */}
          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
