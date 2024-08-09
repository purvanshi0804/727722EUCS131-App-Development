import React, { useState } from 'react';
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  // Mock data for applications
  const initialApplications = [
    { id: 1, name: 'John Doe', loanAmount: 5000, purpose: 'Business', status: 'Pending' },
    { id: 2, name: 'Jane Smith', loanAmount: 10000, purpose: 'Education', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', loanAmount: 7500, purpose: 'Medical', status: 'Pending' },
  ];

  const [applications, setApplications] = useState(initialApplications);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApprove = (id) => {
    setApplications(prevApplications => {
      const updatedApplications = prevApplications.map(app =>
        app.id === id ? { ...app, status: 'Approved' } : app
      );

      // Navigate to the ApprovedLoanDetails page
      navigate('/admin/approved-loans');

      return updatedApplications;
    });
  };

  const handleReject = (id) => {
    setApplications(prevApplications =>
      prevApplications.map(app =>
        app.id === id ? { ...app, status: 'Rejected' } : app
      )
    );
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Dashboard
        </Typography>
        <Paper elevation={3} className="dashboard-paper">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Loan Amount</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map(application => (
                <TableRow key={application.id}>
                  <TableCell>{application.id}</TableCell>
                  <TableCell>{application.name}</TableCell>
                  <TableCell>{application.loanAmount}</TableCell>
                  <TableCell>{application.purpose}</TableCell>
                  <TableCell>{application.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleApprove(application.id)}
                      disabled={application.status !== 'Pending'}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleReject(application.id)}
                      disabled={application.status !== 'Pending'}
                      style={{ marginLeft: '10px' }}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
