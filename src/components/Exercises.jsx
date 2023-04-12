import { useState, useEffect } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/axiosData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExerData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExerData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Resultats
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise}></ExerciseCard>;
        })}
        <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="secondary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Exercises;
