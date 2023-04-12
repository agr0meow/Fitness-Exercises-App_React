import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../utils/axiosData.js";
import SimilarExercise from "../components/SimilarExercise";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
const ExerciseDetail = () => {
  const [exercisesDetail, setExercisesDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearch =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exercisesDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearch}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData);
      const targetMuscleExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentMuscleExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exercisesDetail={exercisesDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exercisesDetail.name}
      />
      <SimilarExercise
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
