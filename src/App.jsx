import { Container, Box, Button, ButtonGroup } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const buttons = [
    <Button key="Red" variant="contained" onClick={()=>setColor("Red")}>Red</Button>,
    <Button key="Green" variant="contained" onClick={()=>setColor("Green")}>Green</Button>,
    <Button key="Blue" variant="contained" onClick={()=>setColor("Blue")}>Blue</Button>,
    <Button key="Olive" variant="contained" onClick={()=>setColor("Olive")}>Olive</Button>,
    <Button key="Gray" variant="contained" onClick={()=>setColor("Gray")}>Gray</Button>,
    <Button key="Yellow" variant="contained" onClick={()=>setColor("Yellow")}>Yellow</Button>,
    <Button key="Pink" variant="contained" onClick={()=>setColor("Pink")}>Pink</Button>,
    <Button key="Purple" variant="contained" onClick={()=>setColor("Purple")}>Purple</Button>,
    <Button key="Lavender" variant="contained" onClick={()=>setColor("Lavender")}>Lavender</Button>,
    <Button key="Lavender" variant="contained" onClick={()=>setColor("White")}>White</Button>,
    <Button key="Lavender" variant="contained" onClick={()=>setColor("Black")}>Black</Button>,
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup aria-label="Basic button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default App;
