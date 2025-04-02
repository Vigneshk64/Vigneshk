import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Divider,
  Box,
  Button,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axios from "axios";

// Styled Expand Button
const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "20px",
  backgroundColor: "#f4f4f4",
});

const StyledCard = styled(Card)({
  width: "80%",
  maxWidth: "800px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  padding: "20px",
});

const StyledImage = styled(CardMedia)({
  height: "350px",
  objectFit: "cover",
  borderRadius: "10px",
});

export default function SingleView() {
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:7002/invent/singleview/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setState(res.data?.data || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledContainer>
      <StyledCard>
        {loading ? (
          <>
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="rectangular" width="100%" height={350} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="rectangular" width="100%" height={50} />
          </>
        ) : (
          <>
            <CardHeader
              title={
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                  {state?.name || "No Name"}
                </Typography>
              }
            />
            <StyledImage
              component="img"
              image={
                state?.image
                  ? `http://localhost:7002/invent/files/${state.image}`
                  : "https://via.placeholder.com/400"
              }
              alt="Product"
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                Price: {state?.revenue || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Status: {state?.status || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Category: {state?.category || "N/A"}
              </Typography>
              <Divider style={{ margin: "10px 0" }} />
              <Typography variant="body2" color="text.secondary">
                {state?.notes || "No additional details available."}
              </Typography>
              <Box textAlign="center" marginTop={2}>
                <Link
                  to={`/Order/${state._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
  variant="contained"
  sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "darkgreen" } }}
  disabled={state?.status?.toLowerCase() === "out of stock"}
>
  ORDER
</Button>

                </Link>
              </Box>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="primary">
                More Info
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" paragraph>
                  Additional Product Details:
                </Typography>
                <Typography variant="body2">
                  {state?.notes || "N/A"}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        )}
      </StyledCard>
    </StyledContainer>
  );
}
