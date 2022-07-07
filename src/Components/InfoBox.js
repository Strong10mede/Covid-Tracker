import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import "./InfoBox.css";

function InfoBox({ title, active, isRed, isBlue, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--isRed"
      } ${isBlue && "infoBox--isOrange"}`}
    >
      <CardContent className="infoBox__content">
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* Number of cases */}
        <h2
          className={`infoBox__cases && ${!isRed && "infoBox__cases--green"} ${
            isBlue && "infoBox__cases--orange"
          }`}
        >
          {cases}
        </h2>

        {/* Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
