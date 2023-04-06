import React from "react";
import { Grid, Card, CardContent, Skeleton } from "@mui/material";

function CategoryCardSkeleton({ items = 6 }) {
  return (
    <Grid sx={{ mt: 2 }} container spacing={2}>
      {Array.from({ length: items }).map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={2}>
          <Card sx={{ maxWidth: 300 }}>
            <Skeleton variant="rectangular" height={150} animation="wave" />
            <CardContent sx={{ height: 50 }}>
              <Skeleton variant="text" animation="wave" width="80%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryCardSkeleton;
