import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

const UserCard = ({ user }) => {
    return (
        <Card sx={{
            fontFamily: "Roboto, sans-serif",
            display: "flex",
            flexDirection: "row",  // Makes it align horizontally (like reference image)
            alignItems: "center",
            justifyContent: "flex-start",  // Aligns text next to avatar
            p: 2,
            m: 1,
            width: "280px",  // Matches the expected width
            height: "80px",  // Matches the expected height
            backgroundColor: "#FFFFFF",  // Matches the expected background color
        }}>
            <Avatar
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                sx={{ width: 50, height: 50, objectFit: "cover", marginRight: 2 }} // Matches reference
            />
            <CardContent sx={{ padding: "0px" }}>
                <Typography variant="h6" noWrap>{`${user.first_name}`}</Typography>
                <Typography variant="body2" color="textSecondary" noWrap>{user.email}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
