import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

export function TextSkeleton({ count = 3 }) {
  return (
    <>
      {Array(count)
        .fill("")
        .map((el, i) => (
          <Stack style={{ marginTop: "20px" }} key={i} spacing={1}>
            <div style={{ display: "flex", columnGap: "20px" }}>
              <Skeleton variant="circular" width={45} height={45} />
              <div style={{ width: "100%" }}>
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
              </div>
            </div>
            <Skeleton
              style={{ borderRadius: "8px" }}
              variant="rectangular"
              width="100%"
              height={100}
            />
          </Stack>
        ))}
    </>
  );
}
