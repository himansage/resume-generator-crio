import React from "react";

import {
  Paper,
  Grid,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { School as SchoolIcon } from "@mui/icons-material";

import styles from "./Resume.module.css";

export default function PersonalDetails(props) {
  return (
    <Paper>
      <Card>
        <CardHeader
          title="Personal Details"
          classes={{
            content: styles.headerContent,
          }}
        />
      </Card>
      <CardContent>
        <div>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="college"
                label="College/University"
                style={{ width: "80%" }}
                required
                value=""
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Paper>
  );
}
