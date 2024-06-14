import React from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Select,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../../Components/Header";

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("done");
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width:"70%",  marginLeft:"auto" ,marginRight:"auto"}}>
      <Header title={"Profile"} subtitle={"Welcome to this Page"}/>
      <Box
        display="flex"
        flexDirection="column"
        gap="2rem"
        component="div"
        
        autoComplete="off"
        height={"500px"}
      >
        <Stack sx={{ gap: 2 }} direction="row">
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={Boolean(errors.firstName)}
            helperText={Boolean(errors.firstName) ? "Name required & 4 characters." : null}
            {...register("firstName", { required: true, minLength: 4 })}
          />

          <TextField
            label="Last Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={Boolean(errors.LastName)}
            helperText={Boolean(errors.LastName) ? "Name required & 4 characters." : null}
            {...register("LastName", { required: true, minLength: 4 })}
          />
        </Stack>

        <TextField
          label="Email"
          variant="filled"
          error={Boolean(errors.Email)}
          helperText={Boolean(errors.Email) ? "You must enter a valid email." : null}
          {...register("Email", { required: true, pattern: regEmail })}
        />
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          error={Boolean(errors.phoneNumber)}
          helperText={
            Boolean(errors.phoneNumber)
              ? "You must enter a valid Number & It must be more than 10 numbers."
              : null
          }
          {...register("phoneNumber", { required: true, pattern: regPhone, minLength: 10 })}
        />
        <TextField id="filled-basic" label="Address
        " variant="filled" />

        <InputLabel id="role-label">Role</InputLabel>
        <Select
          id="outlined-select-currency"
          label="Role"
          defaultValue="User"
          {...register("role")}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create new user
          </Button>
        </Box>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            User successfully registered!
          </Alert>
        </Snackbar>
      </Box>
    </form>
  );
};

export default Profile;
