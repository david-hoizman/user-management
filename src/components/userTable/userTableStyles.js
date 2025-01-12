import { styled } from '@mui/material/styles';
import { Paper, Button, TextField } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const TableContainer = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const EditForm = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: 8,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));
