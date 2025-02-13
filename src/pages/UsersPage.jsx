import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { Container, Typography, Grid2 } from "@mui/material";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/assignmentData.json")
            .then((response) => {
                console.log("Fetched Data:", response.data); // Debugging Step
                if (Array.isArray(response.data) && response.data[0]?.data) {
                    setUsers(response.data[0].data); // Correcting JSON data access
                } else {
                    console.error("Invalid data structure:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" sx={{ mt: 3, mb: 2 }}>
                User List
            </Typography>
            <Grid2 container spacing={3} justifyContent="center" alignItems="stretch">
                {users.map((user) => (
                    <Grid2 item key={user.id} xs={12} sm={6} md={4}>
                        <UserCard user={user} />
                    </Grid2>
                ))}
            </Grid2>
            <Pagination />
        </Container>
    );
};

export default UsersPage;
