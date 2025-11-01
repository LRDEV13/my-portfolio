import { Box, Stack, } from "@mui/material";
import IntroText from "./IntroText";
import EmailBox from "./EmailBox";
import SocialButtons from "./SocialButtons";

export default function LeftColumn() {

  return (
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: 2, sm: 5, md: 6, lg: 18 },
          }}
        >
          <IntroText />

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
          >
            <EmailBox email="larry.rdevz13@gmail.com" />
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
            sx={{ mt: 3 }}
          >
            <SocialButtons />
          </Stack>
        </Box>
  );
}
