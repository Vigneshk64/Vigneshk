import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Stack, Box } from "@mui/material";
import { styled } from "@mui/system";
import CreditCardIcon from "@mui/icons-material/CreditCard"; // Default icon
import mastercardLogo from "../Images/mastercardLogo.jpg";
import visaLogo from "../Images/Visa.png"; 

const StyledCard = styled(Card)({
  maxWidth: 500,
  margin: "auto",
  padding: 20,
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  background: "#fff",
});

const savedCards = [
  { id: 1, type: "MasterCard", last4: "3193", logo: mastercardLogo },
  { id: 2, type: "Visa", last4: "4296", logo: visaLogo }
];

export default function Prepay() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddCard = () => {
    alert("New Card Added!");
  };

  return (
    <StyledCard>
      <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mb: 2 }}>
        Settings - Payment
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>Saved Cards:</Typography>
      {savedCards.map((card) => (
        <Box key={card.id} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 2, p: 1, border: "1px solid #ddd", borderRadius: "8px" }}>
          <Box display="flex" alignItems="center">
            <img src={card.logo} alt={card.type} style={{ width: 40, marginRight: 10 }} />
            <Typography variant="body1">**** **** **** {card.last4}</Typography>
          </Box>
          <Button color="primary" size="small">Remove</Button>
        </Box>
      ))}

      <Typography variant="h6" sx={{ mt: 2 }}>Add New Card:</Typography>
      <CardContent>
        <TextField
          label="Cardholder's Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Expire"
            variant="outlined"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <TextField
            label="CVV"
            variant="outlined"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Stack>
        <Button variant="contained" color="success" fullWidth onClick={handleAddCard}>
          ADD CARD
        </Button>
      </CardContent>
    </StyledCard>
  );
}
