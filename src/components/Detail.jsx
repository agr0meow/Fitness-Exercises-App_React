import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exercisesDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography style={{ textDecoration: "capitalize" }} variant="h3">
          {name}
        </Typography>
        <Typography variant="h5">
          Exercise keep you strong.{" "}
          <span style={{ textDecoration: "capitalize" }}>{name}</span> {` `} is
          one of the best exercises to target your {target}. It will help you
          improve your mood
        </Typography>
        {extraDetail.map((item, index) => {
          return (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography textTransform="capitalize" variant="h6">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
