import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercise = ({
  equipmentMuscleExercises,
  targetMuscleExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3" mb={10}>
        Exercises that target the same muscle group
        <Stack
          direction="row"
          sx={{ p: "2px", position: "relative", mt: "20px" }}
        >
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
      <Typography variant="h3" mb={10}>
        Exercises that use the same equipment
        <Stack
          direction="row"
          sx={{ p: "2px", position: "relative", mt: "20px" }}
        >
          {equipmentMuscleExercises.length ? (
            <HorizontalScrollbar data={equipmentMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
    </Box>
  );
};

export default SimilarExercise;
