import React from "react";
import { Grid, Card, CardContent, Skeleton } from "@mui/material";

function ProductCardSkeleton({ items = 4 }) {
  return (
    <Grid sx={{ mt: 2 }} container spacing={2}>
      {Array.from({ length: items }).map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={items === 4 ? 3 : 4}>
          <Card sx={{ maxWidth: 500 }}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <CardContent sx={{ height: 150 }}>
              <Skeleton variant="text" animation="wave" width="80%" />
              <Skeleton variant="text" animation="wave" width="60%" />
              <Skeleton variant="text" animation="wave" width="50%" />
              <Skeleton variant="text" animation="wave" width="40%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCardSkeleton;
