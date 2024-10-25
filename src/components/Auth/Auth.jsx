import { Button, Stack, TextField } from "@mui/material";

const Auth = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField type="email" label="Email" />
      <TextField type="paddword" label="Password" />
      <Button>Login</Button>
    </Stack>
  );
};

export default Auth;
