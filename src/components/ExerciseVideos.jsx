import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20" } }} p="20px">
      <Typography pb="20px" variant="h3">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name} {` `}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {!!exerciseVideos.contents ? (
          exerciseVideos?.contents.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h4" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h5" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
