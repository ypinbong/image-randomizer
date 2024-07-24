import { Avatar, Box, ListItem, Skeleton, Tooltip, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import styles from "../styles/Home.module.css";

export const Image = (url: string) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      enqueueSnackbar("URL copied to clipboard.", { variant: "success" });
    }).catch(err => {
      enqueueSnackbar("Failed to copy text.", { variant: "success" });
    });
  };

  return (
    <ListItem
      onClick={() => {
        copyToClipboard();
      }}
      className={styles.card}
      sx={theme => ({
        [theme.breakpoints.down("md")]: {
          paddingBlock: "5px !important",
        }
      })}
    >
      <Tooltip title="Click to copy this link!" followCursor>
        <Box
          sx={theme => ({
            display: "flex",
            columnGap: "10px",
            alignItems: "center",
            overflow: "hidden",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            }
          })}
        >
          <Avatar
            src={url}
            variant="rounded"
            sx={{
              width: "100px",
              height: "100px"
            }}
          >
            <Skeleton variant="circular" width={40} height={40} />
          </Avatar>
          <Typography
            className={styles.code}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            sx={theme => ({
              [theme.breakpoints.down("sm")]: {
                paddingTop: "5px",
                fontSize: "12px !important",
              }
            })}
          >
            {url}
          </Typography>
        </Box>
      </Tooltip>
    </ListItem>
  );
};