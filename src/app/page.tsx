"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card elevation={10}>
          <CardMedia component="img" height="275" image="/lego.avif" alt="green iguana" sx={{ minWidth: "500px" }} />
          <CardContent>
            <Typography gutterBottom variant={"h6"}>
              EXMACHINA Online
            </Typography>
            <Typography variant="body2" color="text.secondary">
              What wonders await?
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="small" color="primary" onClick={() => setOpen(true)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you a GM that loves tabletop gaming?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Then check out <Link href={"https://campaign.tools"}>Campaign Tools</Link> for an AI powered suite of
            awesome that{" "}
            <Typography component={"span"} fontStyle={"italic"}>
              will
            </Typography>{" "}
            make you a better GM.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
